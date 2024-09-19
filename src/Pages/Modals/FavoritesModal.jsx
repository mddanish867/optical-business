import React from 'react'

function FavoritesModal({setShowFavorites}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
    <div className="bg-white rounded-lg p-6 w-full max-w-md">
      <h2 className="text-2xl font-bold mb-4">Your Favorites</h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span>Favorite Product 1</span>
          <button   className="px-3 py-2 text-sm font-medium text-gray-950 border border-gray-950 rounded hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-all"
          >Add to Cart</button>
        </div>
        <div className="flex justify-between items-center">
          <span>Favorite Product 2</span>
          <button   className="px-3 py-2 text-sm font-medium text-blue-500 border border-gray-950 rounded hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-all"
          >Add to Cart</button>
        </div>
      </div>
      <button className="mt-4 text-gray-950 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-all" onClick={() => setShowFavorites(false)}>
        Close
      </button>
    </div>
  </div>
  )
}

export default FavoritesModal
