import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const api = {
  // Fetch customers
  getCustomers: async () => {
    const response = await axios.get(`${API_URL}/customers`);
    console.log(response.data);
    return response.data;
  },

  // Fetch order details by ID
  getOrderDetails: async (id: string) => {
    const response = await axios.get(`${API_URL}/orders/${id}`); // Updated to use the specific order ID
    return response.data;
  },

  // Fetch postmen
  getPostmen: async () => {
    const response = await axios.get(`${API_URL}/postmen`);
    return response.data;
  },
};