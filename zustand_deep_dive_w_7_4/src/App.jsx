import "./App.css";
import MyNetwork from "./components/MyNetwork";
import Jobs from "./components/Jobs";
import Messaging from "./components/Messaging";
import Notifications from "./components/Notifications";
import Me from "./components/Me";

function App() {
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

//lanjut 10:10 di week 7.4 | Recoil Deep dive
