import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { DetailSections } from "@/components/sections/detail-sections";
import { eventAreas } from "@/data/events";

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

    </>
  );
}
