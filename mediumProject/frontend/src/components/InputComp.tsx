import { Fragment } from "react/jsx-runtime"
import { Input } from "./ui/input"

const InputComp = ({placeholder, title}: any) => {
return <Fragment>
  <div className="items-start text-left mt-4">
    <div className="font-bold text-lg">
      {title}
    </div>
    <Input className="mt-2" placeholder={placeholder}/>
  </div>
</Fragment>
}

export default InputComp

