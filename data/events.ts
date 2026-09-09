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
      "Our training program for all Tufts students - no experience needed. We'll have guest speakers walk you through how venture capital works, go through several case studies, and close it off with a Pitch Night. ",
    points: [
      "Wednesdays at 7:30 p.m",
      "Guest speakers on careers, sourcing, and diligence",
      "Case studies on real companies",
      "Pitch Night where the board judges and gives feedback"
    ],
  },
  {
    title: "Fireside Chats / Speaker Series",
    description:
      "We bring VCs and founders to campus for candid fireside chats on how a fund decides what pitches to back, what a founder's first eighteen months really look like, and how students can break into the industry.",
    points: [
      "Investor and founder fireside chats",
      "Skills workshops (modeling, pitching, diligence)",
      "Alumni networking nights",
      "Open to the wider Tufts community",
    ],
  },
  {
    title: "Pitch Competitions",
    description:
      "We host and judge pitch competitions that bring student founders together with VC clubs from across Boston, giving Tufts entrepreneurs the chance to pitch to a real audience and giving our analysts practice evaluating companies under time pressure.",
    points: [
      "Inter-collegiate competitions with Boston-area VC clubs",
      "Campus startup showcases",
      "Analyst-led judging and feedback panels",
      "Introductions to our investor network for finalists",
    ],
  },
];
