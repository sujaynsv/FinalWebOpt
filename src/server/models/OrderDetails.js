import mongoose from 'mongoose';

const orderDetailsSchema = new mongoose.Schema({
  order_id: { type: String, required: true, unique: true },
  customer_id: { type: String, required: true },
  postman_id: { type: String, required: true },
  order_date: { type: Date, required: true },
  delivery_date: { type: Date },
  slot_predicted: String,
  slot_confirmed: String,
  pincode: String,
  delivery_status: { type: String, enum: ['Pending', 'Delivered', 'Cancelled'], default: 'Pending' },
  delivery_time: Date,
  item_type: String,
});

export const OrderDetails = mongoose.model('OrderDetails', orderDetailsSchema);