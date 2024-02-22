import { create } from "zustand";

const useColorStore = create((set)=>({
    warna : "slate",
    addColor : (value) =>set({warna:value})
}))

export default useColorStore