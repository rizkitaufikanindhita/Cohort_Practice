import Click from "./components/Click";
import useColorStore from "./store";

function App() {
  const warna = useColorStore((state)=>state.warna)
  console.log(warna)
  return (
    <>
      <div className={`w-96 h-96  bg-${warna}-500 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] grid grid-rows-2 m-10`}>
      </div>
      <div className="flex flex-row">
        <Click color={"slate"}/>
        <Click color={"red"}/>
        <Click color={"purple"}/>
        <Click color={"blue"}/>
        <Click color={"cyan"}/>
      </div>
    </>
  );
}

export default App;
