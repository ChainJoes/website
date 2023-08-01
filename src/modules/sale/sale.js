import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, Link } from "@mui/material";
import Header from "../first/components/header";
import CloseBtn from "../../imgs/new/close-btn.svg";
import ArrowDown from "../../imgs/new/arrow-down.svg";
import { HashLink } from "react-router-hash-link";
import { Footer } from "../";
import SaleBG from "../../imgs/sale_bg.png";
import SaleBG2 from "../../imgs/sale_bg2.jpeg";
import Login from "../../imgs/new/login.svg";
import { Document, WatchGreen } from "../../imgs/new/svg";
import { intervalToDuration } from "date-fns";
import { PreSaleMp4 } from "../../videos";

import { applyVueInReact } from "veaury";
import App from "../../vuesale/App";
const VueApp = applyVueInReact(App);

const DATE = "Dec 29 2022 18:00:00 GMT+0100";
const CLOSE_DATE = "Dec 31 2022 00:00:00 GMT+0100";

const Sale = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSaleStarted, setIsSaleStarted] = useState(
    new Date(DATE) - new Date() > 0
  );
  const [activeMenuDropdown, setActiveMenuDropdown] = useState(0);
  const [activeFaq, setActiveFaq] = useState(0);
  const [documentColor, setDocumentColor] = useState("");
  const [watchColor, setWatchColor] = useState("");
  const [timeInterval, setTimeInterval] = useState(
    intervalToDuration({
      start: new Date(),
      end: new Date(DATE),
    })
  );
  const refVideo = useRef(null);
  const [muted, setMuted] = useState(false);
  const [endSaleTime, setEndSaleTime] = useState(
    intervalToDuration({
      start: new Date(),
      end: new Date(CLOSE_DATE),
    })
  );

  useEffect(() => {
    if (!refVideo.current) {
      return;
    }
    if (!muted) {
      refVideo.current.defaultMuted = true;
      refVideo.current.muted = true;
      refVideo.current.play();
      setMuted(true);
    }
  });

  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);
    const intervalToEnd = setInterval(() => getTimeToEnd(), 1000);
    return () => {
      clearInterval(interval);
      clearInterval(intervalToEnd);
    };
  }, []);

  const handleMobileMenu = (e) => {
    e?.preventDefault();
    const html = document.documentElement;
    setIsMenuOpen(!isMenuOpen);
    document.getElementById("root").classList.toggle("mobileMenu");
    html.style.overflow === "hidden"
      ? (html.style.overflow = "auto")
      : (html.style.overflow = "hidden");
  };

  const getTime = () => {
    let time = intervalToDuration({
      start: new Date(),
      end: new Date(DATE),
    });
    setIsSaleStarted(new Date(DATE) - new Date() > 0);
    setTimeInterval(time);
  };

  const getTimeToEnd = () => {
    let time = intervalToDuration({
      start: new Date(),
      end: new Date(CLOSE_DATE),
    });
    setEndSaleTime(time);
  };

  const buttons = [
    {
      title: "Gameplay",
      links: [
        {
          title: "Backstory",
          link: "/main/#backstory",
          type: "scroll",
        },
        {
          title: "ChainVerse",
          link: "/main/#chainverse",
          type: "scroll",
        },
        {
          title: "Characters",
          link: "/main/#characters",
          type: "scroll",
        },
        {
          title: "Activities",
          link: "/main/#activities",
          type: "scroll",
        },
      ],
    },
    {
      title: "Community",
      links: [
        {
          title: "Discord",
          link: "https://discord.gg/AABG2mJZAp",
        },
        {
          title: "Twitter",
          link: "https://twitter.com/ChainJoes",
        },
        {
          title: "Telegram",
          link: "https://t.me/chainjoes",
        },
      ],
    },
    {
      title: "Roadmap",
      link: "/main/#roadmap",
      type: "scroll",
    },
    {
      title: "Team",
      link: "/main/#team",
      type: "scroll",
    },
    {
      title: "Partners",
      link: "/main/#partners",
      type: "scroll",
    },
    {
      title: "Roadmap",
      link: "/main/#roadmap",
      type: "scroll",
    },
    {
      title: "Help",
      links: [
        {
          title: "FAQ ",
          link: "/faq",
        },
        {
          title: "GitBook",
          link: "https://chainjoes.gitbook.io/chainjoes/",
        },
        {
          title: "Whitepaper",
          link: "/pdfs/Whitepaper.pdf",
        },
        {
          title: "Tokenomics",
          link: "/pdfs/Tokenomics.pdf",
        },
        {
          title: "Sale Strategy",
          link: "/pdfs/Sale_Strategy.pdf",
        },
        {
          title: "One Page",
          link: "/pdfs/One_Page.pdf",
        },
      ],
    },
    {
      title: "News",
      link: "https://medium.com/@ChainJoes",
    },
  ];

  const faq = [
    {
      title: "Do I have to register for the Whitelist to participate?",
      description: (
        <>
          Yes. It's a very easy process and will only take a few seconds. Follow
          by{" "}
          <Link
            href="/whitelist.html"
            underline="none"
            target="_blank"
            style={{
              color: "#00FFB7",
            }}
          >
            link to participate.
          </Link>
        </>
      ),
    },
    {
      title: "How many WL entries will be granted access to the private sale?",
      description: (
        <>
          We will grant the first 2000 people who register in the WL a spot in
          the private sale. Please learn more about our{" "}
          <Link
            href="/pdfs/Sale_Strategy.pdf"
            underline="none"
            target="_blank"
            style={{
              color: "#00FFB7",
            }}
          >
            sale strategy.
          </Link>
        </>
      ),
    },
    {
      title: "How do I know I was granted a spot in the private sale?",
      description: (
        <>
          We will release a document with all whitelisted addresses that got the
          spot in the sale.
        </>
      ),
    },
    {
      title: "For how long will the private sale be opened?",
      description: (
        <>
          The private sale will begin on December 29 and will close on December
          30 or until the hard cap is reached.
        </>
      ),
    },
    {
      title: "How many tokens are being sold in the private sale?",
      description: (
        <>
          We are selling 2 000 000 tokens for a price of 0.00025 ETH per one
          token.
        </>
      ),
    },
    {
      title: "What is the maximum number of tokens in existence?",
      description: (
        <>
          There will be only 100 000 000 CJ tokens. We are selling only a small
          portion of the amount and the majority of CJ tokens to be acquired
          through participation in our gaming ecosystem. Please learn more about
          our{" "}
          <Link
            href="/pdfs/Tokenomics.pdf"
            underline="none"
            target="_blank"
            style={{
              color: "#00FFB7",
            }}
          >
            tokenomics.
          </Link>
        </>
      ),
    },
    {
      title: "What currency do you accept?",
      description: <>We will accept ETH for CJ tokens.</>,
    },
    {
      title: "What is the hard cap for the private sale?",
      description: <>The hard cap is 500 ETH.</>,
    },
    {
      title:
        "Is there a soft cap that has to be reached for the sale to be considered successful?",
      description: <>Yes. The soft cap is 200 ETH.</>,
    },
    {
      title: "What if the hard cap is not reached during the private sale?",
      description: (
        <>
          In that case we will open the sale for the rest of the people who
          registered in the WL beyond the first 2000 who got selected.
          <br />
          The private sale will then continue until December 30 or until the
          hard cap is reached.
        </>
      ),
    },
    {
      title:
        "If I didn’t participate in the private sale, is there going to be a public one?",
      description: (
        <>
          Yes. We are preparing a public and open IDO where everyone who is
          interested in Chain Joes will be able to participate. With lots of
          bonuses on top. Join our twitter to keep up to date.
        </>
      ),
    },
    {
      title:
        "When can I claim my CJ tokens and on what exchange can I trade them?",
      description: (
        <>
          The tokens will be claimable after the public IDO. We will deploy our
          token on Uniswap after the public IDO. Before that, there will be no
          active market for it. Therefore for security reasons, tokens from the
          private sale will be claimable after the public IDO just before we
          launch the liquidity pool on Uniswap.
          <br />
          Official trading contract on Uniswap will be announced in our socials.
        </>
      ),
    },
  ];

  return (
    <Box
      sx={{
        "@keyframes opacity": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          paddingBottom: { xs: "60px", md: "100px", lg: "160px", xl: "200px" },
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            minHeight: { xs: "100vh", md: "max(100vh, 900px)" },
            position: "relative",
            ".sale-video": {
              background: `url(${SaleBG2})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: { xs: "100vh", md: "max(100vh, 900px)" },
              width: "100%",
              position: "absolute",
              top: 0,
              right: 0,
              zIndex: -1,
              animationName: "opacity",
              animationDuration: "5s",
              animationFillMode: "both",
              animationDelay: "1s",
            },
          }}
        >
          <Box className="sale-video">
            {/* <video
              ref={refVideo}
              autoPlay="autoPlay"
              loop="loop"
              muted
              playsInline
              onContextMenu={() => false}
              preload="auto"
              id="vid"
              poster={SaleBG}
              className="sale-video"
              style={{}}
            >
              <source src={PreSaleMp4} type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}
          </Box>
          <Box
            sx={{
              position: "absolute",
              display: { xs: "block", xl: "none" },
              width: { xs: "calc(100% - 80px)", md: 498 },
              height: "100%",
              right: isMenuOpen ? 0 : "-100%",
              top: 0,
              background: "#080808",
              zIndex: 100,
              transition: "all 0.2s ease-in-out",
              padding: "36px 40px",
              overflowY: "auto",
            }}
          >
            <Box
              sx={{ position: "absolute", top: "12px", right: "12px" }}
              onClick={handleMobileMenu}
            >
              <img src={CloseBtn} alt="close-btn" />
            </Box>
            {buttons.map((button, index) => (
              <Box
                sx={{
                  marginBottom: activeMenuDropdown === index ? "36px" : "0",
                }}
                key={`menu-button-sale-${index}`}
              >
                <Box
                  onClick={() => {
                    setActiveMenuDropdown(index);
                  }}
                  sx={{
                    marginBottom: {
                      xs: activeMenuDropdown === index ? "0" : "32px",
                      md: activeMenuDropdown === index ? "0" : "36px",
                    },
                    display: "flex",
                    "& .menu-dropdown": {
                      width: { xs: 256, md: 466 },
                      fontSize: { xs: "16px", md: "32px" },
                      lineHeight: { xs: "16px", md: "32px" },
                    },
                    "& > img": {
                      transform:
                        activeMenuDropdown === index
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                      transition: "all 0.2s ease-in-out",
                    },
                  }}
                >
                  {button.link ? (
                    <>
                      {button.type === "scroll" ? (
                        <HashLink
                          to={button.link}
                          scroll={(el) => {
                            el.scrollIntoView({
                              behavior: "smooth",
                              block: "start",
                            });
                            handleMobileMenu();
                          }}
                        >
                          <Typography
                            className="menu-dropdown"
                            fontFamily="Inter"
                            fontWeight={500}
                            color="#FFFFFF"
                          >
                            {button.title}
                          </Typography>
                        </HashLink>
                      ) : (
                        <Link
                          href={button.link}
                          target="_blank"
                          underline="none"
                        >
                          <Typography
                            className="menu-dropdown"
                            fontFamily="Inter"
                            fontWeight={500}
                            color="#FFFFFF"
                          >
                            {button.title}
                          </Typography>
                        </Link>
                      )}
                    </>
                  ) : (
                    <Typography
                      className="menu-dropdown"
                      fontFamily="Inter"
                      fontWeight={500}
                      color="#FFFFFF"
                    >
                      {button.title}
                    </Typography>
                  )}

                  {button.links && (
                    <img src={ArrowDown} alt="arrow-down" width="32px" />
                  )}
                </Box>
                {button.links && (
                  <Box
                    sx={{
                      marginTop: {
                        xs: activeMenuDropdown === index ? "16px" : "0px",
                        md: activeMenuDropdown === index ? "20px" : "0px",
                      },
                      maxHeight: {
                        xs:
                          activeMenuDropdown === index
                            ? `${
                                button.links.length * 14 +
                                (button.links.length - 1) * 16
                              }px`
                            : 0,
                        md:
                          activeMenuDropdown === index
                            ? `${(button.links.length * 2 - 1) * 24}px`
                            : 0,
                      },
                      paddingBottom:
                        activeMenuDropdown === index ? "5px" : "0px",
                      opacity: activeMenuDropdown === index ? 1 : 0,
                      overflow: "hidden",
                      transition: "all 0.2s ease-in-out",
                    }}
                  >
                    {button.links.map((link, index) => (
                      <Box
                        sx={{
                          marginBottom:
                            button.links.length - 1 !== index
                              ? { xs: "16px", md: "24px" }
                              : 0,
                          "& .dropdown-point": {
                            fontSize: { xs: "14px", md: "24px" },
                            lineHeight: { xs: "14px", md: "24px" },
                          },
                        }}
                        key={`button-index-${index}`}
                      >
                        {link.type === "scroll" ? (
                          <HashLink
                            to={link.link}
                            scroll={(el) => {
                              el.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                              });
                              handleMobileMenu();
                            }}
                          >
                            <Typography
                              className="dropdown-point"
                              fontFamily="Inter"
                              fontWeight={500}
                              color="#FFFFFF"
                            >
                              {link.title}
                            </Typography>
                          </HashLink>
                        ) : (
                          <Link
                            href={link.link}
                            target="_blank"
                            underline="none"
                          >
                            <Typography
                              className="dropdown-point"
                              fontFamily="Inter"
                              fontWeight={500}
                              color="#FFFFFF"
                            >
                              {link.title}
                            </Typography>
                          </Link>
                        )}
                      </Box>
                    ))}
                  </Box>
                )}
              </Box>
            ))}
          </Box>
          <Box
            sx={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: isMenuOpen
                ? "rgba(255, 255, 255, 0.1)"
                : "rgba(255, 255, 255, 0)",
              backdropFilter: isMenuOpen ? "blur(10px)" : "blur(0px)",
              zIndex: isMenuOpen ? 2 : -1,
              transition: "all 0.2s ease-in-out",
            }}
          />
          <Box
            sx={{
              paddingX: { xs: "20px", md: "34px", lg: "66px", xl: "135px" },
              zIndex: 100,
              position: "relative",
              // paddingY: { xs: "15px", lg: "30px" },
            }}
          >
            <Box
              sx={{
                animationName: "opacity",
                animationDuration: "5s",
                animationFillMode: "both",
                animationDelay: "0s",
              }}
            >
              <Header closeMenu={handleMobileMenu} buttons={buttons} />
            </Box>
          </Box>
          <Box
            sx={{
              animationName: "opacity",
              animationDuration: "5s",
              animationFillMode: "both",
              animationDelay: "2s",
            }}
          >
            {isSaleStarted && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: { xs: 0, md: "135px" },
                  // paddingTop: { xs: "30px", md: "160px" },
                  justifyContent: { xs: "center", md: "start" },
                  height: "calc(100vh - 80px)",
                  // display: "flex",
                  // justifyContent: "start",
                  // alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    padding: { xs: "40px 0px", md: "60px 40px" },
                    maxWidth: { xs: "280px", md: "100%" },
                    background: "#080808",
                    borderRadius: "8px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        fontSize: { xs: "37px", md: "40px" },
                        lineHeight: { xs: "33.3px", md: "36px" },
                        textAlign: "center",
                      }}
                    >
                      <Typography
                        fontFamily="Aaaiight"
                        color="#fff"
                        style={{
                          fontSize: "inherit",
                          lineHeight: "inherit",
                        }}
                      >
                        join private sale
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        marginTop: "18px",
                        fontSize: { xs: "12px", md: "14px" },
                        lineHeight: { xs: "19.2px", md: "22.4px" },
                        maxWidth: { xs: "200px", md: "100%" },
                        textAlign: "center",
                      }}
                    >
                      <Typography
                        fontFamily="Inter"
                        color="#fff"
                        style={{
                          fontSize: "inherit",
                          lineHeight: "inherit",
                        }}
                      >
                        and let’s kick the web3 enemies’ asses together!
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      gap: { xs: "12px", md: "28px" },
                      marginY: "40px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      <Box
                        sx={{
                          fontSize: { xs: "24px", md: "32px" },
                          lineHeight: { xs: "28.8px", md: "28.8px" },
                        }}
                      >
                        <Typography
                          fontFamily="Aaaiight"
                          color="#fff"
                          textAlign="center"
                          style={{
                            fontSize: "inherit",
                            lineHeight: "inherit",
                          }}
                        >
                          {timeInterval.days}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          marginTop: { xs: "8px", md: "16px" },
                          fontSize: { xs: "12px", md: "14px" },
                          lineHeight: { xs: "19.2px", md: "22.4px" },
                        }}
                      >
                        <Typography
                          fontFamily="Inter"
                          color="#fff"
                          style={{
                            fontSize: "inherit",
                            lineHeight: "inherit",
                          }}
                        >
                          days
                        </Typography>
                      </Box>
                    </Box>
                    <Typography
                      fontFamily="Inter"
                      fontSize="20px"
                      color="#fff"
                      lineHeight="20px"
                    >
                      :
                    </Typography>
                    <Box>
                      <Box
                        sx={{
                          fontSize: { xs: "24px", md: "32px" },
                          lineHeight: { xs: "28.8px", md: "28.8px" },
                        }}
                      >
                        <Typography
                          fontFamily="Aaaiight"
                          color="#fff"
                          textAlign="center"
                          style={{
                            fontSize: "inherit",
                            lineHeight: "inherit",
                          }}
                        >
                          {timeInterval.hours}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          marginTop: { xs: "8px", md: "16px" },
                          fontSize: { xs: "12px", md: "14px" },
                          lineHeight: { xs: "19.2px", md: "22.4px" },
                        }}
                      >
                        <Typography
                          fontFamily="Inter"
                          color="#fff"
                          style={{
                            fontSize: "inherit",
                            lineHeight: "inherit",
                          }}
                        >
                          hours
                        </Typography>
                      </Box>
                    </Box>
                    <Typography
                      fontFamily="Inter"
                      fontSize="20px"
                      color="#fff"
                      lineHeight="20px"
                    >
                      :
                    </Typography>
                    <Box>
                      <Box
                        sx={{
                          fontSize: { xs: "24px", md: "32px" },
                          lineHeight: { xs: "28.8px", md: "28.8px" },
                        }}
                      >
                        <Typography
                          fontFamily="Aaaiight"
                          color="#fff"
                          textAlign="center"
                          style={{
                            fontSize: "inherit",
                            lineHeight: "inherit",
                          }}
                        >
                          {timeInterval.minutes}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          marginTop: { xs: "8px", md: "16px" },
                          fontSize: { xs: "12px", md: "14px" },
                          lineHeight: { xs: "19.2px", md: "22.4px" },
                        }}
                      >
                        <Typography
                          fontFamily="Inter"
                          color="#fff"
                          style={{
                            fontSize: "inherit",
                            lineHeight: "inherit",
                          }}
                        >
                          minutes
                        </Typography>
                      </Box>
                    </Box>
                    <Typography
                      fontFamily="Inter"
                      fontSize="20px"
                      color="#fff"
                      lineHeight="20px"
                    >
                      :
                    </Typography>
                    <Box>
                      <Box
                        sx={{
                          fontSize: { xs: "24px", md: "32px" },
                          lineHeight: { xs: "28.8px", md: "28.8px" },
                        }}
                      >
                        <Typography
                          fontFamily="Aaaiight"
                          color="#fff"
                          textAlign="center"
                          style={{
                            fontSize: "inherit",
                            lineHeight: "inherit",
                          }}
                        >
                          {timeInterval.seconds}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          marginTop: { xs: "8px", md: "16px" },
                          fontSize: { xs: "12px", md: "14px" },
                          lineHeight: { xs: "19.2px", md: "22.4px" },
                        }}
                      >
                        <Typography
                          fontFamily="Inter"
                          color="#fff"
                          style={{
                            fontSize: "inherit",
                            lineHeight: "inherit",
                          }}
                        >
                          seconds
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", md: "row" },
                      alignItems: "center",
                    }}
                  >
                    <Link
                      href="https://www.youtube.com/watch?v=bJ28vhjO4Qg&ab_channel=ChainJoes"
                      target="_blank"
                      underline="none"
                    >
                      <Box
                        sx={{
                          width: { xs: "240px", md: "187px" },
                          height: { xs: "46px", md: "46px" },
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "2px",
                          border: "1px solid",
                          borderImageSlice: 1,
                          borderImageSource:
                            "linear-gradient(204.42deg, #00FFB7 -11.28%, #005B42 105.96%)",
                          marginRight: { xs: "0", md: "16px" },
                          cursor: "pointer",
                          marginTop: { xs: "12px", md: "16px" },
                          fontWeight: { xs: 500 },
                          color: "#05D19B",
                          fontSize: { xs: "14px", md: "14px" },
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
                        onMouseEnter={(e) => {
                          e.preventDefault();
                          setWatchColor("#FFF");
                        }}
                        onMouseLeave={(e) => {
                          e.preventDefault();
                          setWatchColor("");
                        }}
                      >
                        <Box>
                          <WatchGreen color={watchColor} />
                        </Box>
                        <Typography
                          marginLeft="8px"
                          fontWeight="600"
                          fontFamily="Inter"
                          style={{
                            fontWeight: "inherit",
                            fontSize: "inherit",
                            color: "inherit",
                          }}
                        >
                          Watch the Teaser
                        </Typography>
                      </Box>
                    </Link>
                    <Link
                      href="/pdfs/Whitepaper.pdf"
                      target="_blank"
                      underline="none"
                    >
                      <Box
                        sx={{
                          width: { xs: "240px", md: "187px" },
                          height: { xs: "46px", md: "46px" },
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "2px",
                          border: "1px solid",
                          borderImageSlice: 1,
                          borderImageSource:
                            "linear-gradient(204.42deg, #00FFB7 -11.28%, #005B42 105.96%)",
                          cursor: "pointer",
                          marginTop: { xs: "12px", md: "16px" },
                          fontWeight: { xs: 500 },
                          color: "#05D19B",
                          fontSize: { xs: "14px", md: "14px" },
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
                        onMouseEnter={(e) => {
                          e.preventDefault();
                          setDocumentColor("#FFF");
                        }}
                        onMouseLeave={(e) => {
                          e.preventDefault();
                          setDocumentColor("");
                        }}
                      >
                        <Box>
                          <Document color={documentColor} width="16px" />
                        </Box>
                        <Typography
                          marginLeft="8px"
                          fontWeight="600"
                          fontFamily="Inter"
                          style={{
                            fontWeight: "inherit",
                            fontSize: "inherit",
                            color: "inherit",
                          }}
                        >
                          Read Whitepaper
                        </Typography>
                      </Box>
                    </Link>
                  </Box>
                </Box>
              </Box>
            )}
            {!isSaleStarted && (
              <Box
                sx={{
                  paddingLeft: { xs: 0, md: "135px" },
                  paddingTop: { xs: "30px", md: "160px" },
                }}
              >
                <VueApp timer={endSaleTime} />
              </Box>
            )}
          </Box>
        </Box>
        <Box sx={{ marginTop: { xs: "60px", md: "100px" } }}>
          <Box
            sx={{
              fontSize: { xs: "44px", md: "105px" },
              lineHeight: { xs: "39.6px", md: "95px" },
            }}
          >
            <Typography
              color="#FFF"
              fontFamily="Aaaiight"
              textAlign="center"
              style={{ fontSize: "inherit", lineHeight: "inherit" }}
            >
              faq
            </Typography>
          </Box>
        </Box>
        <Box sx={{ marginTop: { xs: "30px", md: "80px" } }}>
          {faq.map((item, index) => (
            <Box
              sx={{
                width: { xs: 280, md: 580, lg: 588, xl: 771 },
                padding: { xs: "16px", md: "24px" },
                border: "1px solid",
                borderColor: activeFaq === index ? "#00FFB7" : "#242424",
                borderRadius: "4px",
                marginBottom: "32px",
                marginX: "auto",
                cursor: "pointer",
              }}
              onClick={() => setActiveFaq(index)}
              key={`faq-el-${index}`}
            >
              <Box
                sx={{
                  fontSize: { xs: "14px", md: "20px" },
                  lineHeight: { xs: "14px", md: "32px" },
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                  "& > img": {
                    transform:
                      activeFaq === index ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "all 0.2s ease-in-out",
                  },
                }}
              >
                <Typography
                  fontFamily="Inter"
                  color="#FFF"
                  style={{ fontSize: "inherit", lineHeight: "inherit" }}
                >
                  {item.title}
                </Typography>
                <img src={ArrowDown} alt="arrow-down" width="24px" />
              </Box>
              <Box
                sx={{
                  display: activeFaq === index ? "block" : "none",
                  fontSize: { xs: "12px", md: "14px" },
                  lineHeight: { xs: "19.2px", md: "22.4px" },
                  marginTop: { xs: activeFaq === index ? "8px" : "0px" },
                  maxHeight: {
                    xs: activeFaq === index ? "360px" : "0px",
                    md: activeFaq === index ? "800px" : "0px",
                  },
                  opacity: activeFaq === index ? 1 : 0,
                  overflow: "hidden",
                  transition: "all 0.2s ease-in-out",
                }}
              >
                <Typography
                  fontFamily="Inter"
                  color="#FFF"
                  style={{ fontSize: "inherit", lineHeight: "inherit" }}
                >
                  {item.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Sale;
