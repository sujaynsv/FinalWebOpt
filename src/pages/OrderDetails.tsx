import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Package, User, MapPin, Clock } from 'lucide-react';
import { generateTimeSlots, generateAISlots } from '../lib/utils';

export function OrderDetails() {
  const { id } = useParams();
  const [selectedSlot, setSelectedSlot] = useState('');

  const mockOrder = {
    id,
    trackingNumber: 'TRK123456789',
    status: 'In Transit',
    sender: {
      name: 'John Doe',
      phone: '+91 98765 43210',
      address: '456 Business Park, Delhi',
    },
    receiver: {
      name: 'Jane Smith',
      phone: '+91 98765 43211',
      address: '123 Main St, Mumbai',
    },
    product: {
      name: 'Electronics Package',
      weight: '2.5 kg',
      dimensions: '30x20x15 cm',
    },
  };

  const aiSuggestedSlots = generateAISlots([]);
  const availableSlots = generateTimeSlots();

  return (
    <div className="space-y-6">
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Order Details
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Tracking Number: {mockOrder.trackingNumber}
          </p>
        </div>

        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500 flex items-center">
                <User className="h-5 w-5 mr-2" />
                Sender
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                <p>{mockOrder.sender.name}</p>
                <p>{mockOrder.sender.phone}</p>
                <p>{mockOrder.sender.address}</p>
              </dd>
            </div>

            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500 flex items-center">
                <User className="h-5 w-5 mr-2" />
                Receiver
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                <p>{mockOrder.receiver.name}</p>
                <p>{mockOrder.receiver.phone}</p>
                <p>{mockOrder.receiver.address}</p>
              </dd>
            </div>

            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500 flex items-center">
                <Package className="h-5 w-5 mr-2" />
                Package Details
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                <p>Name: {mockOrder.product.name}</p>
                <p>Weight: {mockOrder.product.weight}</p>
                <p>Dimensions: {mockOrder.product.dimensions}</p>
              </dd>
            </div>

            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500 flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                AI Suggested Time Slots
              </dt>
              <dd className="mt-1 grid grid-cols-1 gap-2 sm:grid-cols-3">
                {aiSuggestedSlots.map((slot) => (
                  <button
                    key={slot}
                    onClick={() => setSelectedSlot(slot)}
                    className={`px-4 py-2 text-sm font-medium rounded-md ${
                      selectedSlot === slot
                        ? 'bg-indigo-600 text-white'
                        : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </dd>
            </div>

            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500">Available Time Slots</dt>
              <dd className="mt-1 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {availableSlots.map((slot) => (
                  <button
                    key={slot}
                    onClick={() => setSelectedSlot(slot)}
                    className={`px-4 py-2 text-sm font-medium rounded-md ${
                      selectedSlot === slot
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}