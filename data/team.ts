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
    role: "Founder & President",
    group: "Executive Board",
    image: "/images/matt_kuo.jpg",
    href: "https://www.linkedin.com/in/mattmkuo/",
  },
  {
    name: "Catherine Samaan",
    role: "SVP, Operations",
    group: "Executive Board",
    image: "/images/catie_samaan_portrait.jpg",
    imagePosition: "50% 50%",
    href: "https://www.linkedin.com/in/catherine-samaan-07264b221/",
  },
  {
    name: "Cooper Kolehmainen",
    role: "SVP, Investment Strategy",
    group: "Executive Board",
    image: "/images/cooper_kolehmainen_portrait.jpg",
    imagePosition: "50% 50%",
    href: "https://www.linkedin.com/in/cooper-kolehmainen/",
  },
  {
    name: "Alex Robbins",
    role: "SVP, Investment Strategy",
    group: "Executive Board",
    image: "/images/alex_robbins.png",
    href: "https://www.linkedin.com/in/alexander-h-robbins/",
  },
  {
    name: "Harry Lynch",
    role: "VP, Academy",
    group: "Executive Board",
    image: "/images/harry_lynch.png",
    href: "https://www.linkedin.com/in/harry-lynch/",
  },
  {
    name: "Sofia Alvazzi",
    role: "VP, Client Relations",
    group: "Executive Board",
    image: "/images/sofia_alvazzi.jpg",
    href: "https://www.linkedin.com/in/sofia-alvazzi/",
  },
  {
    name: "Cayden Minchen",
    role: "VP, Client Relations",
    group: "Executive Board",
    image: "/images/cayden_minchen.jpg",
  },
  {
    name: "Christine Won",
    role: "VP, Marketing",
    group: "Executive Board",
    image: "/images/christine_won_portrait.jpg",
    imagePosition: "50% 50%",
  },
  {
    name: "Michael Williamson",
    role: "VP, Finance",
    group: "Executive Board",
    image: "/images/michael_williamson_portrait.jpg",
    imagePosition: "50% 50%",
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
    name: "Jenna Abelli",
    role: "Principal, Anzu Partners",
    group: "Advisory Board",
    image: "/images/jenna_abelli.jpg",
    imagePosition: "50% 50%",
  },
  {
    name: "Shun Hagiwara",
    role: "Senior Associate, M12",
    group: "Advisory Board",
    image: "/images/shun_hagiwara.webp",
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
    role: "Associate, Bain & Company",
    group: "Advisory Board",
    image: "/images/jerry_huang.jpg",
    imagePosition: "50% 50%",
  },
];

export const boardGroups: BoardMember["group"][] = [
  "Executive Board",
  "Advisory Board",
];
