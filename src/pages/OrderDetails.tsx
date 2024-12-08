import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Package, User, Clock } from 'lucide-react';
import { api } from '../lib/api';

export function OrderDetails() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const data = await api.getOrderDetails(id); // Fetch order details by ID
        setOrder(data);
      } catch (err) {
        setError('Error fetching order details');
      } finally {
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!order) {
    return <div>No order found.</div>;
  }

  return (
    <div className="space-y-6">
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Order Details
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Order ID: {order.order_id}
          </p>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Delivery Status: {order.delivery_status}
          </p>
        </div>

        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500 flex items-center">
                <User className="h-5 w-5 mr-2" />
                Customer ID
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {order.customer_id}
              </dd>
            </div>

            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500 flex items-center">
                <User className="h-5 w-5 mr-2" />
                Postman ID
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {order.postman_id}
              </dd>
            </div>

            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500 flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                Order Date
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {new Date(order.order_date).toLocaleDateString()}
              </dd>
            </div>

            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500 flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                Delivery Date
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {new Date(order.delivery_date).toLocaleDateString()}
              </dd>
            </div>

            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500 flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                Predicted Slot
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {order.slot_predicted}
              </dd>
            </div>

            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500 flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                Confirmed Slot
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {order.slot_confirmed}
              </dd>
            </div>

            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500 flex items-center">
                <Package className="h-5 w-5 mr-2" />
                Item Type
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {order.item_type}
              </dd>
            </div>

            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500 flex items-center">
                <Package className="h-5 w-5 mr-2" />
                Pincode
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {order.pincode}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}