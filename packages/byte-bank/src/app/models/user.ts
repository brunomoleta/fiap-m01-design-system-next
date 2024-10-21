import mongoose from 'mongoose';
import Card from "./card";
import Transaction from "./transaction";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  accountBalance: { type: Number},
  creditCards: [Card],
  transactions: [Transaction]
}, { timestamps: true });

export default mongoose.models.User || mongoose.model('User', userSchema);