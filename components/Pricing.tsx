'use client';

import { useState } from 'react';

const tiers = [
  {
    name: 'Free',
    price: 0,
    period: 'forever',
    description: 'Essential healthcare management for everyone',
    features: [
      'Digital health records storage',
      'Self-service appointment booking',
      'Email appointment reminders',
      'Basic health tips newsletter',
      'Medical history access',
    ],
    notIncluded: [
      'Priority scheduling',
      'Dedicated coordinator',
      'Teleconsultations',
      'Health screening',
    ],
    cta: 'Start Free',
    popular: false,
  },
  {
    name: 'Premium',
    price: 40,
    period: 'month',
    description: 'Perfect for individuals and families',
    features: [
      'Everything in Free, plus:',
      'Priority appointment scheduling',
      'Dedicated coordinator (shared)',
      '2 free teleconsultations/month',
      'Annual basic health screening',
      'Prescription & report delivery',
      'Insurance claim assistance',
      'Package deals on bundled services',
      '24/7 email support',
    ],
    notIncluded: [],
    cta: 'Start Premium',
    popular: true,
    savings: 'Save $96/year with annual billing',
  },
  {
    name: 'VIP',
    price: 150,
    period: 'month',
    description: 'Comprehensive care for you and your family',
    features: [
      'Everything in Premium, plus:',
      'Personal health coordinator (1:20)',
      'Unlimited teleconsultations',
      'Comprehensive annual health check',
      'Family coverage (spouse + 2 children)',
      'Home visit coordination',
      '24/7 emergency hotline',
      'Medical tourism assistance',
      'Second opinion coordination',
      'Concierge services (prescription, reports, transport)',
    ],
    notIncluded: [],
    cta: 'Start VIP',
    popular: false,
    savings: 'Save $360/year with annual billing',
  },
];

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');

  const getPrice = (basePrice: number) => {
    if (basePrice === 0) return 0;
    return billingPeriod === 'annual' ? Math.round(basePrice * 12 * 0.8) : basePrice;
  };

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Choose Your <span className="text-[#0066cc]">Healthcare Plan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            No discounts, just pure value. Get convenience, trust, and personalized care
            that saves you time and gives you peace of mind.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center space-x-3 bg-white p-2 rounded-lg shadow-sm">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-2 rounded-md font-medium transition ${
                billingPeriod === 'monthly'
                  ? 'bg-[#0066cc] text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('annual')}
              className={`px-6 py-2 rounded-md font-medium transition ${
                billingPeriod === 'annual'
                  ? 'bg-[#0066cc] text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Annual
              <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition ${
                tier.popular ? 'ring-2 ring-[#0066cc] scale-105' : ''
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="bg-gradient-to-r from-[#0066cc] to-[#0052a3] text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Tier Name */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                <p className="text-gray-600 text-sm mb-6">{tier.description}</p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold text-gray-900">
                      ${getPrice(tier.price)}
                    </span>
                    {tier.price > 0 && (
                      <span className="ml-2 text-gray-600">
                        /{billingPeriod === 'annual' ? 'year' : tier.period}
                      </span>
                    )}
                  </div>
                  {billingPeriod === 'annual' && tier.savings && (
                    <p className="text-sm text-green-600 mt-1">{tier.savings}</p>
                  )}
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition ${
                    tier.popular
                      ? 'bg-[#0066cc] hover:bg-[#0052a3] text-white shadow-md'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  {tier.cta}
                </button>

                {/* Features */}
                <div className="mt-8 space-y-4">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <svg
                        className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className={feature.startsWith('Everything') ? 'font-semibold' : ''}>
                        {feature}
                      </span>
                    </div>
                  ))}
                  {tier.notIncluded.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3 opacity-40">
                      <svg
                        className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-600">
            All plans include secure data storage and HIPAA compliance.{' '}
            <button className="text-[#0066cc] hover:underline font-medium">
              Compare all features
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
