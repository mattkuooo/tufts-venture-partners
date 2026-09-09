export type WorkArea = {
  title: string;
  description: string;
  points: string[];
  /** Optional photo. Drop a file in /public/images and set the path here to
   *  replace the dashed placeholder on the Work page. */
  image?: string;
};

export const workAreas: WorkArea[] = [
  {
    title: "On The Ground In Boston",
    description:
      "As college students, we can get into the rooms investors cannot. We hold tickets and open access to events across Massachusetts, from funder meetups to campus competitions, including the inclusive early-stage ones that firms rarely reach. Founders are more open with us too: talking to a fellow student carries none of the pressure of pitching to an investor, so conversations start earlier and run deeper. And unlike a fund's deal team, we have the time to be in all of these rooms at once.",
    points: [
      "Pitch nights, demo days, showcases",
      "Reached before a deck exists",
      "Screened to your criteria",
      "Passes logged with reasons",
    ],
    image: "/images/deal-sourcing.jpg",
  },
  {
    title: "Technical Diligence",
    description:
      "Take semiconductors. A chip passes through roughly twenty distinct steps before it ships, from EDA tooling and silicon IP to front-end equipment and advanced packaging, and a startup can sit anywhere in that chain. No VC deal team holds the technical expertise to evaluate every one of them. Rather than hire engineers or bring in outside consultants, our analysts conduct the primary research: validating the idea, questioning the claims, and contributing to your filtering process.",
    points: [
      "Analysts matched to the field",
      "Staffed once scope is set",
      "Verified with Tufts faculty",
      "Reviewed before it reaches you",
    ],
    image: "/images/diligence.jpg",
  },
  {
    title: "Market Research",
    description:
      "Project teams produce a thesis by researching the verticals you care about. Each cycle returns a segmented landscape of 10 to 20 companies, with stage, positioning, and a point of view on where value accrues, alongside an evaluation of the market itself.",
    points: [
      "Total addressable market",
      "Emerging players in the space",
      "What the competitive moat is",
      "Which VCs are investing",
    ],
    image: "/images/market-research.jpg",
  },
];
