import Image from "next/image";
import { cn } from "@/lib/utils";

export type DetailSection = {
  title: string;
  description: string;
  points: string[];
  image?: string;
};

/** Numbered, alternating blue/brown section list shared by the Work and
 *  Events pages. Copy sits on the left with the photo beside it on the right;
 *  sections without an image let the copy run the full width. */
export function DetailSections({
  sections,
  className,
}: {
  sections: readonly DetailSection[];
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
          <div
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
                <span
                  className={cn(
                    "h-px w-8 shrink-0 sm:w-10",
                    isBlue ? "bg-tufts-blue" : "bg-tufts-brown"
                  )}
                />
                <h2
                  className={cn(
                    "text-sm font-semibold uppercase tracking-wide",
                    isBlue ? "text-tufts-blue" : "text-tufts-brown"
                  )}
                >
                  {section.title}
                </h2>
                <span className="font-heading ml-auto text-3xl font-black leading-none text-muted-foreground/20">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <p className="mt-5 text-lg leading-relaxed text-foreground">
                {section.description}
              </p>

              <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {section.points.map((point) => (
                  <li
                    key={point}
                    className={cn(
                      "flex items-center border-l-2 pl-3 text-sm leading-snug text-muted-foreground",
                      isBlue ? "border-tufts-blue/40" : "border-tufts-brown/40"
                    )}
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {section.image && (
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-secondary lg:aspect-[5/4]">
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  sizes="(min-width: 1024px) 24rem, 100vw"
                  className="object-cover"
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
