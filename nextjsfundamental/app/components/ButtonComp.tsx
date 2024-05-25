'use client'

import axios from "axios"
import { useRouter } from "next/navigation"

const ButtonComp = () => {
  const router = useRouter()
  const handleClick = async() => {
    const form = document.getElementById('signup-form') as HTMLFormElement | null
    
    if(!form){
      console.log("form not found")
      return
    }

    const formData = new FormData(form)
    const name = formData.get('name')
    const email = formData.get('email')

    const body = {
      name: name,
      email: email
    }

    const response = await axios.post('http://localhost:3000/api/user',body)
    const result = response.data
    console.log(result)
    alert(`${name} dengan ${email} berhasil sign up`)
    router.push('/')
  }

  return (
  <div>
    <button onClick={handleClick}>Sign up</button>
  </div>)
}

export default ButtonComp


