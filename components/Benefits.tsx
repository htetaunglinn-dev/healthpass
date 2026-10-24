const benefits = [
  {
    category: 'Convenience',
    items: [
      { title: 'Save time', description: 'No researching hospitals or making endless calls.' },
      { title: 'One point of contact', description: 'One coordinator handles every request.' },
      { title: 'Faster access', description: 'Priority appointments mean less waiting.' },
      { title: 'Simplified billing', description: 'One invoice, clear pricing, payment plans.' },
    ],
  },
  {
    category: 'Trust',
    items: [
      { title: 'Vetted providers', description: 'We only recommend hospitals we have verified.' },
      { title: 'Your medical history', description: 'Kept in one secure place, shared only with consent.' },
      { title: 'An advocate', description: 'We represent your interests with hospitals and insurers.' },
      { title: 'Transparent pricing', description: 'Costs upfront, no surprise bills.' },
    ],
  },
  {
    category: 'Service',
    items: [
      { title: 'Personal care', description: 'Someone who already knows your medical journey.' },
      { title: 'Admin support', description: 'Insurance claims, reports, and follow-ups.' },
      { title: 'Prevention', description: 'Screening reminders and practical wellness guidance.' },
      { title: 'Urgent help', description: 'A 24/7 line for urgent medical questions.' },
    ],
  },
];

const services = [
  { title: 'Medical tourism', description: 'Coordination for treatment abroad', price: '$500 – 1,000' },
  { title: 'Complex case management', description: 'For serious or long-term conditions', price: '$200 – 500' },
  { title: 'Insurance navigation', description: 'Claims, pre-approvals, and appeals', price: '$100 – 200' },
  { title: 'Wellness programs', description: 'Diabetes and weight management coaching', price: '$50 – 75 / mo' },
];

export default function Benefits() {
  return (
    <section id="features" className="border-t border-line bg-surface py-20 md:py-28">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
          {/* Header */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow mb-4">Why HealthPass</p>
            <h2 className="font-display text-4xl leading-tight tracking-tight md:text-5xl">
              Value you feel, not discounts.
            </h2>
            <p className="mt-5 leading-relaxed text-ink-muted">
              We don&apos;t sell cheaper care. We make the care you already need faster to reach,
              easier to understand, and better coordinated.
            </p>
          </div>

          {/* Benefit groups */}
          <div className="divide-y divide-line border-y border-line">
            {benefits.map((group) => (
              <div key={group.category} className="grid gap-6 py-8 sm:grid-cols-[9rem_1fr]">
                <h3 className="text-sm font-medium text-accent">{group.category}</h3>
                <dl className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
                  {group.items.map((item) => (
                    <div key={item.title}>
                      <dt className="font-medium text-ink">{item.title}</dt>
                      <dd className="mt-1 text-sm leading-relaxed text-ink-muted">{item.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Services */}
        <div className="mt-24">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
            <h3 className="font-display text-3xl tracking-tight">Add-on services</h3>
            <p className="text-sm text-ink-muted">Available on any plan, priced per case.</p>
          </div>
          <ul className="mt-6 divide-y divide-line border-y border-line">
            {services.map((service) => (
              <li key={service.title} className="grid gap-1 py-5 sm:grid-cols-[1fr_1.4fr_auto] sm:items-baseline sm:gap-8">
                <span className="font-medium text-ink">{service.title}</span>
                <span className="text-sm text-ink-muted">{service.description}</span>
                <span className="text-sm tabular-nums text-ink sm:text-right">{service.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
