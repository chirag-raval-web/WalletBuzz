import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Button,
  Typography,
  Box,
  CircularProgress,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MetaMaskIcon from "../../asset/walletIcons/SVG_MetaMask_Icon_Color.svg";
import { useDispatch } from "react-redux";
import { setWalletAddress } from "../../redux/walletSlice"; // Import the action

const walletsData = [
  {
    name: "MetaMask",
    icon: MetaMaskIcon,
    isInstalled: false,
    detect: () => !!window.ethereum,
  },
];

const ConnectWalletModel = ({ open, onClose }) => {
  const [wallets, setWallets] = useState(walletsData);
  const [showQR, setShowQR] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch(); // Use dispatch to update the Redux store

  useEffect(() => {
    const updatedWallets = wallets.map((wallet) => ({
      ...wallet,
      isInstalled: wallet.detect(),
    }));
    setWallets(updatedWallets);
  }, []);

  const handleQRClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowQR(true);
    }, 1500);
  };

  const handleBackToWallets = () => {
    setShowQR(false);
  };

  const handleMetaMaskConnect = async () => {
    if (window.ethereum) {
      try {
        // Request account access
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        // Log and dispatch the connected wallet address
        const connectedAddress = accounts[0];
        console.log("Connected to MetaMask address:", connectedAddress);

        // Dispatch the address to Redux store
        dispatch(setWalletAddress(connectedAddress));

        // Optionally, you can perform additional actions with the connected address
      } catch (error) {
        console.error("User denied account access or error occurred:", error);
      }
    } else {
      alert("MetaMask is not installed.");
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        style: {
          position: "relative",
          backgroundColor: "#121125",
          borderRadius: "16px",
          color: "white",
          width: "350px",
          padding: "16px",
        },
      }}
    >
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 8px",
          borderBottom: "1px solid #333",
        }}
      >
        <Typography variant="h6" sx={{ fontSize: "18px" }}>
          Connect Wallet
        </Typography>
        <IconButton onClick={onClose} sx={{ color: "white" }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent
        sx={{
          padding: "16px",
          "&:last-child": {
            paddingBottom: "16px",
          },
        }}
      >
        {showQR ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "300px",
              padding: "16px",
            }}
          >
            <Typography variant="body1" sx={{ mb: 2 }}>
              Scan the QR Code to Connect
            </Typography>
            <Box
              sx={{
                width: "200px",
                height: "200px",
                backgroundColor: "white",
                borderRadius: "8px",
              }}
            />
            <Button
              onClick={handleBackToWallets}
              variant="text"
              sx={{ mt: 2, color: "#38C7B6" }}
            >
              Back to Wallets
            </Button>
          </Box>
        ) : loading ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "300px",
              padding: "16px",
            }}
          >
            <CircularProgress sx={{ color: "#38C7B6", mb: 2 }} />
            <Typography variant="body2">Preparing QR Code...</Typography>
          </Box>
        ) : (
          <Box sx={{ padding: "8px 0" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                padding: "8px",
              }}
            >
              {wallets.map((wallet) => (
                <Button
                  key={wallet.name}
                  variant="outlined"
                  onClick={() => {
                    if (wallet.name === "MetaMask") {
                      handleMetaMaskConnect();
                    } else {
                      console.log(`Connecting to ${wallet.name}`);
                    }
                  }}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    textTransform: "none",
                    borderColor: "#333",
                    color: "white",
                    padding: "12px 16px",
                    "&:hover": { borderColor: "#38C7B6" },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    {wallet.icon && (
                      <img
                        src={wallet.icon}
                        alt={wallet.name}
                        style={{ width: "24px", height: "24px" }}
                      />
                    )}
                    <Typography>{wallet.name}</Typography>
                  </Box>
                  {wallet.isInstalled ? (
                    <Typography variant="caption" sx={{ color: "#38C7B6" }}>
                      Installed
                    </Typography>
                  ) : (
                    <Typography variant="caption" sx={{ color: "#999" }}>
                      Not Installed
                    </Typography>
                  )}
                </Button>
              ))}
            </Box>
            <Button
              onClick={handleQRClick}
              variant="text"
              sx={{
                mt: 3,
                color: "#38C7B6",
                display: "block",
                margin: "0 auto",
              }}
            >
              Show QR Code
            </Button>
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ConnectWalletModel;
