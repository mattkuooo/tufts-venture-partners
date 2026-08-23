import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { boardGroups, boardMembers, type BoardMember } from "@/data/team";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the board and analysts behind Tufts Venture Partners.",
};

function MemberCard({
  member,
  index,
}: {
  member: BoardMember;
  index: number;
}) {
  const card = (
    <>
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-secondary">
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="(min-width: 640px) 290px, 100vw"
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
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-center gap-4">
          <span className="h-px w-10 bg-tufts-blue" />
          <h1 className="font-heading text-4xl font-extrabold tracking-tight sm:text-5xl">
            Our Team
          </h1>
        </div>

        {boardGroups.map((group) => {
          const members = boardMembers.filter((m) => m.group === group);
          const isScroller = group === "Advisory Board";

          return (
            <div key={group} className="mt-10">
              <h3 className="font-heading text-2xl font-bold text-foreground">
                {group}
              </h3>

              {members.length === 0 ? (
                <div className="mt-6 rounded-lg border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
                  Add {group.toLowerCase()} members in data/team.ts
                </div>
              ) : isScroller ? (
                <div className="mx-auto mt-6 max-w-4xl">
                  <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4">
                    {members.map((member, i) => (
                      <div
                        key={member.name}
                        className="w-[200px] shrink-0 snap-start sm:w-[220px]"
                      >
                        <MemberCard member={member} index={i} />
                      </div>
                    ))}
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Scroll for more &rarr;
                  </p>
                </div>
              ) : (
                <div className="mx-auto mt-6 grid max-w-4xl gap-x-6 gap-y-10 sm:grid-cols-3">
                  {members.map((member, i) => (
                    <MemberCard key={member.name} member={member} index={i} />
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
            Spring 2027 Analyst Class
          </h2>
          <div className="relative mx-auto mt-8 flex aspect-video w-full max-w-3xl items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-tufts-blue via-[#2c6bb0] to-tufts-brown">
            <div className="text-center">
              <p className="font-heading text-4xl font-black tracking-tight text-white sm:text-6xl">
                Coming Soon
              </p>
              <span className="mx-auto mt-5 block h-px w-12 bg-white/50" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
