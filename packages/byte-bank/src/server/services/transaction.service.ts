import { TransactionRepository } from "../repositories/transaction.repository";
import { connectMongoDB } from "../libs/mongoDB";

export class TransactionService {
  private transactionRepository: TransactionRepository;

  constructor() {
    connectMongoDB();
    this.transactionRepository = new TransactionRepository();
  }

  createTransaction = async (data: {
    type: string;
    amount: number;
    user: string;
  }) => {
    try {
      return await this.transactionRepository.create(data);
    } catch (e) {
      let errorMessage = "An error occurred.";
      if (e instanceof Error) {
        errorMessage = e.message;
      }
      throw new Error(errorMessage);
    }
  };

  getTransactionById = async (id: string) => {
    try {
      const transaction = await this.transactionRepository.findById(id);
      if (!transaction) {
        throw new Error("Transação não encontrada.");
      }
      return transaction;
    } catch (e) {
      let errorMessage = "An error occurred.";
      if (e instanceof Error) {
        errorMessage = e.message;
      }
      throw new Error(errorMessage);
    }
  };

  updateTransaction = async (
    id: string,
    data: { type?: string; amount?: number }
  ) => {
    try {
      return await this.transactionRepository.update(id, data);
    } catch (e) {
      let errorMessage = "An error occurred.";
      if (e instanceof Error) {
        errorMessage = e.message;
      }
      throw new Error(errorMessage);
    }
  };

  deleteTransaction = async (id: string) => {
    try {
      return await this.transactionRepository.delete(id);
    } catch (e) {
      let errorMessage = "An error occurred.";
      if (e instanceof Error) {
        errorMessage = e.message;
      }
      throw new Error(errorMessage);
    }
  };

  getAllTransactions = async (userId: string) => {
    try {
      return await this.transactionRepository.findAll(userId);
    } catch (e) {
      let errorMessage = "An error occurred.";
      if (e instanceof Error) {
        errorMessage = e.message;
      }
      throw new Error(errorMessage);
    }
  };

  // Novo método findByUser para obter todas as transações de um usuário específico
  getTransactionsByUser = async (userId: string) => {
    try {
      return await this.transactionRepository.findByUser(userId);
    } catch (e) {
      let errorMessage = "An error occurred.";
      if (e instanceof Error) {
        errorMessage = e.message;
      }
      throw new Error(errorMessage);
    }
  };
}
