import { NextRequest, NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const GET = async() => {
  const response = await prisma.user.findMany({select:{name: true,email: true}})
  
  return NextResponse.json({
    msg: response
  })
}

export const POST = async(req: NextRequest) => {
  type signup = {
    name: string,
    email: string
  }

  const body: signup = await req.json()

  const user = await prisma.user.create({
    data : {
      name: body.name,
      email: body.email,
    }
  })

  if(!user){
    return NextResponse.json({
      msg: "gagal signup"
    })
  } else {
    return NextResponse.json({
      msg: "signup berhasil"
    })
  }
}

// cuma export aja tidak perlu export default
