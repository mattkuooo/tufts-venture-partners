import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/data/site";
import { boardGroups, boardMembers, type BoardMember } from "@/data/team";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the executive and advisory boards behind Tufts Venture Partners.",
};

function MemberCard({
  member,
  index,
  sizes,
}: {
  member: BoardMember;
  index: number;
  sizes: string;
}) {
  const card = (
    <>
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-secondary">
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes={sizes}
            className="object-cover"
            style={{ objectPosition: member.imagePosition ?? "50% 20%" }}
          />
        ) : (
          <div
            className={cn(
              "flex size-full items-center justify-center text-2xl font-semibold text-white",
              index % 2 === 0 ? "bg-tufts-blue" : "bg-tufts-brown"
            )}
          >
            {member.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
        )}
      </div>
      <p
        className={cn(
          "mt-3 font-heading font-bold leading-tight",
          member.href && "hover:underline"
        )}
      >
        {member.name}
      </p>
      <p className="text-sm leading-snug text-muted-foreground">
        {member.role}
      </p>
    </>
  );

  const shared = {
    className:
      "animate-in fade-in-0 slide-in-from-bottom-4 fill-mode-both block duration-700",
    style: { animationDelay: `${index * 90}ms` },
  };

  return member.href ? (
    <Link
      href={member.href}
      target="_blank"
      rel="noopener noreferrer"
      {...shared}
    >
      {card}
    </Link>
  ) : (
    <div {...shared}>{card}</div>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="Executive & Advisory Boards" title="Our Team">
        {site.whoWeAre}
      </PageHero>

      <section className="mx-auto max-w-6xl px-6 py-20">
        {boardGroups.map((group, groupIndex) => {
          const members = boardMembers.filter((m) => m.group === group);
          if (members.length === 0) return null;
          const isScroller = group === "Advisory Board";

          return (
            <div key={group} className="mt-14 first:mt-0">
              <SectionHeading
                title={group}
                tone={groupIndex % 2 === 0 ? "blue" : "brown"}
              />

              {isScroller ? (
                <div className="mt-6">
                  <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4">
                    {members.map((member, i) => (
                      <div
                        key={member.name}
                        className="w-[200px] shrink-0 snap-start sm:w-[220px]"
                      >
                        <MemberCard
                          member={member}
                          index={i}
                          sizes="(min-width: 640px) 220px, 200px"
                        />
                      </div>
                    ))}
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Scroll for more &rarr;
                  </p>
                </div>
              ) : (
                /* Leadership row of four, then everyone else five across.
                   Every card spans the same 4 of 20 columns so the rows
                   match in size; the first row starts at column 3 to sit
                   centered over the five below. */
                <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-20">
                  {members.map((member, i) => (
                    <div
                      key={member.name}
                      className={cn("lg:col-span-4", i === 0 && "lg:col-start-3")}
                    >
                      <MemberCard
                        member={member}
                        index={i}
                        sizes="(min-width: 1024px) 210px, 50vw"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </section>
    </>
  );
}
