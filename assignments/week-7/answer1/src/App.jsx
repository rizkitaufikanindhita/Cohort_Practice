import Bio from "./components/Bio";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-96 h-96 rounded-xl">
          <div className=" bg-white flex justify-center items-center mt-20 mb-5">
            <Profile />
          </div>
          <div>
            <Bio name={"Rizki"} age={28} nation={"Indonesia"} />
          </div>
          <hr />
        </div>
      </div>
    </>
  );
}

export default App;
