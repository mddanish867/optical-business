import React from 'react'
import { useNavigate } from 'react-router-dom'

function CartModal({setShowCart}) {
  const navigate = useNavigate();

  function handleCheckout (){
    setShowCart(false);
    navigate("/checkout")
  }
  return (
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
      <button onClick={handleCheckout} className="w-full bg-gray-950 hover:bg-gray-800 text-white py-2 rounded mt-4">Proceed to Checkout</button>
      <button className="mt-4 text-gray-950 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all" onClick={() => setShowCart(false)}>
        Close
      </button>
    </div>
  </div>
  )
}

export default CartModal
