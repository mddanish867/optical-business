import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CheckoutForm() {
  const navigate = useNavigate();
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      city: '',
      country: '',
      postalCode: '',
      cardName: '',
      cardNumber: '',
      expirationDate: '',
      cvv: ''
    })
  
    const handleChange = (e) => {
      const { name, value } = e.target
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }))
    }
  
    const handleSubmit = (e) => {
      e.preventDefault()
      // Here you would typically process the payment and send the order to your backend
      console.log('Order submitted:', formData)
      // Reset form after submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        country: '',
        postalCode: '',
        cardName: '',
        cardNumber: '',
        expirationDate: '',
        cvv: ''
      })
    }
  
    const handlePlaceOrder = () => {
      navigate("/orderConfrimation")
    }
    return (
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Product Details - Left Side */}
              <div className="md:w-1/2 p-6 bg-gray-50">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Order</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <img src="data:image/jpeg;base64,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" alt="Product" className="w-20 h-20 object-cover rounded" />
                    <div>
                      <h3 className="font-semibold">Designer Eyeglasses</h3>
                      <p className="text-gray-600">Color: Black</p>
                      <p className="text-gray-600">Quantity: 1</p>
                    </div>
                    <span className="ml-auto font-semibold">$199.99</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>$199.99</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>$9.99</span>
                    </div>
                    <div className="flex justify-between font-semibold text-lg mt-4">
                      <span>Total</span>
                      <span>$209.98</span>
                    </div>
                  </div>
                </div>
              </div>
  
              {/* Checkout Form - Right Side */}
              <div className="md:w-1/2 p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Checkout</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 gap-y-4 gap-x-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                        First name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                        Last name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                      Street address
                    </label>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="grid grid-cols-1 gap-y-4 gap-x-4 sm:grid-cols-3">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                        value={formData.city}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                        Country
                      </label>
                      <select
                        id="country"
                        name="country"
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                        value={formData.country}
                        onChange={handleChange}
                      >
                        <option value="">Select a country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="UK">United Kingdom</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">
                        Postal code
                      </label>
                      <input
                        type="text"
                        name="postalCode"
                        id="postalCode"
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                        value={formData.postalCode}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <h3 className="text-lg font-medium text-gray-900">Payment details</h3>
                    <div className="mt-4 grid grid-cols-1 gap-y-4 gap-x-4 sm:grid-cols-2">
                      <div className="col-span-2">
                        <label htmlFor="cardName" className="block text-sm font-medium text-gray-700">
                          Name on card
                        </label>
                        <input
                          type="text"
                          name="cardName"
                          id="cardName"
                          required
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                          value={formData.cardName}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-span-2">
                        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
                          Card number
                        </label>
                        <input
                          type="text"
                          name="cardNumber"
                          id="cardNumber"
                          required
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                          value={formData.cardNumber}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="expirationDate" className="block text-sm font-medium text-gray-700">
                          Expiration date (MM/YY)
                        </label>
                        <input
                          type="text"
                          name="expirationDate"
                          id="expirationDate"
                          required
                          placeholder="MM/YY"
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                          value={formData.expirationDate}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
                          CVV
                        </label>
                        <input
                          type="text"
                          name="cvv"
                          id="cvv"
                          required
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                          value={formData.cvv}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                    onClick={handlePlaceOrder}
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-950 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    >
                      Place Order
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }