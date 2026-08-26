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
    title: "Market Research",
    description:
      "Thesis-driven research on the verticals you name, mapping the landscape before you take a meeting. Each cycle returns a segmented view of the space with stage, last round, and a view on where value accrues.",
    points: [
      "Segmented company landscape, 10–20 per vertical",
      "Stage, last round, and competitive positioning",
      "Thesis development for the verticals you define",
    ],
    image: "/images/market-research.jpg",
  },
  {
    title: "Deal Sourcing",
    description:
      "We source and screen founders nationwide against the criteria you set, with the Boston campus pipeline — Tufts, MIT, Harvard, Northeastern, WPI, BC, and BU — as a primary focus, plus founder and investor events across the city.",
    points: [
      "Nationwide sourcing screened against your criteria",
      "Boston campus pipeline: Tufts, MIT, Harvard, Northeastern, WPI, BC, BU",
      "Coverage of founder and investor events across the city",
    ],
    image: "/images/deal-sourcing.jpg",
  },
  {
    title: "Technical Validation",
    description:
      "Every recommendation arrives written up and pressure-tested internally before it reaches you — at least two rounds of screening behind a 5–8 page investment memo, with technical claims checked against Tufts faculty and practitioners working in that field.",
    points: [
      "Two rounds of internal screening before anything reaches you",
      "5–8 page investment memo, verified against a primary source",
      "Technical claims checked against Tufts faculty in that field",
    ],
    image: "/images/diligence.jpg",
  },
];
