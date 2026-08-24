import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
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
      <section className="border-b border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h1 className="font-heading text-4xl font-extrabold tracking-tight sm:text-5xl">
            Events
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            How we train new members, who we bring to campus, and how we
            connect Tufts to the wider Boston venture community.
          </p>
        </div>
      </section>

      <section className="py-20">
        <DetailSections sections={eventAreas} />
      </section>

      <section className="border-t border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <h2 className="font-heading text-2xl font-bold text-foreground">
            Want to speak or co-host?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            We&apos;re always looking for investors, founders, and peer clubs to
            partner with on events.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button
              nativeButton={false}
              render={<Link href="/partner" />}
              className="bg-tufts-blue text-white hover:bg-tufts-blue/90"
            >
              Partner With Us <ArrowRight className="size-4" />
            </Button>
            <Button
              variant="outline"
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
