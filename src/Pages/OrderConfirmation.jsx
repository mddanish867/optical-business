import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function OrderConfirmation() {
   const navigate = useNavigate();

    const orderDetails = {
    orderNumber: '1234567890',
    orderDate: 'June 15, 2023',
    totalAmount: '$209.98',
    shippingAddress: '123 Vision Street, Eye City, EC 12345',
    items: [
      { name: 'Designer Eyeglasses', color: 'Black', quantity: 1, price: '$199.99' }
    ]
  }

  const handleTrackOrder = () => {
    navigate("/trackOrder")
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h1 className="text-3xl font-bold leading-6 text-gray-900">Order Confirmation</h1>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Thank you for your purchase!</p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Order number</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{orderDetails.orderNumber}</dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Order date</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{orderDetails.orderDate}</dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Total amount</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{orderDetails.totalAmount}</dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Shipping address</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{orderDetails.shippingAddress}</dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Order items</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                    {orderDetails.items.map((item, index) => (
                      <li key={index} className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                        <div className="w-0 flex-1 flex items-center">
                          <span className="ml-2 flex-1 w-0 truncate">
                            {item.name} - {item.color} (Qty: {item.quantity})
                          </span>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <span className="font-medium">{item.price}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-lg font-medium text-gray-900">What's Next?</h2>
          <div className="mt-4 bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="space-y-4">
                <p className="text-sm text-gray-500">
                  1. You will receive an order confirmation email with your order details and tracking information once your order ships.
                </p>
                <p className="text-sm text-gray-500">
                  2. Your order will be processed and shipped within 2-3 business days.
                </p>
                <p className="text-sm text-gray-500">
                  3. Once your order is shipped, you can track its progress using the tracking number provided in the confirmation email.
                </p>
                <p className="text-sm text-gray-500">
                  4. If you have any questions about your order, please contact our customer service team at support@acmeoptical.com or call us at (123) 456-7890.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-950 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            onClick= {handleTrackOrder}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  )
}