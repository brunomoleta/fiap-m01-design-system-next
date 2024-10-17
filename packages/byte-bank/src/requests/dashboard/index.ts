import { Transaction } from '$/types';
import request from '../config';

export const getBalance = () => request.get('/account/balance');

export const postTransaction = (t: Transaction) => request.post('/account/transaction', t);
