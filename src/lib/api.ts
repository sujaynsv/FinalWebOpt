import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const api = {
  // Fetch customers
  getCustomers: async () => {
    const response = await axios.get(`${API_URL}/customers`);
    console.log(response.data);
    return response.data;
  },

  // Fetch order details
  getOrderDetails: async () => {
    const response = await axios.get(`${API_URL}/order-details`);
    return response.data;
  },

  // Fetch postmen
  getPostmen: async () => {
    const response = await axios.get(`${API_URL}/postmen`);
    return response.data;
  },
};