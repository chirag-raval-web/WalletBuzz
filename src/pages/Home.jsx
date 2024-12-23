import React from "react";
import { Box, Typography } from "@mui/material";
import bg from "../asset/cover.svg";

const HomePage = () => {
  return (
    <Box
      sx={{
        marginTop: "-64px",
        height: "100vh", 
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "white",
        padding: 2,
        position: "relative", 
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",

          position: "absolute", 
          top: 0, 
          left: 0, 
          zIndex: 1, 
          backgroundImage: `url(${bg})`, 
          backdropFilter: "blur(10px)",
          backgroundSize: "cover", 
          backgroundPosition: "center", 
          backgroundRepeat: "no-repeat", 
        }}
      />
      <Typography
        sx={{
          fontSize: "7rem",
          width: "50%", 
          fontWeight: "bold",
          textShadow:
            "0 0 80px rgb(192 219 255 / 75%), 0 0 32px rgb(65 120 255 / 24%)",
          background: "linear-gradient(45deg, #728490, #f6f7f6, #728490)", 
          WebkitBackgroundClip: "text", 
          color: "transparent", 
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          position: "relative", 
          zIndex: 1, 
        }}
      >
        Track Your Wallet
      </Typography>
    </Box>
  );
};

export default HomePage;
