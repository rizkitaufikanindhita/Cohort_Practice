import { Fragment, useState } from "react"
import plusIcon from "../assets/plus1.png"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const AddPostComp = () => {
  const url = import.meta.env.VITE_URL_POST
  
  const navigate = useNavigate()

  const axiosWithToken = axios.create({
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": "application/json"
    }
  })

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const addTitle = (e: any) => {
    setTitle(e.target.value)
  }

  const addDescription = (e: any) => {
    setDescription(e.target.value)
  }

  const body = {
    title: title,
    content: description
  }

  const addPost = async() => {
    await axiosWithToken.post(url,body)
    navigate(`/dashboard`)
  }

  return <Fragment>
    <div className="mx-36 mt-10">
      <div className="flex justify-center divide-x">
        <button>
          <img onClick={addPost} src={plusIcon} className="w-7 h-fit pb-8"/>
        </button>
        <div className="border-4 border-solid ml-3"></div>
        <textarea placeholder="Title" className="border-none outline-none w-full ml-3 text-3xl font-light placeholder:text-3xl placeholder:font-light" required onChange={(e) => addTitle(e)}/>
      </div>
    </div>
    <div className="mx-44 mt-5">
      <textarea placeholder="Tell your story...." className="border-none outline-none w-full ml-3 text-xl font-light placeholder:text-xl placeholder:font-light" required onChange={(e) => addDescription(e)}/>
    </div>
  </Fragment>
}

export default AddPostComp
