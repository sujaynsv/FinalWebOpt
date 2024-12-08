import express from 'express';
import { Customer } from '../models/Customer.js';
import { OrderDetails } from '../models/OrderDetails.js';
import { Postman } from '../models/Postman.js';

const router = express.Router();

// Get all customers
router.get('/customers', async (req, res) => {
    try {
      const customers = await Customer.find();
      res.json(customers);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching customers' });
    }
});  

// Get all order details
router.get('/order-details', async (req, res) => {
  try {
    const orders = await OrderDetails.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching order details' });
  }
});

// Get all postmen
router.get('/postmen', async (req, res) => {
  try {
    const postmen = await Postman.find();
    res.json(postmen);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching postmen' });
  }
});

export default router;