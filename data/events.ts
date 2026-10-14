export type EventArea = {
  title: string;
  description: string;
  /** Optional photo. Drop a file in /public/images and set the path here to
   *  replace the dashed placeholder on the Events page. */
  image?: string;
};

export const eventAreas: EventArea[] = [
  {
    title: "TVP Academy",
    description:
      "Our training program for all Tufts students — no experience needed. We'll have guest speakers walk you through how venture capital works, go through several case studies, and close it off with a Pitch Night.",
    image: "/images/academy.jpg",
  },
  {
    title: "Fireside Chats / Speaker Series",
    description:
      "We bring VCs and founders to campus for candid fireside chats on how a fund decides what pitches to back, what a founder's first eighteen months really look like, and how students can break into the industry.",
    image: "/images/fireside-chat.jpg",
  },
  {
    title: "Pitch Competitions",
    description:
      "We host and judge pitch competitions that bring student founders together with VC clubs from across Boston, giving Tufts entrepreneurs the chance to pitch to a real audience and giving our analysts practice evaluating companies under time pressure.",
  },
];
