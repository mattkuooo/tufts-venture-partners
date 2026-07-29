import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { workAreas } from "@/data/workAreas";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "How Tufts Venture Partners approaches diligence, deal sourcing, market research, and speaker events.",
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

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          {workAreas.map((area, i) => (
            <div
              key={area.title}
              className={
                "rounded-xl border-t-4 border-border/60 bg-secondary/20 p-6 " +
                (i % 2 === 0 ? "border-t-tufts-blue" : "border-t-tufts-brown")
              }
            >
              <h2 className="font-heading text-xl font-bold">{area.title}</h2>
              <p className="mt-3 text-muted-foreground">
                {area.description}
              </p>
              <ul className="mt-5 space-y-2">
                {area.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm">
                    <CheckCircle2
                      className={
                        "mt-0.5 size-4 shrink-0 " +
                        (i % 2 === 0 ? "text-tufts-blue" : "text-tufts-brown")
                      }
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
