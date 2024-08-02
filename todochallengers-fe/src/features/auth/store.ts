import { create } from 'zustand'

interface AuthState {
  email: string
  password: string
  setEmail: (email: string) => void
  setPassword: (password: string) => void
  isButtonDisabled: boolean
}

export const useAuthStore = create<AuthState>((set) => ({
  email: '',
  password: '',
  setEmail: (email) => set((state) => ({
    email,
    isButtonDisabled: !(email && state.password)
  })),
  setPassword: (password) => set((state) => ({
    password,
    isButtonDisabled: !(state.email && password)
  })),
  isButtonDisabled: true,
}))