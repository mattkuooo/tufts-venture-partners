import type { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/data/faq";
import { recruitmentSteps, whyJoin } from "@/data/recruitment";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Apply",
  description:
    "How to join Tufts Venture Partners: recruitment timeline, why members join, and FAQ.",
};

export default function ApplyPage() {
  return (
    <>
      <section className="border-b border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h1 className="font-heading text-4xl font-extrabold tracking-tight sm:text-5xl">
            Apply
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground">
            Fall 2026 applications will open right after our General Interest
            Meeting (GIM), which will be held on{" "}
            <span className="font-semibold text-foreground">
              Wednesday, September 9th at 8:00pm
            </span>
            . In the meantime, follow us on{" "}
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-tufts-blue underline underline-offset-4 hover:text-tufts-blue/80"
            >
              Instagram
            </a>{" "}
            and{" "}
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-tufts-blue underline underline-offset-4 hover:text-tufts-blue/80"
            >
              LinkedIn
            </a>
            , or reach out with questions at{" "}
            <a
              href={`mailto:${site.email}`}
              className="font-semibold text-tufts-blue underline underline-offset-4 hover:text-tufts-blue/80"
            >
              {site.email}
            </a>
            .
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-tufts-brown">
          Why Join
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {whyJoin.map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-border/60 bg-background p-5"
            >
              <h3 className="font-heading font-bold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-tufts-blue">
            Recruitment Timeline
          </h2>
          <ol className="mt-8 space-y-8">
            {recruitmentSteps.map((step) => (
              <li key={step.step} className="flex gap-5">
                <span className="font-heading text-2xl font-extrabold text-tufts-blue/40">
                  {step.step}
                </span>
                <div>
                  <h3 className="font-heading font-bold">{step.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-tufts-blue">
          FAQ
        </h2>
        <Accordion className="mt-6">
          {faqItems.map((item, i) => (
            <AccordionItem key={item.question} value={i}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </>
  );
}
