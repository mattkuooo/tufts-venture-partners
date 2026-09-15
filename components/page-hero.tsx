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
  image = "/images/boston-aerial.jpg",
  focus = "50% 35%",
  children,
}: {
  eyebrow?: string;
  title: string;
  /** Photo behind the wash. Defaults to the Boston aerial so every page below
   *  the home page shares one band — that repetition is the point. Pass a
   *  different path to override, or `null` for a flat navy header.
   *
   *  The default is a panorama (2400x1082, ~2.2:1) rather than a 3:2 frame:
   *  the band crops to roughly 4:1, so a standard photo loses ~60% of its
   *  height and any subject with it. Aerials also survive the 75-90% wash,
   *  which turns faces and small type to mush but leaves a skyline readable.
   *  Source: Arun Antony via Unsplash (unsplash.com/photos/t8uNfvhFUyQ). */
  image?: string | null;
  /** CSS object-position for the photo. The default keeps the skyline inside
   *  the band; bias it up or down if you override `image` with a frame whose
   *  subject sits elsewhere. */
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

      {/* Keeps a flat navy slab from reading as dead fill. Drifts on an
          alternate loop so the band is never quite frozen — slow enough to
          read as light moving rather than an element moving. */}
      <div
        aria-hidden
        className="hero-drift pointer-events-none absolute -right-24 -top-40 size-[30rem] rounded-full bg-white/[0.07] blur-3xl motion-safe:animate-[drift_18s_ease-in-out_infinite_alternate]"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20">
        {eyebrow && (
          <div className="hero-rise flex items-center gap-3 motion-safe:opacity-0 motion-safe:animate-[rise-in_0.7s_cubic-bezier(0.25,0.1,0.25,1)_0.05s_forwards]">
            <span className="h-px w-10 shrink-0 bg-white/50" />
            <p className="text-sm font-semibold uppercase tracking-wide text-white/80">
              {eyebrow}
            </p>
          </div>
        )}

        <h1
          className={cn(
            "hero-rise font-heading text-4xl font-black tracking-tight text-white sm:text-5xl",
            "motion-safe:opacity-0 motion-safe:animate-[rise-in_0.7s_cubic-bezier(0.25,0.1,0.25,1)_0.15s_forwards]",
            eyebrow && "mt-5"
          )}
        >
          {title}
        </h1>

        {children && (
          <div
            className="hero-rise mt-4 max-w-2xl text-lg leading-relaxed text-white/85 motion-safe:opacity-0 motion-safe:animate-[rise-in_0.7s_cubic-bezier(0.25,0.1,0.25,1)_0.25s_forwards]"
          >
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
