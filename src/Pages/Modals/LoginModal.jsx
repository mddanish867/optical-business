// components/LoginModal.jsx
export default function LoginModal({ setShowLogin }) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <form className="space-y-4">
            <input type="email" placeholder="Email" className="w-full px-3 py-2 border rounded" />
            <input type="password" placeholder="Password" className="w-full px-3 py-2 border rounded" />
            <button className="w-full bg-gray-950 hover:bg-gray-800 text-white py-2 rounded">Login</button>
          </form>
          <button onClick={() => setShowLogin(false)} className="mt-4 text-gray-950 underline hover:text-gray-900">Close</button>
        </div>
      </div>
    );
  }
  