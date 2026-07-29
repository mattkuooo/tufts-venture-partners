import type { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { faqItems } from "@/data/faq";
import { recruitmentSteps, whyJoin } from "@/data/recruitment";

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
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            We recruit a new analyst class each semester. Here&apos;s how the
            process works and what to expect.
          </p>
          <Button
            size="lg"
            className="mt-8 bg-tufts-blue text-white hover:bg-tufts-blue/90"
            nativeButton={false}
            render={<a href="#faq" />}
          >
            Have questions? Jump to FAQ
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-tufts-blue">
          Recruitment Process
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
      </section>

      <section className="border-t border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
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
