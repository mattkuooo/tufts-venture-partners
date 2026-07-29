import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function ImagePlaceholder({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-border bg-secondary/40 text-center text-sm text-muted-foreground",
        className
      )}
    >
      <ImageIcon className="size-6" />
      <span>{label}</span>
    </div>
  );
}
