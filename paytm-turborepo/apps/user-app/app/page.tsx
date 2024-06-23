"use client"

import { Button } from "@repo/ui/components/ui/button";
import prisma from "@repo/db/database"
import store from "@repo/store/useBalance"


const Page = async() => {
  const { useBalance } = store
  const balance = useBalance((state: any) => state.balance)

  const result = await prisma.user.findMany({})

  return (
    <main className="flex justify-center items-center h-screen">
      {result.map((data: any,index: any)=>{
        return(
        <div key={index} className="mx-10">
            <div>{data.id}</div>
            <div>{data.email}</div>
            <div>{data.name}</div>
        </div>
        )
      })}
      <div>{balance}</div>
      <div className="mx-10">
        <Button>Click me</Button>
      </div>
    </main>
  );
}

export default Page
