import { Box } from "@mui/material";
import React from "react";
import Sidebar from "../components/sidebar/Sidebar";

const TractWalletPage = () => {
  return (
    <Box
      width={"100%"}
      height={"100vh"}
      display={"flex"}
      marginTop={"-64px"}
      paddingTop={"64px"}
      bgcolor={"#121227"}
    >
      <Box>
        <Sidebar />
      </Box>
    </Box>
  );
};

export default TractWalletPage;
