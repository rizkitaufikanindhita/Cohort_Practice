import { create } from "zustand"

const useBalance = create((set)=>({
  balance: 1000,
  increaseBalance: (value: any) => set((state: any)=>({balance: state.balance + value})),
  decreaseBalance: (value: any) => set((state: any)=>({balance: state.balance - value}))
}))

export default { useBalance }
