/** Logos for the advisory-board credibility band on the home page.
 *
 *  The band derives its organisation names from the Advisory Board roles in
 *  data/team.ts, then looks each one up here. An org with no entry falls back
 *  to its name set in type — so this can stay empty, and filling it in is
 *  progressive: add the ones you have, leave the rest as text.
 *
 *  Keys must match the organisation exactly as it appears after the last comma
 *  in that person's `role`. Drop files in /public/images/logos/.
 *  Prefer SVG, or PNG with a transparent background; they are rendered at a
 *  uniform height, so wordmarks read better than square icons.
 */
export const orgLogos: Record<string, string> = {
  // "Presidio Ventures": "/images/logos/presidio-ventures.svg",
  // "Argon Ventures": "/images/logos/argon-ventures.svg",
  // "1441 Collective": "/images/logos/1441-collective.svg",
  // "Boston Seed Capital": "/images/logos/boston-seed-capital.svg",
  // "Superior Studios": "/images/logos/superior-studios.svg",
  // "Wave Life Sciences": "/images/logos/wave-life-sciences.svg",
  // "Bain": "/images/logos/bain.svg",
};
