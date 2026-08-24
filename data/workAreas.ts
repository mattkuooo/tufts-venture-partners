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
    title: "Diligence",
    description:
      "When a company reaches our later evaluation stage, analyst teams run full investment diligence — market sizing, competitive landscape, unit economics, and founder reference calls — and present findings to the board.",
    points: [
      "Market and competitive analysis",
      "Founder and customer reference calls",
      "Financial and cap table review",
      "Investment memo writing and presentation",
    ],
    image: "/images/diligence.jpg",
  },
  {
    title: "Deal Sourcing",
    description:
      "Analysts build and maintain a pipeline of early-stage companies by scouting accelerators, founder networks, and campus startups, then screening them against our investment thesis.",
    points: [
      "Outbound founder outreach",
      "Accelerator and demo day coverage",
      "Pipeline tracking and screening",
      "Warm introductions from our investor network",
    ],
    image: "/images/deal-sourcing.jpg",
  },
  {
    title: "Market Research",
    description:
      "Sector teams track emerging technology trends and produce research on spaces we're actively watching, building the club's point of view ahead of deal flow.",
    points: [
      "Sector deep-dives and trend reports",
      "Thesis development for priority spaces",
      "Internal knowledge base for the analyst class",
    ],
    image: "/images/market-research.jpg",
  },
];
