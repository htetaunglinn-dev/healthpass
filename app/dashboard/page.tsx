'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

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
    { label: 'Blood Pressure', value: '120/80', status: 'normal', unit: 'mmHg' },
    { label: 'Heart Rate', value: '72', status: 'normal', unit: 'bpm' },
    { label: 'Weight', value: '68', status: 'normal', unit: 'kg' },
    { label: 'BMI', value: '22.5', status: 'normal', unit: '' },
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-50 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Alex!</h1>
            <p className="text-gray-600">Here's your health overview</p>
          </div>

          {/* Membership Card */}
          <div className="bg-gradient-to-br from-[#0066cc] to-[#8b5cf6] rounded-2xl p-6 mb-8 text-white shadow-lg">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="text-sm opacity-90 mb-1">Membership Status</div>
                <div className="text-2xl font-bold">{membershipTier} Member</div>
              </div>
              <div className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
                Active
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div>
                <div className="text-sm opacity-90">Appointments This Month</div>
                <div className="text-2xl font-bold">3</div>
              </div>
              <div>
                <div className="text-sm opacity-90">Teleconsults Left</div>
                <div className="text-2xl font-bold">2/2</div>
              </div>
              <div>
                <div className="text-sm opacity-90">Member Since</div>
                <div className="text-lg font-semibold">Jan 2025</div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <Link
              href="/booking"
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="font-semibold text-gray-900">Book Appointment</span>
            </Link>
            <button className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <span className="font-semibold text-gray-900">View Records</span>
            </button>
            <button className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <span className="font-semibold text-gray-900">Contact Coordinator</span>
            </button>
            <button className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="font-semibold text-gray-900">Health Tips</span>
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Upcoming Appointments */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Upcoming Appointments</h2>
                  <Link href="/booking" className="text-[#0066cc] hover:underline text-sm font-medium">
                    Book New
                  </Link>
                </div>
                <div className="space-y-4">
                  {upcomingAppointments.map((appointment) => (
                    <div
                      key={appointment.id}
                      className="border border-gray-200 rounded-lg p-4 hover:border-[#0066cc] transition"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold text-gray-900">{appointment.type}</h3>
                          <p className="text-sm text-gray-600">{appointment.doctor}</p>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            appointment.status === 'Confirmed'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-yellow-100 text-yellow-700'
                          }`}
                        >
                          {appointment.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{appointment.hospital}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {appointment.date}
                        </div>
                        <div className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {appointment.time}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Medical Records */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Recent Medical Records</h2>
                  <button className="text-[#0066cc] hover:underline text-sm font-medium">
                    View All
                  </button>
                </div>
                <div className="space-y-3">
                  {medicalRecords.map((record) => (
                    <div
                      key={record.id}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-[#0066cc] transition cursor-pointer"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{record.title}</div>
                          <div className="text-sm text-gray-600">{record.doctor} • {record.date}</div>
                        </div>
                      </div>
                      <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                        {record.type}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Health Metrics */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Health Metrics</h2>
                <div className="space-y-4">
                  {healthMetrics.map((metric, idx) => (
                    <div key={idx} className="pb-4 border-b border-gray-100 last:border-0">
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-sm text-gray-600">{metric.label}</span>
                        <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">
                          {metric.status}
                        </span>
                      </div>
                      <div className="text-2xl font-bold text-gray-900">
                        {metric.value}
                        {metric.unit && <span className="text-sm text-gray-600 ml-1">{metric.unit}</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Your Coordinator */}
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-4">Your Health Coordinator</h3>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Emily Rodriguez</div>
                    <div className="text-sm text-gray-600">Premium Coordinator</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Available to help with appointments, reports, and health queries.
                </p>
                <button className="w-full bg-[#0066cc] hover:bg-[#0052a3] text-white py-2 rounded-lg font-medium transition">
                  Contact Emily
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
