"use client"

import { useState } from "react"
import signup from "../actions/user/signup"
import { useRouter } from "next/navigation"

const SignupComp = () => {
  const router = useRouter()
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")

  return(
  <div>
      <div>
        <label>username</label>
        <input placeholder="username" onChange={(e)=>setUsername(e.target.value)}/>
      </div>
      <div>
        <label>email</label>
        <input placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
      </div>
      <button onClick={async()=>{
        const response = await signup(username, email)
        localStorage.setItem("token", response)
        alert("signup berhasil")
        router.push("/")
      }}>Sign up</button>
  </div>
  )
}

export default SignupComp
