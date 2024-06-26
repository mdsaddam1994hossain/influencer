import { create, SetState } from 'zustand';

// Define the state type
interface TAppStore {
  bears: number;
  isMobile:boolean;
  isLogin:boolean;
  influencerGender:string;
  categoriesId: number | null;
  userType:string;
  isLoading:boolean;
  loginUser:any;
  setMobile: (payload:boolean) => void;
  setIsLogin: (payload:boolean) => void;
  setInfluencerGender: (payload:string) => void;
  setCategoriesId: (payload:number|null) => void;
  setUserType: (payload:string) => void;
  setIsLoading: (payload:boolean) => void;
  setLoginUser: (payload:any) => void;

 
 
}

// Create the store
const useAppStore = create<TAppStore>((set) => ({
  bears: 0,
  isMobile:false,
  isLogin:false,
  influencerGender:"all",
  categoriesId:null,
  userType:"advertiser",
  isLoading:false,
  loginUser:null,
  setMobile: (payload:boolean) => set(() => ({ isMobile : payload })),
  setIsLogin: (payload:boolean) => set(() => ({ isLogin : payload })),
  setInfluencerGender: (payload:string) => set(() => ({ influencerGender : payload })),
  setCategoriesId: (payload:number|null) => set(() => ({ categoriesId : payload })),
  setUserType: (payload:string) => set(() => ({ userType : payload })),
  setIsLoading: (payload:boolean) => set(() => ({ isLoading : payload })),
  setLoginUser: (payload:any) => set(() => ({ loginUser : payload })),

}));

export default useAppStore;