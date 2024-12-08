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
// Get single order
router.get('/:id', async (req, res) => {
    try {
      const order = await OrderDetails.findById(req.params.id);
      if (!order) {
        return res.status(404).json({ message: 'Order not found' });
      }
      res.json(order);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching order' });
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