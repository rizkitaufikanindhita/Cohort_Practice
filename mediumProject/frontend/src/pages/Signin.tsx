import { Fragment } from "react/jsx-runtime"
import SigninComp from "@/components/SigninComp"
import QuoteComp from "../components/QuoteComp"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

const Signin = () => {
  const navigate = useNavigate()
  useEffect(()=>{
    const token = localStorage.getItem("token")
    if(token){
      alert("Silahkan Logout terlebih dahulu")
      navigate("/dashboard")
    }
  },[])
  return <Fragment>
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <SigninComp />
      <QuoteComp />
    </div>
  </Fragment>
}

export default Signin
