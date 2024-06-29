import prisma from "@repo/db/database";
import BalanceComp from "./components/BalanceComp";
import SigninComp from "./components/SigninComp";

const Page = async() => {

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
    </main>
  );
}

export default Page
