import TransactionModel from "../models/transaction.model";

export class TransactionRepository {
  private readonly model;

  constructor() {
    this.model = TransactionModel;
  }

  async create(data: { type: string; amount: number; user: string }) {
    return this.model.create(data);
  }

  async findById(id: string) {
    return this.model.findById(id).populate("user");
  }

  async update(id: string, data: { type?: string; amount?: number }) {
    return this.model.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id: string) {
    return this.model.findByIdAndDelete(id);
  }

  async findAll(userId: string) {
    return this.model.find({ user: userId }).populate("user");
  }

  async findByUser(userId: string) {
    return this.model.find({ user: userId }).populate("user");
  }
}
