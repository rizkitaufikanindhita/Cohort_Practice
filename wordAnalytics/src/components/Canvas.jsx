import { Fragment } from "react";
import useAppStore from "../store";

const Canvas = () => {
  const setWord = useAppStore((state) => state.setWord);

  return (
    <Fragment>
      <div className="w-full h-full border-slate-600">
        <textarea
          cols="30"
          rows="10"
          className="w-full h-full p-10 text-xl bg-white outline-none rounded-tl-xl rounded-tr-xl md:rounded-l-xl md:rounded-none md:text-2xl lg:text-4xl"
          placeholder="Enter your text"
          onChange={(e) => setWord(e.target.value)}
        ></textarea>
      </div>
    </Fragment>
  );
};

export default Canvas;
