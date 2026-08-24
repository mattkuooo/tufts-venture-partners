/** Single source of truth for dates and times. These strings appear on the
 *  home page and the Apply page — change them here, not in the pages. */

export const gim = {
  title: "General Interest Meeting",
  date: "Wednesday, September 9",
  time: "7:30 p.m.",
} as const;

export const academy = {
  title: "The Academy",
  term: "Fall 2026",
  slot: "Wednesdays at 7:30 p.m.",
  description:
    "Our training program, and the front door to the club. A short sequence of high-density sessions takes you from what venture capital actually is through to a mock pitch on a live client sector — taught by the board, with guest speakers from the industry.",
  /** The arc of the program, in order. */
  stages: [
    "What venture capital actually is",
    "Sourcing and market mapping",
    "Thesis development",
    "Diligence and memo writing",
    "A mock pitch, judged by the board",
  ],
} as const;
