import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export function PartnerForm() {
  return (
    <div className="space-y-5">
      <div className="rounded-lg border border-dashed border-border bg-secondary/40 px-4 py-3 text-sm text-muted-foreground">
        Placeholder — this form isn&apos;t wired up to send messages yet.
      </div>

      <div className="space-y-5 opacity-60">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" disabled autoComplete="name" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="organization">Organization</Label>
            <Input id="organization" name="organization" disabled autoComplete="organization" />
          </div>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" disabled autoComplete="email" />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" name="message" disabled rows={5} />
        </div>

        <Button type="button" size="lg" disabled>
          Send Message
        </Button>
      </div>
    </div>
  );
}
