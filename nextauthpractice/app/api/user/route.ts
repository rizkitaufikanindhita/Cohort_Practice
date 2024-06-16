import { NEXT_AUTH } from "@/app/lib/auth"
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"

export const GET = async() => {
  // menggunakan NEXT_AUTH agar datanya sama dengan useSession
  const session = await getServerSession(NEXT_AUTH) 

  return NextResponse.json({
    msg: "route up",
    email: session?.user?.email,
    username: session?.user?.name
  })
}

