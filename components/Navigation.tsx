'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#0066cc] to-[#0052a3] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">H+</span>
            </div>
            <span className="text-xl font-bold text-gray-900">HealthPass</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#features" className="text-gray-700 hover:text-[#0066cc] transition">
              Features
            </Link>
            <Link href="/#pricing" className="text-gray-700 hover:text-[#0066cc] transition">
              Pricing
            </Link>
            <Link href="/dashboard" className="text-gray-700 hover:text-[#0066cc] transition">
              Dashboard
            </Link>
            <Link href="/#about" className="text-gray-700 hover:text-[#0066cc] transition">
              About
            </Link>
            <button className="text-gray-700 hover:text-[#0066cc] transition">
              Login
            </button>
            <button className="bg-[#0066cc] hover:bg-[#0052a3] text-white px-6 py-2 rounded-lg transition">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            <Link href="/#features" className="block text-gray-700 hover:text-[#0066cc] transition">
              Features
            </Link>
            <Link href="/#pricing" className="block text-gray-700 hover:text-[#0066cc] transition">
              Pricing
            </Link>
            <Link href="/dashboard" className="block text-gray-700 hover:text-[#0066cc] transition">
              Dashboard
            </Link>
            <Link href="/#about" className="block text-gray-700 hover:text-[#0066cc] transition">
              About
            </Link>
            <button className="block w-full text-left text-gray-700 hover:text-[#0066cc] transition">
              Login
            </button>
            <button className="block w-full bg-[#0066cc] hover:bg-[#0052a3] text-white px-6 py-2 rounded-lg transition">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
