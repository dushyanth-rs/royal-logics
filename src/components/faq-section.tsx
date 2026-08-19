import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const faqs = [
  {
    q: "Why does my LED TV have sound but no picture / black screen?",
    a: "A black screen with normal sound is usually caused by a failed LED backlight strip or a malfunctioning T-Con board. We perform precision LED strip replacements and board diagnostics to restore display clarity without needing a costly whole-panel replacement.",
  },
  {
    q: "Why is the standby red light blinking and the TV won't turn on?",
    a: "A blinking standby light indicates that the TV's power supply board or main processor motherboard is in protect mode due to a short circuit or voltage surge. We provide chip-level motherboard and power supply repairs.",
  },
  {
    q: "Can horizontal or vertical lines on the TV screen be repaired?",
    a: "Lines on the screen often indicate loose ribbon cables, faulty COF ICs, or panel driver issues. In many cases, these can be repaired via specialized bonding and micro-soldering techniques.",
  },
  {
    q: "How does the courier / ship-in repair service work for customers in Chennai, Hyderabad, and across Bengaluru?",
    a: "Customers across Bengaluru, Chennai, Hyderabad, and surrounding areas can safely pack and ship their TV or circuit boards to our repair center. Once received, our technicians diagnose the issue, provide a transparent estimate, complete the repair, and securely package and ship it back.",
  },
  {
    q: "Do you repair TVs at the component/chip level instead of replacing entire boards?",
    a: "Yes, we specialize in component-level and chip-level micro-soldering for motherboards, power supplies, and display drivers, saving you up to 60-70% compared to authorized center full-board replacement costs.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="bg-background">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((item, i) => (
            <AccordionItem key={item.q} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base font-semibold">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
