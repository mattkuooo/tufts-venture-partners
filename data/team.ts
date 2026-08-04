export type BoardMember = {
  name: string;
  role: string;
  group: "Executive Board";
  image?: string;
};

export const boardMembers: BoardMember[] = [
  {
    name: "Matt Kuo",
    role: "President",
    group: "Executive Board",
    image: "/images/matt_kuo.jpg",
  },
  {
    name: "Cooper Kolehmainen",
    role: "Senior VP of Investment Strategy",
    group: "Executive Board",
    image: "/images/cooper_kolehmainen.jpeg",
  },
  {
    name: "Alex Robbins",
    role: "Senior VP of Investment Strategy",
    group: "Executive Board",
    image: "/images/alex_robbins.png",
  },
  {
    name: "Josh Espinoza",
    role: "VP of Client Relations",
    group: "Executive Board",
    image: "/images/josh_espinoza_cropped.jpeg",
  },
  {
    name: "Sofia Alvazzi",
    role: "VP of Client Relations",
    group: "Executive Board",
    image: "/images/sofia_alvazzi.jpg",
  },
  {
    name: "Riley Schmidt",
    role: "VP of Marketing",
    group: "Executive Board",
    image: "/images/riley_schmidt.JPG",
  },
  {
    name: "Michael Williamson",
    role: "VP of Recruitment",
    group: "Executive Board",
    image: "/images/michael_williamson.jpg",
  },
  {
    name: "Harry Lynch",
    role: "VP of Academy",
    group: "Executive Board",
    image: "/images/harry_lynch.jpg",
  },
  {
    name: "Catie Samaan",
    role: "VP of Operations",
    group: "Executive Board",
    image: "/images/catie_samaan.png",
  },
];

export const boardGroups: BoardMember["group"][] = ["Executive Board"];
