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
  followUp: "Headshots and networking to follow.",
} as const;

export const academy = {
  title: "The Academy",
  term: "Fall 2026",
  slot: "Wednesdays at 7:30 p.m.",
  /** Deliberately short sessions — quoted on the home page. */
  sessionLength: "30–45 minutes",
  /** There is no application and no prerequisite: anyone can walk in. */
  openTo: "Every Tufts student",
  description:
    "A guest speaker series where investors and founders walk you through how venture capital actually works, followed by real case studies and a closing Pitch Night: the same preparation our analysts get. No application and nothing to sign up for. Just show up.",
  /** The term in order, matching the working schedule. Week numbers for the
   *  speaker block are implied by the sheet rather than locked — adjust here
   *  and the home page follows. */
  stages: [
    {
      when: "Week 1",
      title: "GIM",
      detail: "What TVP does, and who's in the room.",
    },
    {
      when: "Week 2",
      title: "VC intro",
      detail:
        "What venture capital is, where it came from, and what to expect.",
    },
    {
      when: "Weeks 3–6",
      title: "Guest speakers",
      detail:
        "Careers, sourcing and memos, a startup founder, and diligence.",
    },
    {
      when: "Weeks 7–10",
      title: "Case studies",
      detail: "Four weeks evaluating real companies.",
    },
    {
      when: "Finale",
      title: "Pitch Night",
      detail: "Teams pitch; the board judges.",
    },
  ],
} as const;
