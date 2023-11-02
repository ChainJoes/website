import React, { useState } from "react";
import { Box, Typography, Link } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FirstImg, SecondImg, ThirdImg } from "../../imgs/webp/screen4";
import { GoodPoint, BadPoint } from "../../imgs/webp/screen6";
import {
  RedRiftLogo,
  Alex,
  Cris,
  Dasha,
  Roman,
  Hanna,
  Katsia,
  Maya,
  Mike,
  Nastia,
  Pasha,
  Veronika,
  Gary,
  Dimitri,
  Alina,
  Kirill,
  Artem,
  AlexK,
} from "../../imgs/webp/screen7";
import { Partner1, Partner2, Partner4 } from "../../imgs/webp/screen8";
import LinkedIn from "../../imgs/new/linkedin.svg";
import Noise from "../../imgs/new/noise.png";

import BestTeam from "../../imgs/new/backIcons/bestTeam.png";
import KeyPartnership from "../../imgs/new/backIcons/keyPartnership.png";
import Cross from "../../imgs/new/Cross.png";
import Circle from "../../imgs/new/backIcons/circles3.svg";
import Elipces from "../../imgs/new/elipces.svg";

const Activities = () => {
  const [activeYear, setActiveYear] = useState(0);
  const [activeTeam, setActiveTeam] = useState("managment");

  const desktop1080Width = true;

  const roadMap = [
    {
      year: "2022",
      steps: [
        {
          title: "quarter 2",
          points: [
            {
              title: "Concept and Idea Development",
              done: true,
            },
            {
              title: "Blockchain Team Formation",
              done: true,
            },
            {
              title: "GameDev Team Formation",
              done: true,
            },
            {
              title: "Marketing Team Formation",
              done: true,
            },
            {
              title: "Game Pre-production",
              done: true,
            },
          ],
        },
        {
          title: "quarter 3",
          points: [
            {
              title: "Brand Building",
              done: true,
            },
            {
              title: "GDD Release",
              done: true,
            },
            {
              title: "Website Release",
              done: true,
            },
            {
              title: "Roadmap Release",
              done: true,
            },
            {
              title: "Community Creation",
              done: true,
            },
          ],
        },
        {
          title: "quarter 4",
          points: [
            {
              title: "Marketing Launch",
              done: true,
            },
            {
              title: "Private Sale",
              done: false,
            },
            {
              title: "Whitepaper Release",
              done: true,
            },
            {
              title: "Game teaser Release",
              done: false,
            },
            {
              title: "One Page Release",
              done: true,
            },
            {
              title: "IDO strategy Release",
              done: true,
            },
            {
              title: "GitBook Release",
              done: true,
            },
            {
              title: "Characters Reveal",
              done: true,
            },
          ],
        },
      ],
    },
    {
      year: "2023",
      steps: [
        {
          title: "quarter 1",
          points: [
            {
              title: "Public Sale",
              done: false,
            },
            {
              title: "Start Game Production",
              done: false,
            },
            {
              title: "DEX Listing",
              done: false,
            },
            {
              title: "NFT Development",
              done: false,
            },
            {
              title: "Marketing Boost",
              done: false,
            },
            {
              title: "Project Collabs",
              done: false,
            },
            {
              title: "Game Trailer",
              done: false,
            },
          ],
        },
        {
          title: "quarter 2",
          points: [
            {
              title: "NFT Release",
              done: false,
            },
            {
              title: "NFT Trailer",
              done: false,
            },
            {
              title: "NFT Sales",
              done: false,
            },
            {
              title: "DAO Development",
              done: false,
            },
            {
              title: "Ambassador Program Launch",
              done: false,
            },
          ],
        },
        {
          title: "quarter 3",
          points: [
            {
              title: "Game MVP Version Release",
              done: false,
            },
            {
              title: "Testnet Launch",
              done: false,
            },
            {
              title: "Closed Beta Test Launch",
              done: false,
            },
            {
              title: "DAO: Governance Platform Development",
              done: false,
            },
          ],
        },
        {
          title: "quarter 4",
          points: [
            {
              title: "DAO Launch",
              done: false,
            },
            {
              title: "Bug Bounty Program Release",
              done: false,
            },
            {
              title: "CEX Listing",
              done: false,
            },
          ],
        },
      ],
    },
    {
      year: "2024",
      steps: [
        {
          title: "quarter 1",
          points: [
            {
              title: "Cross-Chain Study",
              done: false,
            },
            {
              title: "Partnerships: Whales Welcome stage",
              done: false,
            },
            {
              title: "Community Events Release",
              done: false,
            },
          ],
        },
        {
          title: "quarter 2",
          points: [
            {
              title: "Mainnet Launch",
              done: false,
            },
            {
              title: "Game Alpha Launch",
              done: false,
            },
            {
              title: "Staking Launch",
              done: false,
            },
            {
              title: "Cross-Chain Development",
              done: false,
            },
          ],
        },
        {
          title: "quarter 3",
          points: [
            {
              title: "Work in progress",
              done: false,
            },
          ],
        },
        {
          title: "quarter 4",
          points: [
            {
              title: "Work in progress",
              done: false,
            },
          ],
        },
      ],
    },
  ];

  const managment = [
    {
      name: "Mike",
      surname: "Sykora",
      job: (
        <>
          CEO,
          <br />
          Co-founder
        </>
      ),
      photo: Mike,
      nameWidth: "107px",
      link: "https://www.linkedin.com/in/michal-sykora-11378b215/",
    },
    {
      name: "Christiaan van Steenbergen",
      job: "Blockchain CTO,  Co-founder",
      photo: Cris,
      link: "https://www.linkedin.com/in/christiaanvansteenbergen/",
    },
    {
      name: "Gary",
      surname: "Yankovich",
      job: "Chief Product Officer ",
      photo: Gary,
      link: "https://www.linkedin.com/in/gary-yankovich-671811168/",
    },
    {
      name: "Darcy",
      surname: "Maltseva",
      job: "Chief Operating Officer ",
      photo: Dasha,
      link: "https://www.linkedin.com/in/darya-maltseva-34868220a/",
    },
    {
      name: "Katerina",
      surname: "Dziatlova",
      job: "Head of management",
      photo: Katsia,
      link: "https://www.linkedin.com/in/katsia-dziatlova",
    },
  ];

  const marketing = [
    {
      name: "Maya",
      surname: "Kostenkova",
      job: "Creative producer",
      photo: Maya,
      link: "https://www.linkedin.com/in/ma%D1%83%D0%B0-kostenkova/",
    },
    {
      name: "Hanna",
      surname: "Valasheniuk",
      job: "Creative",
      photo: Hanna,
      link: "https://www.linkedin.com/in/hanna-valasheniuk-928970252/",
    },
    {
      name: "Stacy",
      surname: "Naumenko",
      job: "Head of graphic design",
      photo: Nastia,
      link: "https://www.linkedin.com/in/anastasia-naumenko/",
    },
    {
      name: "Veronica",
      surname: "Yasulevich",
      job: "Graphic Designer",
      photo: Veronika,
      link: "https://www.linkedin.com/in/nikahartmann/",
    },
    {
      name: "Paul",
      surname: "Ivuts",
      job: "Head of 3D arts",
      photo: Pasha,
      link: "https://www.linkedin.com/in/ivuts/",
    },
    {
      name: "Alex",
      surname: "Andriyashko",
      job: "3D artist",
      photo: Alex,
      link: "https://www.linkedin.com/in/alexander-andriyashko-97a298206/",
    },
    {
      name: "Dimitri",
      surname: "Shatsila",
      job: "3D artist",
      photo: Dimitri,
      link: "https://www.linkedin.com/in/dimitri-shatsila-11154711a/",
    },
    {
      name: "Alina",
      surname: "Bulavkina",
      job: "Project manager",
      photo: Alina,
      link: "https://www.linkedin.com/in/abulav/",
    },
    {
      name: "Kirill",
      surname: "Pestovsky",
      job: "Motion Designer",
      photo: Kirill,
      link: "",
    },
    {
      name: "Artsem",
      surname: "Bautrukevich",
      job: "Motion Designer",
      photo: Artem,
      link: "",
    },
    {
      name: "Roman",
      surname: "Zhirov",
      job: "SMM Manager",
      photo: Roman,
      link: "",
    },
    {
      name: "Alex",
      surname: "Karaychentsev",
      job: "Developer",
      photo: AlexK,
      link: "https://www.linkedin.com/in/alexandr-karaichentsev-3a3695110/",
    },
  ];

  return (
    <Box>
      {desktop1080Width && (
        <Box>
          <Box
            id={"activities"}
            sx={{
              paddingTop: "80px",
              marginBottom: { xs: "100px", md: "160px", xl: "200px" },
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                bottom: { xs: "-10%", md: "-15%", lg: "-15%", xl: "-30%" },
                left: { md: "2%", xl: "10%" },
                "& > .cross": {
                  width: { xs: 80, md: 150, lg: 150, xl: 200 },
                },
              }}
            >
              <img className="cross" src={Cross} alt="cross" />
            </Box>
            <Box
              sx={{
                fontSize: { xs: "32px", md: "80px" },
                lineHeight: { xs: "32px", md: "80px" },
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography
                fontFamily="Aaaiight"
                color="#FFF"
                style={{ fontSize: "inherit", lineHeight: "inherit" }}
              >
                activities
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", lg: "row" },
                justifyContent: { xs: "normal", lg: "center" },
                alignItems: { xs: "center", lg: "normal" },
                marginTop: "48px",
              }}
            >
              <Box
                sx={{
                  width: { xs: "280px", md: "580px", lg: "436px", xl: "570px" },
                  height: {
                    xs: "260px",
                    md: "200px",
                    lg: "500px",
                    xl: "510px",
                  },
                  background: `url(${Noise}) 0 0/30% 30%, linear-gradient(204.42deg, #00FFB7 -11.28%, #005B42 105.96%)`,
                  marginRight: { xs: 0, lg: "30px" },
                  marginBottom: { xs: "20px", md: "30px", lg: 0 },
                  backgroundBlendMode: "soft-light, normal",
                  display: "flex",
                  flexDirection: { xs: "column", md: "row", lg: "column" },
                  justifyContent: { xs: "center", md: "normal", lg: "center" },
                  alignItems: { xs: "center", md: "center", lg: "center" },
                  borderRadius: "8px",
                }}
              >
                <Box
                  sx={{
                    display: { xs: "flex", md: "block", lg: "flex" },
                    justifyContent: "center",
                    width: { xs: 120, md: 176, lg: 280 },
                    marginLeft: { xs: 0, md: "20px", lg: 0 },
                  }}
                >
                  <img src={FirstImg} alt="play" style={{ width: "inherit" }} />
                </Box>
                <Box
                  sx={{
                    marginLeft: { xs: 0, md: "16px", lg: 0 },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: {
                        xs: "center",
                        md: "normal",
                        lg: "center",
                      },
                      marginTop: { xs: "4px", md: "28px" },
                      fontSize: { xs: "16px", md: "32px" },
                      lineHeight: { xs: "16px", md: "32px" },
                    }}
                  >
                    <Typography
                      fontFamily="Aaaiight"
                      color="#FFF"
                      style={{ fontSize: "inherit", lineHeight: "inherit" }}
                    >
                      play different modes
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: { md: "normal", lg: "center" },
                      marginTop: "12px",
                      textAlign: { xs: "center", md: "left", lg: "center" },
                      fontSize: { xs: "12px", md: "16px" },
                      lineHeight: { xs: "19.2px", md: "27.2px" },
                    }}
                  >
                    <Typography
                      fontFamily="Inter"
                      color="#FFF"
                      style={{ fontSize: "inherit", lineHeight: "inherit" }}
                    >
                      Explore classic deathmatch, battle royale,
                      <br />
                      meat grinder, capture the flag, duck hunt,
                      <br />
                      run the labyrinth and become a champ.
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box>
                <Box
                  sx={{
                    width: {
                      xs: "280px",
                      md: "580px",
                      lg: "436px",
                      xl: "570px",
                    },
                    height: { xs: "260px", md: "200px", lg: "240px" },
                    background: `url(${Noise}) 0 0/30% 30%, linear-gradient(204.42deg, #00FFB7 -11.28%, #005B42 105.96%)`,
                    marginBottom: "30px",
                    backgroundBlendMode: "soft-light, normal",
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: "center",
                    justifyContent: { xs: "center", md: "normal" },
                    borderRadius: "8px",
                  }}
                >
                  <Box
                    sx={{
                      marginRight: { xs: 0, md: "16px" },
                      marginLeft: { xs: 0, md: "20px", xl: "32px" },
                      width: {
                        xs: "120px",
                        md: "176px",
                        lg: "120px",
                        xl: "160px",
                      },
                    }}
                  >
                    <img
                      src={SecondImg}
                      alt="play"
                      style={{ width: "inherit" }}
                    />
                  </Box>
                  <Box>
                    <Box
                      sx={{
                        maxWidth: { xs: "100%", lg: "228px", xl: "330px" },
                        fontSize: { xs: "16px", md: "24px" },
                        lineHeight: { xs: "19.2px", md: "24px" },
                        textAlign: { xs: "center", md: "left" },
                      }}
                    >
                      <Typography
                        fontFamily="Aaaiight"
                        color="#FFF"
                        style={{ fontSize: "inherit", lineHeight: "inherit" }}
                      >
                        create a Clan
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        marginTop: "8px",
                        fontSize: { xs: "12px", md: "14px" },
                        lineHeight: { xs: "19.2px", md: "22.4px" },
                        textAlign: { xs: "center", md: "left" },
                      }}
                    >
                      <Typography
                        color="#FFF"
                        fontFamily="Inter"
                        style={{ fontSize: "inherit", lineHeight: "inherit" }}
                      >
                        Unite with others to fight
                        <br />
                        more effectively.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    width: {
                      xs: "280px",
                      md: "580px",
                      lg: "436px",
                      xl: "570px",
                    },
                    height: { xs: "260px", md: "200px", lg: "240px" },
                    background: `url(${Noise}) 0 0/30% 30%, linear-gradient(204.42deg, #00FFB7 -11.28%, #005B42 105.96%)`,
                    marginBottom: "30px",
                    backgroundBlendMode: "soft-light, normal",
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: "center",
                    borderRadius: "8px",
                  }}
                >
                  <Box
                    sx={{
                      marginRight: { xs: 0, md: "16px" },
                      marginLeft: { xs: 0, md: "20px", xl: "32px" },
                      width: {
                        xs: "120px",
                        md: "176px",
                        lg: "120px",
                        xl: "160px",
                      },
                    }}
                  >
                    <img
                      src={ThirdImg}
                      alt="play"
                      style={{ width: "inherit" }}
                    />
                  </Box>
                  <Box>
                    <Box
                      sx={{
                        maxWidth: { xs: "248px", lg: "228px", xl: "330px" },
                        fontSize: { xs: "16px", md: "24px" },
                        lineHeight: { xs: "19.2px", md: "24px" },
                        textAlign: { xs: "center", md: "left" },
                        margin: { xs: "auto", md: 0 },
                      }}
                    >
                      <Typography
                        fontFamily="Aaaiight"
                        color="#FFF"
                        style={{ fontSize: "inherit", lineHeight: "inherit" }}
                      >
                        Join weekly & seasonal activities & tournaments
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        marginTop: "8px",
                        fontSize: { xs: "12px", md: "14px" },
                        lineHeight: { xs: "19.2px", md: "22.4px" },
                        textAlign: { xs: "center", md: "left" },
                        maxWidth: {
                          xs: "248px",
                          md: "348px",
                          lg: "260px",
                          xl: "330px",
                        },
                      }}
                    >
                      <Typography
                        color="#FFF"
                        fontFamily="Inter"
                        style={{ fontSize: "inherit", lineHeight: "inherit" }}
                      >
                        Participate in various quests and missions to receive
                        unique rewards and $CJ tokens.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ marginBottom: { md: "40px", lg: 0 }, display: { xs: "none", md: "none", lg: "none" }, }} id={"roadmap"}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                fontSize: { xs: "32px", md: "80px" },
                lineHeight: { xs: "32px", md: "80px" },
              }}
            >
              <Typography
                fontFamily="Aaaiight"
                color="#FFF"
                style={{ fontSize: "inherit", lineHeight: "inherit" }}
              >
                release roadmap
              </Typography>
            </Box>
            <Box
              sx={{
                background: "#121212",
                width: "270px",
                borderRadius: "4px",
                display: "flex",
                height: "40px",
                marginX: "auto",
                marginTop: "48px",
                marginBottom: "40px",
              }}
            >
              {roadMap.map((year, index) => (
                <Box
                  sx={{
                    width: "90px",
                    background:
                      index === activeYear
                        ? "linear-gradient(204.42deg, #00FFB7 -11.28%, #005B42 105.96%)"
                        : "",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    borderRadius: "4px",
                  }}
                  key={`roadmap-year-${index}`}
                  onClick={() => setActiveYear(index)}
                >
                  <Typography
                    fontSize="20px"
                    lineHeight="32px"
                    color={index === activeYear ? "#FFF" : "#646464"}
                    fontWeight={index === activeYear ? 600 : 400}
                  >
                    {year.year}
                  </Typography>
                </Box>
              ))}
            </Box>
            <Box
              sx={{
                display: { xs: "none", lg: "flex" },
                alignItems: "center",
                flexDirection: "column",
                minHeight: "780px",
              }}
            >
              {roadMap.map((year, index) => (
                <Box
                  key={`roadmap-year-view-${index}`}
                  sx={{ display: index === activeYear ? "block" : "none" }}
                >
                  <Box
                    sx={{ display: "flex", gap: "30px", marginBottom: "30px" }}
                  >
                    {year.steps.slice(0, 2).map((step, index) => (
                      <Box
                        key={`roadmap-year-view-step-1-${index}`}
                        sx={{
                          width: { lg: 431, xl: 570 },
                          height: { lg: 400, xl: 400 },
                          background: "#242424",
                          borderRadius: "8px",
                          position: "relative",
                          overflow: "hidden",
                          zIndex: 1,
                        }}
                      >
                        <Box sx={{ paddingTop: "32px", paddingLeft: "32px" }}>
                          <Typography
                            fontFamily="Aaaiight"
                            fontSize="24px"
                            lineHeight="33.05px"
                            color="#FFF"
                          >
                            {step.title}
                          </Typography>
                          <Box sx={{ marginTop: "20px" }}>
                            {step.points.map((point, index) => (
                              <Box
                                key={`roadmap-year-view-step-1-point-${index}`}
                                sx={{
                                  marginTop: index ? "20px" : 0,
                                  display: "flex",
                                }}
                              >
                                <Box
                                  sx={{
                                    width: "12px",
                                    height: "16px",
                                    background: `url(${
                                      point.done ? GoodPoint : BadPoint
                                    })`,
                                    marginRight: "12px",
                                    backgroundSize: "contain",
                                    backgroundRepeat: "no-repeat",
                                  }}
                                />
                                <Typography
                                  fontSize="16px"
                                  lineHeight="19.36px"
                                  color="#FFF"
                                >
                                  {point.title}
                                </Typography>
                              </Box>
                            ))}
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            position: "absolute",
                            display: { xs: "none", xl: "block" },
                            bottom: index ? "100%" : "0",
                            right: 0,
                            transform: "translate(50%,50%)",
                            zIndex: -1,
                          }}
                        >
                          <img src={Elipces} alt="elipces" />
                        </Box>
                        <Box
                          className="road-circle"
                          sx={{
                            position: "absolute",
                            display: { xs: "block", xl: "none" },
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%,-50%)",
                            "& > img": {
                              height: "100%",
                            },
                            zIndex: -1,
                          }}
                        >
                          <img src={Circle} alt="circle" />
                        </Box>
                      </Box>
                    ))}
                  </Box>
                  <Box
                    sx={{ display: "flex", gap: "30px", marginBottom: "30px" }}
                  >
                    {year.steps.slice(2, 4).map((step, index) => (
                      <Box
                        sx={{
                          width: { lg: 431, xl: 570 },
                          height: { lg: 400, xl: 400 },
                          background: "#242424",
                          borderRadius: "8px",
                          position: "relative",
                          overflow: "hidden",
                          zIndex: 1,
                        }}
                        key={`roadmap-year-view-step-2-${index}`}
                      >
                        <Box sx={{ paddingTop: "32px", paddingLeft: "32px" }}>
                          <Typography
                            fontFamily="Aaaiight"
                            fontSize="24px"
                            lineHeight="33.05px"
                            color="#FFF"
                          >
                            {step.title}
                          </Typography>
                          <Box sx={{ marginTop: "20px" }}>
                            {step.points.map((point, index) => (
                              <Box
                                sx={{
                                  marginTop: index ? "20px" : 0,
                                  display: "flex",
                                }}
                                key={`roadmap-year-view-step-2-point-${index}`}
                              >
                                <Box
                                  sx={{
                                    width: "12px",
                                    height: "16px",
                                    background: `url(${
                                      point.done ? GoodPoint : BadPoint
                                    })`,
                                    marginRight: "12px",
                                    backgroundSize: "contain",
                                    backgroundRepeat: "no-repeat",
                                  }}
                                />
                                <Typography
                                  fontSize="16px"
                                  lineHeight="19.36px"
                                  color="#FFF"
                                >
                                  {point.title}
                                </Typography>
                              </Box>
                            ))}
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            position: "absolute",
                            bottom: index ? "100%" : "0",
                            display: { xs: "none", xl: "block" },
                            left: 0,
                            transform: "translate(-30%,50%)",
                            zIndex: -1,
                          }}
                        >
                          <img src={Elipces} alt="elipces" />
                        </Box>
                        <Box
                          className="road-circle"
                          sx={{
                            position: "absolute",
                            display: { xs: "block", xl: "none" },
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%,-50%)",
                            "& > img": {
                              height: "100%",
                            },
                            zIndex: -1,
                          }}
                        >
                          <img src={Circle} alt="circle" />
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>
              ))}
            </Box>
            <Box
              sx={{
                display: { xs: "block", lg: "none" },
              }}
            >
              <Box>
                {roadMap.map((year, index) => (
                  <Box
                    key={`roadmap-year-swiper-${index}`}
                    sx={{
                      display: index === activeYear ? "block" : "none",
                      ".swiper-pagination": {
                        bottom: "-40px",
                      },
                      ".swiper-pagination-bullet": {
                        background: "#242424",
                        opacity: 1,
                      },
                      ".swiper-pagination-bullet-active": {
                        background: "#FFF",
                      },
                      ".swiper": {
                        overflow: "unset",
                      },
                    }}
                  >
                    <Swiper
                      slidesPerView={"auto"}
                      centeredSlides={false}
                      spaceBetween={20}
                      slidesOffsetBefore={20}
                      slidesOffsetAfter={20}
                      grabCursor={true}
                      className="mySwiper"
                      pagination={true}
                      // freeMode={true}
                      modules={[Pagination]}
                    >
                      <>
                        {year.steps.map((step, index) => (
                          <SwiperSlide
                            style={{ width: "auto" }}
                            key={`roadmap-swiper-slide-${index}`}
                          >
                            <Box
                              sx={{
                                width: { xs: 240, md: 389 },
                                height: { xs: 400 },
                                background: "#242424",
                                borderRadius: "8px",
                                position: "relative",
                                overflow: "hidden",
                              }}
                            >
                              <Box
                                sx={{
                                  paddingTop: "32px",
                                  paddingLeft: "32px",
                                  fontSize: { xs: "16px", md: "24px" },
                                  lineHeight: { xs: "19.2px", md: "33.05px" },
                                }}
                              >
                                <Typography
                                  fontFamily="Aaaiight"
                                  color="#FFF"
                                  style={{
                                    fontSize: "inherit",
                                    lineHeight: "inherit",
                                  }}
                                >
                                  {step.title}
                                </Typography>
                                <Box sx={{ marginTop: "20px" }}>
                                  {step.points.map((point, index) => (
                                    <Box
                                      key={`roadmap-slide-point-${index}`}
                                      sx={{
                                        marginTop: index ? "20px" : 0,
                                        display: "flex",
                                        fontSize: { xs: "12px", md: "16px" },
                                        lineHeight: {
                                          xs: "19.2px",
                                          md: "19.36px",
                                        },
                                        "& .roadmap-text": {
                                          maxWidth: { xs: 180, md: "unset" },
                                        },
                                      }}
                                    >
                                      <Box
                                        sx={{
                                          width: "12px",
                                          height: "16px",
                                          background: `url(${
                                            point.done ? GoodPoint : BadPoint
                                          })`,
                                          marginRight: "12px",
                                          backgroundSize: "contain",
                                          backgroundRepeat: "no-repeat",
                                        }}
                                      />
                                      <Typography
                                        className="roadmap-text"
                                        fontFamily="Inter"
                                        color="#FFF"
                                        style={{
                                          fontSize: "inherit",
                                          lineHeight: "inherit",
                                        }}
                                      >
                                        {point.title}
                                      </Typography>
                                    </Box>
                                  ))}
                                </Box>
                              </Box>
                              <Box
                                className="road-circle"
                                sx={{
                                  position: "absolute",
                                  display: { xs: "block", xl: "none" },
                                  top: "50%",
                                  left: "50%",
                                  transform: "translate(-50%,-50%)",
                                  "& > img": {
                                    height: "100%",
                                  },
                                  zIndex: -1,
                                }}
                              >
                                <img src={Circle} alt="circle" />
                              </Box>
                            </Box>
                          </SwiperSlide>
                        ))}
                      </>
                    </Swiper>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              marginTop: { xs: "140px", md: "220px", lg: "160px", xl: "200px" },
              position: "relative",
              display: { xs: "none", md: "none", lg: "none" }
            }}
            id={"team"}
          >
            <Box
              sx={{
                position: "absolute",
                top: { xs: "-80px", md: "-150px", lg: "-120px" },
                left: { xs: "5%", md: "10%", lg: "5%", xl: "25%" },
                "& > img": {
                  width: { xs: "157px", md: "auto" },
                },
              }}
            >
              <img src={BestTeam} alt="our amazing" />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                fontSize: { xs: "32px", md: "80px" },
                lineHeight: { xs: "32px", md: "80px" },
              }}
            >
              <Typography
                fontFamily="Aaaiight"
                color="#FFF"
                style={{ fontSize: "inherit", lineHeight: "inherit" }}
              >
                Team
              </Typography>
            </Box>
            <Box
              sx={{
                background: "#121212",
                width: { xs: "280px", md: "500px" },
                borderRadius: "4px",
                display: "flex",
                height: "40px",
                marginX: "auto",
                marginTop: "48px",
                marginBottom: "40px",
              }}
            >
              <Box
                sx={{
                  width: { xs: `${280 / 3}px`, md: `${500 / 3}px` },
                  background:
                    activeTeam === "managment"
                      ? "linear-gradient(204.42deg, #00FFB7 -11.28%, #005B42 105.96%)"
                      : "",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  fontSize: { xs: "12px", md: "20px" },
                  lineHeight: { xs: "12px", md: "32px" },
                }}
                onClick={() => setActiveTeam("managment")}
              >
                <Typography
                  color={activeTeam === "managment" ? "#FFF" : "#646464"}
                  fontWeight={activeTeam === "managment" ? 600 : 400}
                  style={{ fontSize: "inherit", lineHeight: "inherit" }}
                >
                  Managment
                </Typography>
              </Box>
              <Box
                sx={{
                  width: { xs: `${280 / 3}px`, md: `${500 / 3}px` },
                  background:
                    activeTeam === "game"
                      ? "linear-gradient(204.42deg, #00FFB7 -11.28%, #005B42 105.96%)"
                      : "",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  fontSize: { xs: "12px", md: "20px" },
                  lineHeight: { xs: "12px", md: "32px" },
                }}
                onClick={() => setActiveTeam("game")}
              >
                <Typography
                  color={activeTeam === "game" ? "#FFF" : "#646464"}
                  fontWeight={activeTeam === "game" ? 600 : 400}
                  style={{ fontSize: "inherit", lineHeight: "inherit" }}
                >
                  Game dev
                </Typography>
              </Box>
              <Box
                sx={{
                  width: { xs: `${280 / 3}px`, md: `${500 / 3}px` },
                  background:
                    activeTeam === "marketing"
                      ? "linear-gradient(204.42deg, #00FFB7 -11.28%, #005B42 105.96%)"
                      : "",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  fontSize: { xs: "12px", md: "20px" },
                  lineHeight: { xs: "12px", md: "32px" },
                }}
                onClick={() => setActiveTeam("marketing")}
              >
                <Typography
                  color={activeTeam === "marketing" ? "#FFF" : "#646464"}
                  fontWeight={activeTeam === "marketing" ? 600 : 400}
                  style={{ fontSize: "inherit", lineHeight: "inherit" }}
                >
                  Marketing
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                maxWidth: { md: "715px", lg: "900px", xl: "1170px" },
                // minHeight: "760px",
                margin: "auto",
              }}
            >
              <>
                <Box
                  sx={{
                    display:
                      activeTeam === "managment"
                        ? { xs: "none", md: "grid" }
                        : "none",
                    gridTemplateColumns: {
                      md: "repeat(auto-fit, minmax(128px,1fr))",
                      lg: "repeat(auto-fit, minmax(150px,1fr))",
                      xl: "repeat(auto-fit, minmax(200px,1fr))",
                    },
                    gridGap: {
                      md: "20px 15px",
                      lg: "40px 35px",
                      xl: "60px 40px",
                    },
                  }}
                >
                  {managment.map((pers, index) => (
                    <Box key={`managment-${index}`}>
                      <Box
                        sx={{
                          width: { md: "128px", lg: "150px", xl: "200px" },
                          height: { md: "140px", lg: "166px", xl: "222px" },
                        }}
                      >
                        <img
                          src={pers.photo}
                          alt={`${pers.name} ${pers.surname}`}
                          style={{ width: "inherit", height: "inherit" }}
                        />
                      </Box>
                      <Box
                        sx={{
                          marginTop: "32px",
                          maxWidth: { md: "128px", lg: "150px", xl: "200px" },
                        }}
                      >
                        <Typography
                          fontFamily="Aaaiight"
                          fontSize="16px"
                          lineHeight="19.2px"
                          color="#FFF"
                        >
                          {pers.name} {pers.surname}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          marginTop: "12px",
                          maxWidth: { md: "128px", lg: "150px", xl: "200px" },
                          fontSize: { md: "12px", lg: "14px" },
                          lineHeight: { md: "19.2px", lg: "22.4px" },
                        }}
                      >
                        <Typography
                          fontFamily="Inter"
                          lineHeight="inherit"
                          fontSize="inherit"
                          color="#FFF"
                        >
                          {pers.job}
                        </Typography>
                      </Box>
                      <Link href={pers.link} target="_blank" underline="none">
                        <Box
                          sx={{
                            marginTop: "20px",
                            display: "flex",
                            alignItems: "center",
                            color: "#FFF",
                            ":hover": {
                              color: "#00FFB7",
                            },
                          }}
                        >
                          {}
                          <img src={LinkedIn} alt="linkedin" />
                          <Typography
                            marginLeft="8px"
                            fontFamily="Inter"
                            fontSize="14px"
                            lineHeight="14px"
                            fontWeight="500"
                          >
                            LinkedIn
                          </Typography>
                        </Box>
                      </Link>
                    </Box>
                  ))}
                </Box>
                <Box
                  sx={{
                    display:
                      activeTeam === "managment"
                        ? { xs: "block", md: "none" }
                        : "none",
                  }}
                >
                  <Box
                    sx={{
                      ".swiper-pagination": {
                        bottom: "-40px",
                      },
                      ".swiper-pagination-bullet": {
                        background: "#242424",
                        opacity: 1,
                      },
                      ".swiper-pagination-bullet-active": {
                        background: "#FFF",
                      },
                      ".swiper": {
                        overflow: "unset",
                      },
                    }}
                  >
                    <Swiper
                      slidesPerView={"auto"}
                      centeredSlides={false}
                      spaceBetween={15}
                      slidesOffsetBefore={20}
                      slidesOffsetAfter={20}
                      grabCursor={true}
                      className="mySwiper"
                      pagination={true}
                      // freeMode={true}
                      modules={[Pagination]}
                    >
                      <>
                        {managment.map((pers, index) => (
                          <SwiperSlide
                            style={{ width: "auto" }}
                            key={`managment-slide-${index}`}
                          >
                            <Box>
                              <Box
                                sx={{
                                  width: {
                                    xs: "128px",
                                    lg: "150px",
                                    xl: "200px",
                                  },
                                  height: {
                                    xs: "140px",
                                    lg: "166px",
                                    xl: "222px",
                                  },
                                }}
                              >
                                <img
                                  src={pers.photo}
                                  alt={`${pers.name} ${pers.surname}`}
                                  style={{
                                    width: "inherit",
                                    height: "inherit",
                                  }}
                                />
                              </Box>
                              <Box
                                sx={{
                                  marginTop: "32px",
                                  maxWidth: {
                                    xs: "128px",
                                    lg: "150px",
                                    xl: "200px",
                                  },
                                }}
                              >
                                <Typography
                                  fontFamily="Aaaiight"
                                  fontSize="16px"
                                  lineHeight="19.2px"
                                  color="#FFF"
                                >
                                  {pers.name} {pers.surname}
                                </Typography>
                              </Box>
                              <Box
                                sx={{
                                  marginTop: "12px",
                                  maxWidth: {
                                    xs: "128px",
                                    lg: "150px",
                                    xl: "200px",
                                  },
                                  fontSize: { xs: "12px", lg: "14px" },
                                  lineHeight: { xs: "19.2px", lg: "22.4px" },
                                }}
                              >
                                <Typography
                                  fontFamily="Inter"
                                  lineHeight="inherit"
                                  fontSize="inherit"
                                  color="#FFF"
                                >
                                  {pers.job}
                                </Typography>
                              </Box>
                              <Link
                                href={pers.link}
                                target="_blank"
                                underline="none"
                              >
                                <Box
                                  sx={{
                                    marginTop: "20px",
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <img src={LinkedIn} alt="linkedin" />
                                  <Typography
                                    marginLeft="8px"
                                    fontFamily="Inter"
                                    fontSize="14px"
                                    lineHeight="14px"
                                    color="#FFF"
                                    fontWeight="500"
                                  >
                                    LinkedIn
                                  </Typography>
                                </Box>
                              </Link>
                            </Box>
                          </SwiperSlide>
                        ))}
                      </>
                    </Swiper>
                  </Box>
                </Box>
              </>
              <Box sx={{ display: activeTeam === "game" ? "block" : "none"}}>
                <Box
                  sx={{
                    padding: { md: "48px 60px" },
                    border: "1px solid #00FFB7",
                    borderRadius: "4px",
                    width: { xs: "280px", md: "555px" },
                    height: { xs: "90px", md: "auto" },
                    margin: "auto",
                    "& > img": {
                      width: { xs: "163px", md: "555px" },
                    },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src={RedRiftLogo} alt="red-rift logo" />
                </Box>
                <Box sx={{ marginTop: "20px" }}>
                  <Typography
                    fontFamily="Inter"
                    fontSize="16px"
                    lineHeight="22.4px"
                    color="#FFF"
                    textAlign="center"
                  >
                    Game Development partner
                  </Typography>
                </Box>
              </Box>
              <>
                <Box
                  sx={{
                    display:
                      activeTeam === "marketing"
                        ? { xs: "none", md: "grid" }
                        : "none",
                    gridTemplateColumns: {
                      md: "repeat(auto-fit, minmax(128px,1fr))",
                      lg: "repeat(auto-fit, minmax(150px,1fr))",
                      xl: "repeat(auto-fit, minmax(200px,1fr))",
                    },
                    gridGap: { lg: "40px 35px", xl: "60px 40px" },
                  }}
                >
                  {marketing.map((pers, index) => (
                    <Box key={`marketing-${index}`}>
                      <Box
                        sx={{
                          width: { md: "128px", lg: "150px", xl: "200px" },
                          height: { md: "140px", lg: "166px", xl: "222px" },
                        }}
                      >
                        <img
                          src={pers.photo}
                          alt={`${pers.name} ${pers.surname}`}
                          style={{ width: "inherit", height: "inherit" }}
                        />
                      </Box>
                      <Box
                        sx={{
                          marginTop: "32px",
                          maxWidth: { md: "128px", lg: "150px", xl: "200px" },
                        }}
                      >
                        <Typography
                          fontFamily="Aaaiight"
                          fontSize="16px"
                          lineHeight="19.2px"
                          color="#FFF"
                        >
                          {pers.name} {pers.surname}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          marginTop: "12px",
                          maxWidth: { md: "128px", lg: "150px", xl: "200px" },
                          fontSize: { md: "12px", lg: "14px" },
                          lineHeight: { md: "19.2px", lg: "22.4px" },
                        }}
                      >
                        <Typography
                          fontFamily="Inter"
                          fontSize="14px"
                          lineHeight="22.4px"
                          color="#FFF"
                        >
                          {pers.job}
                        </Typography>
                      </Box>
                      {pers.link && (
                        <Link href={pers.link} target="_blank" underline="none">
                          <Box
                            sx={{
                              marginTop: "20px",
                              display: "flex",
                              alignItems: "center",
                              color: "#FFF",
                              ":hover": {
                                color: "#00FFB7",
                              },
                            }}
                          >
                            <img src={LinkedIn} alt="linkedin" />
                            <Typography
                              marginLeft="8px"
                              fontFamily="Inter"
                              fontSize="14px"
                              lineHeight="14px"
                              fontWeight="500"
                            >
                              LinkedIn
                            </Typography>
                          </Box>
                        </Link>
                      )}
                    </Box>
                  ))}
                </Box>
                <Box
                  sx={{
                    display:
                      activeTeam === "marketing"
                        ? { xs: "block", md: "none" }
                        : "none",
                  }}
                >
                  <Box
                    sx={{
                      ".swiper-pagination": {
                        bottom: "-40px",
                      },
                      ".swiper-pagination-bullet": {
                        background: "#242424",
                        opacity: 1,
                      },
                      ".swiper-pagination-bullet-active": {
                        background: "#FFF",
                      },
                      ".swiper": {
                        overflow: "unset",
                      },
                    }}
                  >
                    <Swiper
                      slidesPerView={"auto"}
                      centeredSlides={false}
                      spaceBetween={15}
                      slidesOffsetBefore={20}
                      slidesOffsetAfter={20}
                      grabCursor={true}
                      className="mySwiper"
                      pagination={true}
                      // freeMode={true}
                      modules={[Pagination]}
                    >
                      <>
                        {marketing.map((pers, index) => (
                          <SwiperSlide
                            style={{ width: "auto" }}
                            key={`marketing-slide-${index}`}
                          >
                            <Box>
                              <Box
                                sx={{
                                  width: {
                                    xs: "128px",
                                    lg: "150px",
                                    xl: "200px",
                                  },
                                  height: {
                                    xs: "140px",
                                    lg: "166px",
                                    xl: "222px",
                                  },
                                }}
                              >
                                <img
                                  src={pers.photo}
                                  alt={`${pers.name} ${pers.surname}`}
                                  style={{
                                    width: "inherit",
                                    height: "inherit",
                                  }}
                                />
                              </Box>
                              <Box
                                sx={{
                                  marginTop: "32px",
                                  maxWidth: {
                                    xs: "128px",
                                    lg: "150px",
                                    xl: "200px",
                                  },
                                }}
                              >
                                <Typography
                                  fontFamily="Aaaiight"
                                  fontSize="16px"
                                  lineHeight="19.2px"
                                  color="#FFF"
                                >
                                  {pers.name} {pers.surname}
                                </Typography>
                              </Box>
                              <Box
                                sx={{
                                  marginTop: "12px",
                                  maxWidth: {
                                    xs: "128px",
                                    lg: "150px",
                                    xl: "200px",
                                  },
                                  fontSize: { xs: "12px", lg: "14px" },
                                  lineHeight: { xs: "19.2px", lg: "22.4px" },
                                }}
                              >
                                <Typography
                                  fontFamily="Inter"
                                  lineHeight="inherit"
                                  fontSize="inherit"
                                  color="#FFF"
                                >
                                  {pers.job}
                                </Typography>
                              </Box>
                              {pers.link && (
                                <Link
                                  href={pers.link}
                                  target="_blank"
                                  underline="none"
                                >
                                  <Box
                                    sx={{
                                      marginTop: "20px",
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    <img src={LinkedIn} alt="linkedin" />
                                    <Typography
                                      marginLeft="8px"
                                      fontFamily="Inter"
                                      fontSize="14px"
                                      lineHeight="14px"
                                      color="#FFF"
                                      fontWeight="500"
                                    >
                                      LinkedIn
                                    </Typography>
                                  </Box>
                                </Link>
                              )}
                            </Box>
                          </SwiperSlide>
                        ))}
                      </>
                    </Swiper>
                  </Box>
                </Box>
              </>
            </Box>
          </Box>
          <Box
            sx={{
              marginTop: { xs: "165px", md: "220px", lg: "160px", xl: "200px" },
              position: "relative",
              display: { xs: "none", md: "none", lg: "none" }
            }}
            id={"partners"}
          >
            <Box
              sx={{
                position: "absolute",
                top: { xs: "-60px", md: "-100px" },
                left: { xs: "5%", md: "5%", lg: "5%", xl: "25%" },
                "& > img": {
                  width: { xs: "94px", md: "auto" },
                },
              }}
            >
              <img src={KeyPartnership} alt="our amazing" />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                fontSize: { xs: "32px", md: "80px" },
                lineHeight: { xs: "32px", md: "80px" },
              }}
            >
              <Typography
                fontFamily="Aaaiight"
                color="#FFF"
                style={{ fontSize: "inherit", lineHeight: "inherit" }}
              >
                Our partners
              </Typography>
            </Box>
            <Box
              sx={{
                width: { xs: "100%", lg: "780px" },
                display: "flex",
                justifyContent: { xs: "space-around", lg: "space-between" },
                margin: "auto",
                marginTop: "48px",
              }}
            >
              <Box sx={{ width: { xs: "66px", md: "118px", lg: "186px" } }}>
                <img
                  src={Partner1}
                  alt="pay-accept"
                  style={{ width: "inherit" }}
                />
              </Box>
              <Box sx={{ width: { xs: "84px", md: "124px", lg: "184px" } }}>
                <img
                  src={Partner2}
                  alt="red-rift"
                  style={{ width: "inherit" }}
                />
              </Box>
              <Box sx={{ width: { xs: "66px", md: "114px", lg: "174px" } }}>
                <img src={Partner4} alt="damnn" style={{ width: "inherit" }} />
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Activities;
