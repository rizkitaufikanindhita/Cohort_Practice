import Canvas from "./components/Canvas";
import Indicator from "./components/Indicator";

function App() {
  return (
    <div className="w-full h-screen pt-24 bg-gradient-to-b from-slate-600 to-gray-300">
      <div className="mb-5 text-5xl font-bold text-center text-white">
        WORD <span className="font-mono font-normal">ANALYTICS</span>
      </div>
      <div className="flex items-center justify-center w-screen pr-10 h-2/3 ">
        <div className="grid items-center grid-cols-2 p-2 ">
          <div className="w-full h-full mx-5 rounded-xl">
            <Canvas />
          </div>
          <div className="w-full h-full mx-5">
            <Indicator />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
