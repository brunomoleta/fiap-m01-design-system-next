import {create} from 'zustand';
import {TransactionType} from '$/types';
import {getExtract} from '$/requests/dashboard';

type ExtractStore = {
  extract: TransactionType[];
  fetchExtractData: () => Promise<void>;
  setExtract: (extract: TransactionType[]) => void;
};

const useExtractStore = create<ExtractStore>((set) => ({
  extract: [],
  setExtract: (extract: TransactionType[]) => set({extract}),
  fetchExtractData: async () => {
    try {
      const resp = await getExtract();
      const {data} = resp;
      set({extract: data.data});
    } catch (error) {
      console.error('Erro ao recuperar extrato', error);
    }
  },
}));

export default useExtractStore;