import mongoose, { Document, Schema } from "mongoose";
import { IPaymentMethod, PaymentMethodSchema } from "./paymentMethods.model";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  accountBalance?: number;
  paymentMethods: IPaymentMethod[];
  transactions: mongoose.Types.ObjectId[]; // Armazena apenas IDs de transações
}

const UserSchema: Schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    accountBalance: { type: Number },
    paymentMethods: [PaymentMethodSchema],
    transactions: [{ type: Schema.Types.ObjectId, ref: "Transaction" }], // Define o campo como referência para o modelo Transaction
  },
  { timestamps: true }
);

const UserModel: mongoose.Model<IUser> =
  mongoose.models.User || mongoose.model("User", UserSchema);

export default UserModel;
