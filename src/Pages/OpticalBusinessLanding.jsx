import { Eye, ShoppingCart, Menu } from "lucide-react";
import { useState } from "react";
import { BrowserRouter, Link, Routes, Route, useNavigate } from "react-router-dom";



export default function OpticalBusinessLanding() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <header className="px-4 lg:px-6 h-14 flex items-center justify-between border-b">
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
            <button onClick={() => setShowLogin(true)} className="hidden sm:inline-flex items-center justify-center px-3 py-1.5 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors">
              Login
            </button>
            <button onClick={() => setShowRegister(true)}   className="hidden sm:inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded-md text-sm font-medium text-white bg-gray-900 hover:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors"
            >
              Register
            </button>
            <button onClick={() => setShowCart(true)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </button>
            <button className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all" onClick={() => setShowMobileMenu(!showMobileMenu)}>
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </button>
          </div>
        </header>

        {showMobileMenu && (
          <div className="md:hidden">
            <nav className="flex flex-col p-4 space-y-2 bg-gray-100">
              <Link to="/" onClick={() => setShowMobileMenu(false)} className="text-sm font-medium hover:underline underline-offset-4">
                Home
              </Link>
              <Link to="/products" onClick={() => setShowMobileMenu(false)} className="text-sm font-medium hover:underline underline-offset-4">
                Products
              </Link>
              <Link to="/services" onClick={() => setShowMobileMenu(false)} className="text-sm font-medium hover:underline underline-offset-4">
                Services
              </Link>
              <Link to="/about" onClick={() => setShowMobileMenu(false)} className="text-sm font-medium hover:underline underline-offset-4">
                About
              </Link>
              <Link to="/contact" onClick={() => setShowMobileMenu(false)} className="text-sm font-medium hover:underline underline-offset-4">
                Contact
              </Link>
              <button   className="inline-flex items-center justify-center border border-gray-300 rounded-md px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all"
 onClick={() => { setShowLogin(true); setShowMobileMenu(false); }}>
                Login
              </button>
              <button   className="inline-flex items-center justify-center rounded-md px-3 py-1 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all"
 onClick={() => { setShowRegister(true); setShowMobileMenu(false); }}>
                Register
              </button>
            </nav>
          </div>
        )}

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/bookappoinment" element={<BookAppointment/>}/>
            <Route path="/checkout" element={<CheckoutForm/>}/>

            
            {/* Add a fallback route for undefined paths */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-gray-500">© 2023 Acme Optical. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4 text-gray-500" to="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4 text-gray-500" to="#">
              Privacy
            </Link>
          </nav>
        </footer>

        {/* Modals */}
        {showLogin && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <h2 className="text-2xl font-bold mb-4">Login</h2>
              <form className="space-y-4">
                <input type="email" placeholder="Email" className="w-full px-3 py-2 border rounded" />
                <input type="password" placeholder="Password" className="w-full px-3 py-2 border rounded" />
                <button className="w-full bg-gray-950 hover:bg-gray-800 text-white py-2 rounded">Login</button>
              </form>
              <button   className="mt-4 text-gray-950 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all"
 onClick={() => setShowLogin(false)}>
                Close
              </button>
            </div>
          </div>
        )}

        

      
      </div>
    </BrowserRouter>
  );

  // Define your page components within the same file or import them if they are in separate files
  

  

  

  

 

 

  
}
