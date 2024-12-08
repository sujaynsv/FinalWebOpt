import React, { useEffect, useState } from 'react';
import { api } from '../lib/api.ts'; // Assuming you have an API utility

export function Dashboard() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const data = await api.getCustomers();
        console.log('Fetched customers:', data); // Log the fetched data
        setCustomers(data);
      } catch (error) {
        console.error('Error fetching customers:', error);
      }
    };

    fetchCustomers();
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Customer Dashboard</h1>
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {customers.length > 0 ? (
            customers.map((cust: any) => (
              <li key={cust.customer_id}>
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-black-600">{cust.name}</p>
                    <p className="text-sm text-gray-500">{cust.phone_number}</p>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    {Array.isArray(cust.address) && cust.address.length > 0
                      ? cust.address[0]?.city
                      : 'No city available'}
                  </p>
                </div>
              </li>
            ))
          ) : (
            <li>
              <div className="px-4 py-4 sm:px-6">
                <p className="text-sm text-gray-500">No customers found.</p>
              </div>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}