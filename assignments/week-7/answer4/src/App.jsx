/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import Bio from "./components/Bio";
import Data from "./components/Data";
import Profile from "./components/Profile";
import useAppStore from "./store";

function App() {
  const fetchData = useAppStore((state) => state.fetchData);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-96 h-96 rounded-xl">
          <div className="flex items-center justify-center mt-10 mb-3 bg-white ">
            <Profile />
          </div>
          <div>
            <Bio />
          </div>
          <hr className="mt-6 mb-4" />
          <Data />
        </div>
      </div>
    </>
  );
}

export default App;
