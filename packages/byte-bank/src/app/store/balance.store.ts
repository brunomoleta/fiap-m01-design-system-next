import {create} from 'zustand';
import {getBalance} from '$/requests/dashboard';
import {formatCurrency} from '$/utils';

type BalanceStore = {
  balance: string;
  fetchBalanceData: () => Promise<void>;
  setBalance: (balance: string) => void;
};

const useBalanceStore = create<BalanceStore>((set) => ({
  balance: '',
  setBalance: (balance: string) => set({balance}),
  fetchBalanceData: async () => {
    try {
      const resp = await getBalance();
      const {data} = resp;

      const formattedBalance = formatCurrency(data.data.balance);

      set({balance: formattedBalance});
    } catch (error) {
      console.error('Erro ao recuperar balanço', error);
    }
  },
}));

export default useBalanceStore;