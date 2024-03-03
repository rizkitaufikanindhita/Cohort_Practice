import Canvas from "./components/Canvas";
import Indicator from "./components/Indicator";

function App() {
  return (
    <div className="flex border justify-evenly">
      <div className="mx-5 border">
        <Canvas />
      </div>
      <div className="mx-5 border">
        <Indicator />
      </div>
      <div>
        <div>hi there</div>
      </div>
    </div>
  );
}

export default App;
