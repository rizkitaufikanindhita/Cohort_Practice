import { Fragment } from "react";

/* eslint-disable react/prop-types */
const TodoComp = (props) => {
  return (
    <Fragment>
      <div>
        {props.todo.map((item) => (
          // eslint-disable-next-line react/jsx-key
          <div>
            <h1>{item.title}</h1>
            <h2>{item.description}</h2>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default TodoComp;
