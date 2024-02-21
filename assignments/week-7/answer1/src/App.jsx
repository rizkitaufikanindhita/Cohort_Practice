import Bio from "./components/Bio";
import Data from "./components/Data";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-52 h-56 rounded-xl">
          <div className="flex items-center justify-center mt-10 mb-3 bg-white ">
            <Profile />
          </div>
          <div>
            <Bio name={"Rizki"} age={28} nation={"Indonesia"} />
          </div>
          <hr className="mt-4 mb-2" />
          <Data fol={"80K"} like={"803K"} photo={"1.4K"} />
        </div>
      </div>
    </>
  );
}

export default App;
