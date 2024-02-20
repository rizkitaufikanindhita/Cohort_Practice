function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Flex</h1>
      <div className="flex justify-between">
        <div className="w-24 h-24 p-2 m-10 text-3xl font-bold text-center rounded-md shadow-md">
          Hi There
        </div>
        <div className="w-24 h-24 p-2 m-10 text-3xl font-bold text-center rounded-md shadow-md">
          Hi There
        </div>
        <div className="w-24 h-24 p-2 m-10 text-3xl font-bold text-center rounded-md shadow-md">
          Hi There
        </div>
      </div>

      <br />
      <hr />
      <br />

      <h1 className="text-3xl font-bold">Grid</h1>
      <div className="grid grid-cols-2">
        <div className="p-2 m-2 text-3xl font-bold text-center bg-red-500 rounded-md shadow-md ">
          Hi There
        </div>
        <div className="p-2 m-2 text-3xl font-bold text-center bg-blue-500 rounded-md shadow-md ">
          Hi There
        </div>
        <div className="p-2 m-2 text-3xl font-bold text-center bg-yellow-500 rounded-md shadow-md ">
          Hi There
        </div>
        <div className="p-2 m-2 text-3xl font-bold text-center bg-purple-500 rounded-md shadow-md ">
          Hi There
        </div>
      </div>

      <br />
      <hr />
      <br />

      <h1 className="text-3xl font-bold">Grid Span</h1>
      <div className="grid grid-cols-10">
        <div className="col-span-2 p-2 m-2 text-3xl font-bold text-center bg-red-500 rounded-md shadow-md ">
          Hi There
        </div>
        <div className="col-span-2 p-2 m-2 text-3xl font-bold text-center bg-blue-500 rounded-md shadow-md ">
          Hi There
        </div>
        <div className="col-span-1 p-2 m-2 text-3xl font-bold text-center bg-yellow-500 rounded-md shadow-md ">
          Hi There
        </div>
        <div className="col-span-5 p-2 m-2 text-3xl font-bold text-center bg-purple-500 rounded-md shadow-md ">
          Hi There
        </div>
      </div>

      <br />
      <hr />
      <br />

      <h1 className="text-3xl font-bold">Flex</h1>
      <div className="flex">
        <div className="w-[20%] p-2 m-2 text-3xl font-bold text-center bg-red-500 rounded-md shadow-md ">
          Hi There
        </div>
        <div className="w-[20%] p-2 m-2 text-3xl font-bold text-center bg-blue-500 rounded-md shadow-md ">
          Hi There
        </div>
        <div className="w-[10%] p-2 m-2 text-3xl font-bold text-center bg-yellow-500 rounded-md shadow-md ">
          Hi There
        </div>
        <div className="w-[50%] p-2 m-2 text-3xl font-bold text-center bg-purple-500 rounded-md shadow-md ">
          Hi There
        </div>
      </div>
    </div>
  );
}

export default App;

// flex - done
// grid - done
// responsiveness

// mulai 37:00
