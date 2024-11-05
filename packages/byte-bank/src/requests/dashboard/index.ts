import { Card, TransactionType } from "$/types";
import request from "../config";

// Função de conversão para adaptar TransactionType ao formato esperado pelo endpoint
function convertTransaction(transaction: TransactionType) {
  console.log({
    type: transaction.type_slug, // Mapeia `type_slug` para `type`
    amount: transaction.value, // Mapeia `value` para `amount`
    user: transaction.id, // Mapeia `id` para `user`
  });
  debugger;

  return {
    type: transaction.type_slug, // Mapeia `type_slug` para `type`
    amount: transaction.value, // Mapeia `value` para `amount`
    user: transaction.id, // Mapeia `id` para `user`
  };
}

export const getBalance = (id: string = "") =>
  request.get(`/account/balance/${id}`);

export const postTransaction = (t: TransactionType) =>
  request.post("/account/transaction/create", convertTransaction(t));

export const editTransaction = (t: TransactionType) =>
  request.patch(`/account/transaction/${t.id}`, t);

export const getInvestments = () => request.get(`/account/investments`);

export const getCards = () => request.get(`/account/cards`);

export const updateCard = (id: string, c: Card) =>
  request.put(`/account/card/${id}`, c);

export const getExtract = (id: string = "") =>
  request.get(`/account/transaction/user/${id}`);
