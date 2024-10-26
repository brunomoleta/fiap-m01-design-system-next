import { TransactionType } from '$/types';
import request from '../config';

export const getBalance = () => request.get('/account/balance');

export const postTransaction = (t: TransactionType) => request.post('/account/transaction', t);

export const getExtract = (items: number = 12) => request.get(`/account/transactions?items=${items}`);
