"use client";

import { useState, type SubmitEvent } from "react";
import { Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Status = "idle" | "sending" | "sent" | "error";

export function PartnerForm() {
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");

    const formData = new FormData(form);
    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? ""
    );

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setStatus("sent");
      form.reset();
    } else {
      console.error("Web3Forms error:", data);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      {status === "error" && (
        <div
          className="rounded-lg border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive"
          aria-live="polite"
        >
          Something went wrong sending your message. Please try again.
        </div>
      )}

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

        {status === "sent" && (
          <p className="mt-3 text-sm text-muted-foreground" aria-live="polite">
            Thanks — we&apos;ll be in touch soon.
          </p>
        )}
      </div>
    </form>
  );
}
