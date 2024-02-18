import { Fragment } from "react";

/* eslint-disable react/prop-types */
const InputComp = (props) => {
  const inputHandlerTitle = (e) => {
    props.setInputValueTitle(e.target.value);
  };
  const inputHandlerDescription = (e) => {
    props.setInputValueDescription(e.target.value);
  };
  const inputSave = () => {
    props.setTodo([
      ...props.todo,
      {
        title: props.inputValueTitle,
        description: props.inputValueDescription,
      },
    ]);
    props.setInputValue("");
  };
  return (
    <Fragment>
      <div>
        <h2>Title</h2>
        <input
          type="text"
          value={props.inputValueTitle}
          onChange={inputHandlerTitle}
        />
      </div>
      <div>
        <h2>Description</h2>
        <input
          type="text"
          value={props.inputValueDescription}
          onChange={inputHandlerDescription}
        />
      </div>
      <br />
      <div>
        <button onClick={inputSave}>Add Todo</button>
      </div>
    </Fragment>
  );
};

export default InputComp;
