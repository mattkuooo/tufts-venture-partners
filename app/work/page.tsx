import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { DetailSections } from "@/components/sections/detail-sections";
import { workAreas } from "@/data/workAreas";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Tufts Venture Partners covers the Boston startup ecosystem for the funds we partner with, running sourcing, technical diligence, and market research on the ground.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Boston Coverage · Technical Diligence · Market Research"
        title="Our Work"
      >
        We find founders at the earliest stage through Boston&apos;s
        universities. Campus events at Tufts, Harvard, MIT, BC, BU, and
        Northeastern put us in the room while a team is still forming. Boston
        is also a hub for biotech, robotics, and physical AI, so besides
        sending deal flow, we introduce these companies to firms based outside
        Boston and supply the technical expertise those firms need to evaluate
        them.
      </PageHero>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading title="What We Do" rule={false} />
        </div>
        <div className="mt-10">
          <DetailSections sections={workAreas} className="max-w-6xl" />
        </div>
      </section>

      <section className="border-t border-border/60">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
            Ready to talk?
          </h2>
          <p className="mx-auto mt-3 max-w-xl leading-relaxed text-muted-foreground">
            Tell us about your fund and the verticals you want covered, and
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
