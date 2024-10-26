import { create } from 'zustand';
import {tabFields} from "$/utils/vars";

type AlertTypes = 'success' | 'error' | 'invalid';

type UtilsStore = {
  alertType: AlertTypes;
  loading: boolean;
  showAlert: boolean;
  activeTab: typeof tabFields[number];
  setShowAlert: (show: boolean, type?: AlertTypes) => void;
  setLoading: (isLoading: boolean) => void;
  setActiveTab: (tab: string) => void;
};

const useUtilsStore = create<UtilsStore>((set) => ({
  alertType: 'success',
  loading: false,
  showAlert: false,
  activeTab: 'Início',
  setShowAlert: (show, type) => {
    if (type) {
      set({alertType: type})
    }
    set({showAlert: show})
  },
  setLoading: (isLoading) => set({ loading: isLoading }),
  setActiveTab: (tab) => set({ activeTab: tab }),
}));

export default useUtilsStore;