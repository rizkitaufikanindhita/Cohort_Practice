import Click from "./components/Click";

function App() {
  return (
    <>
      <div className="w-96 h-20 bg-slate-500 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] grid grid-rows-2">
        <div className="bg-slate-600"></div>
        <Click />
      </div>
    </>
  );
}

export default App;
