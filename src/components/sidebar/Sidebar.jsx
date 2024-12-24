import React, { useState } from "react";
import { Box, Typography, IconButton, Menu, MenuItem, Button } from "@mui/material";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import LayersIcon from "@mui/icons-material/Layers";
import { ExpandMore, ExpandLess, ChatRounded } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setWalletAddress, clearWalletAddress } from "../../redux/walletSlice"; 
import BarChartIcon from "@mui/icons-material/BarChart";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import HistoryIcon from "@mui/icons-material/History";
import InsightsIcon from "@mui/icons-material/Insights";
import SettingsIcon from "@mui/icons-material/Settings";
import SecurityIcon from "@mui/icons-material/Security";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
const Sidebar = () => {
  const [menuAnchor, setMenuAnchor] = useState(null);
  const walletAddress = useSelector((state) => state.wallet.address);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleMenuClick = (event) => {
    setMenuAnchor(event.currentTarget);
  };
  const handleMenuClose = () => {
    setMenuAnchor(null);
  };
  const handleDisconnectWallet = async () => {
    try {
      if (window.ethereum) {
        await window.ethereum.request({
          method: "wallet_revokePermissions",
          params: [
            {
              eth_accounts: {},
            },
          ],
        });
        console.log("MetaMask permissions revoked.");
      }
      dispatch(clearWalletAddress());
      navigate("/");
      //  setOpen(true)
      alert("Wallet disconnected successfully.");
    } catch (error) {
      console.error("Error disconnecting wallet:", error);
    }
  };

const SideBarMenuOption = [
  {
    label: "Overview", // Summary of all holdings
    icon: <BarChartIcon />,
  },
  {
    label: "Wallet", // Access wallet details
    icon: <AccountBalanceWalletIcon />,
  },
  {
    label: "Swap Tokens", // Token exchange functionality
    icon: <SwapHorizIcon />,
  },
  {
    label: "Transaction History", // View transaction logs
    icon: <HistoryIcon />,
  },
  {
    label: "Analytics", // Analyze portfolio performance
    icon: <InsightsIcon />,
  },
  {
    label: "Security", // Manage security settings
    icon: <SecurityIcon />,
  },
  {
    label: "Settings", // General app settings
    icon: <SettingsIcon />,
  },
  {
    label: "Help Center", // Support and FAQs
    icon: <HelpOutlineIcon />,
  },
];
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      bgcolor={"#1e1d21"}
      width={"240px"}
      p={"20px"}
      gap={5}
      height={"100vh"}
      position="relative"
    >
      {/* Header Section */}
      <Box
        width={"100%"}
        height={"56px"}
        borderRadius={2}
        p={1}
        display={"flex"}
        justifyContent="space-between"
        alignItems="center"
        onClick={handleMenuClick}
        sx={{
          cursor: "pointer",
          ":hover": {
            backgroundColor: "#2e2d31",
          },
        }}
      >
        <Box display={"flex"} gap={"12px"}>
          <Box
            width={"40px"}
            height={"40px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            borderRadius={1}
            padding={0.5}
            bgcolor={"#a71f6b"}
          >
            <LayersIcon fontSize="20px" sx={{ color: "#ffff",fontSize:"20px" }} />
          </Box>
          <Box display={"flex"} flexDirection={"column"} gap={"2px"}>
            <Typography
              sx={{
                fontFamily: "inter",
                fontSize: "14px",
                fontWeight: "500",
                lineHeight: "20px",
                letterSpacing: "0.03px",
                color: "#ffffff",
              }}
            >
              Portfolio
            </Typography>
            <Typography
              sx={{
                fontFamily: "inter",
                fontSize: "14px",
                fontWeight: "500",
                lineHeight: "20px",
                letterSpacing: "0.03px",
                color: "#ffffff",
              }}
            >
              $13.3
            </Typography>
          </Box>
        </Box>

        {/* Dropdown Menu Trigger */}
        <IconButton
          disableRipple
          sx={{
            color: "#ffffff",
          }}
        >
          {menuAnchor ? <ExpandLess /> : <ExpandMore />}
        </IconButton>
      </Box>
      {/* <Menu
        anchorEl={menuAnchor}
        open={Boolean(menuAnchor)}
        onClose={handleMenuClose}
        PaperProps={{
          sx: {
            bgcolor: "#2a292e",
            color: "#ffffff",
            minWidth: "150px",
          },
        }}
      >
        <MenuItem
          onClick={handleDisconnectWallet}
          sx={{
            color: "#ffffff",
            textShadow:
              "0 0 80px rgb(192 219 255 / 75%), 0 0 32px rgb(65 120 255 / 24%)",
          }}
        >
          Disconnect Wallet
        </MenuItem>
      </Menu> */}
      <Box display={"flex"} flexDirection={"column"} gap={"12px"}>
        {SideBarMenuOption.map((option, index) => (
          <Box
            key={index}
            width={"100%"}
            height={"56px"}
            borderRadius={2}
            p={1}
            display={"flex"}
            gap={1}
            color={"#82848d"}
            alignItems="center"
            sx={{
              cursor: "pointer",
              ":hover": {
                backgroundColor: "#2e2d31",
              },
            }}
          >
            {option.icon}
            <Typography sx={{ color: "white" }}>{option.label}</Typography>
          </Box>
        ))}
      </Box>
      <Button
      
        onClick={handleDisconnectWallet}
        variant="contained"
        sx={{
          display: "flex",
          gap: 1,
          background: "#FF667A26",
          color: "#FF667A",
          mt:"auto",
        }}
      >
        <Typography>
          {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
        </Typography>
        <ExitToAppIcon />
      </Button>
    </Box>
  );
};

export default Sidebar;
