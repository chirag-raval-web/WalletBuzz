import { Box, CssBaseline } from "@mui/material";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import TractWalletPage from "./pages/TractWalletPage.jsx"; // Import the new TrackPage component

const App = () => {
  const location = useLocation();

  return (
    <>
      <CssBaseline />
      {location.pathname === "/" && <Navbar />}{" "}
      {/* Only render Navbar on the Home page */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:walletAddress/track" element={<TractWalletPage />} />
        {/* <Route path="/about" element={<AboutPage />} /> */}
      </Routes>
    </>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
