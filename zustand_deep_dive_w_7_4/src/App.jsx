/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import MyNetwork from "./components/MyNetwork";
import Jobs from "./components/Jobs";
import Messaging from "./components/Messaging";
import Notifications from "./components/Notifications";
import Me from "./components/Me";
import useAppStore from "./store";
import { useEffect } from "react";

function App() {
  const fetchAPI = useAppStore((state) => state.fetchAPI);
  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div>
      <button style={{ margin: "5px" }}>Home</button>

      <MyNetwork />
      <Jobs />
      <Messaging />
      <Notifications />

      <Me />
    </div>
  );
}

export default App;

//lanjut 36:00 di week 7.4 | Recoil Deep dive
