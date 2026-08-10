import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/sections/image-placeholder";
import { eventAreas } from "@/data/events";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Fireside chats, speaker series, and pitch competitions hosted by Tufts Venture Partners.",
};

const slug = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

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
        <div className="mx-auto max-w-4xl divide-y divide-border px-6">
          {eventAreas.map((area, i) => {
            const isBlue = i % 2 === 0;
            return (
              <div
                key={area.title}
                className="grid gap-6 py-14 first:pt-0 last:pb-0 sm:grid-cols-[180px_1fr] sm:gap-12"
              >
                <div>
                  <div className="flex items-center gap-3 sm:block">
                    <span
                      className={cn(
                        "h-px w-8 shrink-0 sm:mb-3 sm:block sm:w-10",
                        isBlue ? "bg-tufts-blue" : "bg-tufts-brown"
                      )}
                    />
                    <h2
                      className={cn(
                        "text-sm font-semibold uppercase tracking-wide",
                        isBlue ? "text-tufts-blue" : "text-tufts-brown"
                      )}
                    >
                      {area.title}
                    </h2>
                  </div>
                  <p className="mt-4 hidden font-heading text-5xl font-black leading-none text-muted-foreground/20 sm:block">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                </div>

                <div>
                  <p className="text-lg leading-relaxed text-foreground">
                    {area.description}
                  </p>

                  <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                    {area.points.map((point) => (
                      <li
                        key={point}
                        className={cn(
                          "border-l-2 pl-3 text-sm leading-snug text-muted-foreground",
                          isBlue
                            ? "border-tufts-blue/40"
                            : "border-tufts-brown/40"
                        )}
                      >
                        {point}
                      </li>
                    ))}
                  </ul>

                  {area.image ? (
                    <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-lg bg-secondary">
                      <Image
                        src={area.image}
                        alt={area.title}
                        fill
                        sizes="(min-width: 640px) 640px, 100vw"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <ImagePlaceholder
                      label={`Add an event photo at /public/images/event-${slug(
                        area.title
                      )}.jpg`}
                      className="mt-8 aspect-[16/9] w-full"
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
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
