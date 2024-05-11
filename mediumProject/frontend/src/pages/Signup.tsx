import { Fragment } from "react/jsx-runtime"
import SignupComp from "@/components/SignupComp"
import QuoteComp from "../components/QuoteComp"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

const Signup = () => {
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
      <SignupComp />
      <QuoteComp />
    </div>
  </Fragment>
}

export default Signup 
