export type BoardMember = {
  name: string;
  role: string;
  group: "Executive Board" | "Directors" | "Senior Analysts";
  bio?: string;
  image?: string;
};

export const boardMembers: BoardMember[] = [
  {
    name: "Jane Doe",
    role: "President",
    group: "Executive Board",
    bio: "Senior studying Economics and Computer Science.",
  },
  {
    name: "John Smith",
    role: "Vice President",
    group: "Executive Board",
    bio: "Senior studying International Relations and Finance.",
  },
  {
    name: "Alex Chen",
    role: "Head of Diligence",
    group: "Executive Board",
    bio: "Junior studying Economics.",
  },
  {
    name: "Priya Patel",
    role: "Head of Deal Sourcing",
    group: "Executive Board",
    bio: "Junior studying Computer Science.",
  },
  {
    name: "Sam Rivera",
    role: "Head of Marketing & Events",
    group: "Executive Board",
    bio: "Sophomore studying Entrepreneurship.",
  },
  {
    name: "Morgan Lee",
    role: "Treasurer",
    group: "Executive Board",
    bio: "Junior studying Quantitative Economics.",
  },
  {
    name: "Taylor Kim",
    role: "Director, Diligence",
    group: "Directors",
  },
  {
    name: "Jordan Park",
    role: "Director, Deal Sourcing",
    group: "Directors",
  },
  {
    name: "Casey Nguyen",
    role: "Director, Market Research",
    group: "Directors",
  },
];

export const boardGroups: BoardMember["group"][] = [
  "Executive Board",
  "Directors",
];
