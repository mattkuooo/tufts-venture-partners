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
    name: "Cooper Kolehmainen",
    role: "Senior VP of Investment Strategy",
    group: "Executive Board",
    image: "/images/cooper_kolehmainen_headshot.jpg",
    imagePosition: "50% 50%",
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
    name: "Catie Samaan",
    role: "VP of Operations",
    group: "Executive Board",
    image: "/images/catie_samaan.png",
    href: "https://www.linkedin.com/in/catherine-samaan-07264b221/",
  },
  {
    name: "Josh Espinoza",
    role: "VP of Client Relations",
    group: "Executive Board",
    image: "/images/josh_espinoza_cropped.jpeg",
    href: "https://www.linkedin.com/in/joshespinozahernandez/",
  },
  {
    name: "Sofia Alvazzi",
    role: "VP of Client Relations",
    group: "Executive Board",
    image: "/images/sofia_alvazzi.jpg",
    href: "https://www.linkedin.com/in/sofia-alvazzi/",
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
    name: "Ross Leav",
    role: "Senior Vice President, Presidio Ventures",
    group: "Advisory Board",
    image: "/images/ross_leav.jpg",
    imagePosition: "50% 50%",
  },
  {
    name: "Andy Feinberg",
    role: "Co-Founder & Managing Partner, Argon Ventures",
    group: "Advisory Board",
    image: "/images/andy_feinberg.jpg",
    imagePosition: "50% 50%",
  },
  {
    name: "Max Neve",
    role: "Partner, Head of Growth & Strategy, 1441 Collective",
    group: "Advisory Board",
    image: "/images/max_neve.jpg",
    imagePosition: "50% 50%",
  },
  {
    name: "Troy Simpson",
    role: "Investor, Boston Seed Capital",
    group: "Advisory Board",
    image: "/images/troy_simpson.jpg",
    imagePosition: "50% 50%",
  },
  {
    name: "Danny Goodman",
    role: "Investor, Superior Studios",
    group: "Advisory Board",
    image: "/images/danny_goodman.jpg",
    imagePosition: "50% 50%",
  },
  {
    name: "Adhvith Reddy",
    role: "ML, Wave Life Sciences",
    group: "Advisory Board",
    image: "/images/adhvith_reddy.jpg",
    imagePosition: "50% 50%",
  },
  {
    name: "Jerry Huang",
    role: "Associate, Bain",
    group: "Advisory Board",
    image: "/images/jerry_huang.jpg",
    imagePosition: "50% 50%",
  },
];

export const boardGroups: BoardMember["group"][] = [
  "Executive Board",
  "Advisory Board",
];
