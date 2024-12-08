import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Truck, Clock, Shield } from 'lucide-react';

export function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-indigo-600">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              Smart Delivery System
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-indigo-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              AI-powered delivery scheduling that adapts to your lifestyle
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link
                to="/login"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="flex justify-center">
                <Package className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Smart Tracking</h3>
              <p className="mt-2 text-base text-gray-500">
                Real-time package tracking with precise location updates
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center">
                <Clock className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">AI Time Slots</h3>
              <p className="mt-2 text-base text-gray-500">
                AI-suggested delivery times based on your preferences
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center">
                <Truck className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Flexible Delivery</h3>
              <p className="mt-2 text-base text-gray-500">
                Choose and modify delivery slots that work for you
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center">
                <Shield className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Secure System</h3>
              <p className="mt-2 text-base text-gray-500">
                End-to-end security for your deliveries
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}