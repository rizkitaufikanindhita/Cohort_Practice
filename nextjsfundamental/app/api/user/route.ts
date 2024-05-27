import { NextRequest, NextResponse } from "next/server"
import prisma from "@/app/db"

// kalau di fe pakai prisma jadi tidak perlu ada GET di api
// export const GET = async() => {
//   const response = await prisma.user.findMany({select:{name: true,email: true}})
//
//   return NextResponse.json({
//     msg: response
//   })
// }

export const POST = async(req: NextRequest) => {
  type signup = {
    name: string,
    email: string
  }

  const body: signup = await req.json()

  // headers
  console.log(req.headers.get("authorization"))
  
  // query params
  console.log(req.nextUrl.searchParams.get('name'))

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
