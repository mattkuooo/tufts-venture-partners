import type { Metadata } from "next";
import { DetailSections } from "@/components/sections/detail-sections";
import { workAreas } from "@/data/workAreas";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "How Tufts Venture Partners approaches diligence, deal sourcing, and market research.",
};

export default function WorkPage() {
  return (
    <>
      <section className="border-b border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h1 className="font-heading text-4xl font-extrabold tracking-tight sm:text-5xl">
            Our Work
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            From sourcing and evaluating companies to building our own point
            of view on emerging markets, this is what analysts actually do
            day to day.
          </p>
        </div>
      </section>

      <section className="py-20">
        <DetailSections sections={workAreas} />
      </section>
    </>
  );
}
