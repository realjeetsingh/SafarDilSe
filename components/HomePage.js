import dynamic from 'next/dynamic'
import { Analytics } from '@vercel/analytics/next'
import HubSpotForm from './HubSpotForm'

// Dynamic import for InteractiveMap to avoid SSR issues
const InteractiveMap = dynamic(() => import('./InteractiveMap'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-96 bg-gray-100 dark:bg-gray-800 rounded-lg">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-adventure-orange"></div>
    </div>
  )
})

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-adventure-orange via-mountain-blue to-nature-green">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Safar Dil Se
          </h1>
          <p className="text-2xl md:text-3xl mb-4 font-light">
            Jiyo Khul Ke!
          </p>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Curated Group Adventures & Soulful Journeys Across India
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg px-8 py-4">
              🌄 View Upcoming Trips
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              📩 Book Your Seat
            </button>
            <a 
              href="https://sample-firebase-ai-app-8a3d8--sample-app-kmjjz9or.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-mountain-blue hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg"
            >
              🌍 AI Trip Planner
            </a>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Our Story</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Founded with a passion for travel and a deep love for creating meaningful experiences, 
              Safar Dil Se is not just a travel company—it's an emotion. Started by Jeet, a passionate 
              traveler and community-builder, the aim is simple: curate soulful, well-organized, and 
              budget-friendly trips for young explorers. We believe in "Jeeyo Khul Ke," and that's 
              the heart of every trip we plan.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Carefully Curated Destinations</h3>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Warm, Friendly Group Environment</h3>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Transparent Pricing</h3>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Verified Stays & Safety First</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Trips Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Upcoming Trips</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tungnath Trek */}
            <div className="travel-card">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">📍 Tungnath Trek</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Coming Soon</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-adventure-orange text-white px-3 py-1 rounded-full text-sm">🏕️ Stay</span>
                  <span className="bg-mountain-blue text-white px-3 py-1 rounded-full text-sm">🚐 Travel</span>
                  <span className="bg-nature-green text-white px-3 py-1 rounded-full text-sm">🧭 Guide</span>
                  <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm">🔥 Bonfire</span>
                  <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm">🏞️ Trekking</span>
                </div>

                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300 mb-6">
                  <p><strong>Departure:</strong> Delhi</p>
                  <p><strong>Duration:</strong> 5 Days / 4 Nights</p>
                  <p><strong>Price:</strong> ₹[Contact for Price]</p>
                </div>

                <button className="btn-primary w-full">Book Now</button>
              </div>
            </div>

            {/* Kasol-Tosh-Manali */}
            <div className="travel-card">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">📍 Kasol-Tosh-Manali</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Adventure Package</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-adventure-orange text-white px-3 py-1 rounded-full text-sm">🏕️ Stay</span>
                  <span className="bg-mountain-blue text-white px-3 py-1 rounded-full text-sm">🚐 Travel</span>
                  <span className="bg-nature-green text-white px-3 py-1 rounded-full text-sm">🧭 Guide</span>
                  <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm">🔥 Bonfire</span>
                  <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm">🏞️ Trekking</span>
                </div>

                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300 mb-6">
                  <p><strong>Departure:</strong> Delhi</p>
                  <p><strong>Duration:</strong> 6 Days / 5 Nights</p>
                  <p><strong>Price:</strong> ₹[Contact for Price]</p>
                </div>

                <button className="btn-primary w-full">Book Now</button>
              </div>
            </div>

            {/* Tirthan Valley */}
            <div className="travel-card">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">📍 Tirthan Valley</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Nature Retreat</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-adventure-orange text-white px-3 py-1 rounded-full text-sm">🏕️ Stay</span>
                  <span className="bg-mountain-blue text-white px-3 py-1 rounded-full text-sm">🚐 Travel</span>
                  <span className="bg-nature-green text-white px-3 py-1 rounded-full text-sm">🧭 Guide</span>
                  <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm">🔥 Bonfire</span>
                  <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm">🏞️ Trekking</span>
                </div>

                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300 mb-6">
                  <p><strong>Departure:</strong> Delhi</p>
                  <p><strong>Duration:</strong> 4 Days / 3 Nights</p>
                  <p><strong>Price:</strong> ₹[Contact for Price]</p>
                </div>

                <button className="btn-primary w-full">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">Our Travel Destinations</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-12">
            Explore the beautiful destinations we cover across North India
          </p>
          <div className="max-w-6xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
              <InteractiveMap />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">What Our Travelers Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
              <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                "One of the most memorable trips of my life! Safe, well-organized, and so much fun!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-adventure-orange rounded-full flex items-center justify-center text-white font-bold mr-4">
                  A
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Aman Sharma</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Kasol Trip</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
              <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                "Made friends for life and memories I'll always cherish. Thanks, Safar Dil Se!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-mountain-blue rounded-full flex items-center justify-center text-white font-bold mr-4">
                  S
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Simran Kaur</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Tirthan Trek</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Booking Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">Ready to Travel with Your Tribe?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-12">
            Get in touch and let's plan your next adventure!
          </p>

          <div className="max-w-2xl mx-auto">
            <HubSpotForm />
          </div>

          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="text-2xl">📞</span>
                <span className="text-gray-900 dark:text-white">9599863263</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">📧</span>
                <span className="text-gray-900 dark:text-white">safardilse.jiyokhulke@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">📱</span>
                <a href="https://instagram.com/safardilse_2000" target="_blank" rel="noopener noreferrer" className="text-mountain-blue hover:underline">
                  @safardilse_2000
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Widget */}
      <a
        href="https://wa.me/919599863263?text=Hi%20Safar%20Dil%20Se!%20I'm%20interested%20in%20your%20travel%20packages."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-widget"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      </a>
    </>
  )
}
