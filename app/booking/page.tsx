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

  if (showConfirmation) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen bg-gray-50 pt-16 flex items-center justify-center px-4">
          <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Appointment Confirmed!</h1>
            <p className="text-gray-600 mb-8">
              Your appointment has been successfully scheduled. You&apos;ll receive a confirmation email shortly.
            </p>
            <div className="bg-blue-50 rounded-lg p-6 mb-8 text-left">
              <h3 className="font-bold text-gray-900 mb-4">Appointment Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Doctor:</span>
                  <span className="font-semibold">{selectedDoctor?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Specialty:</span>
                  <span className="font-semibold">{selectedDoctor?.specialty}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Hospital:</span>
                  <span className="font-semibold">{selectedDoctor?.hospital}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Date:</span>
                  <span className="font-semibold">{selectedDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Time:</span>
                  <span className="font-semibold">{selectedTime}</span>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <Link
                href="/dashboard"
                className="flex-1 bg-[#0066cc] hover:bg-[#0052a3] text-white py-3 rounded-lg font-semibold transition"
              >
                Go to Dashboard
              </Link>
              <button
                onClick={() => {
                  setShowConfirmation(false);
                  setStep(1);
                  setSelectedDoctor(null);
                }}
                className="flex-1 border-2 border-gray-300 hover:border-[#0066cc] text-gray-700 py-3 rounded-lg font-semibold transition"
              >
                Book Another
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-50 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Book an Appointment</h1>
            <p className="text-gray-600">Find and schedule with the best healthcare providers</p>
          </div>

          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-between max-w-3xl mx-auto">
              {[
                { num: 1, label: 'Select Specialty' },
                { num: 2, label: 'Choose Doctor' },
                { num: 3, label: 'Pick Date & Time' },
                { num: 4, label: 'Confirm' },
              ].map((s, idx) => (
                <div key={s.num} className="flex items-center flex-1">
                  <div className="flex flex-col items-center flex-1">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                        step >= s.num
                          ? 'bg-[#0066cc] text-white'
                          : 'bg-gray-200 text-gray-600'
                      }`}
                    >
                      {s.num}
                    </div>
                    <span className="text-xs mt-2 text-gray-600">{s.label}</span>
                  </div>
                  {idx < 3 && (
                    <div
                      className={`h-1 flex-1 ${
                        step > s.num ? 'bg-[#0066cc]' : 'bg-gray-200'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Step 1: Select Specialty */}
            {step === 1 && (
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Specialty</h2>
                <div className="grid md:grid-cols-4 gap-4 mb-6">
                  {specialties.map((specialty) => (
                    <button
                      key={specialty}
                      onClick={() => setSelectedSpecialty(specialty)}
                      className={`p-4 rounded-lg border-2 transition ${
                        selectedSpecialty === specialty
                          ? 'border-[#0066cc] bg-blue-50 text-[#0066cc]'
                          : 'border-gray-200 hover:border-[#0066cc] text-gray-700'
                      }`}
                    >
                      <div className="font-semibold">{specialty}</div>
                    </button>
                  ))}
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">Select Hospital (Optional)</h2>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {hospitals.map((hospital) => (
                    <button
                      key={hospital.id}
                      onClick={() => setSelectedHospital(hospital.name)}
                      className={`p-4 rounded-lg border-2 transition text-left ${
                        selectedHospital === hospital.name
                          ? 'border-[#0066cc] bg-blue-50'
                          : 'border-gray-200 hover:border-[#0066cc]'
                      }`}
                    >
                      <div className="font-semibold text-gray-900">{hospital.name}</div>
                      <div className="text-sm text-gray-600">{hospital.location}</div>
                      <div className="flex items-center mt-2">
                        <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-sm font-semibold">{hospital.rating}</span>
                      </div>
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setStep(2)}
                  disabled={!selectedSpecialty}
                  className="w-full bg-[#0066cc] hover:bg-[#0052a3] disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-3 rounded-lg font-semibold transition"
                >
                  Continue to Select Doctor
                </button>
              </div>
            )}

            {/* Step 2: Choose Doctor */}
            {step === 2 && (
              <div className="bg-white rounded-xl shadow-sm p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Choose Doctor</h2>
                  <button onClick={() => setStep(1)} className="text-[#0066cc] hover:underline">
                    Back
                  </button>
                </div>
                <div className="space-y-4 mb-8">
                  {filteredDoctors.map((doctor) => (
                    <button
                      key={doctor.id}
                      onClick={() => setSelectedDoctor(doctor)}
                      className={`w-full p-6 rounded-lg border-2 transition text-left ${
                        selectedDoctor?.id === doctor.id
                          ? 'border-[#0066cc] bg-blue-50'
                          : 'border-gray-200 hover:border-[#0066cc]'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex space-x-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full"></div>
                          <div>
                            <h3 className="font-bold text-gray-900 text-lg">{doctor.name}</h3>
                            <p className="text-gray-600">{doctor.specialty}</p>
                            <p className="text-sm text-gray-500">{doctor.hospital}</p>
                            <div className="flex items-center space-x-4 mt-2">
                              <div className="flex items-center">
                                <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <span className="text-sm font-semibold">{doctor.rating}</span>
                              </div>
                              <span className="text-sm text-gray-500">{doctor.experience} experience</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-600 mb-1">Next Available</div>
                          <div className="font-semibold text-gray-900">{doctor.nextAvailable}</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setStep(3)}
                  disabled={!selectedDoctor}
                  className="w-full bg-[#0066cc] hover:bg-[#0052a3] disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-3 rounded-lg font-semibold transition"
                >
                  Continue to Select Time
                </button>
              </div>
            )}

            {/* Step 3: Pick Date & Time */}
            {step === 3 && (
              <div className="bg-white rounded-xl shadow-sm p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Select Date & Time</h2>
                  <button onClick={() => setStep(2)} className="text-[#0066cc] hover:underline">
                    Back
                  </button>
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-semibold text-gray-900 mb-3">Select Date</label>
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#0066cc] focus:outline-none"
                  />
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-semibold text-gray-900 mb-3">Select Time</label>
                  <div className="grid grid-cols-4 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`py-3 rounded-lg border-2 transition font-medium ${
                          selectedTime === time
                            ? 'border-[#0066cc] bg-blue-50 text-[#0066cc]'
                            : 'border-gray-200 hover:border-[#0066cc] text-gray-700'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setStep(4)}
                  disabled={!selectedDate || !selectedTime}
                  className="w-full bg-[#0066cc] hover:bg-[#0052a3] disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-3 rounded-lg font-semibold transition"
                >
                  Continue to Confirm
                </button>
              </div>
            )}

            {/* Step 4: Confirm */}
            {step === 4 && (
              <div className="bg-white rounded-xl shadow-sm p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Confirm Appointment</h2>
                  <button onClick={() => setStep(3)} className="text-[#0066cc] hover:underline">
                    Back
                  </button>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h3 className="font-bold text-gray-900 mb-4">Appointment Summary</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full"></div>
                      <div>
                        <div className="font-semibold text-gray-900 text-lg">{selectedDoctor?.name}</div>
                        <div className="text-gray-600">{selectedDoctor?.specialty}</div>
                        <div className="text-sm text-gray-500">{selectedDoctor?.hospital}</div>
                      </div>
                    </div>
                    <div className="border-t pt-4 space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Date:</span>
                        <span className="font-semibold">{selectedDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Time:</span>
                        <span className="font-semibold">{selectedTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Consultation Fee:</span>
                        <span className="font-semibold">$100</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-[#0066cc] p-4 mb-6">
                  <div className="flex">
                    <svg className="w-5 h-5 text-[#0066cc] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <div className="text-sm">
                      <p className="font-semibold text-gray-900 mb-1">As a Premium member:</p>
                      <p className="text-gray-700">You&apos;ll receive priority confirmation and your dedicated coordinator will follow up with you shortly.</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleBooking}
                  className="w-full bg-[#0066cc] hover:bg-[#0052a3] text-white py-4 rounded-lg font-semibold text-lg transition shadow-lg hover:shadow-xl"
                >
                  Confirm Booking
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
