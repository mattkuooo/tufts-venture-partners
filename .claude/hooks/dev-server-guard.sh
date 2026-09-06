#!/bin/bash
# PreToolUse guard (Bash): enforce the one-dev-server policy from AGENTS.md.
# - Blocks `npm start` / `next start` (frozen production build on its own port).
# - Blocks any `-p`/`--port` other than 3000 on dev-server launch commands.
# - Blocks killing a listener on :3000 (another agent may own it — ask the human).
# - Blocks starting a dev server when :3000 is already answering (use the live one).

set -u
input=$(cat)
command=$(printf '%s' "$input" | jq -r '.tool_input.command // empty')

block() {
  jq -n --arg reason "$1" '{
    hookSpecificOutput: {
      hookEventName: "PreToolUse",
      permissionDecision: "deny",
      permissionDecisionReason: $reason
    }
  }'
  exit 0
}

is_dev_launch() {
  printf '%s' "$command" | grep -qE 'next dev|npm( run| exec)? dev([[:space:]]|$)|npx([^ ]* )+next'
}

# Fast bail: only inspect server-related commands.
if ! printf '%s' "$command" | grep -qE 'npm (run |exec )?(start|dev)|next (dev|start)|-p |--port|lsof.*3000|kill'; then
  exit 0
fi

# 1) No production servers.
if printf '%s' "$command" | grep -qE '(^|[;&|[:space:]])npm( run| exec)? start([[:space:]]|$)|next start'; then
  block "Blocked by the one-dev-server policy (AGENTS.md): never run 'npm start' — it serves a frozen production build on its own port. Use the shared dev server on localhost:3000 instead."
fi

# 2) No ports other than 3000 — only on dev-server launch commands.
#    (lsof's `-p <pid>` process flag is not a port; don't false-positive on it.)
if is_dev_launch; then
  ports=$(printf '%s' "$command" | grep -oE -- '-p[[:space:]]*[0-9]+|--port(=[[:space:]]*|[[:space:]]+)[0-9]+' | grep -oE '[0-9]+' || true)
  if [ -n "$ports" ]; then
    for p in $ports; do
      if [ "$p" != "3000" ]; then
        block "Blocked by the one-dev-server policy (AGENTS.md): port $p is not allowed. All agents share the single dev server on localhost:3000 — if 3000 is busy, another agent owns it; use theirs."
      fi
    done
  fi
fi

# 3) Never kill a listener you did not start.
if printf '%s' "$command" | grep -qE '(^|[;&|[:space:]])(p?kill)([[:space:]]|$)' && printf '%s' "$command" | grep -q 'lsof'; then
  block "Blocked by the one-dev-server policy (AGENTS.md): never kill a listener you did not start — 'lsof -ti:3000' gives a PID, not permission; another agent or the human may be mid-task on it. Ask instead."
fi

# 4) Only one dev server: if :3000 already answers, block any attempt to start another.
if is_dev_launch; then
  if curl -sf -o /dev/null --max-time 2 http://localhost:3000; then
    block "Blocked by the one-dev-server policy (AGENTS.md): a dev server is already running on localhost:3000 — it hot-reloads from disk, so your edits are already being served. Do not start a second one."
  fi
fi

exit 0
