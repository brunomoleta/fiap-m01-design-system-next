export type TransactionType = {
  value: number;
  type_slug: string;
  date: number;
  id?: string;
}

export type Balance = {
  balance: number
}

export type Investment = {
  value: number;
  share: number;
  investment_slug: string;
  investment_name: string;
}

export type Investments = {
  total: number;
  items: Investment[];
}
