"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tag = "div" | "li" | "ol" | "dl" | "section" | "span";

/** Scroll-triggered entrance, in the spirit of Wharton PEVC's reveals but
 *  with no library: IntersectionObserver flips one class, CSS does the rest.
 *
 *  Two variants because variety is what keeps a page of reveals from reading
 *  as one repeated trick — blur-up (their classiest) as the default, plain
 *  fade-up where a blur would smear a photo or an input. Fires once; under
 *  prefers-reduced-motion the hidden state never applies (it is scoped to
 *  motion-safe), so the content is simply visible.
 *
 *  Server-safe: children render on the server, so the content is in the
 *  HTML even when the reveal never fires. */
export function Reveal({
  children,
  variant = "blur",
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  /** blur = copy and cards (text rises out of a soft blur);
   *  fade = photos, forms, and full-width blocks, where a 10px blur on an
   *  image reads as a loading artifact and on an input as a glitch. */
  variant?: "blur" | "fade";
  /** Seconds. Stagger siblings with multiples of ~0.08; keep the total
   *  under ~0.6 so a page never feels slow to scroll. */
  delay?: number;
  className?: string;
  as?: Tag;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Reduced motion needs no JS handling here: every hidden/transition
    // class below is motion-safe:-scoped, so those users see the content
    // immediately regardless of this observer.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      // Trigger slightly before the element is fully on screen so the
      // entrance is part of arriving, not a response to it.
      { rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Component = Tag as React.ElementType;

  return (
    <Component
      ref={ref}
      data-reveal={shown ? "shown" : "hidden"}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
      className={cn(
        "motion-safe:transition-[opacity,transform,filter] motion-safe:duration-700 motion-safe:ease-[cubic-bezier(0.25,0.1,0.25,1)]",
        !shown &&
          (variant === "blur"
            ? "motion-safe:translate-y-4 motion-safe:opacity-0 motion-safe:blur-[6px]"
            : "motion-safe:translate-y-4 motion-safe:opacity-0"),
        shown && "motion-safe:blur-0",
        className
      )}
    >
      {children}
    </Component>
  );
}
