import { NextRequest, NextResponse } from "next/server";
import prisma from "@repo/db/database"

export const POST = async (req: NextRequest) => {
  const input = await req.json()
  await prisma.user.create({
    data: {
      email: input.email,
      name: input.name
    }
  })

  return NextResponse.json({
    msg: "add berhasil"
  })
}

