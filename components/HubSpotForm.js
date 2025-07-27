// FIXED: Proper HubSpot form integration for Next.js
'use client'
import { useEffect } from 'react'

export default function HubSpotForm() {
  useEffect(() => {
    // Clean up any existing script
    const existingScript = document.getElementById('hs-script-loader')
    if (existingScript) {
      existingScript.remove()
    }

    // Create and load HubSpot script
    const script = document.createElement('script')
    script.src = 'https://js-na2.hsforms.net/forms/embed/243303486.js'
    script.async = true
    script.defer = true
    script.id = 'hs-script-loader'
    document.body.appendChild(script)

    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: 'na2',
          portalId: '243303486',
          formId: '887d4be4-ee48-43ca-aab4-450d9ce1bfb7',
          target: '#hubspot-form-container'
        })
      }
    }

    // Cleanup function
    return () => {
      const scriptToRemove = document.getElementById('hs-script-loader')
      if (scriptToRemove) {
        scriptToRemove.remove()
      }
    }
  }, [])

  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Book Your Adventure
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          Fill out the form below and we'll get back to you within 24 hours!
        </p>
      </div>

      <div 
        id="hubspot-form-container" 
        className="min-h-[300px] flex items-center justify-center"
      >
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-adventure-orange mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">Loading form...</p>
        </div>
      </div>
    </div>
  )
}
