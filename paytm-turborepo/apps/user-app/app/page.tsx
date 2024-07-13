import prisma from "@repo/db/database"
import BalanceComp from "./components/BalanceComp";
import SigninComp from "./components/SigninComp";
import { getServerSession } from "next-auth";
import { NEXT_AUTH } from "./lib/auth";

const Page = async() => {
  const session = await getServerSession(NEXT_AUTH)
  const result = await prisma.user.findMany({})

  return (
    <main className="flex justify-center items-center h-screen">
      {result.map((data: any,index: any)=>{
        return(
        <div key={index} className="mx-10">
            {/* <div>{data.id}</div> */}
            <div>{data.email}</div>
            <div>{data.name}</div>
        </div>
        )
      })}
      <BalanceComp />
      <SigninComp />
      <div>
        {session?.user?.name ?
          <div className="mx-10">login as {session?.user?.name}</div> :
          <div></div>}
      </div>
    </main>
  );
}

export default Page
