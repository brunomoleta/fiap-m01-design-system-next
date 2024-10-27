import mongoose, { Document, Schema } from 'mongoose';
import { IUser } from './user.model';

export interface ITransaction extends Document {
  type: 'deposito' | 'transferencia' | 'saque' | 'compra' | 'pagamento';
  amount: number;
  user: IUser['_id'];
}

export const TransactionSchema: Schema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['deposito', 'transferencia', 'saque', 'compra', 'pagamento'],
    required: true
  },
  amount: { type: Number, required: true },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, { timestamps: true });

const TransactionModel = mongoose.models.Transaction || mongoose.model<ITransaction>('Transaction', TransactionSchema)

export default TransactionModel;