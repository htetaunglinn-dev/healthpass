'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

const specialties = [
  'General Practice',
  'Cardiology',
  'Dermatology',
  'Orthopedics',
  'Pediatrics',
  'Gynecology',
  'Neurology',
  'Ophthalmology',
];

const hospitals = [
  { id: 1, name: 'City General Hospital', location: 'Downtown', rating: 4.8 },
  { id: 2, name: 'Heart Care Center', location: 'Medical District', rating: 4.9 },
  { id: 3, name: 'Advanced Medical Clinic', location: 'Northside', rating: 4.7 },
  { id: 4, name: 'Family Health Center', location: 'Southside', rating: 4.6 },
];

const doctors = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    specialty: 'General Practice',
    hospital: 'City General Hospital',
    rating: 4.9,
    experience: '15 years',
    nextAvailable: '2025-10-12',
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    specialty: 'Cardiology',
    hospital: 'Heart Care Center',
    rating: 4.8,
    experience: '20 years',
    nextAvailable: '2025-10-15',
  },
  {
    id: 3,
    name: 'Dr. Emily Martinez',
    specialty: 'Dermatology',
    hospital: 'Advanced Medical Clinic',
    rating: 4.7,
    experience: '12 years',
    nextAvailable: '2025-10-14',
  },
  {
    id: 4,
    name: 'Dr. Robert Lee',
    specialty: 'Orthopedics',
    hospital: 'City General Hospital',
    rating: 4.9,
    experience: '18 years',
    nextAvailable: '2025-10-13',
  },
];

export default function Booking() {
  const [step, setStep] = useState(1);
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [selectedHospital, setSelectedHospital] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState<typeof doctors[0] | null>(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const timeSlots = [
    '9:00 AM',
    '9:30 AM',
    '10:00 AM',
    '10:30 AM',
    '11:00 AM',
    '11:30 AM',
    '2:00 PM',
    '2:30 PM',
    '3:00 PM',
    '3:30 PM',
    '4:00 PM',
    '4:30 PM',
  ];

  const filteredDoctors = doctors.filter(
    (doctor) =>
      (!selectedSpecialty || doctor.specialty === selectedSpecialty) &&
      (!selectedHospital || doctor.hospital === selectedHospital)
  );

  const handleBooking = () => {
    setShowConfirmation(true);
  };

  const steps = ['Specialty', 'Doctor', 'Date & time', 'Confirm'];

  const initials = (name: string) =>
    name
      .replace('Dr. ', '')
      .split(' ')
      .map((part) => part[0])
      .join('');

  const formatDate = (iso: string) =>
    iso
      ? new Date(`${iso}T00:00:00`).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
      : '';

  const summary = [
    { label: 'Specialty', value: selectedSpecialty },
    { label: 'Hospital', value: selectedDoctor?.hospital || selectedHospital },
    { label: 'Doctor', value: selectedDoctor?.name },
    { label: 'Date', value: formatDate(selectedDate) },
    { label: 'Time', value: selectedTime },
  ];

  const StepHeader = ({ title, back }: { title: string; back?: number }) => (
    <div className="mb-6 flex items-baseline justify-between">
      <h2 className="font-display text-3xl tracking-tight">{title}</h2>
      {back && (
        <button onClick={() => setStep(back)} className="btn-quiet">
          Back
        </button>
      )}
    </div>
  );

  if (showConfirmation) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen pt-16">
          <div className="container-page max-w-2xl py-16 md:py-24">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft text-accent">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 16 16" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.5l3 3 7-7" />
              </svg>
            </div>
            <h1 className="mt-6 font-display text-4xl tracking-tight md:text-5xl">You&apos;re booked.</h1>
            <p className="mt-3 text-ink-muted">
              A confirmation email is on its way. Your coordinator will send your records to the clinic before the visit.
            </p>

            <dl className="card mt-10 divide-y divide-line text-sm">
              {[
                { label: 'Doctor', value: selectedDoctor?.name },
                { label: 'Specialty', value: selectedDoctor?.specialty },
                { label: 'Hospital', value: selectedDoctor?.hospital },
                { label: 'Date', value: formatDate(selectedDate) },
                { label: 'Time', value: selectedTime },
              ].map((row) => (
                <div key={row.label} className="flex justify-between gap-4 px-5 py-3.5">
                  <dt className="text-ink-muted">{row.label}</dt>
                  <dd className="text-right font-medium text-ink">{row.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/dashboard" className="btn-primary px-5">
                Go to dashboard
              </Link>
              <button
                onClick={() => {
                  setShowConfirmation(false);
                  setStep(1);
                  setSelectedDoctor(null);
                }}
                className="btn-secondary px-5"
              >
                Book another
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16">
        <div className="container-page py-10 md:py-14">
          {/* Header */}
          <div className="max-w-2xl">
            <p className="eyebrow mb-3">Book an appointment</p>
            <h1 className="font-display text-4xl tracking-tight md:text-5xl">Find the right doctor</h1>
          </div>

          {/* Progress */}
          <ol className="mt-10 grid grid-cols-4 gap-2" aria-label="Booking progress">
            {steps.map((label, idx) => {
              const num = idx + 1;
              return (
                <li key={label} aria-current={step === num ? 'step' : undefined}>
                  <div className={`h-0.5 ${step >= num ? 'bg-accent' : 'bg-line-strong'}`} />
                  <div className={`mt-2 text-xs ${step === num ? 'font-medium text-ink' : 'text-ink-subtle'}`}>
                    <span className="tabular-nums">{num}.</span> <span className="hidden sm:inline">{label}</span>
                  </div>
                </li>
              );
            })}
          </ol>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_18rem]">
            <div>
              {/* Step 1: Select Specialty */}
              {step === 1 && (
                <div>
                  <StepHeader title="What kind of care?" />
                  <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
                    {specialties.map((specialty) => (
                      <button
                        key={specialty}
                        onClick={() => setSelectedSpecialty(specialty)}
                        aria-pressed={selectedSpecialty === specialty}
                        className="option px-4 py-3 text-sm font-medium"
                      >
                        {specialty}
                      </button>
                    ))}
                  </div>

                  <h3 className="mt-10 mb-1 font-medium">Preferred hospital</h3>
                  <p className="mb-4 text-sm text-ink-muted">Optional. Leave blank and we&apos;ll show every partner.</p>
                  <div className="grid gap-2 md:grid-cols-2">
                    {hospitals.map((hospital) => (
                      <button
                        key={hospital.id}
                        onClick={() => setSelectedHospital(selectedHospital === hospital.name ? '' : hospital.name)}
                        aria-pressed={selectedHospital === hospital.name}
                        className="option flex items-center justify-between px-4 py-3.5"
                      >
                        <span>
                          <span className="block text-sm font-medium text-ink">{hospital.name}</span>
                          <span className="block text-sm text-ink-muted">{hospital.location}</span>
                        </span>
                        <span className="text-sm tabular-nums text-ink-muted">★ {hospital.rating}</span>
                      </button>
                    ))}
                  </div>

                  <button onClick={() => setStep(2)} disabled={!selectedSpecialty} className="btn-primary mt-10 px-6">
                    Continue
                  </button>
                </div>
              )}

              {/* Step 2: Choose Doctor */}
              {step === 2 && (
                <div>
                  <StepHeader title="Choose a doctor" back={1} />
                  {filteredDoctors.length === 0 ? (
                    <div className="card px-6 py-10 text-center">
                      <p className="font-medium">No doctors match that combination yet.</p>
                      <p className="mt-1 text-sm text-ink-muted">
                        Try another hospital, or ask your coordinator to find one for you.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {filteredDoctors.map((doctor) => (
                        <button
                          key={doctor.id}
                          onClick={() => setSelectedDoctor(doctor)}
                          aria-pressed={selectedDoctor?.id === doctor.id}
                          className="option flex w-full items-start gap-4 p-5"
                        >
                          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sunken font-display text-lg text-ink">
                            {initials(doctor.name)}
                          </span>
                          <span className="flex-1">
                            <span className="block font-medium text-ink">{doctor.name}</span>
                            <span className="block text-sm text-ink-muted">
                              {doctor.specialty} · {doctor.hospital}
                            </span>
                            <span className="mt-1 block text-sm text-ink-subtle">
                              ★ {doctor.rating} · {doctor.experience} experience
                            </span>
                          </span>
                          <span className="hidden text-right sm:block">
                            <span className="block text-xs text-ink-subtle">Next available</span>
                            <span className="block text-sm font-medium text-ink">{formatDate(doctor.nextAvailable)}</span>
                          </span>
                        </button>
                      ))}
                    </div>
                  )}

                  <button onClick={() => setStep(3)} disabled={!selectedDoctor} className="btn-primary mt-10 px-6">
                    Continue
                  </button>
                </div>
              )}

              {/* Step 3: Pick Date & Time */}
              {step === 3 && (
                <div>
                  <StepHeader title="Pick a time" back={2} />

                  <label htmlFor="date" className="label">
                    Date
                  </label>
                  <input
                    id="date"
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="field max-w-xs"
                  />

                  <div className="mt-8">
                    <div className="label">Time</div>
                    <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          aria-pressed={selectedTime === time}
                          className="option py-2.5 text-center text-sm tabular-nums"
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button onClick={() => setStep(4)} disabled={!selectedDate || !selectedTime} className="btn-primary mt-10 px-6">
                    Continue
                  </button>
                </div>
              )}

              {/* Step 4: Confirm */}
              {step === 4 && (
                <div>
                  <StepHeader title="Review and confirm" back={3} />

                  <div className="card">
                    <div className="flex items-center gap-4 border-b border-line p-5">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sunken font-display text-lg">
                        {selectedDoctor && initials(selectedDoctor.name)}
                      </span>
                      <div>
                        <div className="font-medium">{selectedDoctor?.name}</div>
                        <div className="text-sm text-ink-muted">
                          {selectedDoctor?.specialty} · {selectedDoctor?.hospital}
                        </div>
                      </div>
                    </div>
                    <dl className="divide-y divide-line text-sm">
                      {[
                        { label: 'Date', value: formatDate(selectedDate) },
                        { label: 'Time', value: selectedTime },
                        { label: 'Consultation fee', value: '$100' },
                      ].map((row) => (
                        <div key={row.label} className="flex justify-between px-5 py-3.5">
                          <dt className="text-ink-muted">{row.label}</dt>
                          <dd className="font-medium">{row.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  <p className="mt-5 border-l-2 border-accent pl-4 text-sm leading-relaxed text-ink-muted">
                    <span className="font-medium text-ink">Premium member: </span>
                    you&apos;ll get priority confirmation, and your coordinator will follow up before the visit.
                  </p>

                  <button onClick={handleBooking} className="btn-primary mt-10 px-6 py-3">
                    Confirm booking
                  </button>
                </div>
              )}
            </div>

            {/* Summary */}
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="card">
                <h2 className="border-b border-line px-5 py-3.5 text-sm font-medium">Your appointment</h2>
                <dl className="divide-y divide-line text-sm">
                  {summary.map((row) => (
                    <div key={row.label} className="flex justify-between gap-4 px-5 py-3">
                      <dt className="text-ink-subtle">{row.label}</dt>
                      <dd className={`text-right ${row.value ? 'text-ink' : 'text-ink-subtle'}`}>{row.value || '—'}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
