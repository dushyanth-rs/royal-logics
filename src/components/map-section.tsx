export function MapSection() {
  return (
    <section id="location" className="bg-surface">
      <div className="mx-auto max-w-5xl px-0 py-16 sm:px-6 lg:px-8 lg:py-24">
        <h2 className="px-4 text-center text-3xl font-bold tracking-tight sm:px-0 sm:text-4xl">
          Visit Our Shop in Vijayanagar
        </h2>
        <p className="mt-4 px-4 text-center text-muted-foreground sm:px-0">
          No. 6, 1st Floor, Naresh Arcade, 60 Feet Main Road, Prashanth Nagar, Vijayanagar,
          Bengaluru, Karnataka - 560040
        </p>
        <div className="mt-10 overflow-hidden sm:rounded-xl sm:shadow-card">
          <iframe
            title="Royal Logics shop location on Google Maps"
            src="https://maps.google.com/maps?q=XGGJ%2BFW%20Bengaluru%2C%20Karnataka&t=&z=17&ie=UTF8&iwloc=&output=embed"
            className="h-[320px] w-full border-0 sm:h-[420px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
