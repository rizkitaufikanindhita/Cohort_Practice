function App() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-10">
        <div className="p-2 m-2 text-3xl font-bold text-center text-white bg-blue-500 md:col-span-2">
          HI THERE
        </div>
        <div className="p-2 m-2 text-3xl font-bold text-center text-white bg-red-500 md:col-span-2">
          HI THERE
        </div>
        <div className="p-2 m-2 text-3xl font-bold text-center text-white bg-yellow-500 md:col-span-6">
          HI THERE
        </div>
      </div>
    </div>
  );
}

export default App;

// flex - done
// grid - done
// responsiveness
// cara baca bg-red-500 sm:bg-yellow-500 lg:bg-blue-500
// mobile maka bg red
// masuk minimum width sm maka bg jadi yellow
// masuk minimum width md maka bg jadi purple
// masuk minimum width lg maka bg jadi blue

// mulai 01:08:00
