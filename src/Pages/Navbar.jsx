import { Link } from "react-router-dom";
import { Eye, ShoppingCart, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar({ setShowLogin, setShowRegister, setShowCart }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div>
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between border-b bg-black text-gray-200">
        <Link className="flex items-center justify-center" to="/">
          <Eye className="h-6 w-6" />
          <span className="ml-2 font-bold">Acme Optical</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            to="/"
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            to="/products"
          >
            Products
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            to="/services"
          >
            Services
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            to="/about"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            to="/contact"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowLogin(true)}
            className="hidden sm:inline-flex items-center justify-center px-3 py-1.5 border border-gray-300 rounded-md text-sm font-medium text-gray-300 hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
          >
            Login
          </button>
          <button
            onClick={() => setShowRegister(true)}
            className="hidden sm:inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded-md text-sm font-medium text-black bg-gray-200  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors"
          >
            Register
          </button>
          <button
            onClick={() => setShowCart(true)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Cart</span>
          </button>
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Menu</span>
          </button>
        </div>
      </header>

      {showMobileMenu && (
        <div className="md:hidden">
          <nav className="flex flex-col p-4 space-y-2 bg-gray-100">
            <Link
              to="/"
              onClick={() => setShowMobileMenu(false)}
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Home
            </Link>
            <Link
              to="/products"
              onClick={() => setShowMobileMenu(false)}
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Products
            </Link>
            <Link
              to="/services"
              onClick={() => setShowMobileMenu(false)}
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Services
            </Link>
            <Link
              to="/about"
              onClick={() => setShowMobileMenu(false)}
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              About
            </Link>
            <Link
              to="/contact"
              onClick={() => setShowMobileMenu(false)}
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Contact
            </Link>
            <button
              className="inline-flex items-center justify-center border border-gray-300 rounded-md px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all"
              onClick={() => {
                setShowLogin(true);
                setShowMobileMenu(false);
              }}
            >
              Login
            </button>
            <button
              className="inline-flex items-center justify-center rounded-md px-3 py-1 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all"
              onClick={() => {
                setShowRegister(true);
                setShowMobileMenu(false);
              }}
            >
              Register
            </button>
          </nav>
        </div>
      )}
    </div>
  );
}
