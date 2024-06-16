"use client"
import { signIn, signOut } from "next-auth/react"

export const Appbar = () => {
  return(
  <div className="flex justify-center items-center">
    {/* daripada ini */}
    {/* <button onClick={()=>router.push("/api/auth/signin")}> */}
    {/*   Sign in */}
    {/* </button> */}

    {/* mending ini */}
    <button onClick={()=>signIn()} className="mx-10">
        Sign in
    </button>
    <button onClick={()=>signOut()} className="mx-10">
        Log Out
    </button>
  </div>
  )
}
