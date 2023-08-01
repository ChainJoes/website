import React from "react";
import { Box, Typography } from "@mui/material";

const Loader = ({ progres }) => {

  const getText = () => {
    if (Math.floor(progres * 100) < 33) {
      return "Looking for web3 enemies";
    } else if (Math.floor(progres * 100) < 66) {
      return "Kicking their asses";
    } else if (Math.floor(progres * 100) <= 100) {
      return "Get your reward!";
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#000000",
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="preloadScreen"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          fontSize: { xs: "17px", md: "40px" },
        }}
      >
        <Typography
          fontFamily="Inter"
          fontWeight="500"
          color="#FFFFFF"
          style={{ fontSize: "inherit" }}
        >
          {Math.floor(progres * 100)}%
        </Typography>
        <Box
          sx={{
            width: { xs: 200, md: 400, lg: 563 },
            height: 8,
            background: "rgba(255, 255, 255, 0.1)",
            position: "relative",
            marginTop: "40px",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: { xs: 200 * progres, md: 400 * progres, lg: 563 * progres },
              height: 8,
              background:
                "linear-gradient(204.42deg, #00FFB7 -11.28%, #005B42 105.96%)",
              position: "relative",
              borderRadius: "4px",
            }}
          />
        </Box>
        <Box
          sx={{
            marginTop: "40px",
            fontSize: { xs: "20px", md: "32px" },
            width: '100%',
          }}
        >
          <Typography
            fontFamily="Aaaiight"
            fontWeight="400"
            textAlign='center'
            color="#FFFFFF"
            style={{ fontSize: "inherit", width: 'inherit' }}
          >
            {getText()}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Loader;
