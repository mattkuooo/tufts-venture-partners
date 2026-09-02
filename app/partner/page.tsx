import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
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
        We work closely with VCs, founders, and operators — as guest speakers,
        mentors, and sources of deal flow for our diligence teams. If
        you&apos;re interested in engaging with {site.name}, we&apos;d love to
        hear from you.
      </PageHero>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
          <div>
            <SectionHeading title="Who we work with" />

            <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                <span className="font-semibold text-foreground">
                  For VCs &amp; investors —
                </span>{" "}
                share deal flow, speak at a member event, or host analysts for a
                case study.
              </p>
              <p>
                <span className="font-semibold text-foreground">
                  For founders —
                </span>{" "}
                get feedback from our diligence teams or connect with our
                investor network.
              </p>
              <p>
                <span className="font-semibold text-foreground">
                  For alumni &amp; operators —
                </span>{" "}
                mentor current members or lead a workshop.
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
    </>
  );
}
