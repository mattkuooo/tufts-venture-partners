import type { ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

/** The one page-header treatment, shared by every route below the home page.
 *  Deep navy rather than a faint tint: at 1-2% off white the old band read as
 *  a seam instead of a header, and each page having its own hero treatment
 *  meant the nav-to-page transition never became a pattern the eye could
 *  learn. Shorter than the home hero on purpose — this is a page header, not
 *  a landing screen.
 *
 *  Jumbo blue rather than tufts-blue: the latter lightens under `.dark`,
 *  which would strand the white type on a mid-blue ground. */
export function PageHero({
  eyebrow,
  title,
  image,
  focus = "50% 30%",
  children,
}: {
  eyebrow?: string;
  title: string;
  /** Optional photo behind the wash. Omit for a flat navy header. */
  image?: string;
  /** CSS object-position for the photo. The band is roughly 4:1 while our
   *  photos are 3:2, so object-cover shows only a ~37% horizontal slice — left
   *  centred, that lands on torsos and cuts faces off above the frame. Bias it
   *  up until the subject is inside the band. */
  focus?: string;
  /** The lede. Passed as children so pages can include inline links. */
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-tufts-jumbo-blue">
      {image && (
        <>
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: focus }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-tufts-jumbo-blue/90 via-tufts-jumbo-blue/75 to-tufts-brown/75" />
        </>
      )}

      {/* Keeps a flat navy slab from reading as dead fill. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-40 size-[30rem] rounded-full bg-white/[0.07] blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20">
        {eyebrow && (
          <div className="flex items-center gap-3">
            <span className="h-px w-10 shrink-0 bg-white/50" />
            <p className="text-sm font-semibold uppercase tracking-wide text-white/80">
              {eyebrow}
            </p>
          </div>
        )}

        <h1
          className={cn(
            "font-heading text-4xl font-black tracking-tight text-white sm:text-5xl",
            eyebrow && "mt-5"
          )}
        >
          {title}
        </h1>

        {children && (
          <div className="mt-4 max-w-2xl text-lg leading-relaxed text-white/85">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
