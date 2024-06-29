"use client"

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const signin = () => {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [number, setNumber] = useState("")
  const [password, setPassword] = useState("")
  return(
  <div>
    <input type='text' id='email' placeholder='email' className='border mr-3' onChange={(e)=>setEmail(e.target.value)}/>
    <input type='text' id='name' placeholder='name' className='border mr-3' onChange={(e)=>setName(e.target.value)}/>
    <input type='text' id='number' placeholder='phone number' className='border mr-3' onChange={(e)=>setNumber(e.target.value)}/>
    <input type='password' id='password' placeholder='*******' className='border ml-3' onChange={(e)=>setPassword(e.target.value)}/>
    <button onClick={async () => {

        const res = await signIn("credentials", {
          email,
          name,
          number,
          password,
          redirect: false,
        });
        if(res) {
          router.push("/");
        } else {
          // Handle login console.error();
          console.error("Login failed");
        }
      }}>Login with Credentials</button>
  </div>
  )
}

export default signin
