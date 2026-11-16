import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { PartnerForm } from "@/components/sections/partner-form";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Partner With Us",
  description:
    "Venture firms, founders, and operators: get in touch with Tufts Venture Partners.",
};

export default function PartnerPage() {
  return (
    <>
      <PageHero eyebrow="VCs · Founders · Operators" title="Partner With Us">
        VCs, founders, and operators work with us as guest speakers, mentors,
        and sources of deal flow for our diligence teams. If you&apos;d like
        to work with {site.name}, get in touch below.
      </PageHero>

      {/* The case for the analysts, first. One ground for the whole page
          below the hero: sections are separated by hairline rules and
          spacing, not by colour. */}
      <section className="border-b border-border/60 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeading title="Talent" rule={false} />
          </Reveal>
          <Reveal delay={0.1}>
          <p className="mt-5 max-w-4xl text-lg leading-relaxed text-muted-foreground">
            Our board and analysts aren&apos;t only finance students. We
            recruit engineers, chemists, and political scientists to cover
            different industries, and Tufts&apos; liberal arts curriculum means
            most of them have taken classes well outside their majors. Each
            analyst brings a different mix of skills, so we can match analysts
            to the technical diligence a deal needs.
          </p>
          </Reveal>
        </div>
      </section>

      {/* The ask, in the middle, on the lighter page ground so the form card
          still lifts off it. */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
          <Reveal as="div">
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
          </Reveal>

          {/* White card rather than bare border, so the form reads as a panel
              lifted off the warm page ground. Fade rather than blur: inputs
              are interactive and a blur mid-focus would read as a glitch. */}
          <Reveal
            delay={0.15}
            variant="fade"
            className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8"
          >
            <PartnerForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
