import type { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { faqItems } from "@/data/faq";
import { recruitmentSteps, whyJoin } from "@/data/recruitment";
import { academy, gim } from "@/data/schedule";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Apply",
  description:
    "How to join Tufts Venture Partners: recruitment timeline, why members join, and FAQ.",
};

/** Links in the hero sit on navy, so the blue link colour would vanish. */
const heroLink =
  "font-medium text-white underline decoration-white/40 underline-offset-4 transition-colors hover:decoration-white";

export default function ApplyPage() {
  return (
    <>
      <PageHero eyebrow={`${academy.term} Recruitment`} title="Apply">
        Applications open right after our {gim.title} (GIM), held {gim.date} at{" "}
        <span className="whitespace-nowrap">{gim.time}</span> — in the meantime,
        follow us on{" "}
        <a
          href={site.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className={heroLink}
        >
          Instagram
        </a>{" "}
        and{" "}
        <a
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={heroLink}
        >
          LinkedIn
        </a>
        , or reach out with questions at{" "}
        <a href={`mailto:${site.email}`} className={heroLink}>
          {site.email}
        </a>
        .
      </PageHero>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading title="Why Join" />
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {whyJoin.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-border/60 bg-card p-5"
              >
                <h3 className="font-heading font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The page's anchor block. This timeline is what people actually come to
          Apply for, and as faint blue numerals on white it was the least
          visible thing on the page — reversed out on navy it becomes the
          graphic. Jumbo blue so it survives a dark theme. */}
      <section className="relative overflow-hidden bg-tufts-jumbo-blue py-20 text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 -top-32 size-[30rem] rounded-full bg-white/[0.07] blur-3xl"
        />
        <div className="relative mx-auto max-w-6xl px-6">
          <SectionHeading title="Recruitment Timeline" onDark />

          <ol className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
            {recruitmentSteps.map((step, i) => {
              // Decisions is the payoff, so it gets the filled marker.
              const isLast = i === recruitmentSteps.length - 1;
              return (
                <li key={step.step} className="relative">
                  {/* Bridges the column gap so the five steps read as one run
                      rather than five cards. Wide screens only — stacked, the
                      line would point sideways into nothing. */}
                  {!isLast && (
                    <span
                      aria-hidden
                      className="absolute -right-6 left-9 top-4 hidden h-px bg-white/20 lg:block"
                    />
                  )}
                  <span
                    className={cn(
                      "font-heading relative flex size-8 items-center justify-center rounded-full border text-[0.7rem] font-black",
                      isLast
                        ? "border-white bg-white text-tufts-jumbo-blue"
                        : "border-white/35 bg-white/10 text-white"
                    )}
                  >
                    {step.step}
                  </span>
                  {/* Two lines reserved so the one title that wraps does not
                      drop its description below the other four. */}
                  <h3 className="font-heading mt-4 text-base font-bold leading-snug lg:min-h-11">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/70">
                    {step.description}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section
        id="faq"
        className="border-t border-border/60 bg-surface py-20"
      >
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading title="FAQ" tone="brown" />
          <Accordion className="mt-8 gap-8">
            {faqItems.map((item, i) => (
              <AccordionItem
                key={item.question}
                value={i}
                className="border-b-0"
              >
                <AccordionTrigger className="cursor-pointer py-0 text-base font-medium text-foreground hover:no-underline sm:text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pt-3 text-base leading-relaxed text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
