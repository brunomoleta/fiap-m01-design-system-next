import { create } from "zustand";
import { getBalance } from "$/requests/dashboard";
import { formatCurrency } from "$/utils";

type BalanceStore = {
  balance: string;
  fetchBalanceData: (id: string) => Promise<void>;
  setBalance: (balance: string) => void;
};

const useBalanceStore = create<BalanceStore>((set) => ({
  balance: "",
  setBalance: (balance: string) => set({ balance }),
  fetchBalanceData: async (id?: string) => {
    if (!id) {
      console.warn("ID não fornecido para recuperar o balanco");
      return;
    }
    try {
      const resp = await getBalance(id);
      const { data } = resp;

      const formattedBalance = formatCurrency(data.balance);

      set({ balance: formattedBalance });
    } catch (error) {
      console.error("Erro ao recuperar balanço", error);
    }
  },
}));

export default useBalanceStore;
