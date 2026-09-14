import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { site } from "@/data/site";
import { academy } from "@/data/schedule";
import { orgLogos } from "@/data/orgLogos";
import { boardMembers } from "@/data/team";
import { cn } from "@/lib/utils";

/** Advisory roles read "Title, Organization" — take the part after the last
 *  comma so the credibility band stays in sync with the roster. */
const advisoryOrgs = Array.from(
  new Set(
    boardMembers
      .filter((m) => m.group === "Advisory Board")
      .map((m) => m.role.split(",").pop()?.trim())
      .filter((org): org is string => Boolean(org))
  )
);

export default function Home() {
  return (
    <>
      {/* Fills the fold exactly, so the photo runs to the bottom edge with no
          off-white sliver under it. That leaves the chevron as the only signal
          that the page continues, which is why it stays.
          svh, not vh — on mobile vh ignores the address bar, and the overflow
          would push the chevron off screen on the screens that need it most. */}
      <section className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden bg-tufts-blue">
        <Image
          src="/images/jumbo_banner.jpg"
          alt=""
          fill
          priority
          className="object-cover"
        />
        {/* Lighter than a flat wash so the campus photo actually reads, with
            the weight kept at the bottom where the text sits. */}
        <div className="absolute inset-0 bg-gradient-to-br from-tufts-blue/70 via-tufts-blue/50 to-tufts-brown/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-tufts-blue/80 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-20">
          <div>
            {/* The name leads; the claim under it is the part worth reading
                twice. One line from sm up: nowrap plus a clamped size that
                always fits the container, wrapping on phones where it cannot
                fit one line at a readable size. The three lines rise in
                sequence on load (hero-rise in globals.css); Wharton-style
                but capped under 0.5s of total delay so repeat visits never
                feel slow. */}
            <h1 className="hero-rise font-heading text-4xl font-black leading-[1.05] tracking-tight text-white motion-safe:opacity-0 motion-safe:animate-[rise-in_0.7s_cubic-bezier(0.25,0.1,0.25,1)_0.05s_forwards] sm:whitespace-nowrap sm:text-[clamp(2.25rem,5.8vw,4.5rem)]">
              {site.name}
            </h1>

            <p className="hero-rise font-heading mt-4 text-xl font-bold leading-snug text-white motion-safe:opacity-0 motion-safe:animate-[rise-in_0.7s_cubic-bezier(0.25,0.1,0.25,1)_0.15s_forwards] sm:mt-5 sm:text-3xl">
              The first-ever VC community at Tufts
            </p>

            <p className="hero-rise mt-6 max-w-2xl text-lg font-light leading-relaxed text-white/85 motion-safe:opacity-0 motion-safe:animate-[rise-in_0.7s_cubic-bezier(0.25,0.1,0.25,1)_0.25s_forwards] sm:text-xl">
              A student investment team working alongside venture capital
              firms and founders with guidance from industry professionals
            </p>
          </div>
        </div>

        {/* A real link rather than decoration, so the cue does the thing it
            advertises. Bounce is motion-safe: a looping animation is exactly
            what reduced-motion users turn off. */}
        <Link
          href="#mission"
          aria-label="Skip to our mission"
          className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 rounded-full p-3 text-white/70 transition-colors hover:text-white focus-visible:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
        >
          <ChevronDown className="size-6 motion-safe:animate-bounce" />
        </Link>
      </section>

      <section id="mission" className="scroll-mt-16 py-20">
        <Reveal className="mx-auto grid max-w-4xl gap-4 px-6 sm:grid-cols-[160px_1fr] sm:gap-10">
          <div className="flex items-center gap-3 sm:block">
            <span className="h-px w-8 shrink-0 bg-tufts-blue sm:mb-3 sm:block sm:w-10" />
            <h2 className="text-sm font-semibold uppercase tracking-wide text-tufts-blue">
              Our Mission
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-foreground">
            {site.mission}
          </p>
        </Reveal>
      </section>

      {/* The fall's headline program. Its weight comes from the navy schedule
          card and the type, not a full-bleed colour band — the photo hero is
          the page's only saturated block, so a second one mid-page read as a
          repeat rather than an accent. */}
      <section id="academy" className="border-y border-border/60 bg-card py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_minmax(0,23rem)] lg:gap-16">
          <div>
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 shrink-0 bg-tufts-blue" />
                <p className="text-sm font-semibold uppercase tracking-wide text-tufts-blue">
                  {academy.term}
                </p>
              </div>

              <h2 className="font-heading mt-5 text-4xl font-black text-foreground sm:text-5xl">
                {academy.title}
              </h2>

              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
                {academy.description}
              </p>
            </Reveal>

            {/* A wrapping row rather than a 3-up grid: each stat keeps its own
                line, so a narrow column can never orphan "p.m." */}
            <Reveal delay={0.1}>
              <dl className="mt-9 flex flex-wrap gap-x-10 gap-y-6 border-t border-border/60 pt-7">
                {[
                  ["Meets", academy.slot],
                  ["Location", academy.location],
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {label}
                    </dt>
                    <dd className="font-heading mt-1.5 whitespace-nowrap text-base font-bold leading-snug text-foreground">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                size="lg"
                className="bg-tufts-blue text-white hover:bg-tufts-blue/90"
                nativeButton={false}
                render={
                  <a href={site.elist} target="_blank" rel="noopener noreferrer" />
                }
              >
                Get session reminders <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>

          {/* The one deep-colour block below the fold: the term as a run of
              steps, so the shape of the program is legible before anyone reads
              a word of it. Jumbo blue rather than tufts-blue so the card stays
              dark if a dark theme is ever switched on. */}
          <Reveal
            delay={0.15}
            className="self-start rounded-2xl bg-tufts-jumbo-blue p-6 text-white sm:p-7"
          >
            <ol>
              {academy.stages.map((stage, i) => {
                // Pitch Night is the payoff, so it gets the filled marker.
                const isLast = i === academy.stages.length - 1;
                return (
                  <li
                    key={stage.title}
                    className="relative flex gap-4 pb-6 last:pb-0"
                  >
                    {!isLast && (
                      <span
                        aria-hidden
                        className="absolute bottom-0 left-4 top-9 w-px -translate-x-1/2 bg-white/25"
                      />
                    )}
                    <span
                      className={cn(
                        "font-heading flex size-8 shrink-0 items-center justify-center rounded-full border text-[0.7rem] font-black",
                        isLast
                          ? "border-white bg-white text-tufts-jumbo-blue"
                          : "border-white/35 bg-white/10 text-white"
                      )}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="pt-0.5">
                      <p className="text-[0.7rem] font-semibold uppercase tracking-wide text-white/55">
                        {stage.when}
                      </p>
                      <p className="font-heading mt-0.5 text-sm font-bold leading-snug text-white">
                        {stage.title}
                      </p>
                      <p className="mt-1 text-sm leading-snug text-white/70">
                        {stage.detail}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Our advisory board invests and operates at
            </p>
          </Reveal>

          {/* Marquee: one duplicated row on a translating track, so the loop
              is seamless without JS. Overflow-x clipped with the padding
              inside so logos never kiss the viewport edge. The animation is
              applied via marquee-track/motion-safe in globals-land classes;
              hover pauses it (a held marquee reads as courtesy, a frozen one
              as a bug). */}
          <Reveal delay={0.1} className="marquee-band mt-8">
            <ul className="flex overflow-hidden">
              <li className="marquee-track flex shrink-0 items-center gap-10 pr-10 motion-safe:animate-[marquee-left_40s_linear_infinite] motion-safe:hover:[animation-play-state:paused]">
                {[...advisoryOrgs, ...advisoryOrgs].map((org, i) => {
                  const logo = orgLogos[org];
                  return (
                    <div
                      key={`${org}-${i}`}
                      aria-hidden={i >= advisoryOrgs.length}
                      className="flex h-16 shrink-0 items-center"
                    >
                      {logo ? (
                        // Matched on height rather than boxed, so wordmarks of
                        // very different aspect ratios sit on one optical line.
                        // Full colour — the marks are official brand assets,
                        // and colour lets each fund's identity read at this
                        // size.
                        <Image
                          src={logo.src}
                          alt={i < advisoryOrgs.length ? org : ""}
                          width={logo.width}
                          height={logo.height}
                          className="w-auto"
                          style={{
                            height: `calc(clamp(1.15rem, 2.6vw, 1.6rem) * ${
                              logo.scale ?? 1
                            })`,
                          }}
                        />
                      ) : (
                        // Same optical weight as the logos, so a partial set
                        // still reads as one band rather than logos plus
                        // leftovers.
                        <span className="text-base font-semibold uppercase tracking-wide text-foreground/60 sm:text-lg">
                          {org}
                        </span>
                      )}
                    </div>
                  );
                })}
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-1 text-sm font-medium text-tufts-blue hover:underline"
            >
              Meet the board <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Closing CTA: the two ways to stay connected, so the page doesn't
          dead-end after the logo band. */}
      <section className="border-t border-border/60">
        <Reveal className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
            Stay in the loop
          </h2>
          <p className="mx-auto mt-3 max-w-xl leading-relaxed text-muted-foreground">
            Get session reminders by email, and important announcements on Slack.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button
              size="lg"
              className="bg-tufts-blue text-white hover:bg-tufts-blue/90"
              nativeButton={false}
              render={
                <a href={site.elist} target="_blank" rel="noopener noreferrer" />
              }
            >
              Join the e-list <ArrowRight className="size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              render={
                <a href={site.slack} target="_blank" rel="noopener noreferrer" />
              }
            >
              Join our Slack
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
