import {create} from 'zustand';
import {Investments} from '$/types';
import {getInvestments} from '$/requests/dashboard';

type InvestmentsStore = {
  investments: Investments;
  fetchInvestmentData: () => Promise<void>;
  setInvestments: (investment: Investments) => void;
};

const useInvestmentsStore = create<InvestmentsStore>((set) => ({
  investments: { total: 0, items: [] },
  setInvestments: (investments: Investments) => set({investments}),
  fetchInvestmentData: async () => {
    try {
      const resp = await getInvestments();
      const {data} = resp;
      set({investments: data.data});
    } catch (error) {
      console.error('Erro ao recuperar investimentos', error);
    }
  },
}));

export default useInvestmentsStore;