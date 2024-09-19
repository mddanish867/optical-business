import React from 'react'
import { Link } from "react-router-dom";
import { EyeOff, Home, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="flex justify-center">
          <EyeOff className="h-24 w-24 text-gray-600" />
        </div>
        <h1 className="mt-6 text-4xl font-extrabold text-gray-600 sm:text-5xl sm:tracking-tight lg:text-6xl">
          404
        </h1>
        <p className="mt-2 text-xl text-gray-500">Oops! We couldn't find that page.</p>
        <p className="mt-2 text-sm text-gray-500">
          The page you're looking for may have been moved, deleted, or possibly never existed.
        </p>
        
        <p className="mt-6 text-xs text-gray-500">
          If you think this is a mistake, please{' '}
          <Link href="/contact" className="text-indigo-600 hover:text-indigo-500">
            contact our support team
          </Link>
          .
        </p>
      </div>
    </div>
  )
}