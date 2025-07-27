
"use client"
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { Calendar, MapPin, Users, Heart, Mountain, Phone, Mail, Instagram, Star, Clock } from 'lucide-react'

// Dynamic import for map to avoid SSR issues
const InteractiveMap = dynamic(() => import('./InteractiveMap'), { 
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-96 bg-gradient-to-r from-orange-100 to-blue-100 rounded-xl">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
    </div>
  )
})

const HubSpotForm = dynamic(() => import('./HubSpotForm'), { ssr: false })

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true'
    setDarkMode(isDark)
    if (isDark) {
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    localStorage.setItem('darkMode', newMode.toString())
    if (newMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const trips = [
    {
      id: 1,
      title: "Tungnath Trek",
      location: "Uttarakhand",
      duration: "5 Days / 4 Nights",
      departure: "Delhi",
      price: "₹8,999",
      features: ["🏕️ Stay", "🚐 Travel", "🧭 Guide", "🔥 Bonfire", "🏞️ Trekking"],
      status: "Coming Soon",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Kasol - Tosh - Manali",
      location: "Himachal Pradesh",
      duration: "6 Days / 5 Nights",
      departure: "Delhi",
      price: "₹12,999",
      features: ["🏨 Hotels", "🚌 Volvo", "🧭 Guide", "🔥 Bonfire", "🏔️ Mountains"],
      status: "Filling Fast",
      image: "https://images.unsplash.com/photo-1570116651534-ec0c4a5ba963?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Tirthan Valley",
      location: "Himachal Pradesh",
      duration: "4 Days / 3 Nights",
      departure: "Delhi",
      price: "₹7,999",
      features: ["🏕️ Camps", "🚐 Travel", "🧭 Guide", "🎣 Fishing", "🌲 Nature"],
      status: "Available",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop"
    }
  ]

  const testimonials = [
    {
      name: "Aman Sharma",
      trip: "Kasol Trip",
      review: "One of the most memorable trips of my life! Safe, well-organized, and so much fun!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Simran Kaur",
      trip: "Tirthan Trek",
      review: "Made friends for life and memories I'll always cherish. Thanks, Safar Dil Se!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c926?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Rahul Gupta",
      trip: "Tungnath Trek",
      review: "Perfect organization, amazing group, and breathtaking views. Highly recommended!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
    }
  ]

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 z-50 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      >
        {darkMode ? '☀️' : '🌙'}
      </button>

      {/* WhatsApp Widget */}
      <a
        href="https://wa.me/919599863263?text=Hi! I'm interested in your travel packages."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-widget"
      >
        <div className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110">
          <Phone className="w-6 h-6" />
        </div>
      </a>

      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in">
            Safar Dil Se
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-8 fade-in">
            Jiyo Khul Ke! 🏔️
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto opacity-90 fade-in">
            Curated Group Adventures & Soulful Journeys Across India
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105">
              🌄 View Upcoming Trips
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300">
              📩 Book Your Seat
            </button>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300">
              🧭 Explore Our Journey
            </button>
          </div>
          <div className="mt-8">
            <a
              href="https://sample-firebase-ai-app-8a3d8--sample-app-kmjjz9or.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105"
            >
              🌍 AI Trip Planner
            </a>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white">Our Story</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Founded with a passion for travel and a deep love for creating meaningful experiences, 
              <span className="font-semibold text-orange-600"> Safar Dil Se</span> is not just a travel company—it's an emotion. 
              Started by <span className="font-semibold">Jeet</span>, a passionate traveler and community-builder, 
              the aim is simple: curate soulful, well-organized, and budget-friendly trips for young explorers.
            </p>
            <p className="text-xl font-semibold text-orange-600 mb-12">
              We believe in "Jeeyo Khul Ke," and that's the heart of every trip we plan.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-orange-100 dark:bg-orange-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Carefully Curated Destinations</h3>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Warm, Friendly Group Environment</h3>
              </div>
              <div className="text-center">
                <div className="bg-green-100 dark:bg-green-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Star className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Transparent Pricing</h3>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 dark:bg-purple-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Mountain className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Verified Stays, Local Guides & Safety First</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Trips Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">🌍 Upcoming Adventures</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trips.map((trip) => (
              <div key={trip.id} className="bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
                <div className="relative">
                  <img src={trip.image} alt={trip.title} className="w-full h-48 object-cover" />
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold ${
                    trip.status === 'Coming Soon' ? 'bg-yellow-500 text-white' :
                    trip.status === 'Filling Fast' ? 'bg-red-500 text-white' :
                    'bg-green-500 text-white'
                  }`}>
                    {trip.status}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{trip.title}</h3>
                  <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{trip.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{trip.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Departure From: {trip.departure}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {trip.features.map((feature, index) => (
                      <span key={index} className="bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-orange-600">{trip.price}</span>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold transition-colors duration-300">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">🗺️ Our Adventure Destinations</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Explore the magnificent destinations we cover across North India. Click on the markers to learn more about each location.
          </p>
          <div className="max-w-6xl mx-auto">
            <InteractiveMap />
          </div>
        </div>
      </section>

      {/* Continue with testimonials and other sections... */}
    </div>
  )
}
