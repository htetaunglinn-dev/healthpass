'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

const formatDay = (iso: string) => {
  const date = new Date(`${iso}T00:00:00`);
  return {
    month: date.toLocaleDateString('en-US', { month: 'short' }),
    day: date.getDate(),
    weekday: date.toLocaleDateString('en-US', { weekday: 'long' }),
  };
};

const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

export default function Dashboard() {
  const [membershipTier] = useState('Premium');

  const upcomingAppointments = [
    {
      id: 1,
      type: 'General Checkup',
      doctor: 'Dr. Sarah Johnson',
      hospital: 'City General Hospital',
      date: '2025-10-12',
      time: '10:00 AM',
      status: 'Confirmed',
    },
    {
      id: 2,
      type: 'Cardiology Consultation',
      doctor: 'Dr. Michael Chen',
      hospital: 'Heart Care Center',
      date: '2025-10-15',
      time: '2:30 PM',
      status: 'Pending',
    },
  ];

  const medicalRecords = [
    {
      id: 1,
      title: 'Annual Physical Exam',
      date: '2025-09-20',
      doctor: 'Dr. Sarah Johnson',
      type: 'Report',
    },
    {
      id: 2,
      title: 'Blood Test Results',
      date: '2025-09-18',
      doctor: 'Lab Services',
      type: 'Lab Report',
    },
    {
      id: 3,
      title: 'X-Ray Chest',
      date: '2025-08-30',
      doctor: 'Dr. Robert Lee',
      type: 'Imaging',
    },
  ];

  const healthMetrics = [
    { label: 'Blood pressure', value: '120/80', status: 'normal', unit: 'mmHg' },
    { label: 'Heart rate', value: '72', status: 'normal', unit: 'bpm' },
    { label: 'Weight', value: '68', status: 'normal', unit: 'kg' },
    { label: 'BMI', value: '22.5', status: 'normal', unit: '' },
  ];

  const membershipStats = [
    { label: 'Plan', value: `${membershipTier}` },
    { label: 'Appointments this month', value: '3' },
    { label: 'Teleconsults left', value: '2 of 2' },
    { label: 'Member since', value: 'Jan 2025' },
  ];

  const quickActions = [
    { label: 'View records', href: '#records' },
    { label: 'Message coordinator', href: '#coordinator' },
    { label: 'Health tips', href: '#' },
  ];

  return (
    <>
      <Navigation />
      <main className="relative min-h-screen pt-16">
        <div className="absolute inset-x-0 top-16 h-64 overflow-hidden border-b border-line bg-sage" aria-hidden="true">
          <div className="bg-grid absolute inset-0" />
        </div>
        <div className="container-page relative py-10 md:py-14">
          {/* Header */}
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow mb-3">Dashboard</p>
              <h1 className="font-display text-4xl tracking-tight md:text-5xl">Good morning, Alex</h1>
              <p className="mt-2 text-ink-muted">You have 2 upcoming appointments. Nothing needs your attention today.</p>
            </div>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
              {quickActions.map((action) => (
                <a key={action.label} href={action.href} className="text-sm text-ink-muted transition-colors hover:text-ink">
                  {action.label}
                </a>
              ))}
              <Link href="/booking" className="btn-primary">
                Book appointment
              </Link>
            </div>
          </div>

          {/* Membership */}
          <dl className="card mt-10 grid grid-cols-2 md:grid-cols-4">
            {membershipStats.map((stat, idx) => (
              <div
                key={stat.label}
                className={`px-5 py-5 md:px-6 ${idx % 2 === 1 ? 'border-l border-line' : ''} ${idx >= 2 ? 'border-t border-line md:border-t-0' : ''} ${idx === 2 ? 'md:border-l' : ''}`}
              >
                <dt className="text-xs text-ink-subtle">{stat.label}</dt>
                <dd className="mt-1 flex items-center gap-2 text-lg font-medium text-ink">
                  {stat.value}
                  {idx === 0 && (
                    <span className="rounded-sm bg-accent-soft px-1.5 py-0.5 text-xs font-medium text-accent">Active</span>
                  )}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 grid gap-10 lg:grid-cols-[2fr_1fr]">
            {/* Main Content */}
            <div className="space-y-10">
              {/* Upcoming Appointments */}
              <section>
                <div className="mb-4 flex items-baseline justify-between">
                  <h2 className="text-lg font-medium">Upcoming appointments</h2>
                  <Link href="/booking" className="btn-quiet">
                    Book new
                  </Link>
                </div>
                <ul className="card divide-y divide-line">
                  {upcomingAppointments.map((appointment) => {
                    const day = formatDay(appointment.date);
                    return (
                      <li key={appointment.id} className="grid grid-cols-[3.5rem_1fr] gap-5 p-5 sm:grid-cols-[3.5rem_1fr_auto]">
                        <div className="text-center">
                          <div className="text-xs uppercase tracking-wider text-ink-subtle">{day.month}</div>
                          <div className="font-display text-3xl leading-tight">{day.day}</div>
                        </div>
                        <div>
                          <h3 className="font-medium text-ink">{appointment.type}</h3>
                          <p className="mt-0.5 text-sm text-ink-muted">
                            {appointment.doctor} · {appointment.hospital}
                          </p>
                          <p className="mt-1 text-sm text-ink-subtle">
                            {day.weekday}, {appointment.time}
                          </p>
                        </div>
                        <div className="col-start-2 sm:col-start-auto">
                          <span
                            className={`inline-flex items-center gap-1.5 text-xs font-medium ${
                              appointment.status === 'Confirmed' ? 'text-accent' : 'text-caution'
                            }`}
                          >
                            <span
                              className={`h-1.5 w-1.5 rounded-full ${
                                appointment.status === 'Confirmed' ? 'bg-accent' : 'bg-caution'
                              }`}
                            />
                            {appointment.status}
                          </span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </section>

              {/* Medical Records */}
              <section id="records">
                <div className="mb-4 flex items-baseline justify-between">
                  <h2 className="text-lg font-medium">Recent records</h2>
                  <button className="btn-quiet">View all</button>
                </div>
                <div className="card overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-line text-xs text-ink-subtle">
                        <th className="px-5 py-3 font-normal">Document</th>
                        <th className="hidden px-5 py-3 font-normal sm:table-cell">From</th>
                        <th className="px-5 py-3 font-normal">Type</th>
                        <th className="px-5 py-3 text-right font-normal">Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-line">
                      {medicalRecords.map((record) => (
                        <tr key={record.id} className="cursor-pointer transition-colors hover:bg-paper">
                          <td className="px-5 py-4 font-medium text-ink">{record.title}</td>
                          <td className="hidden px-5 py-4 text-ink-muted sm:table-cell">{record.doctor}</td>
                          <td className="px-5 py-4 text-ink-muted">{record.type}</td>
                          <td className="px-5 py-4 text-right whitespace-nowrap tabular-nums text-ink-muted">{formatDate(record.date)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="space-y-10">
              {/* Health Metrics */}
              <section>
                <div className="mb-4 flex items-baseline justify-between">
                  <h2 className="text-lg font-medium">Health metrics</h2>
                  <span className="text-xs text-ink-subtle">Updated Sep 20</span>
                </div>
                <dl className="card grid grid-cols-2">
                  {healthMetrics.map((metric, idx) => (
                    <div
                      key={metric.label}
                      className={`p-5 ${idx % 2 === 1 ? 'border-l border-line' : ''} ${idx >= 2 ? 'border-t border-line' : ''}`}
                    >
                      <dt className="text-xs text-ink-subtle">{metric.label}</dt>
                      <dd className="mt-1">
                        <span className="font-display text-2xl tracking-tight">{metric.value}</span>
                        {metric.unit && <span className="ml-1 text-xs text-ink-muted">{metric.unit}</span>}
                      </dd>
                      <dd className="mt-1 text-xs capitalize text-accent">{metric.status}</dd>
                    </div>
                  ))}
                </dl>
              </section>

              {/* Your Coordinator */}
              <section id="coordinator" className="card p-5">
                <h2 className="text-xs text-ink-subtle">Your coordinator</h2>
                <div className="mt-3 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sunken font-display text-lg text-ink">
                    ER
                  </div>
                  <div>
                    <div className="font-medium text-ink">Emily Rodriguez</div>
                    <div className="text-sm text-ink-muted">Replies within 1 hour</div>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                  Ask Emily about appointments, reports, insurance, or anything that&apos;s on your mind.
                </p>
                <button className="btn-secondary mt-5 w-full">Message Emily</button>
              </section>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
