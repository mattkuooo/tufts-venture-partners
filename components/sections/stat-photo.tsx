import { ImagePlaceholder } from "@/components/sections/image-placeholder";
import { stats } from "@/data/stats";

export function StatPhoto() {
  return (
    <div className="relative pl-0 sm:pl-16">
      <ImagePlaceholder
        label="Add a club/event photo at /public/images/club-photo.jpg"
        className="aspect-[16/10] w-full"
      />

      <div className="relative z-10 mt-6 -ml-0 rounded-xl border border-dashed border-border bg-card p-6 shadow-lg sm:absolute sm:bottom-8 sm:left-0 sm:mt-0 sm:w-72">
        <ul className="space-y-2">
          {stats.map((stat, i) => (
            <li key={stat.label} className="font-heading">
              <span
                className={
                  "text-3xl font-extrabold " +
                  (i % 2 === 0 ? "text-tufts-brown" : "text-tufts-blue")
                }
              >
                {stat.value}
              </span>{" "}
              <span
                className={
                  "text-xl italic " +
                  (i % 2 === 0 ? "text-tufts-brown" : "text-tufts-blue")
                }
              >
                {stat.label}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs text-muted-foreground">
          Placeholder stats — update in data/stats.ts
        </p>
      </div>
    </div>
  );
}
