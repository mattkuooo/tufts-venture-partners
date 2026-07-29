import { cn } from "@/lib/utils";

export function DividerQuote({
  children,
  accent = "blue",
  className,
}: {
  children: React.ReactNode;
  accent?: "blue" | "brown";
  className?: string;
}) {
  const ruleColor = accent === "blue" ? "bg-tufts-blue" : "bg-tufts-brown";

  return (
    <div className={cn("mx-auto max-w-3xl text-center", className)}>
      <div className={cn("mx-auto h-px w-full", ruleColor)} />
      <p className="px-4 py-6 text-lg font-medium text-foreground sm:text-xl">
        {children}
      </p>
      <div className={cn("mx-auto h-px w-full", ruleColor)} />
    </div>
  );
}
