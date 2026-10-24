import Link from 'next/link';

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 ${className}`} aria-label="HealthPass home">
      <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
        <rect width="22" height="22" rx="5" className="fill-accent" />
        <path d="M11 6v10M6 11h10" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <span className="font-display text-[1.35rem] leading-none tracking-tight text-ink">HealthPass</span>
    </Link>
  );
}
