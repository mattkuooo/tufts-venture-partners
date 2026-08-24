import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";
import { academy } from "@/data/schedule";
import { orgLogos } from "@/data/orgLogos";
import { boardMembers } from "@/data/team";

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
            <p className="text-sm font-semibold uppercase tracking-wide text-white/80">
              Tufts University
            </p>

            {/* One line from sm up: nowrap plus a clamped size that always
                fits the container. Wraps on phones, where the headline
                cannot fit one line at a readable size. */}
            <h1 className="font-heading mt-5 text-4xl font-black leading-[1.05] text-white sm:whitespace-nowrap sm:text-[clamp(1.9rem,4.6vw,3.75rem)]">
              The first VC community at Tufts
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90">
              A student-run analyst program built on real diligence work —
              sourcing, market research, and investment memos — with advisors
              from funds across Boston.
            </p>

            <Link
              href="/apply"
              className="group mt-8 inline-flex items-start gap-3 border-l-2 border-white/50 bg-white/10 px-4 py-3 backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <CalendarDays className="mt-0.5 size-5 shrink-0 text-white/80" />
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-white/80">
                  {academy.title} · {academy.term}
                </p>
                <p className="font-heading text-lg font-bold text-white">
                  {academy.slot}
                  <ArrowRight className="ml-2 inline size-4 transition-transform group-hover:translate-x-0.5" />
                </p>
              </div>
            </Link>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                size="lg"
                className="bg-white text-tufts-blue hover:bg-white/90"
                nativeButton={false}
                render={
                  <a
                    href={site.elist}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                Join the e-list <ArrowRight className="size-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
                nativeButton={false}
                render={<Link href="/partner" />}
              >
                Partner with us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
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

      {/* The brand gradient rather than a flat slab, so the band reads as the
          hero's colour returning instead of an unrelated blue block. */}
      <section className="bg-gradient-to-br from-tufts-blue via-[#2c6bb0] to-tufts-brown py-20 text-white">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-white/60" />
            <p className="text-sm font-semibold uppercase tracking-wide text-white/80">
              {academy.term}
            </p>
          </div>

          <h2 className="font-heading mt-5 text-3xl font-black sm:text-4xl">
            {academy.title}
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/90">
            {academy.description}
          </p>

          <p className="mt-6 font-heading text-lg font-bold text-white">
            {academy.slot}
          </p>

          <ol className="mt-10 grid gap-x-10 gap-y-5 sm:grid-cols-2">
            {academy.stages.map((stage, i) => (
              <li key={stage} className="flex items-baseline gap-4">
                <span className="font-heading text-sm font-black text-white/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="border-l-2 border-white/30 pl-4 leading-snug text-white/90">
                  {stage}
                </span>
              </li>
            ))}
          </ol>

          <Button
            size="lg"
            className="mt-10 bg-white text-tufts-blue hover:bg-white/90"
            nativeButton={false}
            render={<Link href="/apply" />}
          >
            How to join <ArrowRight className="size-4" />
          </Button>
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
                <li key={org} className="flex h-12 items-center">
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
