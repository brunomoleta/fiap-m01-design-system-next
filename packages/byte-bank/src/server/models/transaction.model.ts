import mongoose, { Document, Schema } from "mongoose";
import UserModel from "./user.model"; // Importação explícita do UserModel para garantir o registro

export interface ITransaction extends Document {
  type: "deposito" | "transferencia" | "saque" | "compra" | "pagamento";
  amount: number;
  user: mongoose.Types.ObjectId;
}

const TransactionSchema: Schema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["deposito", "transferencia", "saque", "compra", "pagamento"],
      required: true,
    },
    amount: { type: Number, required: true },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const TransactionModel =
  mongoose.models.Transaction ||
  mongoose.model<ITransaction>("Transaction", TransactionSchema);

export default TransactionModel;
