import {create} from 'zustand';

const NullUser = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    isEmailVerified: false,
    created_at: "",
    updated_at: ""
  }
  
export const useUserStore = create((set) => ({
  user: NullUser,
  isAuthenticated: false,
  setUser: (user) => set({...user}),
  setAuth: (isAuthenticated) => set({isAuthenticated}),
  logout: () => set({user: NullUser, isAuthenticated: false}),
}));

export const useStepFormStore = create((set) => ({
  step: 1,
  formData: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: ""
  },
  setStep: (step) => set({step}),
  updateFormData: (data) => set((state) => ({
    formData: {...state.formData, ...data}
  })),
  resetForm: () => set({step: 1, formData: {}}),
}));
