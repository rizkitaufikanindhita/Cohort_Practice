"use server"

import prisma from "@/app/db"   // dengan singleton prisma

const signup = async(username: string, email: string) => {
  const response = await prisma.user.create({
    data:{
      username: username,
      email: email
    }
  })
  console.log(response.id)
  return "signup berhasil"
}

export default signup
