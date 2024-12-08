import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
  customer_id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  phone_number: { type: String, required: true },
  address: [
    {
      house: String,
      locality: String,
      city: String,
      state: String,
      pincode: String,
      latitude: Number,
      longitude: Number,
      type: String,
    },
  ],
  pincode: String,
  preferred_slot: String,
  order_history: [
    {
      order_id: String,
      status: String,
      delivery_date: Date,
    },
  ],
});

export const Customer = mongoose.model('Customer', customerSchema);