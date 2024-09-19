// Navbar.jsx
import { Link } from "react-router-dom";
import { Eye, ShoppingCart, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar({ setShowLogin, setShowRegister, setShowCart, setShowFavorites }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center justify-between border-b">
      <Link className="flex items-center justify-center" to="/">
        <Eye className="h-6 w-6" />
        <span className="ml-2 font-bold">Acme Optical</span>
      </Link>
      
      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-6">
        <Link to="/" className="text-sm font-medium hover:underline underline-offset-4">Home</Link>
        <Link to="/products" className="text-sm font-medium hover:underline underline-offset-4">Products</Link>
        <Link to="/services" className="text-sm font-medium hover:underline underline-offset-4">Services</Link>
        <Link to="/about" className="text-sm font-medium hover:underline underline-offset-4">About</Link>
        <Link to="/contact" className="text-sm font-medium hover:underline underline-offset-4">Contact</Link>
      </nav>

      <div className="flex items-center gap-4">
        <button onClick={() => setShowLogin(true)} className="hidden sm:inline-flex items-center justify-center px-3 py-1.5 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
          Login
        </button>
        <button onClick={() => setShowRegister(true)} className="hidden sm:inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded-md text-sm font-medium text-white bg-gray-900 hover:bg-gray-950">
          Register
        </button>
        <button onClick={() => setShowCart(true)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100">
          <ShoppingCart className="h-5 w-5" />
        </button>
        <button className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100" onClick={() => setShowMobileMenu(!showMobileMenu)}>
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="md:hidden">
          <nav className="flex flex-col p-4 space-y-2 bg-gray-100">
            <Link to="/" onClick={() => setShowMobileMenu(false)} className="text-sm font-medium">Home</Link>
            <Link to="/products" onClick={() => setShowMobileMenu(false)} className="text-sm font-medium">Products</Link>
            <Link to="/services" onClick={() => setShowMobileMenu(false)} className="text-sm font-medium">Services</Link>
            <Link to="/about" onClick={() => setShowMobileMenu(false)} className="text-sm font-medium">About</Link>
            <Link to="/contact" onClick={() => setShowMobileMenu(false)} className="text-sm font-medium">Contact</Link>
            <button onClick={() => { setShowLogin(true); setShowMobileMenu(false); }} className="text-sm font-medium">Login</button>
            <button onClick={() => { setShowRegister(true); setShowMobileMenu(false); }} className="text-sm font-medium">Register</button>
          </nav>
        </div>
      )}
    </header>
  );
}
