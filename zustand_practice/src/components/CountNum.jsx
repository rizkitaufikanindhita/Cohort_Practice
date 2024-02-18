import store from "../store";

const CountNum = () => {
  const { useAppStore } = store;
  const count = useAppStore((state) => state.count);
  console.log("render count number");
  return <div>{count}</div>;
};

export default CountNum;

// menggunakan (state)=>state. agar yang direrender tepat sasaran
// state yang lain dalam satu useStore tidak ter re render
// kalau langsung tanpa (state)=>state. maka akan ter re render component yang statenya ada pada useStore yang sama
