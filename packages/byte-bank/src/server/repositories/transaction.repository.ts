import TransactionModel, { ITransaction } from '../models/transaction.model';
import {ICreateTransactionRequest} from "$/server/services/transaction.service";

export class TransactionRepository {
  private readonly model = TransactionModel;

  async create(data: ICreateTransactionRequest) {
    const newTransaction = new TransactionModel(data);
    return await newTransaction.save();
  }

  async getAll(userId: string) {
    return this.model.find({ user: userId }).sort({ createdAt: -1 });
  }

  async findOne(transactionId: string, userId: string) {
    return this.model.findById({_id: transactionId, user: userId});
  }

  async update(transactionId: string, data: Partial<ITransaction>) {
    return this.model.findByIdAndUpdate(transactionId, data, { new: true });
  }

  async delete(transactionId: string) {
    return this.model.findByIdAndDelete(transactionId);
  }
}