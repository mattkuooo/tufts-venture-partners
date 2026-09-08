<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# One dev server, on port 3000

Multiple agents work in this repo at the same time. They **share a single dev server on
`localhost:3000`**. Do not start a second one.

Before running the app, check whether it is already up:

```bash
curl -sf -o /dev/null http://localhost:3000 && echo "already running — use it"
```

If that prints, you are done — use `http://localhost:3000`. `next dev` compiles from disk and
hot-reloads, so a server another agent started **already serves your edits**. You do not need
to restart it, and restarting it to "pick up" a change is never the fix.

Only if nothing is listening, start it:

```bash
lsof -ti:3000 -sTCP:LISTEN >/dev/null || (npm run dev > /tmp/tvp-dev.log 2>&1 &)
```

Never:

- **Pass `-p`/`--port`, or use any port but 3000.** If 3000 is busy, another agent owns it —
  use theirs. Never `npm exec next dev -p <something>`.
- **Kill a listener you did not start.** `lsof -ti:3000` gives you a PID, not permission;
  another agent or the human may be mid-task on it. Ask instead.
- **Run `npm start`.** That serves a frozen production build, on its own port, and will show
  stale content that looks like a bug in your change.

Two Next 16 behaviours make a stray second server easy to miss:

- When 3000 is busy, `next dev` does **not** fail. It prints
  `⚠ Port 3000 is in use by process <pid>, using available port 3001 instead` and keeps going.
  There is no strict-port flag, so check the port yourself before launching.
- A duplicate dev server may exit on its own with `⨯ Another next dev server is already running`,
  sometimes only after it looked like it started — leaving a port that answers, then stops.

If you find the app answering on any port other than 3000, do not adopt it and do not kill it.
Tell the human which port and what started it.
