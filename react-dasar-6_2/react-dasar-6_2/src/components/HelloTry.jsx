import { Fragment } from "react";

export const HelloTry = () => {
  return (
    <Fragment>
      <h1>Hello Try export </h1>
    </Fragment>
  );
};

// kalau export saja tanpa default maka pas import harus menggunakan { }
// import { HelloTry } from "./components/HelloTry";
// kalau dengan export default import bisa tanpa harus menggunakan { } tapi tidak bisa menggunakan arrow function
// import HelloTry from "./components/HelloTry";

// contoh
// import { Fragment } from "react";

// export default function HelloTry(){
//   return (
//     <Fragment>
//       <h1>Hello Try export </h1>
//     </Fragment>
//   );
// };
