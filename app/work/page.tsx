import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DetailSections } from "@/components/sections/detail-sections";
import { workAreas } from "@/data/workAreas";
import { whyNotAI, partnershipTerms } from "@/data/partnership";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "How Tufts Venture Partners runs market research, deal sourcing, and technical validation for the funds we partner with.",
};

function SectionHeading({
  title,
  isBlue = true,
}: {
  title: string;
  isBlue?: boolean;
}) {
  return (
    <div className="flex items-center gap-4">
      <span
        className={cn(
          "h-px w-10 shrink-0",
          isBlue ? "bg-tufts-blue" : "bg-tufts-brown"
        )}
      />
      <h2 className="font-heading text-2xl font-bold text-foreground">
        {title}
      </h2>
    </div>
  );
}

export default function WorkPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 bg-gradient-to-br from-tufts-blue/10 via-secondary/40 to-tufts-brown/10" />
        <div className="relative mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-wide text-tufts-blue">
            Market Research · Deal Sourcing · Technical Validation
          </p>
          <h1 className="font-heading mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Our Work
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            We run sourcing, research, and diligence for the funds we partner
            with — surfacing the teams taking shape inside a Boston lab or
            classroom, months before they reach institutional investors. That
            window is where we work.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-heading text-2xl font-bold text-foreground">
            What We Deliver
          </h2>
        </div>
        <div className="mt-10">
          <DetailSections sections={workAreas} className="max-w-6xl" />
        </div>
      </section>

      <section className="border-t border-border/60 bg-secondary/40 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading title="Why Not Just Run It Through AI" isBlue={false} />
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {whyNotAI.map((item, i) => {
              const isBlue = i % 2 === 0;
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-lg border border-border/60 bg-background p-5"
                >
                  <div
                    className={cn(
                      "flex size-10 items-center justify-center rounded-full",
                      isBlue
                        ? "bg-tufts-blue/10 text-tufts-blue"
                        : "bg-tufts-brown/10 text-tufts-brown"
                    )}
                  >
                    <Icon className="size-5" />
                  </div>
                  <h3 className="font-heading mt-4 font-bold">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading title="How The Partnership Runs" isBlue />
          <dl className="mt-8 max-w-3xl divide-y divide-border">
            {partnershipTerms.map((term, i) => {
              const isBlue = i % 2 === 0;
              return (
                <div
                  key={term.label}
                  className="grid gap-2 py-6 first:pt-0 last:pb-0 sm:grid-cols-[140px_1fr] sm:gap-10"
                >
                  <dt
                    className={cn(
                      "text-sm font-semibold uppercase tracking-wide",
                      isBlue ? "text-tufts-blue" : "text-tufts-brown"
                    )}
                  >
                    {term.label}
                  </dt>
                  <dd className="text-base leading-relaxed text-foreground">
                    {term.description}
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </section>

      <section className="bg-gradient-to-br from-tufts-blue via-[#2c6bb0] to-tufts-brown py-20 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-white/60" />
            <p className="text-sm font-semibold uppercase tracking-wide text-white/80">
              Why Tufts
            </p>
          </div>
          <h2 className="font-heading mt-5 text-3xl font-black sm:text-4xl">
            Talent.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/90">
            Tufts has no business school, and that&apos;s the point. Our
            analysts come out of a liberal arts system where every student
            takes classes across the arts, sciences, math, and humanities —
            often in fields they never set out to study. That produces
            analysts who think in more than one frame: reading a technical
            founder, writing a clear argument, and questioning a market
            assumption a purely finance-trained cohort would accept.
          </p>
        </div>
      </section>

      <section className="border-t border-border/60">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
            Ready to talk?
          </h2>
          <p className="mx-auto mt-3 max-w-xl leading-relaxed text-muted-foreground">
            Tell us about your fund and the verticals you want covered —
            we&apos;ll walk you through how an engagement would run.
          </p>
          <Button
            size="lg"
            className="mt-8 bg-tufts-blue text-white hover:bg-tufts-blue/90"
            nativeButton={false}
            render={<Link href="/partner" />}
          >
            Partner with us <ArrowRight className="size-4" />
          </Button>
        </div>
      </section>
    </>
  );
}
