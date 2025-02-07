import {create} from 'zustand';

export const useUserStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  setUser: (user) => set({user, isAuthenticated: !!user}),
  setAuth: (isAuthenticated) => set({isAuthenticated}),
  logout: () => set({user: null, isAuthenticated: false}),
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
