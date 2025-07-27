// FIXED: No more style-loader imports - CSS handled in globals.css
'use client'
import { useEffect, useRef } from 'react'

export default function InteractiveMap() {
  const mapRef = useRef(null)
  const mapInstanceRef = useRef(null)

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return

    // Dynamic import of Leaflet to avoid SSR issues
    import('leaflet').then((L) => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
      }

      // Create map centered on Delhi NCR
      const map = L.map(mapRef.current).setView([28.6139, 77.209], 8)
      mapInstanceRef.current = map

      // Add OpenStreetMap tiles (free)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
      }).addTo(map)

      // Fix for default marker icons in Next.js
      delete L.Icon.Default.prototype._getIconUrl
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
      })

      // Travel destinations with details
      const destinations = [
        {
          lat: 28.6139,
          lng: 77.209,
          title: "Delhi NCR",
          desc: "Departure Point - Your adventure starts here!",
          icon: "🏛️"
        },
        {
          lat: 32.2432,
          lng: 77.1892,
          title: "Kasol",
          desc: "Mini Israel of India - Perfect for soul searching",
          icon: "🏔️"
        },
        {
          lat: 32.2396,
          lng: 77.1887,
          title: "Tosh",
          desc: "Hippie village with stunning mountain views",
          icon: "🏕️"
        },
        {
          lat: 32.2396,
          lng: 77.1887,
          title: "Manali",
          desc: "Adventure capital of Himachal Pradesh",
          icon: "⛷️"
        },
        {
          lat: 30.0668,
          lng: 79.2165,
          title: "Tungnath",
          desc: "Highest Shiva temple trek in the world",
          icon: "🕉️"
        },
        {
          lat: 31.6057,
          lng: 77.3888,
          title: "Tirthan Valley",
          desc: "Untouched natural beauty and trout fishing",
          icon: "🐟"
        }
      ]

      // Add markers for each destination
      destinations.forEach((dest, index) => {
        const marker = L.marker([dest.lat, dest.lng]).addTo(map)

        marker.bindPopup(`
          <div style="text-align: center; min-width: 200px;">
            <div style="font-size: 24px; margin-bottom: 8px;">${dest.icon}</div>
            <h3 style="margin: 0 0 8px 0; color: #f97316; font-weight: bold;">${dest.title}</h3>
            <p style="margin: 0; color: #666; font-size: 14px;">${dest.desc}</p>
            ${index > 0 ? '<button style="margin-top: 8px; background: #f97316; color: white; border: none; padding: 4px 12px; border-radius: 4px; cursor: pointer;">Book This Trip</button>' : ''}
          </div>
        `)
      })

      // Add a circle to show service area around Delhi NCR
      L.circle([28.6139, 77.209], {
        color: '#0ea5e9',
        fillColor: '#0ea5e9',
        fillOpacity: 0.1,
        radius: 50000
      }).addTo(map).bindPopup("Safar Dil Se Service Area - Delhi NCR")

      // Add a polyline connecting Delhi to mountain destinations
      const routeCoordinates = [
        [28.6139, 77.209], // Delhi
        [32.2432, 77.1892], // Kasol
        [30.0668, 79.2165], // Tungnath
        [31.6057, 77.3888]  // Tirthan
      ]

      L.polyline(routeCoordinates, {
        color: '#f97316',
        weight: 3,
        opacity: 0.7,
        dashArray: '10, 5'
      }).addTo(map).bindPopup("Popular travel routes from Delhi")
    })

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [])

  return (
    <div 
      ref={mapRef} 
      className="w-full h-96 rounded-lg"
      style={{ minHeight: '400px' }}
    />
  )
}
