/* eslint-disable react-hooks/exhaustive-deps */
import Dashboard from "./components/dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import useAppStore from "./store";
import { useEffect } from "react";
import { shallow } from "zustand/shallow";

function App() {
  const [fetchData, dataManager] = useAppStore(
    (state) => [state.fetchData, state.dataManager],
    shallow
  );

  useEffect(() => {
    fetchData();
  }, [dataManager]);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
