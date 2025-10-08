import Link from 'next/link';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              Your Personal Healthcare Concierge
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Navigate Healthcare with
              <span className="text-[#0066cc]"> Confidence</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Why waste time navigating the complex healthcare system alone? Get priority scheduling,
              dedicated coordinators, and complete transparency throughout your health journey.
            </p>

            {/* Value Props */}
            <div className="grid sm:grid-cols-3 gap-4 mb-10">
              <div className="flex items-start space-x-2">
                <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <div className="font-semibold text-gray-900">Save Time</div>
                  <div className="text-sm text-gray-600">One point of contact</div>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <div className="font-semibold text-gray-900">Priority Access</div>
                  <div className="text-sm text-gray-600">Skip waiting lists</div>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <div className="font-semibold text-gray-900">Full Support</div>
                  <div className="text-sm text-gray-600">24/7 assistance</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#pricing"
                className="inline-flex items-center justify-center bg-[#0066cc] hover:bg-[#0052a3] text-white px-8 py-4 rounded-lg font-semibold text-lg transition shadow-lg hover:shadow-xl"
              >
                Get Started Free
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/#features"
                className="inline-flex items-center justify-center border-2 border-gray-300 hover:border-[#0066cc] text-gray-700 hover:text-[#0066cc] px-8 py-4 rounded-lg font-semibold text-lg transition"
              >
                Learn More
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex items-center space-x-6">
              <div>
                <div className="text-3xl font-bold text-gray-900">10,000+</div>
                <div className="text-sm text-gray-600">Happy Members</div>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div>
                <div className="text-3xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Partner Hospitals</div>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div>
                <div className="text-3xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
            </div>
          </div>

          {/* Right Image/Illustration */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-[#0066cc] to-[#8b5cf6] rounded-2xl p-8 shadow-2xl">
              {/* Mock Dashboard Preview */}
              <div className="bg-white rounded-lg p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                    <div>
                      <div className="h-3 w-24 bg-gray-300 rounded"></div>
                      <div className="h-2 w-16 bg-gray-200 rounded mt-2"></div>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                    Premium
                  </div>
                </div>
                <div className="space-y-3 pt-4">
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                    <div className="w-10 h-10 bg-blue-200 rounded"></div>
                    <div className="flex-1">
                      <div className="h-3 w-32 bg-blue-300 rounded mb-2"></div>
                      <div className="h-2 w-24 bg-blue-200 rounded"></div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                    <div className="w-10 h-10 bg-purple-200 rounded"></div>
                    <div className="flex-1">
                      <div className="h-3 w-28 bg-purple-300 rounded mb-2"></div>
                      <div className="h-2 w-20 bg-purple-200 rounded"></div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                    <div className="w-10 h-10 bg-green-200 rounded"></div>
                    <div className="flex-1">
                      <div className="h-3 w-36 bg-green-300 rounded mb-2"></div>
                      <div className="h-2 w-28 bg-green-200 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-400 rounded-full opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
