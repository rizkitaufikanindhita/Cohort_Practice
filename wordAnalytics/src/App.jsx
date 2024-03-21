import Canvas from "./components/Canvas";
import Indicator from "./components/Indicator";

function App() {
  return (
    <div className="w-full h-screen pt-24 bg-gradient-to-b from-slate-600 to-gray-300">
      <div className="mb-5 text-5xl font-bold text-center text-white">
        WORD <span className="font-mono font-normal">ANALYTICS</span>
      </div>
      <div className="flex flex-col items-center justify-center w-screen h-2/3 md:flex-row">
        <div className="w-3/5 mt-20 mx-80 h-4/5 md:w-2/3 md:mr-0 md:mx-20 md:mt-0">
          <Canvas />
        </div>
        <div className="w-3/5 mx-80 h-4/5 md:w-1/3 md:ml-0 md:mx-20">
          <Indicator />
        </div>
      </div>
    </div>
  );
}

export default App;
