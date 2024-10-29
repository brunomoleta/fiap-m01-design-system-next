import { create } from 'zustand';
import { TransactionType } from "$/types";
import { postTransaction } from "$/requests/dashboard";
import useUtilsStore from "$/app/store/utils.store";

type TransactionStore = {
  transactionType: string;
  transactionValue: string;
  setTransactionType: (transactionType: string) => void;
  setTransactionValue: (transactionValue: string) => void;
  fetchData: (callback: () => void) => Promise<void>;
};

const useTransactionStore = create<TransactionStore>((set, get) => ({
  transactionType: 'deposito',
  transactionValue: '',
  setTransactionType: (transactionType: string) => set({ transactionType }),
  setTransactionValue: (transactionValue: string) => set({ transactionValue }),

  fetchData: async (callback: () => void) => {
    const {
      setShowAlert, setLoading,
    } = useUtilsStore.getState();

    const transactionValue = get().transactionValue;
    const transactionType = get().transactionType;

    if (!transactionValue || isNaN(Number(transactionValue))) {
      setShowAlert(true, "invalid");
      return;
    }

    setLoading(true);

    try {
      const nValue = Number(transactionValue);
      const payload: TransactionType = {
        value: transactionType === 'deposito' ? Math.abs(nValue) : -Math.abs(nValue),
        type_slug: transactionType,
        date: new Date().getTime(),
      };

      await postTransaction(payload);

      setShowAlert(true, 'success');

      callback();
    } catch (error) {
      console.error('Erro ao criar transação', error);

      setShowAlert(true, 'error');
    } finally {
      setLoading(false);
      set({ transactionValue: '' });

      setTimeout(() => setShowAlert(false), 5000);
    }
  },
}));

export default useTransactionStore;