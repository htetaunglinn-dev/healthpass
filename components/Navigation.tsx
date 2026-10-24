'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import Logo from '@/components/Logo';

const links = [
  { href: '/#how-it-works', label: 'How it works' },
  { href: '/#features', label: 'Benefits' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/dashboard', label: 'Dashboard' },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openLoginModal, openSignupModal } = useAuth();
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <nav className="container-page flex h-16 items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors hover:text-ink ${
                pathname === link.href ? 'text-ink' : 'text-ink-muted'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-5 md:flex">
          <button onClick={openLoginModal} className="cursor-pointer text-sm text-ink-muted transition-colors hover:text-ink">
            Log in
          </button>
          <button onClick={openSignupModal} className="btn-primary py-2">
            Get started
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="-mr-2 cursor-pointer p-2 text-ink md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-line bg-paper md:hidden">
          <div className="container-page flex flex-col py-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-line py-3 text-ink-muted last:border-0 hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 grid grid-cols-2 gap-3 pb-2">
              <button onClick={openLoginModal} className="btn-secondary">
                Log in
              </button>
              <button onClick={openSignupModal} className="btn-primary">
                Get started
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
