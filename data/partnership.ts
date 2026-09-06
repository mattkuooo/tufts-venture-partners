import type { LucideIcon } from "lucide-react";
import { Layers, MapPin, GraduationCap } from "lucide-react";

export const whyNotAI: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "A person can be in the room.",
    description:
      "Teams at formation have no site, no deck, and nothing to index. We are at the demo days, pitch nights, and lab showcases where they first show up.",
    icon: MapPin,
  },
  {
    title: "We can ask someone who would know.",
    description:
      "A technical claim goes to Tufts faculty and practitioners in that field. Is it novel, has it been tried and failed before, does the method hold outside a lab.",
    icon: GraduationCap,
  },
  {
    title: "Judgment, not a single pass.",
    description:
      "Work goes through internal screening and a written memo before it reaches you, so what lands on your desk has already survived an argument.",
    icon: Layers,
  },
];

export const partnershipTerms = [
  {
    label: "Term",
    description:
      "Each engagement runs one semester, September to December or January to May, with deliverables on a recurring cycle inside it. Terms renew by agreement.",
  },
  {
    label: "Team",
    description:
      "Once the scope is set, the engagement is staffed as a pod: a Senior Associate leading, an Associate, and a team of analysts chosen for the work in front of them, with board oversight on anything that goes out.",
  },
  {
    label: "Cadence",
    description:
      "We meet with you weekly or bi-weekly. Internally the team convenes every week, where analysts present their work to senior leadership before it reaches you.",
  },
  {
    label: "Scope",
    description:
      "You define the verticals and the screening criteria. We calibrate against your standard in the opening weeks, so the first full cycle comes back in your format.",
  },
  {
    label: "Overhead",
    description:
      "The structure is built so the work does not land back on your team. Direction comes at the start of a cycle, questions route through the pod lead, and what reaches you has already been reviewed.",
  },
];
