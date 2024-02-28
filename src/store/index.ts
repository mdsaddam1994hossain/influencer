import { create, SetState } from 'zustand';

// Define the state type
interface TAppStore {
  bears: number;
  isMobile:boolean;
  setMobile: (payload:boolean) => void;
  increasePopulation: () => void;
  removeAllBears: () => void;
  updateBears: (newBears: number) => void;
}

// Create the store
const useAppStore = create<TAppStore>((set) => ({
  bears: 0,
  isMobile:false,
  setMobile: (payload:boolean) => set(() => ({ isMobile : payload })),
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
}));

export default useAppStore;