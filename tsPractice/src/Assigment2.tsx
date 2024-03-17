import { Fragment } from "react/jsx-runtime";

const Assignment2 = () => {
  interface TodoType {
    title: string;
    description: string;
    done: boolean;
    duration?: number; // tidak wajib ada
  }

  const todo: TodoType = {
    title: "Belajar Typescript",
    description: "Menjadikan Kebiasaan Dalam Memakai Typescript Di Project",
    done: false,
  };

  return (
    <Fragment>
      <div>
        <div>{todo.title}</div>
        <div>{todo.description}</div>
        <div>{todo.done}</div>
      </div>
    </Fragment>
  );
};

export default Assignment2;
