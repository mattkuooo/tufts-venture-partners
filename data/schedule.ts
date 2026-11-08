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
  title: "TVP Academy",
  term: "Fall 2026",
  slot: "Wednesdays at 7 p.m.",
  location: "Fletcher M200",
  /** Deliberately short sessions — quoted on the home page. */
  sessionLength: "30–45 minutes",
  /** There is no application and no prerequisite: anyone can walk in. */
  openTo: "All Tufts students",
  description:
    "A guest speaker series on how venture capital works, with case studies and a Pitch Night. Open to all Tufts students.",
  /** The guest speaker series, in date order. Most sessions are the usual
   *  Wednesday; the two that are not say so, because the slot above would
   *  otherwise send people on the wrong night. */
  speakers: [
    {
      date: "Oct 14",
      topic: "Business 101",
      speaker: "Jamie Goldstein",
      role: "Founding Partner, Pillar VC",
      image: "/images/jamie_goldstein.jpg",
    },
    {
      date: "Oct 21",
      topic: "VC-backed startups",
      speaker: "Russ Fradin",
      role: "Co-founder & CEO, Larridin",
      image: "/images/russ_fradin.jpg",
    },
    {
      date: "Oct 28",
      topic: "Sourcing",
      speaker: "Jenna Abelli",
      role: "Principal, Anzu Partners",
      image: "/images/jenna_abelli.jpg",
    },
    {
      date: "Nov 3",
      day: "Tuesday",
      topic: "Due diligence",
      speaker: "Vivjan Myrto",
      role: "Co-founder & Partner, Hyperplane",
      image: "/images/vivjan_myrto.jpg",
    },
    {
      date: "Nov 12",
      day: "Thursday",
      topic: "What makes startups succeed, and why most fail",
      speaker: "Alaina Hartnett",
      role: "Senior Associate, The Engine",
      image: "/images/alaina_hartnett.jpg",
    },
    {
      date: "Nov 18",
      topic: "Investment documents",
      speaker: "Ross Leav",
      role: "Senior Vice President, Presidio Ventures",
      image: "/images/ross_leav.jpg",
    },
    {
      date: "Dec 3",
      day: "Thursday",
      topic: "What happens after an investment",
      speaker: "Rick Grinnell",
      role: "Founder & Managing Partner, Glasswing Ventures",
      image: "/images/rick_grinnell.jpg",
    },
  ],
} as const;

/** Milestones for the "Fall 2026 Timeline" band on the Apply page.
 *
 *  The kickoff/GIM milestone is deliberately absent: September 9 has passed,
 *  and someone landing here now cannot attend it. Add it back only if a second
 *  entry point gets scheduled.
 *
 *  `when` is the only thing here that needs touching as the calendar firms up.
 *  These are week labels until the real dates land — replace each string with
 *  its date (e.g. "Oct 21") and nothing else has to change.
 *
 *  `major` fills the marker, for the milestones that are the payoff rather
 *  than a run of weeks.
 */
export type TimelineMilestone = {
  /** Timing label above the marker. Week labels until the dates land. */
  when: string;
  title: string;
  /** Fills the marker: a payoff, rather than a run of weeks. */
  major?: boolean;
};

export const fallTimeline: TimelineMilestone[] = [
  { when: "Weeks 3–6", title: "Guest speaker series", major: true },
  { when: "Weeks 7–10", title: "Case studies" },
  { when: "Final week", title: "Pitch night" },
  { when: "After", title: "Spring analyst cohort" },
];
