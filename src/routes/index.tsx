import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Check,
  Star,
  Clock,
  ShieldCheck,
  Tv,
  MapPin,
  Power,
  MonitorOff,
  ScanLine,
  RefreshCcw,
  Cable,
  Wifi,
  Phone,
  ArrowUp,
  Mail,
  Youtube,
  MapPinned,
  CalendarClock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { Skeleton } from "@/components/ui/skeleton";

const PHONE = "81239 95301";
const EMAIL = "Royallogics9269@gmail.com";
const CITY = "Bengaluru";
const BUSINESS = "Royal Logics";
const ADDRESS =
  "No. 6, 1st Floor, Naresh Arcade, 60 Feet Main Road, Prashanth Nagar, Vijayanagar, Bengaluru, Karnataka - 560040";
const YOUTUBE = "https://www.youtube.com/@RoyallogicsVijayanagar";
const WEBHOOK_URL = "https://sheetdb.io/api/v1/8pj3uiazkiso0";
const SITE_URL = "https://bright-screen-fix.lovable.app";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: BUSINESS + " | Same-Day TV Repair in " + CITY },
      {
        name: "description",
        content:
          "Expert TV repairs for all major brands. Same-day service, certified technicians and a 90-day warranty. Book your repair online today.",
      },
      { property: "og:title", content: BUSINESS + " | Fast, Reliable TV Repair" },
      {
        property: "og:description",
        content:
          "Cracked screens, no picture, power problems — we fix all TV brands across " +
          CITY +
          ". Same-day service available.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL + "/" },
      { property: "og:site_name", content: BUSINESS },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: BUSINESS + " | Fast, Reliable TV Repair" },
      {
        name: "twitter:description",
        content:
          "TV repair specialists in " +
          CITY +
          " — cracked screens, no picture, power issues. All brands, on-site service, Pan-India shipping.",
      },
      {
        name: "keywords",
        content:
          "TV repair Bengaluru, LED TV repair, LCD TV repair, smart TV repair, TV screen replacement, Royal Logics",
      },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: BUSINESS,
          description:
            "TV repair service for all brands and types — cracked screens, no-picture and power problems. On-site across Bengaluru with Pan-India shipping.",
          url: SITE_URL,
          telephone: "+91" + PHONE.replace(/\s/g, ""),
          email: EMAIL,
          image: SITE_URL + "/apple-touch-icon.png",
          address: {
            "@type": "PostalAddress",
            streetAddress:
              "No. 6, 1st Floor, Naresh Arcade, 60 Feet Main Road, Prashanth Nagar, Vijayanagar",
            addressLocality: "Bengaluru",
            addressRegion: "Karnataka",
            postalCode: "560040",
            addressCountry: "IN",
          },
          areaServed: [{ "@type": "City", name: "Bengaluru" }, { "@type": "Country", name: "India" }],
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
              opens: "10:00",
              closes: "20:00",
            },
          ],
          sameAs: ["https://www.youtube.com/@RoyallogicsVijayanagar"],
        }),
      },
    ],
  }),
  component: Index,
});

const navLinks = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Contact Us", href: "#contact" },
];

const heroBullets = [
  "Same-day service",
  "All major brands",
  "6-month warranty on parts & labour",
  "Certified technicians with 10+ years experience",
];

const trustItems = [
  { icon: Clock, label: "Same-day service" },
  { icon: ShieldCheck, label: "90-day warranty" },
  { icon: Tv, label: "All major brands" },
  { icon: MapPin, label: "On-site across Bengaluru & Pan-India shipping" },
];

const services = [
  {
    icon: Power,
    title: "TV Not Turning On",
    description:
      "Usually caused by a faulty power supply board, damaged capacitors, or surge damage.",
  },
  {
    icon: MonitorOff,
    title: "No Picture but Sound",
    description:
      "Commonly caused by backlight failure, inverter issues, or a damaged display panel.",
  },
  {
    icon: ScanLine,
    title: "Lines or Shadows on Screen",
    description:
      "Horizontal/vertical lines usually indicate a faulty T-Con board or loose cables.",
  },
  {
    icon: RefreshCcw,
    title: "Turns On and Off by Itself",
    description: "Often caused by a failing power board or software firmware glitches.",
  },
  {
    icon: Cable,
    title: "HDMI Ports Not Working",
    description: "We repair and replace damaged HDMI ports and motherboard connectors.",
  },
  {
    icon: Wifi,
    title: "Smart TV Connectivity",
    description: "Expert troubleshooting for Wi-Fi, app, or streaming connectivity issues.",
  },
];

const steps = [
  { title: "Contact Us", description: "Call or fill out our form." },
  { title: "Free Diagnosis", description: "We assess your TV fast." },
  { title: "Get a Quote", description: "Transparent pricing with no hidden costs." },
  { title: "Enjoy Your TV", description: "Most repairs are done same day." },
];

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "4.9/5", label: "Average Rating" },
  { value: "5,000+", label: "TVs Repaired" },
  { value: "90-Day", label: "Warranty" },
];

const brands = [
  "Samsung",
  "LG",
  "Sony",
  "Hisense",
  "TCL",
  "Skyworth",
  "Philips",
  "Panasonic",
];

function BookingFormSkeleton() {
  return (
    <div className="rounded-xl bg-card p-6 shadow-card sm:p-8" aria-hidden="true">
      <Skeleton className="h-8 w-56" />
      <Skeleton className="mt-3 h-4 w-72 max-w-full" />
      <div className="mt-6 space-y-4">
        <div className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[0, 1].map((i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="h-4 w-28" />
              <Skeleton className="h-10 w-full" />
            </div>
          ))}
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-40" />
          <Skeleton className="h-24 w-full" />
        </div>
        <Skeleton className="h-11 w-full" />
      </div>
    </div>
  );
}

function ServiceCardSkeleton() {
  return (
    <div className="flex flex-col rounded-xl bg-card p-6 shadow-card" aria-hidden="true">
      <Skeleton className="size-12 rounded-lg" />
      <Skeleton className="mt-5 h-5 w-40" />
      <div className="mt-4 space-y-2">
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-11/12" />
        <Skeleton className="h-3 w-2/3" />
      </div>
      <Skeleton className="mt-5 h-4 w-32" />
    </div>
  );
}

function Index() {
  const [problem, setProblem] = useState("");
  const [sending, setSending] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(t);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setSending(true);
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: {
            Name: String(fd.get("name") ?? ""),
            Phone: String(fd.get("phone") ?? ""),
            Email: String(fd.get("email") ?? ""),
            Issue: problem,
            Message: String(fd.get("details") ?? ""),
            Date: new Date().toLocaleString(),
          },
        }),
      });
      if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
      toast.success("Request Received! Royal Logics will contact you shortly");
      form.reset();
      setProblem("");
    } catch {
      toast.error("Something went wrong. Please call us at " + PHONE + ".");
    } finally {
      setSending(false);
    }
  };

  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Toaster />

      <a
        href="#main-content"
        className="sr-only rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100]"
      >
        Skip to main content
      </a>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <a
            href="#top"
            aria-label={BUSINESS + " home"}
            className="min-w-0 truncate rounded-md text-lg font-bold tracking-tight sm:text-xl"
          >
            {BUSINESS}
          </a>
          <div className="flex shrink-0 items-center gap-8">
            <nav aria-label="Main navigation" className="hidden items-center gap-8 lg:flex">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-md text-sm font-medium text-muted-foreground transition-colors hover:text-accent focus-visible:text-accent"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <Button variant="cta" size="lg" className="shrink-0" asChild>
              <a href={`tel:${PHONE.replace(/[^0-9+]/g, "")}`}>
                <Phone aria-hidden="true" />
                <span className="hidden sm:inline">Call Now: {PHONE}</span>
                <span className="sm:hidden">Call Now</span>
                <span className="sr-only">{PHONE}</span>
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main id="main-content">
      {/* Hero */}
      <section id="contact" className="bg-surface">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-start lg:gap-16 lg:px-8 lg:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-background px-4 py-2 text-sm font-medium shadow-card">
              <span className="flex items-center gap-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" aria-hidden="true" />
                ))}
              </span>
              <span className="text-muted-foreground">4.9/5 from 200+ happy customers</span>
            </div>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Expert TV Repairs — Fast, Reliable &amp; Affordable
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              From cracked screens to no-picture problems, we fix all TV brands and types. Centrally
              located in Bengaluru, providing services throughout India.
            </p>
            <ul className="mt-8 space-y-4">
              {heroBullets.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground">
                    <Check className="size-4" aria-hidden="true" />
                  </span>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {loading ? (
            <BookingFormSkeleton />
          ) : (
          <div className="rounded-xl bg-card p-6 shadow-card animate-fade-in sm:p-8">
            <h2 className="text-2xl font-bold">Book Your TV Repair</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Tell us what's wrong and we'll call you back within the hour.
            </p>
            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" name="name" placeholder="Jane Doe" required />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="81239 95301" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="jane@email.com"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="problem">TV Type / Problem</Label>
                <Select value={problem} onValueChange={setProblem}>
                  <SelectTrigger id="problem" className="w-full">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="smart-tv-no-internet">Smart TV - No Internet</SelectItem>
                    <SelectItem value="backlight">LED/LCD - Backlight issue</SelectItem>
                    <SelectItem value="power">Power - Won't turn on</SelectItem>
                    <SelectItem value="sound">Sound issues</SelectItem>
                    <SelectItem value="screen">Screen replacement</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="details">Describe the Problem</Label>
                <Textarea
                  id="details"
                  name="details"
                  rows={4}
                  placeholder="My 55&quot; TV has sound but no picture..."
                />
              </div>
              <Button type="submit" variant="cta" size="lg" className="w-full" disabled={sending}>
                {sending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
          )}
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <item.icon className="size-6 shrink-0 text-accent" aria-hidden="true" />
              <span className="min-w-0 font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Common TV Problems We Fix
            </h2>
            <p className="mt-4 text-muted-foreground">
              No guesswork — our technicians diagnose the real cause before quoting.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {loading
              ? Array.from({ length: 6 }).map((_, i) => <ServiceCardSkeleton key={i} />)
              : services.map((service) => (
              <div
                key={service.title}
                className="group flex flex-col rounded-xl bg-card p-6 shadow-card animate-fade-in transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="grid size-12 place-items-center rounded-lg bg-accent/10 text-accent">
                  <service.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{service.description}</p>
                <a
                  href="#contact"
                  className="mt-5 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
                >
                  Book a Technician →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Get Your TV Fixed in 4 Easy Steps
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div key={step.title} className="rounded-xl bg-card p-6 shadow-card">
                <span className="block text-5xl font-bold leading-none text-accent">{i + 1}</span>
                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 text-center sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl font-bold text-accent sm:text-5xl">{stat.value}</div>
              <div className="mt-2 text-sm font-medium uppercase tracking-wide opacity-80">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Brands */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight">Brands We Repair</h2>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {brands.map((brand) => (
              <div
                key={brand}
                className="rounded-lg bg-card px-4 py-6 text-center text-lg font-semibold shadow-card transition-colors hover:text-accent"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      </main>

      <footer className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="max-w-sm">
              <div className="text-lg font-bold">{BUSINESS}</div>
              <p className="mt-2 text-sm opacity-80">
                Certified TV repair technicians serving {CITY} and surrounding areas.
              </p>
              <p className="mt-4 flex items-start gap-2 text-sm opacity-80">
                <MapPinned className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                {ADDRESS}
              </p>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2 opacity-80">
                <CalendarClock className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                <span>
                  Monday to Saturday (10:00 AM – 8:00 PM)
                  <br />
                  Sunday (Closed)
                </span>
              </div>
              <a
                href={`tel:${PHONE.replace(/[^0-9+]/g, "")}`}
                className="flex items-center gap-2 transition-colors hover:text-accent"
              >
                <Phone className="size-4 text-accent" aria-hidden="true" /> {PHONE}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 transition-colors hover:text-accent"
              >
                <Mail className="size-4 text-accent" aria-hidden="true" /> {EMAIL}
              </a>
              <a
                href={YOUTUBE}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-accent"
              >
                <Youtube className="size-4 text-accent" aria-hidden="true" /> YouTube
              </a>
              <a href="#top" className="flex items-center gap-2 transition-colors hover:text-accent">
                <ArrowUp className="size-4 text-accent" aria-hidden="true" /> Back to top
              </a>
            </div>
          </div>
          <div className="mt-10 border-t border-primary-foreground/15 pt-6 text-sm opacity-70">
            © {new Date().getFullYear()} {BUSINESS}. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}