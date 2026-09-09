/** Single source of truth for dates and times. These strings appear on the
 *  home page and the Apply page — change them here, not in the pages. */

export const gim = {
  title: "General Interest Meeting",
  date: "Wednesday, September 9",
  /** Split out so the Apply page can set the day and the date at different
   *  type sizes. Keep in step with `date`. */
  day: "Wednesday",
  dayOfMonth: "September 9",
  time: "7:30 p.m.",
  location: "Cabot 206",
  /** The GIM's own draw, and the reason it gets a callout of its own on the
   *  Apply page: a free headshot is a concrete reason to turn up. */
  perk: "Free professional headshots",
  perkDetail:
    "Taken on the night, with networking to follow. No application and nothing to sign up for. Just show up.",
} as const;

export const academy = {
  title: "The Academy",
  term: "Fall 2026",
  slot: "Wednesdays at 7:30 p.m.",
  location: "TBD",
  /** Deliberately short sessions — quoted on the home page. */
  sessionLength: "30–45 minutes",
  /** There is no application and no prerequisite: anyone can walk in. */
  openTo: "All Tufts students",
  description:
    "A guest speaker series where investors and founders walk you through how venture capital actually works, followed by real case studies and a closing Pitch Night. Open to all Tufts students.",
  /** The term in order, matching the working schedule. Week numbers for the
   *  speaker block are implied by the sheet rather than locked — adjust here
   *  and the home page follows. */
  stages: [
    {
      when: "Week 1",
      title: "GIM",
      detail: "Learn about TVP",
    },
    {
      when: "Week 2",
      title: "VC intro",
      detail: "Learn about the basics of venture capital",
    },
    {
      when: "Weeks 3–6",
      title: "Guest speakers",
      detail: "A career fireside chat, sourcing and memos, diligence, and a startup founder.",
    },
    {
      when: "Weeks 7–10",
      title: "Case studies",
      detail: "Four weeks evaluating real companies.",
    },
    {
      when: "Finale",
      title: "Pitch Night",
      detail: "Teams pitch and the board gives feedback.",
    },
  ],
} as const;
