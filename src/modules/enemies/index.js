import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { screen5 } from "../../imgs/webp/";
import Cross from "../../imgs/new/Cross.png";
import Login from "../../imgs/new/login.svg";
import Timer from "../../imgs/new/timer.svg";
import Video from "../../imgs/new/video.svg";
import Close from "../../imgs/new/close.svg";
import Noise from "../../imgs/new/noise.png";
import BlockCursor from "../../imgs/new/disabled.cur";

import "swiper/css";

const Enemies = () => {
  return (
    <Box id={"backstory"}>
      <Box sx={{ paddingY: { xs: "100px", md: "200px" } }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Box
            sx={{
              background: `#2E2E2E`,
              backgroundBlendMode: "soft-light, normal",
              width: { xs: 280, md: 696, lg: 740, xl: 966 },
              height: { xs: 380, md: 470, xl: 618 },
              backgroundSize: "cover",
              borderRadius: "8px",
              position: "absolute",
              zIndex: -1,
              transform: "translateX(-50%) rotate(5deg)",
              left: "50%",
              top: 0,
            }}
          ></Box>
          <Box
            sx={{
              background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${screen5})`,
              width: { xs: 280, md: 696, lg: 740, xl: 966 },
              height: { xs: 380, md: 470, xl: 618 },
              backgroundSize: "cover",
              borderRadius: "8px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                fontSize: { xs: "32px", md: "80px" },
                lineHeight: { xs: "32px", md: "80px" },
              }}
            >
              <Typography
                fontFamily="Aaaiight"
                color="#FFF"
                style={{ fontSize: "inherit", lineHeight: "inherit" }}
              >
                Near future...
              </Typography>
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "block" },
                marginTop: "24px",
                fontSize: { xs: "12px", md: "16px" },
                lineHeight: { xs: "19.2px", md: "170%" },
              }}
            >
              <Typography
                color="#FFF"
                textAlign="center"
                fontFamily="Inter"
                style={{ fontSize: "inherit", lineHeight: "inherit" }}
              >
                Billions of citizens in existing metaverses now have access
                <br /> to a new meta-jump technology. Using this technology,
                <br />
                you can move between any metaverse...
              </Typography>
            </Box>
            <Box
              sx={{
                display: { xs: "block", md: "none" },
                marginTop: "24px",
                fontSize: { xs: "12px", md: "16px" },
                lineHeight: { xs: "19.2px", md: "170%" },
              }}
            >
              <Typography
                color="#FFF"
                textAlign="center"
                fontFamily="Inter"
                style={{ fontSize: "inherit", lineHeight: "inherit" }}
                maxWidth="242px"
              >
                Billions of citizens in existing metaverses now have access to a
                new meta-jump technology. Using this technology, you can move
                between any metaverse...
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                marginTop: "44px",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
              }}
            >
              <Link
                href="https://chainjoes.gitbook.io/chainjoes/game-overview/characters"
                target="_blank"
                underline="none"
              >
                <Box
                  sx={{
                    width: { xs: "248px", md: "260px" },
                    height: { xs: "48px", md: "60px" },
                    display: "flex",
                    borderRadius: "2px",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    background:
                      "linear-gradient(204.42deg, #00FFB7 -11.28%, #005B42 105.96%),linear-gradient(0deg, #FFFFFF, #FFFFFF)",
                    marginRight: { xs: 0, md: "24px" },
                    fontSize: { xs: "14px", md: "16px" },
                    lineHeight: { xs: "14px", md: "16px" },
                    color: "#FFFFFF",
                    ":hover": {
                      outline: "1px solid #00FFB7",
                      background: "none",
                    },
                    ":focus": {
                      outline: "1px solid #FFF",
                      background: "none",
                    },
                    ":active": {
                      background: "#FFF",
                      color: "#080808",
                    },
                  }}
                >
                  <img src={Login} alt="login" />
                  <Typography
                    marginLeft="11px"
                    fontWeight="600"
                    fontFamily="Inter"
                    style={{
                      fontSize: "inherit",
                      lineHeight: "inherit",
                      color: "inherit",
                    }}
                  >
                    Explore the Backstory
                  </Typography>
                </Box>
              </Link>
              <Link
                href="https://youtu.be/n2aK_gQoLls"
                target="_blank"
                underline="none"
              >
                <Box
                  sx={{
                    width: { xs: "248px", md: "260px" },
                    height: { xs: "48px", md: "60px" },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px solid",
                    borderRadius: "2px",
                    borderImageSlice: 1,
                    marginRight: { xs: 0, md: "16px" },
                    fontSize: { xs: "14px", md: "16px" },
                    lineHeight: { xs: "14px", md: "16px" },
                    marginTop: { xs: "12px", md: 0 },
                    borderImageSource:
                      "linear-gradient(204.42deg, #00FFB7 -11.28%, #005B42 105.96%)",
                    cursor: `pointer`,
                    color: "#05D19B",
                    ":hover": {
                      color: "#FFF",
                    },
                    ":focus": {
                      border: "1px solid #FFF",
                      color: "#FFF",
                    },
                    ":active": {
                      background: "#FFF",
                      color: "#080808",
                    },
                  }}
                >
                  <img src={Video} alt="login" />
                  <Typography
                    fontWeight="600"
                    fontFamily="Inter"
                    marginLeft="8px"
                    style={{ fontSize: "inherit", lineHeight: "inherit" }}
                  >
                    Watch the teaser
                  </Typography>
                </Box>
              </Link>
            </Box>
          </Box>
          <Box>
            <Box
              sx={{
                position: "absolute",
                top: { xs: "-25%", md: "-32%", xl: "-23%" },
                left: { xs: "5%", md: "1%", xl: "17%" },
                width: { xs: "70px", md: "158px" },
              }}
            >
              <img src={Cross} alt="cross" style={{ width: "inherit" }} />
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: { md: "23%" },
                bottom: { xs: "-20%", md: "unset" },
                right: { xs: "40%", md: "-5%", lg: "2%", xl: "5%" },
                transform: "rotate(30deg)",
                width: { xs: "50px", md: "82px" },
              }}
            >
              <img src={Cross} style={{ width: "inherit" }} alt="cross" />
            </Box>
            <Box
              sx={{
                position: "absolute",
                bottom: { md: "-23%" },
                top: { xs: "-15%", md: "unset" },
                left: { xs: "70%", md: "30%", xl: "50%" },
                transform: "rotate(-21deg)",
                width: { xs: "23px", md: "49px" },
              }}
            >
              <img src={Cross} alt="cross" style={{ width: "inherit" }} />
            </Box>
            <Box
              sx={{
                position: "absolute",
                backgroundBlendMode: "soft-light, normal",
                background: `url(${Noise}) 0 0/30% 30%,#464646`,
                paddingX: "32px",
                paddingY: "17px",
                borderRadius: "100px",
                transform: { xs: "rotate(-15deg)", md: "rotate(-30deg)" },
                top: { xs: "95%", md: "110%", xl: "50%" },
                right: { xs: "-2%", md: "1%", xl: "15%" },
                display: "flex",
                alignItems: "center",
                fontSize: { xs: "12px", md: "16px" },
                lineHeight: { xs: "12px", md: "16px" },
              }}
            >
              <img src={Close} alt="close" />
              <Typography
                marginLeft="8px"
                color="#FFF"
                fontWeight="500"
                fontFamily="Inter"
                style={{ fontSize: "inherit", lineHeight: "inherit" }}
              >
                Without paying for gas
              </Typography>
            </Box>
            <Box
              sx={{
                position: "absolute",
                backgroundBlendMode: "soft-light, normal",
                background: `url(${Noise}) 0 0/30% 30%,#464646`,
                paddingX: "32px",
                paddingY: "17px",
                borderRadius: "100px",
                transform: { xs: "rotate(15deg)", md: "rotate(30deg)" },
                top: { xs: "-10%", md: "5%", lg: "35%" },
                left: { xs: "3%", md: "2%", xl: "18%" },
                display: "flex",
                alignItems: "center",
                fontSize: { xs: "12px", md: "16px" },
                lineHeight: { xs: "12px", md: "16px" },
              }}
            >
              <img src={Timer} alt="close" />
              <Typography
                marginLeft="8px"
                color="#FFF"
                fontWeight="500"
                fontFamily="Inter"
                style={{ fontSize: "inherit", lineHeight: "inherit" }}
              >
                In a second
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Enemies;
