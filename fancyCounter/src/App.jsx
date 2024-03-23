import useAppStore from "./store";
import { shallow } from "zustand/shallow";

function App() {
  const [counter, setIncrease, setDecrease, reset] = useAppStore(
    (state) => [
      state.counter,
      state.setIncrease,
      state.setDecrease,
      state.reset,
    ],
    shallow
  );

  return (
    <div className="flex items-center justify-center w-screen h-screen shadow-xl bg-slate-600">
      <div className="grid rounded-md shadow-xl bg-slate-500 w-80 h-96 grid-rows-10">
        <div className="mt-5 text-gray-300 row-span-8">
          <div className="mt-5 text-2xl font-bold text-center">
            {counter < 5 ? "FANCY COUNTER" : "LIMIT! BUY PRO FOR > 5"}
          </div>
          <div className="my-5 text-center text-9xl">{counter}</div>
          <div className="text-center">
            <button onClick={reset}>reset</button>
          </div>
        </div>
        <div className="flex justify-center row-span-2">
          <button
            className="flex items-center justify-center w-full pb-2 text-5xl text-center bg-slate-300 rounded-bl-md"
            onClick={setDecrease}
          >
            -
          </button>
          <button
            className="flex items-center justify-center w-full pb-2 text-5xl text-center bg-slate-300 rounded-br-md"
            onClick={setIncrease}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
