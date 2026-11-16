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
      "Our training program, open to all Tufts students with no experience needed. Guest speakers walk you through how venture capital works, then we work through case studies together and finish with a Pitch Night.",
    image: "/images/academy.jpg",
  },
  {
    title: "Fireside Chats / Speaker Series",
    description:
      "We bring VCs and founders to campus for candid fireside chats on how a fund decides what pitches to back, what a founder's first eighteen months really look like, and how students can break into the industry.",
    image: "/images/fireside-chat.jpg",
  },
  {
    title: "Pitch Competitions + Hackathons",
    description: "Coming in 2027.",
  },
];
