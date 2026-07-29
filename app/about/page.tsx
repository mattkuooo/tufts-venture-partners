import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { ImagePlaceholder } from "@/components/sections/image-placeholder";
import { boardGroups, boardMembers } from "@/data/team";

export const metadata: Metadata = {
  title: "About & Team",
  description:
    "Meet the board and analysts behind Tufts Venture Partners.",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h1 className="font-heading text-4xl font-extrabold tracking-tight sm:text-5xl">
            About & Team
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            The students behind Tufts Venture Partners — and the analyst
            class that keeps our deal work running.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-tufts-blue">
          Board Structure
        </h2>

        {boardGroups.map((group, groupIndex) => (
          <div key={group} className="mt-10 first:mt-6">
            <h3 className="font-heading text-xl font-bold">{group}</h3>
            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {boardMembers
                .filter((m) => m.group === group)
                .map((member) => (
                  <Card key={member.name}>
                    <CardContent className="flex items-start gap-4">
                      <div
                        className={
                          "flex size-12 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white " +
                          (groupIndex % 2 === 0 ? "bg-tufts-blue" : "bg-tufts-brown")
                        }
                      >
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <p className="font-heading font-semibold leading-tight">
                          {member.name}
                        </p>
                        <p
                          className={
                            "text-sm " +
                            (groupIndex % 2 === 0 ? "text-tufts-blue" : "text-tufts-brown")
                          }
                        >
                          {member.role}
                        </p>
                        {member.bio && (
                          <p className="mt-2 text-sm text-muted-foreground">
                            {member.bio}
                          </p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        ))}
      </section>

      <section className="border-t border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-tufts-brown">
            Analyst Class
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Every semester&apos;s incoming analyst class trains together in
            diligence, sourcing, and market research.
          </p>
          <ImagePlaceholder
            label="Add analyst class photo at /public/images/analyst-class.jpg"
            className="mt-8 aspect-video w-full"
          />
        </div>
      </section>
    </>
  );
}
