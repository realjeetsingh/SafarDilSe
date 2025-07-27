
'use client'

import { useState } from 'react'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  const galleryImages = [
    {
      id: 1,
      caption: "Bonfire Night – Kasol",
      category: "adventure",
      description: "Magical evenings by the Parvati River with fellow travelers"
    },
    {
      id: 2,
      caption: "Tungnath Summit",
      category: "trekking", 
      description: "Reaching the world's highest Shiva temple"
    },
    {
      id: 3,
      caption: "Tirthan Valley Views",
      category: "nature",
      description: "Pristine landscapes of hidden Himachal gem"
    },
    {
      id: 4,
      caption: "Group Adventure",
      category: "community",
      description: "Making lifelong friendships on the trails"
    },
    {
      id: 5,
      caption: "Manali Sunrise",
      category: "nature",
      description: "Golden hour magic in the Himalayas"
    },
    {
      id: 6,
      caption: "Trek Memories",
      category: "trekking",
      description: "Conquering peaks together"
    },
    {
      id: 7,
      caption: "Riverside Camping",
      category: "adventure",
      description: "Peaceful nights under the stars"
    },
    {
      id: 8,
      caption: "Local Culture",
      category: "culture",
      description: "Experiencing authentic mountain life"
    }
  ]

  const [filter, setFilter] = useState('all')
  const categories = ['all', 'adventure', 'trekking', 'nature', 'community', 'culture']

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter)

  const getCategoryColor = (category) => {
    const colors = {
      adventure: 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400',
      trekking: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
      nature: 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
      community: 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400',
      culture: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
    }
    return colors[category] || 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
  }

  return (
    <section className="pt-24 pb-16 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Travel Gallery
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real moments from our Safars - captured memories that last forever
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full capitalize font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-orange-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-700'
              }`}
            >
              {category === 'all' ? 'All Photos' : category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div 
              key={image.id}
              className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105"
              onClick={() => setSelectedImage(image)}
            >
              {/* Image Placeholder */}
              <div className="aspect-square bg-gradient-to-br from-orange-400 to-blue-500 flex items-center justify-center">
                <div className="text-center text-white p-4">
                  <div className="text-4xl mb-2">📸</div>
                  <p className="font-semibold">{image.caption}</p>
                </div>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-bold text-lg mb-1">{image.caption}</h3>
                  <p className="text-sm opacity-90">{image.description}</p>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-3 right-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(image.category)}`}>
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white z-10"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Image */}
                <div className="aspect-video bg-gradient-to-br from-orange-400 to-blue-500 flex items-center justify-center rounded-t-2xl">
                  <div className="text-center text-white p-8">
                    <div className="text-6xl mb-4">📸</div>
                    <h2 className="text-3xl font-bold">{selectedImage.caption}</h2>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(selectedImage.category)}`}>
                      {selectedImage.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {selectedImage.caption}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                    {selectedImage.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Want to Be Part of Our Next Gallery?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Join our upcoming trips and create your own unforgettable memories
            </p>
            <button
              onClick={() => {
                const message = "Hi! I saw your gallery and would love to join your next trip. Can you share the upcoming schedules?"
                const whatsappUrl = `https://wa.me/919599863263?text=${encodeURIComponent(message)}`
                window.open(whatsappUrl, '_blank')
              }}
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Join Next Adventure
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
