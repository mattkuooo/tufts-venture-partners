export type RecruitmentStep = {
  step: string;
  title: string;
  description: string;
};

export const recruitmentSteps: RecruitmentStep[] = [
  {
    step: "01",
    title: "General Interest Meeting",
    description:
      "Come to the GIM at the start of the semester to learn what the club does and what analysts work on.",
  },
  {
    step: "02",
    title: "Application",
    description:
      "Submit a short written application covering your background and interest in venture capital and startups.",
  },
  {
    step: "03",
    title: "First Round Interview",
    description:
      "A conversational interview focused on your interests, experience, and fit with the club.",
  },
  {
    step: "04",
    title: "Case / Final Round",
    description:
      "A short case exercise on evaluating a startup, followed by a final round with members of the board.",
  },
  {
    step: "05",
    title: "Decisions",
    description:
      "Offers go out shortly after final rounds. New analysts join the training program the following week.",
  },
];
