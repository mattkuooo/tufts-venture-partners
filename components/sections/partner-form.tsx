"use client";

import { useState, type SubmitEvent } from "react";
import { Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Status = "idle" | "sending" | "sent" | "error";

const ERROR_MESSAGE =
  "Something went wrong sending your message. Please try again.";

// Access key for the "Partnership Form" on Web3Forms. Public by design — it
// ships in the client bundle either way, and Web3Forms documents it as safe in
// client-side code. Hardcoded so the form cannot break on a deploy that forgot
// the env var; set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to point at a different
// form. `||`, not `??`, so an env var present-but-empty still falls back.
const ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
  "8a944d54-ef81-4f46-9fb1-581c0df91461";

const LIVE_MESSAGE: Record<Status, string> = {
  idle: "",
  sending: "Sending your message.",
  sent: "Message sent. We'll be in touch soon.",
  error: ERROR_MESSAGE,
};

export function PartnerForm() {
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");

    const formData = new FormData(form);
    formData.append("access_key", ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      // A non-JSON body (a 5xx HTML error page) throws here, which is why the
      // whole exchange is wrapped — otherwise the button sticks on "Sending...".
      const data = await response.json();
      if (!data.success) {
        throw new Error(data.message ?? "Web3Forms rejected the submission");
      }

      setStatus("sent");
      form.reset();
    } catch (error) {
      console.error("Web3Forms submit failed:", error);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      {status === "error" && (
        <div className="rounded-lg border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {ERROR_MESSAGE}
        </div>
      )}

      <input type="hidden" name="subject" value="New Partner With Us enquiry" />
      <input type="hidden" name="from_name" value="tuftsventurepartners.org" />
      {/* Web3Forms honeypot — bots fill it in, humans never see it. */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        aria-hidden="true"
        className="hidden"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" required autoComplete="name" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="organization">Organization</Label>
          <Input id="organization" name="organization" autoComplete="organization" />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required autoComplete="email" />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" required rows={5} />
      </div>

      <div>
        <Button
          type="submit"
          size="lg"
          disabled={status === "sending" || status === "sent"}
          className={cn(
            status === "sent" &&
              "bg-green-600 text-white hover:bg-green-600 disabled:opacity-100"
          )}
        >
          {status === "sending" ? (
            "Sending..."
          ) : status === "sent" ? (
            <>
              <Check /> Sent
            </>
          ) : (
            "Send Message"
          )}
        </Button>

        {/* Always mounted so screen readers announce the status change. */}
        <p role="status" aria-live="polite" className="sr-only">
          {LIVE_MESSAGE[status]}
        </p>

        {status === "sent" && (
          <p className="mt-3 text-sm text-muted-foreground">
            Thanks — we&apos;ll be in touch soon.
          </p>
        )}
      </div>
    </form>
  );
}
