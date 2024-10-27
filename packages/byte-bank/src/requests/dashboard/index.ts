import { Card, TransactionType } from '$/types';
import request from '../config';

export const getBalance = () => request.get('/account/balance');

export const postTransaction = (t: TransactionType) => request.post('/account/transaction', t);

export const getExtract = (items: number = 6) => request.get(`/account/transactions?items=${items}`);

export const getInvestments = () => request.get(`/account/investments`);

export const getCards = () => request.get(`/account/cards`);

export const updateCard = (id: string, c: Card) => request.put(`/account/card/${id}`, c);
