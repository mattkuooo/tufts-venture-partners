export type BoardMember = {
  name: string;
  role: string;
  group: "Executive Board" | "Advisory Board";
  image?: string;
  imagePosition?: string;
  href?: string;
};

export const boardMembers: BoardMember[] = [
  {
    name: "Matt Kuo",
    role: "President",
    group: "Executive Board",
    image: "/images/matt_kuo.jpg",
    href: "https://www.linkedin.com/in/mattmkuo/",
  },
  {
    name: "Catherine Samaan",
    role: "Senior VP of Operations",
    group: "Executive Board",
    image: "/images/catie_samaan.png",
    href: "https://www.linkedin.com/in/catherine-samaan-07264b221/",
  },
  {
    name: "Cooper Kolehmainen",
    role: "Senior VP of Investment Strategy",
    group: "Executive Board",
    image: "/images/cooper_kolehmainen.jpeg",
    imagePosition: "50% 0%",
    href: "https://www.linkedin.com/in/cooper-kolehmainen/",
  },
  {
    name: "Alex Robbins",
    role: "Senior VP of Investment Strategy",
    group: "Executive Board",
    image: "/images/alex_robbins.png",
    href: "https://www.linkedin.com/in/alexander-h-robbins/",
  },
  {
    name: "Harry Lynch",
    role: "VP of Academy",
    group: "Executive Board",
    image: "/images/harry_lynch.png",
    href: "https://www.linkedin.com/in/harry-lynch/",
  },
  {
    name: "Sofia Alvazzi",
    role: "VP of Client Relations",
    group: "Executive Board",
    image: "/images/sofia_alvazzi.jpg",
    href: "https://www.linkedin.com/in/sofia-alvazzi/",
  },
  {
    name: "Josh Espinoza",
    role: "VP of Client Relations",
    group: "Executive Board",
    image: "/images/josh_espinoza_cropped.jpeg",
    href: "https://www.linkedin.com/in/joshespinozahernandez/",
  },
  {
    name: "Riley Schmidt",
    role: "VP of Marketing",
    group: "Executive Board",
    image: "/images/riley_schmidt.JPG",
    href: "https://www.linkedin.com/in/rileyschmidt24/",
  },
  {
    name: "Michael Williamson",
    role: "VP of Recruitment",
    group: "Executive Board",
    image: "/images/michael_williamson.jpg",
    href: "https://www.linkedin.com/in/michael-williamson-473267321/",
  },
  {
    name: "Elaine Chen",
    role: "Director, Derby Entrepreneurship Center",
    group: "Advisory Board",
  },
  {
    name: "Max Neve",
    role: "Partner, Head of Growth & Strategy, 1441 Collective",
    group: "Advisory Board",
  },
  {
    name: "Danny Goodman",
    role: "Investor, Superior Studios",
    group: "Advisory Board",
  },
  {
    name: "Adhvith Reddy",
    role: "ML, Wave Life Sciences",
    group: "Advisory Board",
  },
  {
    name: "Jerry Huang",
    role: "Associate, Bain",
    group: "Advisory Board",
  },
  {
    name: "Jonathan Chung",
    role: "SWE, IBM",
    group: "Advisory Board",
  },
];

export const boardGroups: BoardMember["group"][] = [
  "Executive Board",
  "Advisory Board",
];
