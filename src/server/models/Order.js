import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  trackingNumber: {
    type: String,
    required: true,
    unique: true,
  },
  status: {
    type: String,
    required: true,
    enum: ['Pending', 'In Transit', 'Delivered', 'Cancelled'],
    default: 'Pending',
  },
  sender: {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
  },
  receiver: {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
  },
  product: {
    name: { type: String, required: true },
    weight: { type: String, required: true },
    dimensions: { type: String, required: true },
  },
  scheduledTime: {
    type: String,
    required: false,
  },
  aiSuggestedSlots: [{
    type: String,
  }],
  deliveryHistory: [{
    status: String,
    timestamp: Date,
    location: String,
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export const Order = mongoose.model('Order', orderSchema);