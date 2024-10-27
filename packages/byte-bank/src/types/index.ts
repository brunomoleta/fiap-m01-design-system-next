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

export type Card = {
  card_holder: string;
  card_last_digits: string;
  card_expire_date: string;
  type: 'physical' | 'digital';
  function: 'debit' | 'credit' | 'multiple';
  category: 'platinum' | 'silver' | 'gold' | 'black';
  is_active: boolean;
  id?: string;
}
export type CardUpdate = {
  function?: 'debit' | 'credit' | 'multiple';
  is_active?: boolean;
}