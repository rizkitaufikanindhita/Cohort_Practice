/* eslint-disable no-unused-vars */
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loading from "./components/Loading.jsx";

// lazy loading lalu gunakan suspense
const Dashboard = lazy(() => import("./components/Dashboard"));
const Landing = lazy(() => import("./components/Landing"));

// sebelumnya
// import Landing from "./components/Landing";
// import Dashboard from "./components/Dashboard";

function App() {
  // const navigate = useNavigate();

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loading />}>
                <Landing />
              </Suspense>
            }
          />
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={<Loading />}>
                <Dashboard />
              </Suspense>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// lanjut 01:07:00 week 7.1
