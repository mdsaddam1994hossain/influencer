import { create, SetState } from 'zustand';

// Define the state type
interface TAppStore {
  bears: number;
  isMobile:boolean;
  isLogin:boolean;
  setMobile: (payload:boolean) => void;
  setIsLogin: (payload:boolean) => void;
 
 
}

// Create the store
const useAppStore = create<TAppStore>((set) => ({
  bears: 0,
  isMobile:false,
  isLogin:false,
  setMobile: (payload:boolean) => set(() => ({ isMobile : payload })),
  setIsLogin: (payload:boolean) => set(() => ({ isLogin : payload })),

 
}));

export default useAppStore;