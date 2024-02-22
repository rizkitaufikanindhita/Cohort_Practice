import { Fragment } from "react";
import useColorStore from "../store";

const Click = ({color}) => {
  let addColor = useColorStore((state)=>state.addColor)
  return (
    <Fragment>
      <div className={`p-2 bg-${color}-500 rounded-md h-fit w-fit mx-2 border-2`}>
        <button className="text-white" onClick={()=>addColor(color)}>{color}</button>
      </div>
    </Fragment>
  );
};

export default Click;
