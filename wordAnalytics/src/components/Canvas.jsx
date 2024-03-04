import { Fragment } from "react";
import useAppStore from "../store";

const Canvas = () => {
  const setWord = useAppStore((state) => state.setWord);

  return (
    <Fragment>
      <div className="w-full h-full bg-white rounded-xl">
        <textarea
          cols="30"
          rows="10"
          className="w-full h-full p-10 outline-none rounded-l-xl"
          placeholder="Enter your text"
          onChange={(e) => setWord(e.target.value)}
        ></textarea>
      </div>
    </Fragment>
  );
};

export default Canvas;
