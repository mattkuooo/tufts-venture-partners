import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

export type DetailSection = {
  title: string;
  description: string;
  image?: string;
};

/** Alternating blue/brown section list shared by the Work and
 *  Events pages. Copy sits on the left with the photo beside it on the right;
 *  sections without an image let the copy run the full width. Each section
 *  reveals as one block — staggering within it would make the copy read as
 *  loading — with photos getting a slow zoom on hover. */
export function DetailSections({
  sections,
  rule = true,
  className,
}: {
  sections: readonly DetailSection[];
  rule?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto max-w-4xl divide-y divide-border px-6",
        className
      )}
    >
      {sections.map((section, i) => {
        const isBlue = i % 2 === 0;
        return (
          <Reveal
            key={section.title}
            className={cn(
              "grid gap-8 py-14 first:pt-0 last:pb-0",
              // Two columns only when there is a photo to sit beside the copy.
              section.image &&
                "lg:grid-cols-[1fr_minmax(0,24rem)] lg:items-start lg:gap-12"
            )}
          >
            <div>
              <div className="flex items-center gap-3">
                {rule && (
                  <span
                    className={cn(
                      "h-px w-8 shrink-0 sm:w-10",
                      isBlue ? "bg-tufts-blue" : "bg-tufts-brown"
                    )}
                  />
                )}
                <h2
                  className={cn(
                    // Tracking tightens as the size goes up: the wide letter
                    // spacing that gives a small uppercase label its texture
                    // reads as gappy once the type is this big.
                    "font-heading text-lg font-bold uppercase tracking-wide sm:text-xl sm:tracking-normal",
                    isBlue ? "text-tufts-blue" : "text-tufts-brown"
                  )}
                >
                  {section.title}
                </h2>
              </div>

              <p className="mt-5 text-lg leading-relaxed text-foreground">
                {section.description}
              </p>
            </div>

            {section.image && (
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-secondary lg:aspect-[5/4]">
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  sizes="(min-width: 1024px) 24rem, 100vw"
                  className="object-cover transition-transform duration-700 ease-out hover:scale-105 motion-reduce:transform-none"
                />
              </div>
            )}
          </Reveal>
        );
      })}
    </div>
  );
}
