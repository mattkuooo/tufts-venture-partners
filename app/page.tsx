import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";
import { workAreas } from "@/data/workAreas";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-tufts-blue">
        <Image
          src="/images/jumbo_banner.jpg"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-tufts-blue/85 via-[#2c6bb0]/75 to-tufts-brown/85" />
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-28 text-center sm:py-36">
          <h1
            className="mx-auto mt-3 max-w-3xl text-4xl font-black text-white sm:text-6xl"
            style={{ fontFamily: "var(--font-archivo)" }}
          >
            Tufts Venture Partners
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/90">
            Tufts Venture Partners (TVP) is the first and only student-run organization that offers venture capital firms deal sourcing, diligence, and market research from student analysts.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button
              size="lg"
              className="bg-white text-tufts-blue hover:bg-white/90"
              nativeButton={false}
              render={<Link href="/partner" />}
            >
              Work With Us <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl divide-y divide-border px-6">
          <div className="grid gap-4 py-10 first:pt-0 last:pb-0 sm:grid-cols-[160px_1fr] sm:gap-10">
            <div className="flex items-center gap-3 sm:block">
              <span className="h-px w-8 shrink-0 bg-tufts-blue sm:mb-3 sm:block sm:w-10" />
              <h2 className="text-sm font-semibold uppercase tracking-wide text-tufts-blue">
                Who We Are
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-foreground">
              {site.whoWeAre}
            </p>
          </div>
          <div className="grid gap-4 py-10 first:pt-0 last:pb-0 sm:grid-cols-[160px_1fr] sm:gap-10">
            <div className="flex items-center gap-3 sm:block">
              <span className="h-px w-8 shrink-0 bg-tufts-brown sm:mb-3 sm:block sm:w-10" />
              <h2 className="text-sm font-semibold uppercase tracking-wide text-tufts-brown">
                Mission
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-foreground">
              {site.mission}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-heading text-2xl font-bold tracking-tight">
              What We Do
            </h2>
            <Link
              href="/work"
              className="hidden text-sm font-medium text-tufts-blue hover:underline sm:inline-flex sm:items-center sm:gap-1"
            >
              See our work <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {workAreas.map((area) => (
              <div
                key={area.title}
                className="rounded-lg border border-border/60 bg-background p-5"
              >
                <h3 className="font-heading font-bold">{area.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
          <Link
            href="/work"
            className="mt-8 inline-flex items-center gap-1 text-sm font-medium text-tufts-blue hover:underline sm:hidden"
          >
            See our work <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
