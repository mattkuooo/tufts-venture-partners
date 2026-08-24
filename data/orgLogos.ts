export type OrgLogo = {
  src: string;
  /** Intrinsic pixel dimensions. next/image needs these to hold the aspect
   *  ratio, since the band sets height and lets width follow. */
  width: number;
  height: number;
  /** Optical size multiplier, default 1. Some marks have a bounding box much
   *  taller than their wordmark — an orb, a stacked tagline — so matching on
   *  box height alone makes their type look small next to a plain wordmark.
   *  Nudge this until the lettering matches the others by eye. */
  scale?: number;
};

/** Logos for the advisory-board credibility band on the home page.
 *
 *  The band derives its organisation names from the Advisory Board roles in
 *  data/team.ts, then looks each one up here. An org with no entry renders as
 *  type in a matching weight, so a partial set still reads as one system and
 *  this can be filled in as files arrive.
 *
 *  Keys must match the organisation exactly as it appears after the last comma
 *  in that person's `role`. Files live in /public/images/logos/.
 *
 *  Ask for: SVG or transparent PNG, DARK version for light backgrounds, and a
 *  wordmark rather than a square icon — they render on one optical line.
 */
export const orgLogos: Record<string, OrgLogo> = {
  "Argon Ventures": {
    src: "/images/logos/argon-ventures.png",
    width: 600,
    height: 260,
    // Box includes the orb above the wordmark, so it needs to run larger.
    scale: 1.7,
  },
  "Bain & Company": {
    src: "/images/logos/bain-and-company.svg",
    width: 279,
    height: 31,
  },
  "Boston Seed Capital": {
    src: "/images/logos/boston-seed-capital.svg",
    width: 292,
    height: 31,
  },
  "Wave Life Sciences": {
    src: "/images/logos/wave-life-sciences.webp",
    width: 872,
    height: 350,
    // Wordmark sits above a "LIFE SCIENCES" tagline, so the box runs tall.
    scale: 1.6,
  },

  "Presidio Ventures": {
    src: "/images/logos/presidio-ventures.png",
    width: 1674,
    height: 521,
    // Wordmark is stacked over two lines beside an icon, so each line of type
    // is only about a third of the box height.
    scale: 1.9,
  },
  "Superior Studios": {
    src: "/images/logos/superior-studios.png",
    width: 181,
    height: 77,
    // Also stacked, over a "VENTURE TOGETHER" tagline.
    scale: 1.9,
  },

  // Still needed — renders as type until a file lands here:
  // "1441 Collective": { src: "...", width: 0, height: 0 },
  //   NB: 1441's public file is cream-on-transparent, a dark-background
  //   variant that would be invisible here. Ask them for the dark one.
};
