import Image from "next/image";
import { cn } from "@/lib/utils";

export type DetailSection = {
  title: string;
  description: string;
  points: string[];
  image?: string;
};

/** Numbered, alternating blue/brown section list shared by the Work and
 *  Events pages. Sections without an image simply omit the photo. */
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
                  {section.title}
                </h2>
              </div>
              <p className="mt-4 hidden font-heading text-5xl font-black leading-none text-muted-foreground/20 sm:block">
                {String(i + 1).padStart(2, "0")}
              </p>
            </div>

            <div>
              <p className="text-lg leading-relaxed text-foreground">
                {section.description}
              </p>

              <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {section.points.map((point) => (
                  <li
                    key={point}
                    className={cn(
                      "border-l-2 pl-3 text-sm leading-snug text-muted-foreground",
                      isBlue ? "border-tufts-blue/40" : "border-tufts-brown/40"
                    )}
                  >
                    {point}
                  </li>
                ))}
              </ul>

              {section.image && (
                <div className="relative mt-8 aspect-[16/9] w-full max-w-xl overflow-hidden bg-secondary">
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    sizes="(min-width: 640px) 640px, 100vw"
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
