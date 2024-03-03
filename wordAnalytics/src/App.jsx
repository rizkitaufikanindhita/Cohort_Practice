import Canvas from "./components/Canvas";
import Indicator from "./components/Indicator";

function App() {
  return (
    <div className="flex justify-evenly items-center bg-slate-500 w-full h-screen">
      <div className="w-2/3 h-2/3 grid grid-cols-2 items-center p-2">
        <div className="mx-5 rounded-xl h-full w-full">
          <Canvas />
        </div>
        <div className="mx-5  h-full w-full">
          <Indicator />
        </div>
      </div>
    </div>
  );
}

export default App;
