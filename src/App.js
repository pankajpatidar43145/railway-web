import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your components for routing
import LoginPage from "./pages/Login/Login";
import HomePage from "./pages/Home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />{" "}
        <Route path="/home" element={<HomePage />} />{" "}
      </Routes>{" "}
    </Router>
  );
}

export default App;
