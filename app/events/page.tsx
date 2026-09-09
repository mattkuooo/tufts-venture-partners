import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { DetailSections } from "@/components/sections/detail-sections";
import { eventAreas } from "@/data/events";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Fireside chats, speaker series, and pitch competitions hosted by Tufts Venture Partners.",
};

export default function EventsPage() {
  return (
    <>
      {/* Campus stands in until there is a photo from an actual event worth
          leading with — swap the image here when one exists. */}
      <PageHero
        eyebrow="Academy · Speaker Series · Pitch Competitions"
        title="Events"
      >
        How we train new members, who we bring to campus, and how we connect
        Tufts to the wider Boston venture capital community.
      </PageHero>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading title="What We Host" rule={false} />
        </div>
        <div className="mt-10">
          <DetailSections sections={eventAreas} rule={false} className="max-w-6xl" />
        </div>
      </section>

      {/* The page's one full-colour block, and its closing ask. Events has no
          navy mid-page section of its own, so the CTA carries the weight. */}
      <section className="bg-gradient-to-br from-tufts-blue via-[#2c6bb0] to-tufts-brown py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-heading text-3xl font-black sm:text-4xl">
            Want to speak or co-host?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/90">
            We&apos;re always looking for investors, founders, and peer clubs to
            partner with on events.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button
              size="lg"
              className="bg-white text-tufts-blue hover:bg-white/90"
              nativeButton={false}
              render={<Link href="/partner" />}
            >
              Partner With Us <ArrowRight className="size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/40 bg-transparent text-white hover:bg-white/15 hover:text-white"
              nativeButton={false}
              render={<a href={`mailto:${site.email}`} />}
            >
              Email us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
