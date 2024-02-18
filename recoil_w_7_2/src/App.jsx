import { RecoilRoot } from "recoil";
import "./App.css";
import Count from "./components/Count";
import Input from "./components/Input";

function App() {
  return (
    <>
      {/* recoil root digunakan untuk membungkus component induk yang akan diteleport state */}
      {/* intinya component yang akan diberi teleported state dibungkus recoil root */}
      <RecoilRoot>
        <Count />
        <Input />
      </RecoilRoot>
    </>
  );
}

export default App;

// lanjut week 7.2 01:03:00
