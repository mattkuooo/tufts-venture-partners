import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";
import { academy, gim } from "@/data/schedule";
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
      <section className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden bg-tufts-blue">
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
                fit one line at a readable size. */}
            <h1 className="font-heading text-4xl font-black leading-[1.05] tracking-tight text-white sm:whitespace-nowrap sm:text-[clamp(2.25rem,5.8vw,4.5rem)]">
              {site.name}
            </h1>

            <p className="font-heading mt-4 text-xl font-bold leading-snug text-white sm:mt-5 sm:text-3xl">
              The first VC community at Tufts
            </p>

            <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-white/85 sm:text-xl">
              A student-run analyst program built on real diligence work, with
              advisors from venture funds across Boston.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-4xl gap-4 px-6 sm:grid-cols-[160px_1fr] sm:gap-10">
          <div className="flex items-center gap-3 sm:block">
            <span className="h-px w-8 shrink-0 bg-tufts-blue sm:mb-3 sm:block sm:w-10" />
            <h2 className="text-sm font-semibold uppercase tracking-wide text-tufts-blue">
              Our Mission
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-foreground">
            {site.mission}
          </p>
        </div>
      </section>

      {/* The fall's headline program. Its weight comes from the navy schedule
          card and the type, not a full-bleed colour band — the photo hero is
          the page's only saturated block, so a second one mid-page read as a
          repeat rather than an accent. */}
      <section id="academy" className="border-y border-border/60 bg-card py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_minmax(0,23rem)] lg:gap-16">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 shrink-0 bg-tufts-blue" />
              <p className="text-sm font-semibold uppercase tracking-wide text-tufts-blue">
                {academy.term} · Where everyone starts
              </p>
            </div>

            <h2 className="font-heading mt-5 text-4xl font-black text-foreground sm:text-5xl">
              {academy.title}
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {academy.description}
            </p>

            {/* A wrapping row rather than a 3-up grid: each stat keeps its own
                line, so a narrow column can never orphan "p.m." */}
            <dl className="mt-9 flex flex-wrap gap-x-10 gap-y-6 border-t border-border/60 pt-7">
              {[
                ["Open to", academy.openTo],
                ["Each session", academy.sessionLength],
                ["Meets", academy.slot],
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

            {/* How to turn up, kept in the copy column so the left side reads
                to the same depth as the schedule beside it. */}
            <div className="mt-9 flex items-start gap-3 rounded-xl border border-border/60 px-4 py-3.5">
              <CalendarDays className="mt-0.5 size-4 shrink-0 text-tufts-blue" />
              <p className="text-sm leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">
                  It starts at the {gim.title}
                </span>{" "}
                — {gim.date} at{" "}
                {/* Keeps "7:30 p.m." from breaking across lines. */}
                <span className="whitespace-nowrap">{gim.time}</span> No
                application and nothing to sign up for — just show up.
              </p>
            </div>

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
              <Button
                size="lg"
                variant="outline"
                nativeButton={false}
                render={<Link href="/events" />}
              >
                See our events
              </Button>
            </div>
          </div>

          {/* The one deep-colour block below the fold: the term as a run of
              steps, so the shape of the program is legible before anyone reads
              a word of it. Jumbo blue rather than tufts-blue so the card stays
              dark if a dark theme is ever switched on. */}
          <div className="self-start rounded-2xl bg-tufts-jumbo-blue p-6 text-white sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-wide text-white/60">
              How the term runs
            </p>

            <ol className="mt-5">
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
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Our advisory board invests and operates at
          </p>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {advisoryOrgs.map((org) => {
              const logo = orgLogos[org];
              return (
                <li key={org} className="flex h-16 items-center">
                  {logo ? (
                    // Matched on height rather than boxed, so wordmarks of
                    // very different aspect ratios sit on one optical line.
                    // Grayscale unifies a set of mismatched third-party marks.
                    <Image
                      src={logo.src}
                      alt={org}
                      width={logo.width}
                      height={logo.height}
                      className="w-auto opacity-60 grayscale"
                      style={{
                        height: `calc(clamp(1.15rem, 2.6vw, 1.6rem) * ${
                          logo.scale ?? 1
                        })`,
                      }}
                    />
                  ) : (
                    // Same optical weight as the logos, so a partial set still
                    // reads as one band rather than logos plus leftovers.
                    <span className="text-base font-semibold uppercase tracking-wide text-foreground/60 sm:text-lg">
                      {org}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-1 text-sm font-medium text-tufts-blue hover:underline"
          >
            Meet the board <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <section className="border-t border-border/60">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
            Two ways in.
          </h2>
          <p className="mx-auto mt-3 max-w-xl leading-relaxed text-muted-foreground">
            Students join through the Academy. Firms and founders work with our
            analysts directly.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button
              size="lg"
              className="bg-tufts-blue text-white hover:bg-tufts-blue/90"
              nativeButton={false}
              render={<Link href="/apply" />}
            >
              Apply to join <ArrowRight className="size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              render={<Link href="/partner" />}
            >
              Partner with us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
