import useAppStore from "./store"
import {shallow} from "zustand/shallow"

function App() {
  const [counter, setIncrease, setDecrease, reset] = useAppStore((state)=>[state.counter,state.setIncrease,state.setDecrease,state.reset],shallow)

  return (
    <div className="bg-slate-600 w-screen h-screen flex justify-center items-center shadow-xl">
      <div className="bg-slate-500 w-80 h-96 grid grid-rows-10 rounded-md shadow-xl">
        <div className="row-span-8 mt-5 text-gray-300">
          <div className="text-center mt-5 text-2xl font-bold">{counter < 5 ? "FANCY COUNTER" : "LIMIT! BUY PRO FOR > 5"}</div>
          <div className="text-center text-9xl my-5">{counter}</div>
          <div className="text-center"><button onClick={reset}>reset</button></div>
        </div>
        <div className="flex justify-center row-span-2">
          <button className="bg-slate-300 w-full text-center rounded-bl-md flex justify-center items-center text-5xl pb-2" onClick={setDecrease}>-</button>
          <button className="bg-slate-300 w-full text-center rounded-br-md flex justify-center items-center text-5xl pb-2" onClick={setIncrease}>+</button>
        </div>
      </div>
    </div>
  )
}

export default App
