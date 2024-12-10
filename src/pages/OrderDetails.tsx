import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../lib/api';

interface Order {
  order_id: string;
  customer_id: string;
  postman_id: string;
  order_date: string;
  delivery_date: string;
  slot_predicted: string;
  slot_confirmed: string;
  pincode: string;
  delivery_status: string;
  item_type: string;
}

export function OrderDetails() {
  const { customerId } = useParams<{ customerId: string }>();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchOrderDetails = async () => {
      if (!customerId) {
        setError('Customer ID is required');
        setLoading(false);
        return;
      }

      try {
        const data = await api.getOrderDetailsByCustomerId(customerId);
        console.log('Data from OrderDetails Page: ', data)
        console.log('Data From OrderDetails Array: ', orders) // Fetch orders by customer ID
        setOrders(data);
      } catch (err) {
        setError('Error fetching order details');
      } finally {
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, [customerId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (orders.length === 0) {
    return <div>No orders found for this customer.</div>;
  }

  return (
    <div className="space-y-6">
      <h3 className="text-lg leading-6 font-medium text-gray-900">Order Details</h3>
      {orders.map(order => (
        <div key={order.order_id} className="bg-white shadow overflow-hidden sm:rounded-lg p-4">
          <p>Order ID: {order.order_id}</p>
          <p>Delivery Status: {order.delivery_status}</p>
          <p>Order Date: {new Date(order.order_date).toLocaleDateString()}</p>
          <p>Delivery Date: {new Date(order.delivery_date).toLocaleDateString()}</p>
          <p>Predicted Slot: {order.slot_predicted}</p>
          <p>Confirmed Slot: {order.slot_confirmed}</p>
          <p>Item Type: {order.item_type}</p>
          <p>Pincode: {order.pincode}</p>
        </div>
      ))}
    </div>
  );
}