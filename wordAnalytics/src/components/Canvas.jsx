import { Fragment } from "react";

const Canvas = () => {
  return (
    <Fragment>
      <div className="bg-white w-full h-full rounded-xl">
        <textarea
          cols="30"
          rows="10"
          className="outline-none p-10 w-full h-full rounded-l-xl"
        ></textarea>
      </div>
    </Fragment>
  );
};

export default Canvas;
