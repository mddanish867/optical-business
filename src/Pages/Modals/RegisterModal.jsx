import React from 'react'

function RegisterModal({setShowRegister}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <h2 className="text-2xl font-bold mb-4">Register</h2>
              <form className="space-y-4">
                <input type="text" placeholder="Full Name" className="w-full px-3 py-2 border rounded" />
                <input type="email" placeholder="Email" className="w-full px-3 py-2 border rounded" />
                <input type="password" placeholder="Password" className="w-full px-3 py-2 border rounded" />
                <input type="password" placeholder="Confirm Password" className="w-full px-3 py-2 border rounded" />
                <button className="w-full bg-gray-950 hover:bg-gray-800 text-white py-2 rounded">Register</button>
              </form>
              <button className="mt-4 text-gray-950 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all" onClick={() => setShowRegister(false)}>
                Close
              </button>
            </div>
          </div>
  )
}

export default RegisterModal
