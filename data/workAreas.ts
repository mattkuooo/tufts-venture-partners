export type WorkArea = {
  title: string;
  description: string;
  /** Optional photo. Drop a file in /public/images and set the path here to
   *  replace the dashed placeholder on the Work page. */
  image?: string;
};

export const workAreas: WorkArea[] = [
  {
    title: "On The Ground In Boston",
    description:
      "As students, we can get into rooms investors can't: founder meetups and campus pitch competitions across Massachusetts, including early-stage events that firms rarely attend. Founders also talk more openly with us. Talking to another student carries none of the pressure of a pitch, so conversations start earlier and go further. And unlike a fund's deal team, we have enough people to cover these events in parallel.",
    image: "/images/boston-team.jpg",
  },
  {
    title: "Technical Diligence",
    description:
      "Take semiconductors. A chip passes through roughly twenty distinct steps before it ships, from EDA tooling and silicon IP to front-end equipment and advanced packaging, and a startup can sit anywhere in that chain. No VC deal team holds the technical expertise to evaluate every one of them. Rather than hire engineers or bring in outside consultants, our analysts do the primary research: they test whether the technology works as claimed and help you decide which companies to pursue.",
    image: "/images/diligence.jpg",
  },
  {
    title: "Market Research",
    description:
      "Project teams produce a thesis by researching the verticals you care about. Each cycle returns a segmented landscape of 10 to 20 companies, with stage, positioning, and a point of view on where value accrues, alongside an evaluation of the market itself.",
    image: "/images/market-research.jpg",
  },
];
