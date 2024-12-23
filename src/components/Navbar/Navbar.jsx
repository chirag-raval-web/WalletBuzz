import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import ConnectWalletModel from "../ConnectWalletModel/ConnectWalletModel";
import { useDispatch, useSelector } from "react-redux";
import { setWalletAddress, clearWalletAddress } from "../../redux/walletSlice"; 

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const walletAddress = useSelector((state) => state.wallet.address); 
  const dispatch = useDispatch(); 

  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

const handleDisconnect = async () => {
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

    alert("Wallet disconnected successfully.");
  } catch (error) {
    console.error("Error disconnecting wallet:", error);
     
  }
};



  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        backdropFilter: "blur(10px)",
        zIndex: 1300,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          backgroundColor: "transparent",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Left side - Brand Name */}
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "2rem",
            background: "linear-gradient(to right, #30CFD0, #c43ad6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow:
              "0 0 80px rgb(192 219 255 / 75%), 0 0 32px rgb(65 120 255 / 24%)",
            color: "transparent",
          }}
        >
          WalletBuzz
        </Typography>

        {/* Right side - Wallet Address or Connect Button */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {walletAddress ? (
            <>
              {/* Display wallet address with a disconnect button */}
              <Typography sx={{ color: "white", fontWeight: "bold" }}>
                
                {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
              </Typography>
              <IconButton
                onClick={handleDisconnect}
                sx={{
                  color: "#38C7B6",
                  "&:hover": { color: "#2BAA9E" },
                }}
              >
                <Typography>Disconnect</Typography>
              </IconButton>
            </>
          ) : (
            
            <Button
              onClick={handleOpenModal}
              variant="contained"
              sx={{
                borderRadius: "50px",
                padding: "6px 16px",
                backgroundColor: "#38C7B6",
                color: "white",
                border: "2px double transparent",
                backgroundImage:
                  "linear-gradient(rgb(13, 14, 33), rgb(13, 14, 33)), radial-gradient(circle at left top, rgb(1, 110, 218), rgb(217, 0, 192))",
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",
                hover: {
                  backgroundColor: "#2BAA9E",
                  scale: 1,
                },
                textTransform: "none",
              }}
            >
              Connect Wallet
            </Button>
          )}
        </Box>
      </Toolbar>
      <ConnectWalletModel open={open} onClose={handleCloseModal} />
    </AppBar>
  );
};

export default Navbar;
