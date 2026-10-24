'use client';

import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

const timeline = [
  {
    time: 'Mon 9:12',
    who: 'You',
    text: 'Need a cardiologist this week. Chest tightness after running.',
  },
  {
    time: 'Mon 10:05',
    who: 'Emily, your coordinator',
    text: 'Dr. Chen at Heart Care Center has Thursday 2:30. I sent over your last ECG and blood work.',
  },
  {
    time: 'Mon 10:07',
    who: 'You',
    text: 'Perfect, book it.',
  },
];

const stats = [
  { value: '< 2 days', label: 'Average wait for an appointment' },
  { value: '50+', label: 'Partner hospitals and clinics' },
  { value: '24/7', label: 'Coordinator and urgent helpline' },
];

export default function Hero() {
  const { openSignupModal } = useAuth();

  return (
    <section className="pt-16">
      <div className="container-page grid gap-14 pt-16 pb-16 md:pt-24 lg:grid-cols-[1.1fr_1fr] lg:gap-20 lg:pb-24">
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          <p className="eyebrow mb-6">Healthcare concierge</p>
          <h1 className="font-display text-5xl leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-[4.25rem]">
            One person who handles your <em className="text-accent">healthcare</em>, start to finish.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
            HealthPass gives you a dedicated coordinator who books appointments, moves your records
            between hospitals, and sorts out the insurance paperwork. You tell us what you need, we
            take it from there.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <button onClick={openSignupModal} className="btn-primary px-5 py-3 text-[0.95rem]">
              Create a free account
            </button>
            <Link href="/#how-it-works" className="btn-secondary px-5 py-3 text-[0.95rem]">
              See how it works
            </Link>
          </div>
          <p className="mt-4 text-sm text-ink-subtle">Free plan available. No card required.</p>
        </div>

        {/* Product preview: a real coordination thread rather than an illustration */}
        <div className="flex items-center">
          <div className="card w-full">
            <div className="flex items-center justify-between border-b border-line px-5 py-4">
              <div>
                <div className="text-sm font-medium text-ink">Cardiology consult</div>
                <div className="text-xs text-ink-subtle">Request #2048</div>
              </div>
              <span className="rounded-sm bg-accent-soft px-2 py-1 text-xs font-medium text-accent">Booked</span>
            </div>

            <ol className="space-y-5 px-5 py-5">
              {timeline.map((entry) => (
                <li key={entry.time} className="grid grid-cols-[4.5rem_1fr] gap-4">
                  <span className="pt-0.5 text-xs tabular-nums text-ink-subtle">{entry.time}</span>
                  <div>
                    <div className="text-xs font-medium text-ink-muted">{entry.who}</div>
                    <p className="mt-1 text-sm leading-relaxed text-ink">{entry.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="grid grid-cols-3 border-t border-line bg-paper/60 text-sm">
              <div className="px-4 py-4 sm:px-5">
                <div className="text-xs text-ink-subtle">When</div>
                <div className="mt-0.5 font-medium">Thu, 2:30 PM</div>
              </div>
              <div className="border-l border-line px-4 py-4 sm:px-5">
                <div className="text-xs text-ink-subtle">Doctor</div>
                <div className="mt-0.5 font-medium">Dr. M. Chen</div>
              </div>
              <div className="border-l border-line px-4 py-4 sm:px-5">
                <div className="text-xs text-ink-subtle">Records</div>
                <div className="mt-0.5 font-medium">Sent</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="border-y border-line bg-surface">
        <dl className="container-page grid divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((stat) => (
            <div key={stat.label} className="py-6 sm:px-8 sm:first:pl-0">
              <dt className="text-sm text-ink-muted">{stat.label}</dt>
              <dd className="mt-1 font-display text-3xl tracking-tight text-ink">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
