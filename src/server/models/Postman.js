import mongoose from 'mongoose';

const postmanSchema = new mongoose.Schema({
  postman_id: { type: String, required: true, unique: true },
  postman_name: { type: String, required: true },
  postman_phone: { type: String, required: true },
  pincode: String,
  availability_status: { type: Boolean, default: true },
  assigned_orders: [
    {
      order_id: String,
      customer_id: String,
      slot: String,
      delivery_status: { type: String, enum: ['Pending', 'Delivered', 'Cancelled'], default: 'Pending' },
    },
  ],
});

export const Postman = mongoose.model('Postman', postmanSchema);