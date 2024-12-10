import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// In src/lib/api.ts
export const api = {
  // Fetch customers
  getCustomers: async () => {
    const response = await axios.get(`${API_URL}/customers`);
    return response.data;
  },

  // Fetch order details by customer ID
  getOrderDetailsByCustomerId: async (customerId: string) => {
    const response = await axios.get(`${API_URL}/orders?customer_id=${customerId}`);
    console.log("The Data from api.ts file is: ",response.data) // Adjust the endpoint as needed
    return response.data;
  },

  // Fetch order details by ID
  getOrderDetails: async (id: string) => {
    const response = await axios.get(`${API_URL}/orders/${id}`);
    return response.data;
  },

  // Fetch postmen
  getPostmen: async () => {
    const response = await axios.get(`${API_URL}/postmen`);
    return response.data;
  },
};