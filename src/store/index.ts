import { create, SetState } from 'zustand';

// Define the state type
interface TAppStore {
  bears: number;
  isMobile:boolean;
  isLogin:boolean;
  influencerGender:string;
  categoriesId:number;
  setMobile: (payload:boolean) => void;
  setIsLogin: (payload:boolean) => void;
  setInfluencerGender: (payload:string) => void;
  setCategoriesId: (payload:number) => void;
 
 
}

// Create the store
const useAppStore = create<TAppStore>((set) => ({
  bears: 0,
  isMobile:false,
  isLogin:false,
  influencerGender:"all",
  categoriesId:0,
  setMobile: (payload:boolean) => set(() => ({ isMobile : payload })),
  setIsLogin: (payload:boolean) => set(() => ({ isLogin : payload })),
  setInfluencerGender: (payload:string) => set(() => ({ influencerGender : payload })),
  setCategoriesId: (payload:number) => set(() => ({ categoriesId : payload })),

 
}));

export default useAppStore;