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
      "Boston is one of a few places in the world where robotics and physical AI companies cluster, and it has been the center of biotech for decades. Most of the funds investing in those companies are somewhere else. We are here: a team of analysts at the pitch competitions, demo days, and lab showcases across the city, meeting teams well before they raise.",
    points: [
      "Coverage of pitch nights, demo days, and lab showcases across Tufts, MIT, Harvard, Northeastern, WPI, BC, and BU",
      "Teams reached at formation, before there is a site or a deck to find",
      "Screened against the criteria you set, with what we passed on written down",
    ],
    image: "/images/deal-sourcing.jpg",
  },
  {
    title: "Technical Diligence",
    description:
      "You run the deal. We take the part of it that turns on how the thing actually works. Analysts are matched to the field a question sits in, work under your direction, and bring the claims they cannot settle themselves to Tufts faculty and practitioners who can.",
    points: [
      "Analysts matched to the domain a deal turns on, staffed once the scope is set",
      "Technical claims checked with Tufts faculty and practitioners in that field",
      "Written findings, reviewed internally before they reach your team",
    ],
    image: "/images/diligence.jpg",
  },
  {
    title: "Market Research",
    description:
      "Thesis-driven research on the verticals you name, so a first meeting starts from a map of the space instead of a blank page. Each cycle returns a segmented view with stage, last round, and a position on where value is accruing.",
    points: [
      "Segmented company landscape, 10 to 20 per vertical",
      "Stage, last round, and competitive positioning",
      "Thesis development for the verticals you define",
    ],
    image: "/images/market-research.jpg",
  },
];
