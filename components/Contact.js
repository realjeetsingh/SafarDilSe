
'use client'

export default function Contact({ HubSpotForm }) {
  const contactInfo = [
    {
      icon: "📍",
      title: "Location",
      details: "Delhi, India",
      description: "Serving travelers across North India"
    },
    {
      icon: "📞",
      title: "Phone",
      details: "9599863263",
      description: "Call or WhatsApp us anytime",
      action: () => window.open('tel:+919599863263')
    },
    {
      icon: "📧",
      title: "Email",
      details: "safardilse.jiyokhulke@gmail.com",
      description: "For detailed inquiries",
      action: () => window.open('mailto:safardilse.jiyokhulke@gmail.com')
    },
    {
      icon: "📱",
      title: "Instagram",
      details: "@safardilse_2000",
      description: "Follow our travel stories",
      action: () => window.open('https://instagram.com/safardilse_2000', '_blank')
    }
  ]

  const openWhatsApp = () => {
    const message = "Hi! I'm interested in your travel packages. Can you help me plan my next adventure?"
    const whatsappUrl = `https://wa.me/919599863263?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const openEmail = () => {
    window.open('mailto:safardilse.jiyokhulke@gmail.com?subject=Travel Inquiry&body=Hi! I would like to know more about your travel packages.')
  }

  const openInstagram = () => {
    window.open('https://instagram.com/safardilse_2000', '_blank')
  }

  return (
    <section className="pt-24 pb-16 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Let's Plan Your Adventure
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to embark on your next journey? Get in touch and let's create memories together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Get in Touch
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                We're here to help you plan the perfect adventure. Choose your preferred way to connect with us:
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <div 
                  key={index}
                  className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                    contact.action ? 'cursor-pointer hover:scale-105' : ''
                  }`}
                  onClick={contact.action}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{contact.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        {contact.title}
                      </h4>
                      <p className="text-orange-600 dark:text-orange-400 font-medium mb-1">
                        {contact.details}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {contact.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Action Buttons */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                Quick Actions
              </h4>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={openWhatsApp}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <span>💬</span>
                  <span>WhatsApp Us</span>
                </button>
                <button
                  onClick={openInstagram}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>📸</span>
                  <span>Follow on Instagram</span>
                </button>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gradient-to-r from-orange-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Response Times
              </h4>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <div className="flex justify-between">
                  <span>WhatsApp:</span>
                  <span className="font-medium">Within 30 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span>Email:</span>
                  <span className="font-medium">Within 2 hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Instagram DM:</span>
                  <span className="font-medium">Within 1 hour</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <HubSpotForm />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Frequently Asked Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                How do I book a trip?
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Simply contact us via WhatsApp or fill out the form above. We'll send you detailed itinerary and payment information.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                What's included in the trip cost?
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                All trips include accommodation, transportation, guide, and most meals. Detailed breakdown provided during booking.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Can I customize my trip?
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Absolutely! We offer customized trips based on your preferences, budget, and schedule.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Is it safe for solo travelers?
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Yes! We prioritize safety and have experienced guides. Many solo travelers join our group trips and make new friends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
