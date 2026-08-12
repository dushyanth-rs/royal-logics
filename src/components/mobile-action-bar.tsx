import { Phone } from "lucide-react";
import { toast } from "sonner";
import { PHONE_TEL, WHATSAPP_URL } from "@/lib/contact";

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[70] grid grid-cols-2 border-t border-primary-foreground/15 bg-primary md:hidden">
      <a
        href={PHONE_TEL}
        onClick={() => toast.success("Calling Royal Logics at +91 98807 87076…")}
        className="flex items-center justify-center gap-2 py-4 text-sm font-semibold text-primary-foreground"
      >
        <Phone className="size-4 text-accent" aria-hidden="true" /> Call Now
      </a>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => toast.success("Opening WhatsApp — send your message and we'll reply shortly.")}
        className="flex items-center justify-center gap-2 bg-accent py-4 text-sm font-semibold text-accent-foreground"
      >
        WhatsApp Us
      </a>
    </div>
  );
}
