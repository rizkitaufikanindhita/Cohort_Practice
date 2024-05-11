import MenubarComp from "@/components/MenubarComp"
import { Fragment } from "react/jsx-runtime"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import PostComp from "@/components/PostComp"

const Dashboard = () => {
  const navigate = useNavigate()

  useEffect(()=>{
    const token = localStorage.getItem("token")
    if(!token){
      alert("Silahkan Login atau Signup terlebih dahulu")
      navigate("/signin")
    }
  },[])
 
  return <Fragment>
    <div>
      <MenubarComp />
    </div>
    <div>
      <PostComp />
    </div>
  </Fragment>
}

export default Dashboard
