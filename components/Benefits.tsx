export default function Benefits() {
  const benefits = [
    {
      category: 'Convenience',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'blue',
      items: [
        { title: 'Save Time', description: 'No need to research hospitals or make endless calls' },
        { title: 'One Point of Contact', description: 'We handle everything for you' },
        { title: 'Faster Access', description: 'Priority appointments mean less waiting' },
        { title: 'Simplified Billing', description: 'One invoice, clear pricing, payment plans' },
      ],
    },
    {
      category: 'Trust',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: 'green',
      items: [
        { title: 'Quality Assurance', description: 'We only recommend verified, quality hospitals' },
        { title: 'Medical History Management', description: 'Everything in one secure place' },
        { title: 'Your Advocate', description: 'We represent your interests with hospitals' },
        { title: 'Transparency', description: 'Clear pricing upfront, no surprise bills' },
      ],
    },
    {
      category: 'Service',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: 'purple',
      items: [
        { title: 'Personalized Care', description: 'Someone who knows your medical journey' },
        { title: 'Administrative Support', description: 'Insurance claims, reports, follow-ups' },
        { title: 'Health Education', description: 'Preventive care guidance and wellness tips' },
        { title: 'Emergency Support', description: '24/7 helpline for urgent medical questions' },
      ],
    },
  ];

  const colorClasses = {
    blue: {
      bg: 'bg-blue-100',
      text: 'text-blue-600',
      border: 'border-blue-200',
      ring: 'ring-blue-500',
    },
    green: {
      bg: 'bg-green-100',
      text: 'text-green-600',
      border: 'border-green-200',
      ring: 'ring-green-500',
    },
    purple: {
      bg: 'bg-purple-100',
      text: 'text-purple-600',
      border: 'border-purple-200',
      ring: 'ring-purple-500',
    },
  };

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-[#0066cc]">HealthPass</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide value through convenience, trust, and exceptional service—not discounts.
            Your health deserves the best care coordination.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit) => {
            const colors = colorClasses[benefit.color as keyof typeof colorClasses];
            return (
              <div key={benefit.category} className="space-y-6">
                {/* Category Header */}
                <div className="flex items-center space-x-3">
                  <div className={`p-3 ${colors.bg} ${colors.text} rounded-lg`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{benefit.category}</h3>
                </div>

                {/* Items */}
                <div className="space-y-4">
                  {benefit.items.map((item, idx) => (
                    <div
                      key={idx}
                      className={`p-4 border-l-4 ${colors.border} bg-gray-50 rounded-r-lg hover:shadow-md transition`}
                    >
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Services */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Premium Services Available
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Medical Tourism',
                description: 'Coordination for treatments abroad',
                price: '$500-1,000',
              },
              {
                title: 'Complex Case Management',
                description: 'For serious medical conditions',
                price: '$200-500',
              },
              {
                title: 'Insurance Navigation',
                description: 'Help with claims and approvals',
                price: '$100-200',
              },
              {
                title: 'Wellness Programs',
                description: 'Diabetes, weight loss coaching',
                price: '$50-75/mo',
              },
            ].map((service, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition">
                <h4 className="font-semibold text-gray-900 mb-2">{service.title}</h4>
                <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                <p className="text-[#0066cc] font-semibold">{service.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '95%', label: 'Member Satisfaction' },
            { value: '< 2 days', label: 'Average Appointment Wait' },
            { value: '10k+', label: 'Appointments Coordinated' },
            { value: '24/7', label: 'Support Availability' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl font-bold text-[#0066cc] mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
