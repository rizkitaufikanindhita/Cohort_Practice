import MenubarComp from "@/components/MenubarComp"
import DetailComp from "@/components/DetailComp"
import { Fragment } from "react/jsx-runtime"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

const Detail = () => {
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
      <DetailComp />
    </div>
  </Fragment>
}

export default Detail 
