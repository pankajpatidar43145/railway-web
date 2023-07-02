import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your components for routing
import LoginPage from "./pages/Login/Login";
import HomePage from "./pages/Home/Home";
import ShowTrain from "./pages/showtrain/showtrain";
import Available from "./pages/Available/Available";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />{" "}
        <Route path="/home" element={<HomePage />} />{" "}
        <Route path="/showtrain" element={<ShowTrain />} />{" "}
        <Route path="/Available" element={<Available />} />{" "}
      </Routes>{" "}
    </Router>
  );
}

export default App;
