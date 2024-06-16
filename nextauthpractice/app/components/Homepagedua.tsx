"use server"

import { getServerSession } from "next-auth"
import { NEXT_AUTH } from "../lib/auth"

const Homepagedua = async() => {
  // menggunakan NEXT_AUTH agar datanya sama dengan useSession
  const session = await getServerSession(NEXT_AUTH)
  return(
  <div>
      <div className="flex justify-center items-center">server component :</div>
      <div className="flex justify-center items-center">{JSON.stringify(session)}</div>  
  </div>
  )
}

export default Homepagedua
