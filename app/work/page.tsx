import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { DetailSections } from "@/components/sections/detail-sections";
import { workAreas } from "@/data/workAreas";
import { whyNotAI } from "@/data/partnership";
import { cn } from "@/lib/utils";

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
        Boston&apos;s universities are how we find founders at the
        super-early stage. Campus events at Tufts, Harvard, MIT, BC, BU, and
        Northeastern put us in the room while a team is still taking shape.
        Boston is also the hub for biotech, robotics, physical AI, and more,
        so we do more than increase deal flow for VCs: we are the bridge that
        introduces these investment opportunities to firms not based in
        Boston, and we fill the technical expertise those firms need to
        evaluate them.
      </PageHero>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading title="What We Do" />
        </div>
        <div className="mt-10">
          <DetailSections sections={workAreas} className="max-w-6xl" />
        </div>
      </section>

      <section className="border-y border-border/60 bg-surface py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading title="Why Not Just Run It Through AI" tone="brown" />
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {whyNotAI.map((item, i) => {
              const isBlue = i % 2 === 0;
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-lg border border-border/60 bg-card p-5"
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
                  <h3 className="font-heading mt-4 font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
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
