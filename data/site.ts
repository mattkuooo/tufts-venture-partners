export const site = {
  name: "Tufts Venture Partners",
  shortName: "TVP",
  url: "https://www.tuftsventurepartners.org",
  tagline: "Tufts' student-run venture capital club.",
  mission:
    "Tufts Venture Partners gives students hands-on experience in venture capital: sourcing deals, running diligence, and working with founders and investors. Along the way we're building a community of Tufts students who care about startups and technology.",
  whoWeAre:
    "Our team brings together students from majors across finance and engineering. Feel free to reach out to any of us for coffee if you have any questions about venture capital or the recruitment process.",
  email: "info@tuftsventurepartners.org",
  linkedin: "https://www.linkedin.com/company/tufts-venture-partners",
  instagram: "https://www.instagram.com/tuftsventurepartners",
  elist:
    "https://docs.google.com/forms/d/e/1FAIpQLSfPuQq58qUnO7Y2Zj-gz0gwJb6TWxjFseTOGsEnAIwc5floWw/viewform",
  /** Event listings and RSVPs. */
  luma: "https://luma.com/tuftsventurepartners",
  slack:
    "https://join.slack.com/t/tuftsventurec-mv15109/shared_invite/zt-46ya61f7n-3xIGrnDy_ihl3JoLqLDYqg",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Our Work" },
  { href: "/events", label: "Events" },
  { href: "/partner", label: "Partner With Us" },
  { href: "/apply", label: "Get Involved" },
] as const;
