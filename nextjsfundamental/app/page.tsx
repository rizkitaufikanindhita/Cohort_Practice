import axios from "axios";
import prisma from "./db";

const Home = async() => {
  await new Promise((r)=>setTimeout(r,5000))  // timeout buatan
  
  // dengan axios 
//   const getData = async() => {
//     const response = await axios.get("http://localhost:3000/api/user")
//     const result = response.data.msg
//     console.log(result)
//     return result
// }
//
//   const dataResult = await getData()

  // dengan prisma
  const getData = await prisma.user.findMany({select: {name:true,email:true}})
  const dataResult = getData

  return (
  <div className="flex justify-center mt-20">
      <div>  
        {dataResult.map((data: any,index: any)=>{
          return (
          <div key={index} className="border p-5">
              <div>{data.name}</div>
              <div>{data.email}</div>
          </div>
          )
        })}
      </div>
  </div>
  );
}

export default Home
