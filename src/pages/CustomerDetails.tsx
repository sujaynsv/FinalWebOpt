import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../lib/api';

interface Customer {
  customer_id: string;
  name: string;
  phone_number: string;
  address: Array<{
    house: string;
    locality: string;
    city: string;
    state: string;
    pincode: string;
  }>;
}

export function CustomerDetails() {
  const { customerId } = useParams<{ customerId: string }>();
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCustomerDetails = async (customerId: string) => {
      try {
        const data = await api.getCustomers(); // Call without parameters
        setCustomer(data);
      } catch (err) {
        setError('Error fetching customer details');
      } finally {
        setLoading(false);
      }
    };

    if (customerId) {
      fetchCustomerDetails(customerId); // Call with customerId
    }
  }, [customerId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!customer) {
    return <div>No customer found.</div>;
  }

  return (
    <div>
      <h1>{customer.name}</h1>
      <p>Phone: {customer.phone_number}</p>
      <p>Address: {customer.address[0]?.city}, {customer.address[0]?.state}</p>
    </div>
  );
}