import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { DetailSections } from "@/components/sections/detail-sections";
import { eventAreas } from "@/data/events";
import { site } from "@/data/site";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
        eyebrow="TVP Academy · Speaker Series · Pitch Competitions"
        title="Events"
      >
        How we train new members, who we bring to campus, and how we connect
        Tufts to the wider Boston venture capital community.
        <div className="mt-7">
          <Button
            size="lg"
            className="bg-white text-tufts-blue hover:bg-white/90"
            nativeButton={false}
            render={
              <a href={site.luma} target="_blank" rel="noopener noreferrer" />
            }
          >
            See upcoming events on Luma <ArrowRight className="size-4" />
          </Button>
        </div>
      </PageHero>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading title="What We Host" rule={false} />
        </div>
        <div className="mt-10">
          <DetailSections sections={eventAreas} rule={false} className="max-w-6xl" />
        </div>
      </section>

    </>
  );
}
