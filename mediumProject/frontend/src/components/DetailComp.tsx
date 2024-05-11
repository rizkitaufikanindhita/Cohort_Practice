import { Fragment, useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import axios from "axios"

const DetailComp = () => {
  const url = import.meta.env.VITE_URL_GETPOSTDETAIL
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id')
  const [loading, setLoading] = useState(true)

  interface Detail {
  title: string;
  content: string;
  published: boolean;
  author: {
    name: string;
   };
  }

  const [detail, setDetail] = useState<Detail>({
    title: '',
    content:'',
    published:false,
    author:{
      name:''
    }
  })

  const axiosWithToken = axios.create({
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": "application/json"
    }
  })

  const getDetail = async () => {
    try{
      const response = await axiosWithToken.get(`${url}/${id}`)
      setDetail(response.data.msg)
    } catch(e){
      console.error(e)
    }
  }

  useEffect(()=>{
    setLoading(true)
    getDetail()
    setLoading(false)
  },[])

  if(loading == true){
    return <div>
      Loading...
    </div>
  }

  console.log(`${url}/${id}`)
  console.log(detail)

  return <Fragment>
    <div className="grid grid-cols-10 mt-10 mx-16">
      <div className="col-span-7 text-left">
        <div className="font-bold text-4xl w-3/4">{detail.title}</div>
        <div className="font-light text-sm">Posted on May 11, 2024</div>
        <div className="mt-2">{detail.content}</div>
      </div>
      <div className="col-span-3 text-left">
        <div className="font-normal text-black">Author</div>
        <div className="grid grid-cols-7 mt-3">
          <div className="w-7 h-7 rounded-full bg-slate-400 mt-3 ml-3">
            <div className="text-center text-white">
              {detail.author.name.slice(0,2).toUpperCase()}
            </div>
          </div>
          <div className="col-span-6">
           <div className="font-bold">{detail.author.name}</div>
           <div className="font-light text-sm">{"no quote"}</div>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
}

export default DetailComp
