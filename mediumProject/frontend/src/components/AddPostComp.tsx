import { Fragment } from "react"
import plusIcon from "../assets/plus1.png"

const AddPostComp = () => {
  const addPost = () => {
    //
  }
  return <Fragment>
    <div className="mx-36 mt-10">
      <div className="flex justify-center divide-x">
        <button>
          <img onClick={addPost} src={plusIcon} className="w-7 h-fit pb-8"/>
        </button>
        <div className="border-4 border-solid ml-3"></div>
        <textarea placeholder="Title" className="border-none outline-none w-full ml-3 text-3xl font-light placeholder:text-3xl placeholder:font-light" required/>
      </div>
    </div>
    <div className="mx-44 mt-5">
      <textarea placeholder="Tell your story...." className="border-none outline-none w-full ml-3 text-xl font-light placeholder:text-xl placeholder:font-light" required/>
    </div>
  </Fragment>
}

export default AddPostComp
