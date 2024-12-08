import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateTimeSlots() {
  const slots = [];
  for (let hour = 9; hour <= 20; hour++) {
    slots.push(`${hour}:00 - ${hour}:30`);
    slots.push(`${hour}:30 - ${hour + 1}:00`);
  }
  return slots;
}

export function generateAISlots(orderHistory: any[]) {
  // Simplified AI logic - in reality, this would be more sophisticated
  const preferredSlots = ['10:00 - 10:30', '14:00 - 14:30', '18:00 - 18:30'];
  return preferredSlots;
}