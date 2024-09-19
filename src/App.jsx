// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from './Pages/Navbar';
import Footer from './Pages/Footer';
import HomePage from './Pages/HomePage';
import ProductsPage from './Pages/ProductPage';
import ServicesPage from './Pages/ServicesPage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import BookAppointment from './Pages/BookAppoinment';
import CheckoutForm from './Pages/CheckoutForm';
import LoginModal from '../src/Pages/Modals/LoginModal';
import RegisterModal from '../src/Pages/Modals/RegisterModal';
import CartModal from '../src/Pages/Modals/CartModal';
import FavoritesModal from '../src/Pages/Modals/FavoritesModal';

export default function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar 
          setShowLogin={setShowLogin} 
          setShowRegister={setShowRegister} 
          setShowCart={setShowCart}
          setShowFavorites={setShowFavorites}
        />
        
        {/* Main Content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/bookappoinment" element={<BookAppointment />} />
            <Route path="/checkout" element={<CheckoutForm />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Modals */}
        {showLogin && <LoginModal setShowLogin={setShowLogin} />}
        {showRegister && <RegisterModal setShowRegister={setShowRegister} />}
        {showCart && <CartModal setShowCart={setShowCart} />}
        {showFavorites && <FavoritesModal setShowFavorites={setShowFavorites} />}
      </div>
    </BrowserRouter>
  );
}
