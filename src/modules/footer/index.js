import React, { useState } from "react";
import { Box, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ArrowAngle from "../../imgs/new/arrow-angle.svg";
// import Twitter from "../../imgs/new/twitter.svg";
// import Telegram from "../../imgs/new/telegram.svg";
// import TikTok from "../../imgs/new/tiktok.svg";
// import Discord from "../../imgs/new/discord.svg";
// import Medium from "../../imgs/new/medium.svg";
// import LinkedIn from "../../imgs/new/linkedin-logo.svg";
import Noise from "../../imgs/new/noise.png";
import DamnnLogo from "../../imgs/new/damn-logo-footer.svg";

import {
  Twitter,
  Telegram,
  Tiktok,
  Discord,
  Medium,
  LinkedinLogo,
} from "../../imgs/new/svg";

const Footer = () => {
  const [activeSocial, setActiveSocial] = useState("");
  return (
    <Box>
      <Box
        sx={{
          background: `url(${Noise}) 0 0/4% 30%, linear-gradient(194.18deg, #00FFB7 -32.14%, #005B42 105.84%)`,
          backgroundBlendMode: "soft-light, normal",
          paddingTop: "40px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            paddingX: {md: '65px', xl: '135px'},
            justifyContent: { xs: "space-between", md: "space-between" },
            alignItems: { xs: "center", md: "normal" },
            flexDirection: { xs: "column", md: "row" },
            paddingBottom: "40px",
            fontSize: { xs: "12px", md: "20px" },
            lineHeight: { xs: "12px", md: "24.2px" },
            "& img": {
              width: { xs: "16px", md: "24px" },
            },
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                width: { xs: "85px", md: "auto" },
                marginRight: { xs: "80px", md: "28px" },
              }}
            >
              <RouterLink to="/main">
                <Box
                  sx={{
                    marginBottom: { xs: "20px", md: "28px" },
                    display: "flex",
                    "& img": {
                      transform: "rotate(0deg)",
                      transition: "all 0.2s ease-in-out",
                    },
                    ":hover": {
                      "& img": {
                        transform: "rotate(45deg)",
                      },
                    },
                  }}
                >
                  <Typography
                    fontWeight="500"
                    color="#FFF"
                    fontFamily="Inter"
                    style={{ fontSize: "inherit", lineHeight: "inherit" }}
                  >
                    Home
                  </Typography>
                  <img src={ArrowAngle} alt="arrow-angle" />
                </Box>
              </RouterLink>
              <Link
                href="https://chainjoes.gitbook.io/chainjoes/"
                target="_blank"
                underline="none"
              >
                <Box
                  sx={{
                    marginBottom: { xs: "20px", md: "28px", lg: "28px" },
                    display: "flex",
                    cursor: "pointer",
                    "& img": {
                      transform: "rotate(0deg)",
                      transition: "all 0.2s ease-in-out",
                    },
                    ":hover": {
                      "& img": {
                        transform: "rotate(45deg)",
                      },
                    },
                  }}
                >
                  <Typography
                    fontWeight="500"
                    color="#FFF"
                    fontFamily="Inter"
                    style={{ fontSize: "inherit", lineHeight: "inherit" }}
                  >
                    About
                  </Typography>
                  <img src={ArrowAngle} alt="arrow-angle" />
                </Box>
              </Link>
              <RouterLink to="/faq" target="_blank">
                <Box
                  sx={{
                    marginBottom: { xs: "20px", md: "28px" },
                    display: "flex",
                    "& img": {
                      transform: "rotate(0deg)",
                      transition: "all 0.2s ease-in-out",
                    },
                    ":hover": {
                      "& img": {
                        transform: "rotate(45deg)",
                      },
                    },
                  }}
                >
                  <Typography
                    fontWeight="500"
                    color="#FFF"
                    fontFamily="Inter"
                    style={{ fontSize: "inherit", lineHeight: "inherit" }}
                  >
                    FAQ
                  </Typography>
                  <img src={ArrowAngle} alt="arrow-angle" />
                </Box>
              </RouterLink>
              <Box sx={{ display: { xs: "block", lg: "none" } }}>
                <Link
                  href="/pdfs/Whitepaper.pdf"
                  target="_blank"
                  underline="none"
                >
                  <Box
                    sx={{
                      marginBottom: { xs: "20px", md: "28px" },
                      display: "flex",
                      "& img": {
                        transform: "rotate(0deg)",
                        transition: "all 0.2s ease-in-out",
                      },
                      ":hover": {
                        "& img": {
                          transform: "rotate(45deg)",
                        },
                      },
                    }}
                  >
                    <Typography
                      fontWeight="500"
                      color="#FFF"
                      fontFamily="Inter"
                      style={{ fontSize: "inherit", lineHeight: "inherit" }}
                    >
                      Whitepaper
                    </Typography>
                    <img src={ArrowAngle} alt="arrow-angle" />
                  </Box>
                </Link>
              </Box>
            </Box>
            <Box
              sx={{
                marginRight: "28px",
                display: { xs: "none", lg: "block" },
              }}
            >
              <Link
                href="/pdfs/Whitepaper.pdf"
                target="_blank"
                underline="none"
              >
                <Box
                  sx={{
                    marginBottom: { xs: "20px", md: "28px" },
                    display: "flex",
                    "& img": {
                      transform: "rotate(0deg)",
                      transition: "all 0.2s ease-in-out",
                    },
                    ":hover": {
                      "& img": {
                        transform: "rotate(45deg)",
                      },
                    },
                  }}
                >
                  <Typography
                    fontWeight="500"
                    color="#FFF"
                    fontFamily="Inter"
                    style={{ fontSize: "inherit", lineHeight: "inherit" }}
                  >
                    Whitepaper
                  </Typography>
                  <img src={ArrowAngle} alt="arrow-angle" />
                </Box>
              </Link>
              <Link
                href="/pdfs/Tokenomics.pdf"
                target="_blank"
                underline="none"
              >
                <Box
                  sx={{
                    display: "flex",
                    marginBottom: { xs: "20px", md: "28px" },
                    "& img": {
                      transform: "rotate(0deg)",
                      transition: "all 0.2s ease-in-out",
                    },
                    ":hover": {
                      "& img": {
                        transform: "rotate(45deg)",
                      },
                    },
                  }}
                >
                  <Typography
                    fontWeight="500"
                    color="#FFF"
                    fontFamily="Inter"
                    style={{ fontSize: "inherit", lineHeight: "inherit" }}
                  >
                    Tokenomics
                  </Typography>
                  <img src={ArrowAngle} alt="arrow-angle" />
                </Box>
              </Link>
              <Link
                href="/pdfs/Sale_Strategy.pdf"
                target="_blank"
                underline="none"
              >
                <Box
                  sx={{
                    display: "flex",
                    "& img": {
                      transform: "rotate(0deg)",
                      transition: "all 0.2s ease-in-out",
                    },
                    ":hover": {
                      "& img": {
                        transform: "rotate(45deg)",
                      },
                    },
                  }}
                >
                  <Typography
                    fontWeight="500"
                    color="#FFF"
                    fontFamily="Inter"
                    style={{ fontSize: "inherit", lineHeight: "inherit" }}
                  >
                    Sale Strategy
                  </Typography>
                  <img src={ArrowAngle} alt="arrow-angle" />
                </Box>
              </Link>
            </Box>
            <Box
              sx={{
                width: { xs: "95px", md: "auto" },
              }}
            >
              <Link
                href="/pdfs/Tokenomics.pdf"
                target="_blank"
                underline="none"
              >
                <Box
                  sx={{
                    marginBottom: { xs: "20px", md: "28px", lg: "28px" },
                    display: { xs: "flex", lg: "none" },
                    "& img": {
                      transform: "rotate(0deg)",
                      transition: "all 0.2s ease-in-out",
                    },
                    ":hover": {
                      "& img": {
                        transform: "rotate(45deg)",
                      },
                    },
                  }}
                >
                  <Typography
                    fontWeight="500"
                    color="#FFF"
                    fontFamily="Inter"
                    style={{ fontSize: "inherit", lineHeight: "inherit" }}
                  >
                    Tokenomics
                  </Typography>
                  <img src={ArrowAngle} alt="arrow-angle" />
                </Box>
              </Link>
              <Link
                href="/pdfs/Sale_Strategy.pdf"
                target="_blank"
                underline="none"
              >
                <Box
                  sx={{
                    marginBottom: { xs: "20px", md: "28px", lg: "28px" },
                    display: { xs: "flex", lg: "none" },
                    "& img": {
                      transform: "rotate(0deg)",
                      transition: "all 0.2s ease-in-out",
                    },
                    ":hover": {
                      "& img": {
                        transform: "rotate(45deg)",
                      },
                    },
                  }}
                >
                  <Typography
                    fontWeight="500"
                    color="#FFF"
                    fontFamily="Inter"
                    style={{ fontSize: "inherit", lineHeight: "inherit" }}
                  >
                    Sale Strategy
                  </Typography>
                  <img src={ArrowAngle} alt="arrow-angle" />
                </Box>
              </Link>
              <Link href="/pdfs/One_Page.pdf" target="_blank" underline="none">
                <Box
                  sx={{
                    display: "flex",
                    marginBottom: { xs: "20px", md: "28px", lg: "28px" },
                    "& img": {
                      transform: "rotate(0deg)",
                      transition: "all 0.2s ease-in-out",
                    },
                    ":hover": {
                      "& img": {
                        transform: "rotate(45deg)",
                      },
                    },
                  }}
                >
                  <Typography
                    fontWeight="500"
                    color="#FFF"
                    fontFamily="Inter"
                    style={{ fontSize: "inherit", lineHeight: "inherit" }}
                  >
                    One Page
                  </Typography>
                  <img src={ArrowAngle} alt="arrow-angle" />
                </Box>
              </Link>
              <Link
                href="mailto:info@chainjoes.com"
                target="_blank"
                underline="none"
              >
                <Box
                  sx={{
                    display: "flex",
                    "& img": {
                      transform: "rotate(0deg)",
                      transition: "all 0.2s ease-in-out",
                    },
                    ":hover": {
                      "& img": {
                        transform: "rotate(45deg)",
                      },
                    },
                  }}
                >
                  <Typography
                    fontWeight="500"
                    color="#FFF"
                    fontFamily="Inter"
                    style={{ fontSize: "inherit", lineHeight: "inherit" }}
                  >
                    Contact us
                  </Typography>
                  <img src={ArrowAngle} alt="arrow-angle" />
                </Box>
              </Link>
            </Box>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                width: { xs: "85px", md: "auto" },
                marginRight: { xs: "80px", md: "28px" },
              }}
            >
              <Link
                href="https://twitter.com/chainjoes"
                target="_blank"
                underline="none"
              >
                <Box
                  sx={{
                    marginBottom: { xs: "20px", md: "28px" },
                    display: "flex",
                    alignItems: "center",
                    height: "20px",
                  }}
                  onMouseEnter={(e) => {
                    e.preventDefault();
                    setActiveSocial("Twitter");
                  }}
                  onMouseLeave={(e) => {
                    e.preventDefault();
                    setActiveSocial("");
                  }}
                >
                  <Twitter
                    color={activeSocial === "Twitter" ? "#003527" : ""}
                  />
                  <Typography
                    fontWeight="500"
                    color="#FFF"
                    fontFamily="Inter"
                    marginLeft="8px"
                    style={{ fontSize: "inherit", lineHeight: "inherit" }}
                  >
                    Twitter
                  </Typography>
                </Box>
              </Link>
              <Link
                href="https://t.me/chainjoes"
                target="_blank"
                underline="none"
              >
                <Box
                  sx={{
                    display: "flex",
                    height: "20px",
                    marginBottom: { xs: "20px", md: "28px", xl: "0" },
                    alignItems: "center",
                  }}
                  onMouseEnter={(e) => {
                    e.preventDefault();
                    setActiveSocial("Telegram");
                  }}
                  onMouseLeave={(e) => {
                    e.preventDefault();
                    setActiveSocial("");
                  }}
                >
                  <Telegram
                    color={activeSocial === "Telegram" ? "#003527" : ""}
                  />
                  <Typography
                    fontWeight="500"
                    color="#FFF"
                    fontFamily="Inter"
                    marginLeft="8px"
                    style={{ fontSize: "inherit", lineHeight: "inherit" }}
                  >
                    Telegram
                  </Typography>
                </Box>
              </Link>
              <Link
                href="https://www.tiktok.com/@chainjoes"
                target="_blank"
                underline="none"
              >
                <Box
                  sx={{
                    display: { xs: "flex", xl: "none" },
                    alignItems: "center",
                    height: "20px",
                  }}
                  onMouseEnter={(e) => {
                    e.preventDefault();
                    setActiveSocial("Tiktok");
                  }}
                  onMouseLeave={(e) => {
                    e.preventDefault();
                    setActiveSocial("");
                  }}
                >
                  <Tiktok color={activeSocial === "Tiktok" ? "#003527" : ""} />
                  <Typography
                    fontWeight="500"
                    color="#FFF"
                    fontFamily="Inter"
                    marginLeft="8px"
                    style={{ fontSize: "inherit", lineHeight: "inherit" }}
                  >
                    Tik Tok
                  </Typography>
                </Box>
              </Link>
            </Box>
            <Box
              sx={{
                marginRight: "28px",
                display: { xs: "none", xl: "block" },
              }}
            >
              <Link
                href="https://www.tiktok.com/@chainjoes"
                target="_blank"
                underline="none"
              >
                <Box
                  sx={{
                    marginBottom: { xs: "20px", md: "28px" },
                    display: "flex",
                    alignItems: "center",
                    height: "20px",
                  }}
                  onMouseEnter={(e) => {
                    e.preventDefault();
                    setActiveSocial("Tiktok");
                  }}
                  onMouseLeave={(e) => {
                    e.preventDefault();
                    setActiveSocial("");
                  }}
                >
                  <Tiktok color={activeSocial === "Tiktok" ? "#003527" : ""} />
                  <Typography
                    fontWeight="500"
                    color="#FFF"
                    fontFamily="Inter"
                    marginLeft="8px"
                    style={{ fontSize: "inherit", lineHeight: "inherit" }}
                  >
                    Tik Tok
                  </Typography>
                </Box>
              </Link>
              <Link
                href="https://discord.gg/AABG2mJZAp"
                target="_blank"
                underline="none"
              >
                <Box
                  sx={{ display: "flex", alignItems: "center", height: "20px" }}
                  onMouseEnter={(e) => {
                    e.preventDefault();
                    setActiveSocial("Discord");
                  }}
                  onMouseLeave={(e) => {
                    e.preventDefault();
                    setActiveSocial("");
                  }}
                >
                  <Discord
                    color={activeSocial === "Discord" ? "#003527" : ""}
                  />
                  <Typography
                    fontWeight="500"
                    color="#FFF"
                    fontFamily="Inter"
                    marginLeft="8px"
                    style={{ fontSize: "inherit", lineHeight: "inherit" }}
                  >
                    Discord
                  </Typography>
                </Box>
              </Link>
            </Box>
            <Box>
              <Link
                href="https://discord.gg/AABG2mJZAp"
                target="_blank"
                underline="none"
              >
                <Box
                  sx={{
                    display: { xs: "flex", xl: "none" },
                    width: { xs: "95px", md: "auto" },
                    marginBottom: { xs: "20px", md: "28px" },
                    height: "20px",
                    alignItems: "center",
                  }}
                  onMouseEnter={(e) => {
                    e.preventDefault();
                    setActiveSocial("Discord");
                  }}
                  onMouseLeave={(e) => {
                    e.preventDefault();
                    setActiveSocial("");
                  }}
                >
                  <Discord
                    color={activeSocial === "Discord" ? "#003527" : ""}
                  />
                  <Typography
                    fontWeight="500"
                    color="#FFF"
                    fontFamily="Inter"
                    marginLeft="8px"
                    style={{ fontSize: "inherit", lineHeight: "inherit" }}
                  >
                    Discord
                  </Typography>
                </Box>
              </Link>
              <Link
                href="https://medium.com/@ChainJoes"
                target="_blank"
                underline="none"
              >
                <Box
                  sx={{
                    marginBottom: { xs: "20px", md: "28px" },
                    display: "flex",
                    height: "20px",
                    alignItems: "center",
                  }}
                  onMouseEnter={(e) => {
                    e.preventDefault();
                    setActiveSocial("Medium");
                  }}
                  onMouseLeave={(e) => {
                    e.preventDefault();
                    setActiveSocial("");
                  }}
                >
                  <Medium color={activeSocial === "Medium" ? "#003527" : ""} />
                  <Typography
                    fontWeight="500"
                    color="#FFF"
                    fontFamily="Inter"
                    marginLeft="8px"
                    style={{ fontSize: "inherit", lineHeight: "inherit" }}
                  >
                    Medium
                  </Typography>
                </Box>
              </Link>
              <Link
                href="https://www.linkedin.com/company/chainjoes"
                target="_blank"
                underline="none"
              >
                <Box
                  sx={{ display: "flex", alignItems: "center", height: "20px" }}
                  onMouseEnter={(e) => {
                    e.preventDefault();
                    setActiveSocial("Link");
                  }}
                  onMouseLeave={(e) => {
                    e.preventDefault();
                    setActiveSocial("");
                  }}
                >
                  <LinkedinLogo
                    color={activeSocial === "Link" ? "#003527" : ""}
                  />
                  <Typography
                    fontWeight="500"
                    color="#FFF"
                    fontFamily="Inter"
                    marginLeft="8px"
                    style={{ fontSize: "inherit", lineHeight: "inherit" }}
                  >
                    LinkedIn
                  </Typography>
                </Box>
              </Link>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            background: `#FFFFFF1A`,
            paddingX: {md: '65px', xl: '135px'},
            paddingY: "16px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Link href="https://damnn.tv/" target="_blank" underline="none">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: { xs: "13px", md: 0 },
              }}
            >
              <img src={DamnnLogo} alt="damnn-logo" height="24px" />
              <Box
                sx={{
                  border: "#FFF 1px solid",
                  borderRadius: "14px",
                  height: "28px",
                  width: "105px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: "12px",
                  ":hover": {
                    border: "#003527 1px solid",
                  },
                }}
              >
                <Typography
                  fontSize="12px"
                  lineHeight="12px"
                  fontFamily="Inter"
                  color="#FFF"
                >
                  Production by
                </Typography>
              </Box>
            </Box>
          </Link>
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                "& .privacy": {
                  color: "#FFF",
                },
                ":hover": {
                  "& .privacy": {
                    color: "#003527",
                  },
                },
              }}
            >
              <RouterLink to="/privacy-policy" target="_blank">
                <Typography
                  fontSize="12px"
                  lineHeight="12px"
                  fontFamily="Inter"
                  marginRight="24px"
                  className="privacy"
                >
                  Privacy Policy
                </Typography>
              </RouterLink>
            </Box>
            <Box
              sx={{
                "& .terms": {
                  color: "#FFF",
                },
                ":hover": {
                  "& .terms": {
                    color: "#003527",
                  },
                },
              }}
            >
              <RouterLink to="/terms-conditions" target="_blank">
                <Typography
                  fontSize="12px"
                  lineHeight="12px"
                  fontFamily="Inter"
                  className="terms"
                >
                  Terms of Service
                </Typography>
              </RouterLink>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
