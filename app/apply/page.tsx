import type { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { faqItems } from "@/data/faq";
import { whyJoin } from "@/data/recruitment";
import { academy, fallTimeline, gim } from "@/data/schedule";
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
        Applications open right after our {gim.title}. In the meantime, follow
        us on{" "}
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

      {/* Replaces the old five-step recruitment timeline. Reads left to right
          as one run so the shape of the term is legible before any of the
          words are: a stretch of speakers, a stretch of cases, then the two
          payoffs. The tail fades because the last milestone sits beyond the
          term rather than inside it. Leads the page because the dates are the
          one thing a visitor cannot get anywhere else. */}
      <section className="border-b border-border/60 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeading title="Fall 2026 Timeline" />
          </Reveal>

          <div className="mt-10 rounded-2xl bg-tufts-blue/[0.05] px-6 py-12 sm:px-10">
            <ol className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
              {fallTimeline.map((milestone, i) => {
                const isFirst = i === 0;
                const isLast = i === fallTimeline.length - 1;
                return (
                  <Reveal
                    as="li"
                    key={milestone.title}
                    delay={i * 0.08}
                    className="flex flex-col items-center text-center"
                  >
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-tufts-blue/70">
                      {milestone.when}
                    </p>

                    {/* Half-segments rather than one line behind the row, so
                        the rule always meets the marker centre without a magic
                        offset. Overshoot into the column gap is deliberate:
                        the halves have to bridge it to read as one line. lg
                        only — stacked, a horizontal rule points into nothing. */}
                    <div className="relative mt-4 flex h-4 w-full items-center justify-center">
                      {!isFirst && (
                        <span
                          aria-hidden
                          className="absolute -left-6 right-1/2 hidden h-px bg-tufts-blue/35 lg:block"
                        />
                      )}
                      {!isLast && (
                        <span
                          aria-hidden
                          className={cn(
                            "absolute -right-6 left-1/2 hidden h-px lg:block",
                            // The leg into the post-term milestone reads as a
                            // continuation, not part of the run.
                            i === fallTimeline.length - 2
                              ? "bg-gradient-to-r from-tufts-blue/35 to-tufts-blue/5"
                              : "bg-tufts-blue/35"
                          )}
                        />
                      )}
                      <span
                        aria-hidden
                        className={cn(
                          "relative z-10 size-4 rounded-full",
                          milestone.major
                            ? "bg-tufts-blue ring-4 ring-tufts-blue/15"
                            : "border-2 border-tufts-blue bg-card"
                        )}
                      />
                    </div>

                    <h3 className="font-heading mt-4 text-base font-bold leading-snug text-tufts-blue">
                      {milestone.title}
                    </h3>
                  </Reveal>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* The Academy schedule, in place of the GIM block that used to sit
          here: the GIM has passed, so the cadence and the curriculum are what
          a visitor can still act on. Display type on the slot, because
          "Wednesdays at 7:30" is the one fact that decides whether someone
          can come at all. */}
      <section className="border-b border-border/60 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 shrink-0 bg-tufts-blue" />
              <p className="text-sm font-semibold uppercase tracking-wide text-tufts-blue">
                {academy.title}
              </p>
            </div>

            <p className="font-heading mt-6 text-4xl font-black leading-[1.05] tracking-tight text-foreground sm:text-6xl">
              {academy.slot}
            </p>
          </Reveal>

          {/* Location is omitted on purpose: it is still TBD in the data, and
              "TBD" set at 3xl reads as an unfinished page. Add it back as a
              fourth column once the room is booked. */}
          <dl className="mt-10 grid gap-x-10 gap-y-8 border-t border-border/60 pt-8 sm:grid-cols-3">
            {[
              ["Term", academy.term],
              ["Each session", academy.sessionLength],
              ["Open to", academy.openTo],
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {label}
                </dt>
                <dd className="font-heading mt-2 text-2xl font-bold leading-snug text-foreground sm:text-3xl">
                  <span className="whitespace-nowrap">{value}</span>
                </dd>
              </div>
            ))}
          </dl>

          <Reveal delay={0.1}>
            <p className="mt-10 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {academy.description}
            </p>
          </Reveal>

          {/* Week 1 is the GIM, which has already run, so the list starts at
              the first session someone arriving now can actually attend.
              Rows reveal in a single block — per-row stagger would make the
              schedule read as loading rather than arriving. */}
          <Reveal delay={0.15} as="ol" className="mt-10 divide-y divide-border border-t border-border/60">
            {academy.stages.slice(1).map((stage) => (
              <li
                key={stage.title}
                className="grid gap-1 py-5 sm:grid-cols-[150px_1fr] sm:gap-8"
              >
                <p className="text-sm font-semibold uppercase tracking-wide text-tufts-blue">
                  {stage.when}
                </p>
                <div>
                  <h3 className="font-heading text-lg font-bold leading-snug text-foreground">
                    {stage.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {stage.detail}
                  </p>
                </div>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeading title="Why Join" />
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {whyJoin.map((item, i) => (
              <Reveal
                key={item.title}
                delay={0.08 + i * 0.08}
                className="rounded-lg border border-border/60 bg-card p-5 transition-transform duration-300 hover:-translate-y-1"
              >
                <h3 className="font-heading font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="faq"
        className="border-t border-border/60 bg-surface py-20"
      >
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeading title="FAQ" tone="brown" />
          </Reveal>
          <Reveal delay={0.1}>
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
          </Reveal>
        </div>
      </section>
    </>
  );
}
