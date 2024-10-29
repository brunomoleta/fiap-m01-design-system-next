import { TransactionRepository } from '../repositories/transaction.repository';
import { ITransaction } from '../models/transaction.model';
import {IUser} from "$/server/models/user.model";
import {verifyBearerToken} from "../middleware/token.middleware";
import {NextRequest} from "next/server";

export interface ICreateTransactionRequest {
  type: 'deposito' | 'transferencia' | 'saque' | 'compra' | 'pagamento';
  amount: number;
  user: IUser['_id'];
}

export class TransactionService {
  private readonly repository: TransactionRepository;

  constructor() {
    this.repository = new TransactionRepository();
  }

  async createTransaction(data:ICreateTransactionRequest, req: NextRequest) {
    verifyBearerToken(req)

    return await this.repository.create(data);
  }

  async getAllTransactions(userId: string, req: NextRequest) {
    verifyBearerToken(req)

    return await this.repository.getAll(userId);
  }

  async getTransactionById(transactionId: string, userId: string, req: NextRequest) {
    verifyBearerToken(req)

    return await this.repository.findOne(transactionId, userId);
  }

  async updateTransaction(transactionId: string, data: Partial<ITransaction>,req: NextRequest) {
    verifyBearerToken(req)

    return await this.repository.update(transactionId, data);
  }

  async deleteTransaction(transactionId: string, req: NextRequest) {
    verifyBearerToken(req)

    return await this.repository.delete(transactionId);
  }
}