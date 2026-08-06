import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ImagePlaceholder } from "@/components/sections/image-placeholder";
import { boardGroups, boardMembers } from "@/data/team";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the board and analysts behind Tufts Venture Partners.",
};

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-center gap-4">
          <span className="h-px w-10 bg-tufts-blue" />
          <h1 className="font-heading text-4xl font-extrabold tracking-tight sm:text-5xl">
            Our Team
          </h1>
        </div>

        {boardGroups.map((group) => {
          const members = boardMembers.filter((m) => m.group === group);
          return (
            <div key={group} className="mt-10">
              <h3 className="font-heading text-2xl font-bold text-foreground">
                {group}
              </h3>
              {members.length === 0 ? (
                <div className="mt-6 rounded-lg border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
                  Add {group.toLowerCase()} members in data/team.ts
                </div>
              ) : (
                <div className="mt-6 grid gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
                  {members.map((member, i) => (
                    <Link
                      key={member.name}
                      href={member.href ?? "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="animate-in fade-in-0 slide-in-from-bottom-4 fill-mode-both block duration-700"
                      style={{ animationDelay: `${i * 90}ms` }}
                    >
                      <div className="relative aspect-[4/5] w-full overflow-hidden bg-secondary">
                        {member.image ? (
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                            className="object-cover"
                            style={{ objectPosition: member.imagePosition ?? "50% 20%" }}
                          />
                        ) : (
                          <div
                            className={
                              "flex size-full items-center justify-center text-2xl font-semibold text-white " +
                              (i % 2 === 0 ? "bg-tufts-blue" : "bg-tufts-brown")
                            }
                          >
                            {member.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                        )}
                      </div>
                      <p className="mt-3 font-heading font-bold leading-tight hover:underline">
                        {member.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {member.role}
                      </p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </section>

      <section className="border-t border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-heading text-center text-2xl font-bold text-foreground">
            Fall 2026 Analyst Class
          </h2>
          <ImagePlaceholder
            label="Add analyst class photo at /public/images/analyst-class.jpg"
            className="mt-8 aspect-video w-full"
          />
        </div>
      </section>
    </>
  );
}
