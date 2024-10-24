import mongoose, { Document, Schema } from 'mongoose';
import CardModel, { ICard } from './card.model';
import TransactionModel, { ITransaction } from './transaction.model';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  accountBalance?: number;
  creditCards: ICard[];
  transactions: ITransaction[];
}

const UserSchema: Schema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  accountBalance: { type: Number},
  creditCards: [CardModel],
  transactions: [TransactionModel]
}, { timestamps: true });

const UserModel: mongoose.Model<IUser> = mongoose.models.User || mongoose.model("User", UserSchema);

export default UserModel;