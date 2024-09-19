import { useState } from "react";

export default function CheckoutForm() {
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
                    <img src="/placeholder.svg?height=80&width=80" alt="Product" className="w-20 h-20 object-cover rounded" />
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