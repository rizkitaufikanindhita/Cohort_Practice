import { Fragment } from "react/jsx-runtime"
import { Link } from "react-router-dom"
import plusIcon from "../assets/plus.png"
import { useEffect, useState } from "react"
import axios from "axios"
import store from "@/store"
import { shallow } from "zustand/shallow"
const url = import.meta.env.VITE_URL_GETPOST

const PostComp = () => {
  const {useGetStore} = store
  const [posts, fetchPosts] = useGetStore((state)=> [state.posts, state.fetchPosts],shallow);
  const [loading, setLoading] = useState(true)

  const axiosWithToken = axios.create({
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": "application/json"
    }
  })

  useEffect(()=>{
    setLoading(true)
    fetchPosts(axiosWithToken, url)
    setLoading(false)
  },[])

  if(loading == true){
    return <div>
      Loading...
    </div>
  }

  return <Fragment>
    <div className="">
      <div className="flex justify-start px-10 pt-10">
        <div className="pr-5 pt-5 pb-5 pl-7">
          <Link to={"/post"}>
            <img src={plusIcon} className="w-4 pt-1 h-fit"/>
          </Link>
        </div>
      </div>
      <hr />
      <div className="px-16 py-8">
        {posts.map((item: any, index: any) => {
          return (
            <Fragment key={index}>
              <Link to={`/detail?id=${item.id}`}>
                <div className="flex justify-start">
                  <div className="py-1 mr-3 mt-0.5 w-6 h-6 bg-slate-600 text-xs text-white rounded-full">{item.author.name.slice(0,2).toUpperCase()}</div>
                  <div className="py-0.5">
                    {item.author.name || "Anonymous"}
                  </div>
                  <div className="px-5 py-1 font-light text-sm">May 2, 2024</div>
                </div> 
                <div className="flex justify-start text-2xl font-bold">
                  {item.title}
                </div>
                <div className="flex justify-start mt-2">
                  {item.content.slice(0,30)}...
                </div>
                <div className="flex justify-start mt-2 mb-8 text-xs font-light w-fit h-fit border p-1 rounded-md">
                  {Math.ceil(item.content.length/60)} min read
                </div>
                <hr className="mb-5"/>
              </Link>
            </Fragment>
          )
        })}
      </div>
    </div>
  </Fragment>
}

export default PostComp


