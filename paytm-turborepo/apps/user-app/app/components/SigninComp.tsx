"use client"

import { Button } from "@repo/ui/components/ui/button"
import { signIn, signOut } from "next-auth/react"

const SigninComp = () => {
  return(
  <div>
      <Button onClick={()=>signIn()}>Sign in</Button>
      <Button onClick={()=>signOut()}>Sign out</Button>
  </div>
  )
}

export default SigninComp
