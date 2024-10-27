import mongoose, { Document, Schema } from 'mongoose';
import { IUser } from './user.model';

export interface IInvestment extends Document {
  user: IUser['_id'];
  stocks: number;
  funds: number;
  publicTreasure: number;
  privatePension: number;
  totalAmount?: number;
}

const InvestmentSchema: Schema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  stocks: { type: Number, default: 0 },
  funds: { type: Number, default: 0 },
  publicTreasure: { type: Number, default: 0 },
  privatePension: { type: Number, default: 0 },
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
})

export default mongoose.models.Investment || mongoose.model<IInvestment>('Investment', InvestmentSchema);