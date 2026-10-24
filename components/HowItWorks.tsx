const steps = [
  {
    title: 'Tell us what you need',
    description:
      'Message your coordinator in plain words: a symptom, a specialist, a second opinion, a claim that was rejected.',
  },
  {
    title: 'We find the right care',
    description:
      'Your coordinator checks availability across our partner hospitals, compares cost, and sends your history ahead.',
  },
  {
    title: 'You just show up',
    description:
      'Appointment confirmed, reminders set, results filed to your records, and the bill explained before you pay it.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-accent-deep py-20 text-white md:py-28">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="eyebrow mb-4 text-white/60!">How it works</p>
          <h2 className="font-display text-4xl leading-tight tracking-tight md:text-5xl">
            Less time on hold. More time getting better.
          </h2>
        </div>

        <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-12">
          {steps.map((step, idx) => (
            <li key={step.title} className="border-t border-white/30 pt-6">
              <span className="font-display text-3xl tabular-nums text-[#9cc5b6]">{String(idx + 1).padStart(2, '0')}</span>
              <h3 className="mt-3 text-lg font-medium text-white">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-white/70">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
