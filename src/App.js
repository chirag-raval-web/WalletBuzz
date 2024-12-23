import { Box, CssBaseline } from "@mui/material";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import { useDispatch, useSelector } from "react-redux"; 

const App = () => {
  const dispatch = useDispatch();
  const walletAddress = useSelector((state) => state.wallet.address); 

  return (
    <Router>
      <CssBaseline />
      <Navbar />
      <Routes>
        {/* Default route */}
        <Route path="/" element={<Home />} />

        {/* Route with wallet address */}
        <Route path="/:walletAddress" element={<Home />} />

        {/* Example: Uncomment if AboutPage is added */}
        {/* <Route path="/about" element={<AboutPage />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
