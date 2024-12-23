import { Box, CssBaseline } from "@mui/material";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Correct import here
 
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

const App = () => {
  return (
    <Router>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<AboutPage />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
