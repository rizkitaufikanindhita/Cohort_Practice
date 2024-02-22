import { create } from "zustand";

const useColorStore = create((set)=>({
    warna : "white",
    addColor : (value) =>set({warna:value})
}))

export default useColorStore