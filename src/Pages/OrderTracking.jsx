import React, { useState } from 'react'

export default function OrderTracking() {
  const [orderNumber, setOrderNumber] = useState('')
  const [orderStatus, setOrderStatus] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulating an API call to fetch order status
    const fakeOrderStatus = {
      orderNumber: orderNumber,
      status: 'In Transit',
      estimatedDelivery: 'June 20, 2023',
      shippingAddress: '123 Vision Street, Eye City, EC 12345',
      items: [
        { name: 'Designer Eyeglasses', color: 'Black', quantity: 1 }
      ],
      trackingEvents: [
        { date: 'June 15, 2023', time: '10:00 AM', description: 'Order Placed' },
        { date: 'June 16, 2023', time: '2:00 PM', description: 'Order Shipped' },
        { date: 'June 18, 2023', time: '9:30 AM', description: 'In Transit' }
      ]
    }
    setOrderStatus(fakeOrderStatus)
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">Track Your Order</h1>
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="flex items-center border-b border-indigo-500 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Enter your order number"
              value={orderNumber}
              onChange={(e) => setOrderNumber(e.target.value)}
              required
            />
            <button
              className="flex-shrink-0 bg-indigo-500 hover:bg-indigo-700 border-indigo-500 hover:border-indigo-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="submit"
            >
              Track Order
            </button>
          </div>
        </form>

        {orderStatus && (
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h2 className="text-lg leading-6 font-medium text-gray-900">Order Status: {orderStatus.status}</h2>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">Order Number: {orderStatus.orderNumber}</p>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
              <dl className="sm:divide-y sm:divide-gray-200">
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Estimated Delivery</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{orderStatus.estimatedDelivery}</dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Shipping Address</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{orderStatus.shippingAddress}</dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Items</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                      {orderStatus.items.map((item, index) => (
                        <li key={index} className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                          <div className="w-0 flex-1 flex items-center">
                            <span className="ml-2 flex-1 w-0 truncate">
                              {item.name} - {item.color} (Qty: {item.quantity})
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Tracking Events</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                      {orderStatus.trackingEvents.map((event, index) => (
                        <li key={index} className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                          <div className="w-0 flex-1 flex items-center">
                            <span className="ml-2 flex-1 w-0 truncate">
                              {event.date} {event.time} - {event.description}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}