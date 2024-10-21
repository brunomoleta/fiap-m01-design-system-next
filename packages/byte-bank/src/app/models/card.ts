import mongoose from 'mongoose';

const cardSchema = new mongoose.Schema({
  cardNumber: { type: String, required: true, match: [/^\d{16}$/, 'Card number must have 16 digits.'] },
  cardName: { type: String, required: true },
  cardType: { type: String, enum: ['debit', 'credit', 'debit and credit'], required: true },
  expiryDate: { type: String, required: true },
  cvv: { type: String, required: true },
});

export default mongoose.models.Card || mongoose.model('Card', cardSchema);