import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Homepage from "./components/Homepage";
import CardWrapper from "./components/CardWrapper";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <CardWrapper>
                <Dashboard />
              </CardWrapper>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
