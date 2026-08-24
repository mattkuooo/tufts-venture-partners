export type EventArea = {
  title: string;
  description: string;
  points: string[];
  /** Optional photo. Drop a file in /public/images and set the path here to
   *  replace the dashed placeholder on the Events page. */
  image?: string;
};

export const eventAreas: EventArea[] = [
  {
    title: "Academy",
    description:
      "Our training program, and the front door to the club. A short sequence of high-density sessions takes students from what venture capital actually is through sourcing, market mapping, thesis work, and diligence — ending in a mock pitch on a live client sector. Taught by the board with guest speakers from the industry.",
    points: [
      "Sessions run 30–45 minutes — built to be potent, not long",
      "Sourcing, market mapping, thesis development, and diligence",
      "Memo writing and pitching, the two hard skills we drill",
      "Closes with a mock pitch judged by the board",
    ],
  },
  {
    title: "Fireside Chats / Speaker Series",
    description:
      "We bring VCs, founders, and operators to campus for candid, conversational sessions — how a fund actually decides what to back, what a founder's first eighteen months really look like, and how students break into the industry.",
    points: [
      "Investor and founder fireside chats",
      "Skills workshops (modeling, pitching, diligence)",
      "Alumni-in-venture networking nights",
      "Open to the wider Tufts community, not just members",
    ],
  },
  {
    title: "Pitch Competitions",
    description:
      "We host and judge pitch competitions that bring student founders together with VC clubs from across Boston — giving Tufts entrepreneurs a real audience and giving our analysts practice evaluating companies under time pressure.",
    points: [
      "Inter-collegiate competitions with Boston-area VC clubs",
      "Campus startup showcases",
      "Analyst-led judging and feedback panels",
      "Introductions to our investor network for finalists",
    ],
  },
];
