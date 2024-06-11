import { useState } from "react"
import { BACKEND_URL } from "../config"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const Signin = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [id, setId] = useState("")
  const body = {
    id: id,
    email: username 
  }
  const handleSignin = async() => {
      await axios.post(`${BACKEND_URL}/signin`, body, {
      withCredentials: true
    })
      alert("signin telah berhasil")
    navigate("/user")
  }

    return <div>
       <input onChange={(e) => {
            setId(e.target.value);
        }} type="text" placeholder="id" />
       <input onChange={(e) => {
            setUsername(e.target.value);
        }} type="text" placeholder="email" />
        <button onClick={handleSignin}>Submit</button>
    </div>
}
