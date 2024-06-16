"use client"

// client component
import { useSession } from "next-auth/react"

const Homepage = () => {
  const session = useSession()
  return(
  <div className="">
      <div className="flex justify-center items-center mt-10">client component :</div>
      <div className="flex justify-center items-center mb-10">{JSON.stringify(session)}</div>
  </div>
  )
}

export default Homepage
