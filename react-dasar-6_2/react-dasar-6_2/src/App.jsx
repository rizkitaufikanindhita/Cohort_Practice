/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-children-prop */
import { useCallback, useState } from "react";
import "./App.css";
import Header from "./components/Headers";
import Calculation from "./components/Calculation";
import Todo from "./components/Todo";
import CardWrapper from "./components/CardWrapper/CardWrapper";
import Hello from "./components/CardWrapper/Child/Hello";
import World from "./components/CardWrapper/Child/World";
import Mars from "./components/CardWrapper/Child/Mars";
import Calcu from "./components/Calcu";
import CounterUseCallback from "./components/CounterUseCallback";
import CompUseRef from "./components/CompUseRef";
import { HelloTry } from "./components/HelloTry";

function App() {
  const [number, setNumber] = useState(0);
  const count = () => {
    setNumber(number + 1);
  };

  // useCallback dan memo
  const [word, setWord] = useState("");

  // ketika word tidak berubah maka tidak direrender komponen yang dipassing function ini
  const countNew = useCallback(() => {
    setWord("Hi There");
  }, [word]);

  return (
    // kalau cuma <> </> akan ke rerender walaupun pakai memo,
    // tapi kalau pakai selain itu tidak akan ke rerender
    <div>
      {/* App di rerender makan child componentnya akan direrender juga */}
      {/* cara agar child componentnya tidak direrender dengan menggunakan memo di child componentnya  */}
      <div>
        <h2>parent component</h2>
        <div>
          <button onClick={count}>count {number}</button>
        </div>
      </div>
      <br />

      <div>
        <CounterUseCallback countNew={countNew} word={word} />
      </div>

      <div>
        <h2>child component 1</h2>
        <Header title="New World 1" />
      </div>

      <div>
        <h2>child component 2</h2>
        <Calculation />
      </div>

      <div>
        <h3>
          <Todo />
        </h3>
      </div>

      <div>
        <CardWrapper>
          <Hello />
        </CardWrapper>
        <CardWrapper>
          <World />
        </CardWrapper>
        <CardWrapper>
          <Mars />
        </CardWrapper>
      </div>

      <div>
        <Calcu />
      </div>

      <div>
        <CompUseRef />
      </div>

      <div>
        <HelloTry />
      </div>
    </div>
  );
}

export default App;

// lanjut week 6.3
