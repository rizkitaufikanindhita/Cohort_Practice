import { create } from 'zustand'
import { userSignupType, userSigninType } from '@rizkitaufik/common'

type SignState = {
  setEmail: (email: string) => void,
  setName: (name: string) => void,
  setPassword: (password: string) => void
}

type SignInState = Pick<SignState,'setEmail'|'setPassword'>

type SignupFormat = userSignupType & SignState
type SigninFormat = userSigninType & SignInState

const useSignUpStore = create<SignupFormat>()((set)=>({
  email: "",
  name: "",
  password: "",
  setEmail: (email: any) => set({email}),
  setName: (name: any) => set({name}),
  setPassword: (password: any) => set({password})
}))

const useSignInStore = create<SigninFormat>()((set)=>({
  email: "",
  password: "",
  setEmail: (email: any) => set({email}),
  setPassword: (password: any) => set({password})
}))

type getFormat = {
  posts: any,
  fetchPosts: any
}

const useGetStore = create<getFormat>()((set)=>({
  posts: [],
  fetchPosts: async(axiosInstance: any, url: string) => {
    try {
      const response = await axiosInstance.get(url);
      set({ posts: response.data.msg})
    } catch (e) {
      console.log(e)
    }
  }
}))


export default {useSignUpStore, useSignInStore, useGetStore}
