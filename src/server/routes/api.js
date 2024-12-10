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
router.get('/order/:customer_id', async (req, res) => {
  try {
    // Retrieve the customer_id from the route parameter
    const customerId = req.params.customer_id;

    // Fetch the order details where the customer_id matches the provided id
    const details = await OrderDetails.find({ customer_id: customerId });

    // Check if order details were found
    if (details.length === 0) {
      return res.status(404).send('No order details found for the given customer ID.');
    }

    // Send the found order details in response
    res.json(details);
  } catch (error) {
    // Handle possible errors during the database operation
    res.status(500).send('Failed to retrieve order details: ' + error.message);
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