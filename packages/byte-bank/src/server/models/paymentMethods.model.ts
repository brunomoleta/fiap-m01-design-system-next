import mongoose, { Document, Schema } from 'mongoose';

export interface IPaymentMethod extends Document {
  cardNumber: string;
  cardName: string;
  cardType: 'debit' | 'credit' | 'debit and credit';
  expiryDate: string;
  cvv: string;
}

export const PaymentMethodSchema: Schema = new mongoose.Schema({
  cardNumber: { type: String, required: true, match: [/^\d{16}$/, 'Card number must have 16 digits.'] },
  cardName: { type: String, required: true },
  cardType: { type: String, enum: ['debit', 'credit', 'debit and credit'], required: true },
  expiryDate: { type: String, required: true },
  cvv: { type: String, required: true },
});

const PaymentMethodsModel: mongoose.Model<IPaymentMethod> = mongoose.models.Card || mongoose.model("Card", PaymentMethodSchema);

export default PaymentMethodsModel;