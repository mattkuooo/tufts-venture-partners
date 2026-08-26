import type { LucideIcon } from "lucide-react";
import { Layers, MapPin, GraduationCap } from "lucide-react";

export const whyNotAI: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Depth, not a single pass.",
    description:
      "A startup is presented to you only after at least two rounds of screening and a 5–8 page in-depth investment memo, always verified against a primary source before it reaches you.",
    icon: Layers,
  },
  {
    title: "AI cannot sit in the room.",
    description:
      "Pre-seed teams at formation have no site, no deck, and no announcement to index. We're at the demo days, pitch nights, and lab showcases where they first appear.",
    icon: MapPin,
  },
  {
    title: "We can ask someone who would know.",
    description:
      "A founder's technical claim goes to Tufts faculty in that field: is it novel, has it already been tried and failed, does the method hold outside a lab.",
    icon: GraduationCap,
  },
];

export const partnershipTerms = [
  {
    label: "Term",
    description:
      "Each engagement runs one full semester — September to December, or January to May — with deliverables on a recurring cycle inside it. Terms renew by agreement.",
  },
  {
    label: "Team",
    description:
      "Each vertical is staffed as a pod: a Senior Associate leading, an Associate, and a team of analysts working under senior review.",
  },
  {
    label: "Cadence",
    description:
      "We meet with you weekly or bi-weekly. Internally, the whole team convenes every week, where analysts pitch the startups they sourced to senior leadership.",
  },
  {
    label: "Scope",
    description:
      "You define the verticals and the screening criteria. We calibrate against your standard in the opening weeks of the engagement.",
  },
];
