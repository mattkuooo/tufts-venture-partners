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
      "Engagements run one semester, September to December or January to May, with deliverables on a recurring cycle. Terms renew by agreement.",
  },
  {
    label: "Team",
    description:
      "Staffed as a pod once scope is set: a Senior Associate, an Associate, and analysts picked for the work, with board oversight.",
  },
  {
    label: "Cadence",
    description:
      "We meet with you weekly or bi-weekly. Internally the team convenes weekly, where analysts present to senior leadership first.",
  },
  {
    label: "Scope",
    description:
      "You define the verticals and the screening criteria. We calibrate in the opening weeks, so the first cycle comes back in your format.",
  },
  {
    label: "Overhead",
    description:
      "The work does not land back on your team: direction at the start of a cycle, questions through the pod lead, output already reviewed.",
  },
];
