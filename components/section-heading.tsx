import { cn } from "@/lib/utils";

/** Rule-plus-title section heading, promoted out of the Work page so Events
 *  and Apply stop falling back to bare h2s. `onDark` is for headings sitting
 *  inside a navy anchor band. */
export function SectionHeading({
  title,
  tone = "blue",
  onDark = false,
  rule = true,
  className,
}: {
  title: string;
  tone?: "blue" | "brown";
  onDark?: boolean;
  rule?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      {rule && (
        <span
          className={cn(
            "h-px w-10 shrink-0",
            onDark
              ? "bg-white/50"
              : tone === "blue"
                ? "bg-tufts-blue"
                : "bg-tufts-brown"
          )}
        />
      )}
      <h2
        className={cn(
          "font-heading text-2xl font-bold sm:text-3xl",
          onDark ? "text-white" : "text-foreground"
        )}
      >
        {title}
      </h2>
    </div>
  );
}
