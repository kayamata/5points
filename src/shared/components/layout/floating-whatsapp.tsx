import { WhatsAppIcon } from "@/shared/components/ui";
import { CONTACT } from "@/utils/constants";

export function FloatingWhatsApp() {
  return (
    <a
      href={CONTACT.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with 5Points on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex size-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
