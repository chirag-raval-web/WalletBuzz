import { Box, Typography } from '@mui/material'
import React from 'react'
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { ExpandMore } from '@mui/icons-material';
const Sidebar = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      bgcolor={"#161227"}
      width={"240px"}
      p={2}
      gap={5}
      height={"100vh"}
      borderRight={"1px solid gray"}
      borderTop={"1px solid gray"}
    >
      <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
        <Box display={"flex"} gap={"12px"}>
          <Box
            width={"50px"}
            height={"50px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            borderRadius={1}
            padding={0.5}
            bgcolor={"#14c1ff"}
          >
            <AcUnitIcon sx={{ color: "#161227" }} />
          </Box>
          <Box display={"flex"} flexDirection={"column"} gap={"4px"}>
            <Typography color="white">Protfolio</Typography>
            <Typography color="white">$13.3</Typography>
          </Box>
        </Box>
        <ExpandMore   sx={{color:"white"}} />
      </Box>
    </Box>
  );
}

export default Sidebar
