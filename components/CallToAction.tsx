'use client';

import { useAuth } from '@/context/AuthContext';

export default function CallToAction() {
  const { openSignupModal } = useAuth();

  return (
    <section className="relative overflow-hidden bg-accent text-white">
      <div className="bg-grid pointer-events-none absolute inset-0 [--grid-line:rgb(255_255_255/0.07)]" aria-hidden="true" />
      <div className="container-page relative flex flex-col items-start justify-between gap-8 py-16 md:flex-row md:items-center md:py-20">
        <div className="max-w-xl">
          <h2 className="font-display text-4xl leading-tight tracking-tight md:text-5xl">
            Your next appointment, handled.
          </h2>
          <p className="mt-3 text-white/75">
            Start on the free plan and add a coordinator whenever you need one.
          </p>
        </div>
        <button
          onClick={openSignupModal}
          className="btn shrink-0 bg-white px-5 py-3 text-[0.95rem] text-accent-deep hover:bg-sage"
        >
          Create a free account
        </button>
      </div>
    </section>
  );
}
