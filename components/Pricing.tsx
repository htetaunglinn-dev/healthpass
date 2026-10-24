'use client';

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';

const tiers = [
  {
    name: 'Free',
    price: 0,
    period: 'forever',
    description: 'Essential healthcare management for everyone.',
    features: [
      'Digital health records storage',
      'Self-service appointment booking',
      'Email appointment reminders',
      'Health tips newsletter',
      'Medical history access',
    ],
    notIncluded: [
      'Priority scheduling',
      'Dedicated coordinator',
      'Teleconsultations',
      'Health screening',
    ],
    cta: 'Start free',
    popular: false,
  },
  {
    name: 'Premium',
    price: 40,
    period: 'month',
    description: 'For individuals and families who want a coordinator.',
    features: [
      'Everything in Free, plus:',
      'Priority appointment scheduling',
      'Dedicated coordinator (shared)',
      '2 teleconsultations a month',
      'Annual basic health screening',
      'Prescription and report delivery',
      'Insurance claim assistance',
      'Package pricing on bundled services',
      '24/7 email support',
    ],
    notIncluded: [],
    cta: 'Choose Premium',
    popular: true,
    savings: 'Save $96 a year with annual billing',
  },
  {
    name: 'VIP',
    price: 150,
    period: 'month',
    description: 'Comprehensive care for you and your family.',
    features: [
      'Everything in Premium, plus:',
      'Personal coordinator (1 to 20 members)',
      'Unlimited teleconsultations',
      'Comprehensive annual health check',
      'Family coverage (spouse and 2 children)',
      'Home visit coordination',
      '24/7 emergency hotline',
      'Medical tourism assistance',
      'Second opinion coordination',
      'Concierge: prescriptions, reports, transport',
    ],
    notIncluded: [],
    cta: 'Choose VIP',
    popular: false,
    savings: 'Save $360 a year with annual billing',
  },
];

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');
  const { openSignupModal } = useAuth();

  const getPrice = (basePrice: number) => {
    if (basePrice === 0) return 0;
    return billingPeriod === 'annual' ? Math.round(basePrice * 12 * 0.8) : basePrice;
  };

  return (
    <section id="pricing" className="border-t border-line py-20 md:py-28">
      <div className="container-page">
        {/* Header */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="eyebrow mb-4">Pricing</p>
            <h2 className="font-display text-4xl leading-tight tracking-tight md:text-5xl">
              Simple plans. Cancel any time.
            </h2>
          </div>

          {/* Billing Toggle */}
          <div className="inline-flex self-start rounded-md border border-line-strong bg-surface p-1 md:self-auto" role="group" aria-label="Billing period">
            {(['monthly', 'annual'] as const).map((period) => (
              <button
                key={period}
                onClick={() => setBillingPeriod(period)}
                aria-pressed={billingPeriod === period}
                className={`cursor-pointer rounded-sm px-4 py-1.5 text-sm transition-colors ${
                  billingPeriod === period ? 'bg-ink text-white' : 'text-ink-muted hover:text-ink'
                }`}
              >
                {period === 'monthly' ? 'Monthly' : 'Annual, save 20%'}
              </button>
            ))}
          </div>
        </div>

        {/* Plans */}
        <div className="mt-12 grid overflow-hidden rounded-lg border border-line bg-surface md:grid-cols-3">
          {tiers.map((tier, idx) => (
            <div
              key={tier.name}
              className={`relative flex flex-col p-7 lg:p-8 ${idx > 0 ? 'border-t border-line md:border-t-0 md:border-l' : ''} ${
                tier.popular ? 'bg-accent-soft/40' : ''
              }`}
            >
              {tier.popular && <div className="absolute inset-x-0 top-0 h-0.5 bg-accent" aria-hidden="true" />}

              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-ink">{tier.name}</h3>
                {tier.popular && <span className="text-xs font-medium text-accent">Most chosen</span>}
              </div>
              <p className="mt-1 min-h-10 text-sm text-ink-muted">{tier.description}</p>

              {/* Price */}
              <div className="mt-6 flex items-baseline gap-1.5">
                <span className="font-display text-5xl tracking-tight text-ink">${getPrice(tier.price)}</span>
                <span className="text-sm text-ink-muted">
                  {tier.price === 0 ? 'forever' : `/ ${billingPeriod === 'annual' ? 'year' : tier.period}`}
                </span>
              </div>
              <p className="mt-1 h-5 text-xs text-accent">
                {billingPeriod === 'annual' && tier.savings ? tier.savings : ''}
              </p>

              <button
                onClick={openSignupModal}
                className={`mt-6 w-full ${tier.popular ? 'btn-primary' : 'btn-secondary'}`}
              >
                {tier.cta}
              </button>

              {/* Features */}
              <ul className="mt-8 space-y-3 border-t border-line pt-6 text-sm">
                {tier.features.map((feature) =>
                  feature.startsWith('Everything') ? (
                    <li key={feature} className="font-medium text-ink">
                      {feature}
                    </li>
                  ) : (
                    <li key={feature} className="flex gap-3 text-ink-muted">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-accent" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 16 16" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.5l3 3 7-7" />
                      </svg>
                      {feature}
                    </li>
                  )
                )}
                {tier.notIncluded.map((feature) => (
                  <li key={feature} className="flex gap-3 text-ink-subtle line-through decoration-line-strong">
                    <span className="w-4 shrink-0 text-center no-underline" aria-hidden="true">–</span>
                    <span>
                      <span className="sr-only">Not included: </span>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-ink-muted">
          All plans include encrypted record storage and HIPAA-compliant handling of your data.
        </p>
      </div>
    </section>
  );
}
