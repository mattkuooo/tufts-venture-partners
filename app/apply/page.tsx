import type { Metadata } from "next";
import { ArrowDown, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { faqItems } from "@/data/faq";
import { recruitmentSteps } from "@/data/recruitment";
import { academy, fallTimeline } from "@/data/schedule";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "How to join Tufts Venture Partners: the TVP Academy schedule, how to become an analyst, and FAQ.",
};

/** Links in the hero sit on navy, so the blue link colour would vanish. */
const heroLink =
  "font-medium text-white underline decoration-white/40 underline-offset-4 transition-colors hover:decoration-white";

export default function ApplyPage() {
  return (
    <>
      <PageHero eyebrow={`${academy.term} Recruitment`} title="Get Involved">
        Follow us on{" "}
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
        {/* The page is long and the steps to join sit near the bottom, so the
            header points straight at them. */}
        <div className="mt-7">
          <Button
            size="lg"
            className="bg-white text-tufts-blue hover:bg-white/90"
            nativeButton={false}
            render={<a href="#join" />}
          >
            How to join <ArrowDown className="size-4" />
          </Button>
        </div>
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
          a visitor can still act on. Same heading scale as the sections
          around it; the slot leads the facts row, because "Wednesdays at 7"
          is the one fact that decides whether someone can come at all. */}
      <section className="border-b border-border/60 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeading title={academy.title} />
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {academy.description}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-border/60 pt-6 sm:grid-cols-3 lg:grid-cols-5">
              {[
                ["When", academy.slot],
                ["Term", academy.term],
                ["Each session", academy.sessionLength],
                ["Open to", academy.openTo],
                ["Location", academy.location],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {label}
                  </dt>
                  <dd className="font-heading mt-1.5 text-lg font-bold leading-snug text-foreground">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          {/* The speaker lineup: date in the label column, topic as the
              heading, speaker underneath. */}
          <Reveal delay={0.15}>
            <div className="mt-12 flex items-center gap-3">
              <span className="h-px w-10 shrink-0 bg-tufts-blue" />
              <p className="text-sm font-semibold uppercase tracking-wide text-tufts-blue">
                Speaker series
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2} as="ol" className="mt-6 divide-y divide-border border-t border-border/60">
            {academy.speakers.map((s) => (
              <li
                key={s.date}
                className="grid gap-1 py-5 sm:grid-cols-[150px_1fr] sm:gap-8"
              >
                <p className="text-sm font-semibold uppercase tracking-wide text-tufts-blue">
                  {s.date}
                  {"day" in s && (
                    <span className="block text-xs font-medium normal-case tracking-normal text-muted-foreground">
                      {s.day}
                    </span>
                  )}
                </p>
                <div>
                  <h3 className="font-heading text-lg font-bold leading-snug text-foreground">
                    {s.topic}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {s.speaker ?? "To be announced"}
                  </p>
                </div>
              </li>
            ))}
          </Reveal>
          <Reveal delay={0.25}>
            <a
              href={site.luma}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-tufts-blue hover:underline"
            >
              RSVP for sessions on Luma <ArrowRight className="size-4" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* The page's second half: everything above is the Academy, open to
          anyone; this is the analyst track, which takes an application.
          Replaces a separate Why Join card grid — its generic points
          restated what the Academy section already shows with real dates and
          names, so the one reason specific to analysts leads here instead.
          There is no application link until spring, so the action is the
          e-list rather than a dead "Apply" button. */}
      <section id="join" className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeading title="Become an Analyst" />
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Analysts do the work behind our partnerships: live sourcing,
              diligence, and market research for the funds we work with, with
              mentorship from the board and our advisors. We recruit at the
              start of each semester, and the next cohort begins in Spring
              2027. No finance background needed.
            </p>
          </Reveal>

          <ol className="mt-10 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
            {recruitmentSteps.map((step, i) => (
              <Reveal
                as="li"
                key={step.step}
                delay={i * 0.08}
                className="border-t-2 border-tufts-blue/20 pt-5"
              >
                <p className="font-heading text-sm font-black text-tufts-blue">
                  {step.step}
                </p>
                <h3 className="font-heading mt-2 font-bold leading-snug text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </ol>

          <Reveal
            delay={0.1}
            className="mt-12 flex flex-col gap-6 rounded-2xl bg-tufts-blue/[0.05] p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between"
          >
            <div>
              <h3 className="font-heading text-xl font-bold text-foreground">
                Applications open at the start of the spring semester
              </h3>
              <p className="mt-2 max-w-xl leading-relaxed text-muted-foreground">
                Join the e-list to hear when they do, along with the date of
                the spring GIM.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <Button
                size="lg"
                className="bg-tufts-blue text-white hover:bg-tufts-blue/90"
                nativeButton={false}
                render={
                  <a href={site.elist} target="_blank" rel="noopener noreferrer" />
                }
              >
                Join the e-list <ArrowRight className="size-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                nativeButton={false}
                render={<a href={`mailto:${site.email}`} />}
              >
                Email us
              </Button>
            </div>
          </Reveal>
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
