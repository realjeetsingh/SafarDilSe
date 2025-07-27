
// components/Header.js - Website header with navigation
'use client'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white dark:bg-gray-900 shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo & Title */}
        <a href="#home" className="flex items-center space-x-2">
          <span className="text-3xl">🏔️</span>
          <span className="text-2xl font-bold text-adventure-orange">Safar Dil Se</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {['home','destinations','packages','about','contact'].map(id => (
            <a key={id} href={`#${id}`} className="text-gray-700 dark:text-gray-300 hover:text-adventure-orange transition-colors capitalize">{id}</a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-4">
          <div className="flex flex-col space-y-4 px-6">
            {['home','destinations','packages','about','contact'].map(id => (
              <a key={id} href={`#${id}`} onClick={()=>setIsMenuOpen(false)} className="text-gray-700 dark:text-gray-300 hover:text-adventure-orange transition-colors capitalize">{id}</a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
