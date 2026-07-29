export type WorkArea = {
  title: string;
  description: string;
  points: string[];
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
  },
  {
    title: "Speaker Events",
    description:
      "We bring in VCs, founders, and operators for talks, workshops, and Q&As so members learn directly from people building and investing in the industry.",
    points: [
      "Investor and founder speaker series",
      "Skills workshops (modeling, pitching, diligence)",
      "Networking events with alumni in venture",
    ],
  },
];
