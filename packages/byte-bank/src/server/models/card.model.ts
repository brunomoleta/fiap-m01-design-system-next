import mongoose, { Document, Schema } from 'mongoose';

export interface ICard extends Document {
  cardNumber: string;
  cardName: string;
  cardType: 'debit' | 'credit' | 'debit and credit';
  expiryDate: string;
  cvv: string;
}

const CardSchema: Schema = new mongoose.Schema({
  cardNumber: { type: String, required: true, match: [/^\d{16}$/, 'Card number must have 16 digits.'] },
  cardName: { type: String, required: true },
  cardType: { type: String, enum: ['debit', 'credit', 'debit and credit'], required: true },
  expiryDate: { type: String, required: true },
  cvv: { type: String, required: true },
});

const CardModel: mongoose.Model<ICard> = mongoose.models.Card || mongoose.model("Card", CardSchema);

export default CardModel;