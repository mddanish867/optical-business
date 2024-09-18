import { Eye, Glasses, Phone, Mail, MapPin, Clock, Star, ShoppingCart, Heart, Menu } from "lucide-react";
import { useState } from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

// Import your page components if they are in separate files
// import HomePage from './HomePage';
// import ProductsPage from './ProductsPage';
// import ServicesPage from './ServicesPage';
// import AboutPage from './AboutPage';
// import ContactPage from './ContactPage';

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

        {showRegister && (
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
        )}

        {showCart && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Product 1</span>
                  <span>$99.99</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Product 2</span>
                  <span>$149.99</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t">
                <div className="flex justify-between items-center font-bold">
                  <span>Total</span>
                  <span>$249.98</span>
                </div>
              </div>
              <button className="w-full bg-gray-950 hover:bg-gray-800 text-white py-2 rounded mt-4">Proceed to Checkout</button>
              <button className="mt-4 text-gray-950 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all" onClick={() => setShowCart(false)}>
                Close
              </button>
            </div>
          </div>
        )}

        {showFavorites && (
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
        )}
      </div>
    </BrowserRouter>
  );

  // Define your page components within the same file or import them if they are in separate files
  function HomePage() {
    return (
      <>
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
                  See the World Clearly
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Professional eye care and stylish eyewear for your perfect vision
                </p>
              </div>
              <div className="space-x-4">
                <button className="bg-white text-black hover:bg-gray-200 px-4 py-2 rounded">
                  Book an Appointment
                </button>
                <button className="text-white border border-white hover:bg-white hover:text-black px-4 py-2 rounded">
                  Our Services
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Featured Products</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="group relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={`/placeholder.svg?height=300&width=300`}
                    alt={`Product ${i}`}
                    className="object-cover w-full h-[300px] transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity opacity-0 group-hover:opacity-100 flex items-center justify-center">
                    <button className="mr-2 bg-gray-200 text-gray-800 px-3 py-1 rounded">
                      View Details
                    </button>
                    <button className="bg-blue-500 text-white px-3 py-1 rounded">
                      Add to Cart
                    </button>
                  </div>
                  <button
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 bg-white rounded-full p-1"
                  >
                    <Heart className="h-5 w-5 text-red-500" />
                    <span className="sr-only">Add to Favorites</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Services</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <Eye className="h-12 w-12 mb-4 text-blue-500" />
                <h3 className="text-xl font-bold mb-2">Eye Exams</h3>
                <p className="text-gray-500">Comprehensive eye exams using state-of-the-art technology</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Glasses className="h-12 w-12 mb-4 text-blue-500" />
                <h3 className="text-xl font-bold mb-2">Eyewear Fitting</h3>
                <p className="text-gray-500">Expert fitting for glasses and contact lenses</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Eye className="h-12 w-12 mb-4 text-blue-500" />
                <h3 className="text-xl font-bold mb-2">Vision Therapy</h3>
                <p className="text-gray-500">Personalized vision therapy programs for all ages</p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  function ProductsPage() {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Products</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="group relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={`/placeholder.svg?height=300&width=300`}
                  alt={`Product ${i}`}
                  className="object-cover w-full h-[300px] transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity opacity-0 group-hover:opacity-100 flex items-center justify-center">
                  <button className="mr-2 bg-gray-200 text-gray-800 px-3 py-1 rounded">
                    View Details
                  </button>
                  <button className="bg-blue-500 text-white px-3 py-1 rounded">
                    Add to Cart
                  </button>
                </div>
                <button
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 bg-white rounded-full p-1"
                >
                  <Heart className="h-5 w-5 text-red-500" />
                  <span className="sr-only">Add to Favorites</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  function ServicesPage() {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Services</h2>
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <Eye className="h-12 w-12 mb-4 text-blue-500" />
              <h3 className="text-xl font-bold mb-2">Comprehensive Eye Exams</h3>
              <p className="text-gray-500">Thorough eye health and vision assessments using advanced technology</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Glasses className="h-12 w-12 mb-4 text-blue-500" />
              <h3 className="text-xl font-bold mb-2">Eyewear Fitting and Styling</h3>
              <p className="text-gray-500">Expert fitting for glasses and contact lenses with personalized style advice</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Eye className="h-12 w-12 mb-4 text-blue-500" />
              <h3 className="text-xl font-bold mb-2">Vision Therapy</h3>
              <p className="text-gray-500">Customized programs to improve visual skills and processing</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Clock className="h-12 w-12 mb-4 text-blue-500" />
              <h3 className="text-xl font-bold mb-2">Emergency Eye Care</h3>
              <p className="text-gray-500">Prompt attention for unexpected eye injuries or conditions</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Glasses className="h-12 w-12 mb-4 text-blue-500" />
              <h3 className="text-xl font-bold mb-2">Specialty Contact Lenses</h3>
              <p className="text-gray-500">Fitting for hard-to-fit eyes and complex prescriptions</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Eye className="h-12 w-12 mb-4 text-blue-500" />
              <h3 className="text-xl font-bold mb-2">Pediatric Eye Care</h3>
              <p className="text-gray-500">Specialized care for children's visual development and eye health</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  function AboutPage() {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">About Us</h2>
          <div className="grid gap-6 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Our Mission</h3>
              <p className="text-gray-500">
                At Acme Optical, our mission is to provide exceptional eye care services and high-quality eyewear to
                enhance the vision and lives of our patients. We are committed to using the latest technology and
                techniques to ensure the best possible outcomes for every individual we serve.
              </p>
              <h3 className="text-2xl font-bold">Our Team</h3>
              <p className="text-gray-500">
                Our team of experienced optometrists and eyewear specialists are dedicated to delivering personalized
                care and expert advice. With years of experience and a passion for eye health, we're here to help you
                see the world more clearly.
              </p>
              <h3 className="text-2xl font-bold">Our Values</h3>
              <ul className="list-disc list-inside text-gray-500">
                <li>Excellence in patient care</li>
                <li>Continuous learning and innovation</li>
                <li>Integrity and transparency</li>
                <li>Community engagement</li>
              </ul>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Our team"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }

  function ContactPage() {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Contact Us</h2>
          <div className="grid gap-6 lg:grid-cols-2 items-start">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Get in Touch</h3>
              <p className="text-gray-500">
                Have questions or want to book an appointment? Reach out to us using the form or contact details below.
              </p>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-blue-500" />
                <span>(123) 456-7890</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-blue-500" />
                <span>info@acmeoptical.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-blue-500" />
                <span>123 Vision Street, Eye City, EC 12345</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-blue-500" />
                <span>Mon-Fri: 9am-6pm, Sat: 10am-4pm</span>
              </div>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-3 py-2 border rounded"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-3 py-2 border rounded"
              />
              <input
                type="tel"
                placeholder="Your Phone"
                className="w-full px-3 py-2 border rounded"
              />
              <textarea
                className="w-full h-32 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                placeholder="Your Message"
              ></textarea>
              <button className="w-full bg-green-500 text-white py-2 rounded">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}
