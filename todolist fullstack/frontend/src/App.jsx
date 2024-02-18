import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Notfound from "./components/Notfound";
import Todo from "./components/Todo";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage title={"Homepage"} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/:username/todo" element={<Todo />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
