import { create } from "zustand";
import { TransactionType } from "$/types";
import { editTransaction } from "$/requests/dashboard";
import useUtilsStore from "$/app/store/utils.store";

type EditTransactionStore = {
  transactionType: string;
  transactionValue: string;
  setTransactionType: (transactionType: string) => void;
  setTransactionValue: (transactionValue: string) => void;
  updateTransaction: (
    transaction: TransactionType,
    callback: () => void
  ) => Promise<void>;
};

const useEditTransactionStore = create<EditTransactionStore>((set, get) => ({
  transactionType: "",
  transactionValue: "",
  setTransactionType: (transactionType: string) => set({ transactionType }),
  setTransactionValue: (transactionValue: string) => set({ transactionValue }),

  updateTransaction: async (
    transaction: TransactionType,
    callback: () => void
  ) => {
    const { setLoading } = useUtilsStore.getState();
    const { transactionType, transactionValue } = get();
    setLoading(true);

    try {
      const nValue = Number(transactionValue);
      const adjustedValue =
        transactionType === "deposito" ? Math.abs(nValue) : -Math.abs(nValue);

      const updatedTransaction = {
        ...transaction,
        type: transactionType,
        amount: adjustedValue,
      };

      await editTransaction(updatedTransaction);
      callback();
    } catch (error) {
      console.error("Erro ao atualizar transação", error);
    } finally {
      setLoading(false);
    }
  },
}));

export default useEditTransactionStore;
