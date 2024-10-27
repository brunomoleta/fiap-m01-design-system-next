import {create} from 'zustand';
import {Card, CardUpdate} from '$/types';
import {getCards, updateCard} from '$/requests/dashboard';
import useUtilsStore from './utils.store';

type CardsStore = {
  cards: Card[];
  fetchCardsData: () => Promise<void>;
  fetchCardUpdate: (id: string, payload: CardUpdate) => Promise<void>;
  setCards: (extract: Card[]) => void;
};

const useCardsStore = create<CardsStore>((set) => ({
  cards: [],
  setCards: (cards: Card[]) => set({cards}),
  fetchCardsData: async () => {
    try {
      const resp = await getCards();
      const {data} = resp;
      set({cards: data.data});
    } catch (error) {
      console.error('Erro ao recuperar cartões', error);
    }
  },
  fetchCardUpdate: async (id: string, payload: CardUpdate) => {
    const { setLoading } = useUtilsStore.getState();

    setLoading(true);

    try {
      await updateCard(id, payload);
    } catch (error) {
      console.error('Erro ao editar cartão', error);
    } finally {
      setLoading(false);
    }
  },
}));

export default useCardsStore;