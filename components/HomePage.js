
// components/HomePage.js - main page
import dynamic from 'next/dynamic'
import GoogleForm from './GoogleForm'
const InteractiveMap = dynamic(()=>import('./InteractiveMap'),{ssr:false,loading:()=> <p>Loading map...</p>})

export default function HomePage(){
  return (
    <div id="home">
      {/* Hero */}
      <section className="adventure-gradient text-white py-20 text-center">
        <h1 className="text-5xl font-extrabold mb-4">Safar Dil Se</h1>
        <p className="text-2xl mb-6">Jiyo Khul Ke!</p>
        <p className="max-w-2xl mx-auto">Curated Group Adventures & Soulful Journeys Across India</p>
      </section>

      {/* Destinations Map */}
      <section id="destinations" className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Destinations</h2>
          <div className="h-[500px] rounded-lg overflow-hidden shadow-lg">
            <InteractiveMap/>
          </div>
        </div>
      </section>

      {/* Contact / Booking */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Plan Your Trip</h2>
          <GoogleForm/>
        </div>
      </section>
    </div>
  )
}
