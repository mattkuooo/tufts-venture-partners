import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { PartnerForm } from "@/components/sections/partner-form";
import { site } from "@/data/site";
import { partnershipTerms } from "@/data/partnership";

export const metadata: Metadata = {
  title: "Partner With Us",
  description:
    "Venture firms, founders, and operators: get in touch with Tufts Venture Partners.",
};

export default function PartnerPage() {
  return (
    <>
      <PageHero eyebrow="VCs · Founders · Operators" title="Partner With Us">
        We work closely with VCs, founders, and operators as guest speakers,
        mentors, and sources of deal flow for our diligence teams. If
        you&apos;re interested in engaging with {site.name}, we&apos;d love to
        hear from you.
      </PageHero>

      {/* The case for the analysts, first. One ground for the whole page
          below the hero: sections are separated by hairline rules and
          spacing, not by colour. */}
      <section className="border-b border-border/60 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading title="Talent" rule={false} />
          <p className="mt-5 max-w-4xl text-lg leading-relaxed text-muted-foreground">
            Our board and its cohort go beyond the traditional finance
            background you would expect from a finance club. We recruit
            engineers, chemists, and even political scientists to cover
            different industries, and the liberal arts curriculum does the
            rest: students here take classes beyond their intended majors and
            build interdisciplinary skills across fields. Every analyst ends
            up with a different skill set, so each is tailored to a different
            kind of technical diligence. That breadth is one of the biggest
            advantages of working with Tufts students: our bandwidth goes above
            and beyond the typical finance-heavy talent pool.
          </p>
        </div>
      </section>

      {/* The ask, in the middle, on the lighter page ground so the form card
          still lifts off it. */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
          <div>
            <SectionHeading title="Who we work with" />

            <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                <span className="font-semibold text-foreground">
                  For VCs &amp; investors:
                </span>{" "}
                additional deal flow, technical validation, due diligence, and
                market research.
              </p>
              <p>
                <span className="font-semibold text-foreground">
                  For founders:
                </span>{" "}
                a connection to investors that opens the door for funding.
              </p>
              <p>
                <span className="font-semibold text-foreground">
                  For alumni &amp; operators:
                </span>{" "}
                mentorship, workshop speaker events, and advisory seats.
              </p>
            </div>

            <p className="mt-8 text-sm text-muted-foreground">
              Prefer email? Reach us directly at{" "}
              <a
                href={`mailto:${site.email}`}
                className="font-medium text-tufts-blue hover:underline"
              >
                {site.email}
              </a>
              .
            </p>
          </div>

          {/* White card rather than bare border, so the form reads as a panel
              lifted off the warm page ground. */}
          <div className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
            <PartnerForm />
          </div>
        </div>
      </section>

      {/* The mechanics last, for anyone who read the form and wants the terms
          before they fill it in. */}
      <section className="border-t border-border/60 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading title="How The Partnership Runs" />
          <dl className="mt-8 max-w-3xl divide-y divide-border">
            {partnershipTerms.map((term) => (
              <div
                key={term.label}
                className="grid gap-2 py-6 first:pt-0 last:pb-0 sm:grid-cols-[140px_1fr] sm:gap-10"
              >
                {/* One label colour throughout: these terms are a single set,
                    not alternating categories. */}
                <dt className="text-sm font-semibold uppercase tracking-wide text-tufts-blue">
                  {term.label}
                </dt>
                <dd className="text-base leading-relaxed text-foreground">
                  {term.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
