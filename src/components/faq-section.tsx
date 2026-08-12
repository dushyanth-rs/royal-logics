import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const faqs = [
  {
    q: "Do you offer home visits or do I need to bring the TV to Vijayanagar?",
    a: "We offer both! You can drop off your TV at our Vijayanagar shop, or we can send a technician to your location in Bengaluru for on-site diagnostics.",
  },
  {
    q: "Is there an upfront diagnostic fee?",
    a: "We provide transparent, upfront quotes. If we assess your TV and you decide not to proceed with the repair, a nominal visitation/diagnostic fee may apply to cover our technician's time.",
  },
  {
    q: "How long does a typical screen or backlight replacement take?",
    a: "Most common repairs, including backlights and power issues, are completed on the same day. Screen replacements depend on panel availability but are usually resolved within 24 to 48 hours.",
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
