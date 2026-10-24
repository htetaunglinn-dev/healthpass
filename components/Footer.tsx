import Link from 'next/link';
import Logo from '@/components/Logo';

const columns = [
  {
    title: 'Product',
    links: [
      { href: '/#pricing', label: 'Pricing' },
      { href: '/#features', label: 'Benefits' },
      { href: '/dashboard', label: 'Dashboard' },
      { href: '/booking', label: 'Book an appointment' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/#how-it-works', label: 'How it works' },
      { href: '/#', label: 'Partner hospitals' },
      { href: '/#', label: 'Careers' },
      { href: '/#', label: 'Contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { href: '/#', label: 'Privacy policy' },
      { href: '/#', label: 'Terms of service' },
      { href: '/#', label: 'HIPAA compliance' },
      { href: '/#', label: 'Cookie policy' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
              A healthcare concierge for priority access and personal care coordination.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h4 className="text-sm font-medium text-ink">{column.title}</h4>
              <ul className="mt-4 space-y-2.5 text-sm">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-ink-muted transition-colors hover:text-ink">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-line pt-6 text-sm text-ink-subtle sm:flex-row">
          <p>© {new Date().getFullYear()} HealthPass. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-ink">LinkedIn</a>
            <a href="#" className="transition-colors hover:text-ink">X</a>
            <a href="#" className="transition-colors hover:text-ink">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
