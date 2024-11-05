import { create } from "zustand";
import { TransactionType } from "$/types";
import { getExtract } from "$/requests/dashboard";

type ExtractStore = {
  extract: TransactionType[];
  fetchExtractData: (id?: string) => Promise<void>;
  setExtract: (extract: TransactionType[]) => void;
};

const useExtractStore = create<ExtractStore>((set) => ({
  extract: [],
  setExtract: (extract: TransactionType[]) => set({ extract }),
  fetchExtractData: async (id?: string) => {
    if (!id) {
      console.warn("ID não fornecido para recuperar o extrato");
      return;
    }
    try {
      const resp = await getExtract(id);
      const { transactions } = resp.data;

      // Mapeando para o formato esperado por TransactionType
      const formattedTransactions = transactions.map((transaction: any) => ({
        value: transaction.amount,
        type_slug: transaction.type,
        date: new Date(transaction.createdAt).getTime(),
        id: transaction._id,
      }));

      set({ extract: formattedTransactions });
    } catch (error) {
      console.error("Erro ao recuperar extrato", error);
    }
  },
}));

export default useExtractStore;
