import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const User = () => {
  const navigate = useNavigate()
  const [userData, setUserData] = useState();
  const getData = async() => {
    const response = await axios.get(`${BACKEND_URL}/user`,{
      withCredentials: true
    })
    setUserData(response.data.msg)
  }
  useEffect(()=>{
    getData()
  },[])

    return <div>
        <div>{userData}</div>
        <br /><br />
        <button onClick={() => {
            axios.post(`${BACKEND_URL}/signout`, {}, {
                withCredentials: true,
            })
            navigate("/signin")
        }}>Logout</button>
    </div>
}
