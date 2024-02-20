import RevenueCard from "./components/RevenueCard";

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

      <br />
      <hr />
      <br />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        <div className="m-5">
          <RevenueCard
            amount={"900.000.000"}
            order={13}
            title={"Amount Pending"}
          />
        </div>
        <div className="m-5">
          <RevenueCard
            amount={"400.000.000"}
            order={5}
            title={"Amount Received"}
          />
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

// mulai 01:26:00
