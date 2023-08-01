import React, { useState, useRef } from "react";
import { Box, Typography, Link } from "@mui/material";
import {
  FirstImg,
  SecondImg,
  ThirdImg,
  FourthImg,
  FiveImg,
} from "../../imgs/webp/screen2";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Pagination, Navigation } from "swiper";
import {
  FirstImg as PersFirstImg,
  SecondImg as PersSecondImg,
  ThirdImg as PersThirdImg,
} from "../../imgs/webp/screen3";

import ArrowRight from "../../imgs/new/arrow-right-green.svg";
import ArrowLeft from "../../imgs/new/arrow-left-green.svg";
import ArrowRightGray from "../../imgs/new/arrow-right-gray.svg";
import ArrowLeftGray from "../../imgs/new/arrow-left-gray.svg";
import ArrowRightWhite from "../../imgs/new/arrow-right.svg";

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Noise from "../../imgs/new/noise.png";

import AnwarLogo from "../../imgs/new/heroes/anwar.svg";
import DeoLogo from "../../imgs/new/heroes/deo.svg";
import GunnarLogo from "../../imgs/new/heroes/gunnar.svg";
import MilcyLogo from "../../imgs/new/heroes/milcy.svg";
import SamLogo from "../../imgs/new/heroes/sam.svg";
import ShaanLogo from "../../imgs/new/heroes/shaan.svg";

import MilcyBlock from "../../imgs/new/heroes/milcyBlock.png";
import AnwarBlock from "../../imgs/new/heroes/anwarBlock.png";
import ShaanBlock from "../../imgs/new/heroes/shaanBlock.png";

import OurAmazing from "../../imgs/new/backIcons/ourAmazing.svg";
import Circle from "../../imgs/new/backIcons/circles1.svg";
import Cross from "../../imgs/new/Cross.png";

import {
  SamMp4,
  DeoMp4,
  TyrMp4,
  AnwarMp4,
  MilcyMp4,
  ShoonMp4,
} from "../../videos";

const Explore = () => {
  const persSwiper = useRef(null);
  const [activePers, setActivePers] = useState(0);
  const texts = [
    {
      title: "Free gameplay",
      mobileBottom: "5%",
      description: `Chain Joes is a free Battle Arena game in crypto and memes setting that real gamers will love. Explore the stunningly designed ChainVerse and engage with unique characters. Enjoy high-quality visuals and battle a range of challenging enemies including Scammers, Spammers and Hackers to become a champion. Join the battle without any barrier! `,
      img: FirstImg,
      mobileTitle: (
        <>
          Strong gameplay
          <br />
          in crypto theme
        </>
      ),
    },
    {
      title: `Play And Earn mechanics `,
      mobileTitle: (
        <>
          Play & Earn
          <br />
          mechanics
        </>
      ),
      img: SecondImg,
      mobileBottom: "5%",
      description: `There will be a deep and sustainable economy within Chain Joes where players can play for free and earn both NFTs and tokens. Just like the real world economy, you can choose how you want to specialize or play within the Chain Joes Economy.`,
    },
    {
      title: `control assets`,
      mobileTitle: (
        <>
          Control
          <br />
          assets
        </>
      ),
      img: ThirdImg,
      mobileBottom: "3%",
      description: `The introduction of NFT provides certain desirable features that non-blockchain games simply cannot provide, such as verifiable, immutable digital ownership. The in-game assets represented by an NFT gives the player a hard-coded assurance that the item belongs to them — allowing them the right to sell, trade, 
      or swap it as they see fit. `,
    },
    {
      title: `Ranked system`,
      mobileTitle: (
        <>
          Ranked
          <br />
          system
        </>
      ),
      img: FourthImg,
      mobileBottom: "-3%",
      description: `The essence of the game revolves around PVP champs fighting each other in a ranked system to increase their rating. The balance of the rating system, based on the Elo Rating system, will help the player find a team suitable for the level. Increase your rank and skill to reach the highest rank and earn more tokens for winning.`,
    },
    {
      title: `Free to Play`,
      mobileTitle: "Free to Play",
      img: FiveImg,
      mobileBottom: "5%",
      description: `Players will be able to play with free character and equipment to earn in-game resources, more free equipment, and, with skill, some tokens. Eventually, players may earn enough to obtain NFT equipment, even though they started with just free equipment and free characters.`,
    },
  ];

  const desktop1080Width = true;

  const perses = [
    {
      title: "Mr. Tyr",
      img: PersFirstImg,
      video: TyrMp4,
      logo: GunnarLogo,
      link: "https://chainjoes.gitbook.io/chainjoes/game-overview/characters/mr.-tyr",
      block: false,
      description:
        "Strength and Honor… This is carved on the coat of arms of the house of Hodler, whose metaverse was covered with ice after it was destroyed by hackers decades ago…",
    },
    {
      title: "Mr. Deo",
      img: PersSecondImg,
      video: DeoMp4,
      logo: DeoLogo,
      link: "https://chainjoes.gitbook.io/chainjoes/game-overview/characters/deo",
      block: false,
      description:
        "The Monk, Deo, arrived from the metaverse Temple of Fate...On his planet, the monks were able to curb web 3.0 technologies and now draw strength from the power within…",
    },
    {
      title: "Sam",
      img: PersThirdImg,
      video: SamMp4,
      block: false,
      logo: SamLogo,
      link: "https://chainjoes.gitbook.io/chainjoes/game-overview/characters/sam",
      description:
        "Earth X300 has reached the peak of development and formed its own system. People live in prosperity, and technology works for the benefit of humanity to deliver comfort and security… ",
    },
    {
      title: "Anwar",
      img: AnwarBlock,
      logo: AnwarLogo,
      video: AnwarMp4,
      block: false,
      link: "https://chainjoes.gitbook.io/chainjoes/game-overview/characters/anwar",
      description:
        "Reconstructed from fragments of Ancient Greece using web 3.0 technologies, the warrior Anwar arrived from Metaverse Greece #21.",
    },
    {
      title: "Shaan",
      img: ShaanBlock,
      logo: ShaanLogo,
      video: ShoonMp4,
      block: false,
      link: "https://chainjoes.gitbook.io/chainjoes/game-overview/characters/shaan",
      description:
        "Shaan has been a member of a cybercriminal gang from the Cyberizzz metaverse for many years…",
    },
    {
      title: "Milcy",
      img: MilcyBlock,
      logo: MilcyLogo,
      link: "https://chainjoes.gitbook.io/chainjoes/game-overview/characters/milcy",
      video: MilcyMp4,
      block: false,
      description:
        "MLc s9 is one of the 10 newest bots created as part of the experimental development of metaverse A2, engaged in the creation of spam bots…",
    },
  ];

  return (
    <Box>
      {desktop1080Width && (
        <Box sx={{ position: "relative" }} id={"chainverse"}>
          <Box sx={{display: 'none'}}>
            {texts.map((item, index) => (
              <img
                src={item.img}
                alt="preload"
                key={`cache-image-${index}`}
              />
            ))}
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: { md: "100%" },
              height: { xs: "100%", md: "auto" },
              zIndex: -1,
              "& > img": {
                width: { md: "100%" },
                height: { xs: "50%", md: "auto" },
              },
              "& > .cross": {
                width: 190,
              },
            }}
          >
            <img src={Circle} alt="circles" />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: { xs: "20px", md: "100px", lg: "60px", xl: "20px" },
              left: { xs: "40%", md: "50%", xl: "60%" },
              "& > img": {
                width: { xs: "157px", md: "320px", lg: "auto" },
              },
            }}
          >
            <img src={OurAmazing} alt="our amazing" />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "700px",
              right: "10%",
              "& > .cross": {
                width: 100,
              },
            }}
          >
            <img className="cross" src={Cross} alt="cross" />
          </Box>
          <Box
            sx={{
              marginBottom: { xs: "130px", md: "130px", xl: "350px" },
              paddingTop: "80px",
            }}
          >
            <Box
              sx={{
                display: { xs: "none", md: "block" },
                width: { md: "668px", lg: "892px", xl: "1150px" },
                margin: "auto",
                ".swiper-button-next, .swiper-button-prev": {
                  width: 48,
                  height: 48,
                  background: "#fff",
                  borderRadius: "100px",
                },
                ".swiper-button-next": {
                  right: { md: 0, lg: "10px" },
                  ":after": {
                    content: "''",
                    width: "24px",
                    height: "24px",
                    background: `url(${ArrowRight})`,
                  },
                },
                ".swiper-button-prev": {
                  left: { md: 0, lg: "10px" },
                  ":after": {
                    content: "''",
                    width: "24px",
                    height: "24px",
                    background: `url(${ArrowLeft})`,
                  },
                },
                ".swiper-button-prev.swiper-button-disabled": {
                  background: "#616161",
                  ":after": {
                    background: `url(${ArrowLeftGray})`,
                  },
                },
                ".swiper-button-next.swiper-button-disabled": {
                  background: "#616161",
                  ":after": {
                    background: `url(${ArrowRightGray})`,
                  },
                },
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
              }}
            >
              <Swiper
                slidesPerView={1}
                centeredSlides={true}
                grabCursor={true}
                className="mySwiper"
                effect={"slide"}
                pagination={true}
                modules={[Pagination, Navigation]}
                navigation={true}
                preloadImages={true}
              >
                {texts.map((text, index) => (
                  <SwiperSlide key={`explore-swiper-slide-${index}`}>
                    <Box
                      sx={{
                        width: { md: 620, lg: 740, xl: 880 },
                        height: { md: 340, xl: 480 },
                        background: `url(${Noise}) 0 0/30% 30%, linear-gradient(204.42deg, #00FFB7 -11.28%, #005B42 105.96%)`,
                        backgroundBlendMode: "soft-light, normal",
                        margin: "auto",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "8px",
                      }}
                    >
                      <Box sx={{ display: "flex" }}>
                        <Box
                          sx={{
                            width: { md: 260, xl: 400 },
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <img
                            src={text.img}
                            alt="explore"
                            width="inherit"
                            style={{ width: "inherit" }}
                          />
                        </Box>
                        <Box
                          sx={{
                            maxWidth: { md: "296px", lg: "400px" },
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            "& > .description": {
                              fontSize: { md: "14px", lg: "16px" },
                            },
                          }}
                        >
                          <Typography
                            fontFamily="Aaaiight"
                            fontSize="32px"
                            color="#FFF"
                            className="title"
                          >
                            {text.title}
                          </Typography>
                          <Typography
                            fontSize="16px"
                            color="#FFF"
                            marginTop="12px"
                            className="description"
                          >
                            {text.description}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
            <Box
              sx={{
                display: { xs: "block", md: "none" },
                width: { xs: "100%", md: "668px", lg: "892px", xl: "1150px" },
                // margin: "auto",
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
                spaceBetween={24}
                grabCursor={true}
                className="mySwiper2"
                pagination={true}
                navigation={false}
                slidesOffsetBefore={20}
                slidesOffsetAfter={20}
                modules={[Pagination]}
              >
                {texts.map((text, index) => (
                  <SwiperSlide
                    style={{ width: "252px" }}
                    key={`explore-mobile-swiper-slide-${index}`}
                  >
                    <Box
                      sx={{
                        width: { xs: 252, md: 620, lg: 740, xl: 880 },
                        height: { xs: 388, md: 340, xl: 480 },
                        background: `url(${Noise}) 0 0/30% 30%, linear-gradient(204.42deg, #00FFB7 -11.28%, #005B42 105.96%)`,
                        backgroundBlendMode: "soft-light, normal",
                        margin: "auto",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "8px",
                      }}
                    >
                      <Box sx={{ display: { xs: "block", md: "flex" } }}>
                        <Box
                          sx={{
                            width: { xs: 120, md: 260, xl: 400 },
                            display: "flex",
                            alignItems: "center",
                            marginX: { xs: "auto", md: 0 },
                            marginBottom: { xs: "15px", md: 0 },
                          }}
                        >
                          <img
                            src={text.img}
                            alt="explore"
                            width="inherit"
                            style={{ width: "inherit" }}
                          />
                        </Box>
                        <Box
                          sx={{
                            maxWidth: { md: "296px", lg: "400px" },
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            "& > .description": {
                              fontSize: { xs: "12px", md: "14px", lg: "16px" },
                              maxWidth: { xs: "220px", md: "100%" },
                            },
                            "& > .title": {
                              fontSize: { xs: "18px", md: "32px" },
                            },
                          }}
                        >
                          <Typography
                            fontFamily="Aaaiight"
                            fontSize="32px"
                            color="#FFF"
                            className="title"
                          >
                            {text.title}
                          </Typography>
                          <Typography
                            fontSize="16px"
                            color="#FFF"
                            marginTop="12px"
                            className="description"
                            fontFamily="Inter"
                          >
                            {text.description}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
          </Box>
          <Box
            sx={{ paddingLeft: { md: "34px", lg: "66px", xl: "135px" } }}
            id={"characters"}
          >
            <Box
              sx={{
                display: { xs: "block", xl: "none" },
                marginBottom: "60px",
                fontSize: { xs: "32px", md: "80px" },
                lineHeight: { xs: "32px", md: "80px" },
              }}
            >
              <Typography
                fontFamily="Aaaiight"
                color="#FFF"
                textAlign="center"
                style={{ fontSize: "inherit", lineHeight: "inherit" }}
              >
                Choose your <span style={{ color: "#005B42" }}>Joe</span>
              </Typography>
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: { md: "space-between", lg: "space-around" },
                alignItems: { md: "center", lg: "normal" },
              }}
            >
              <Box>
                <Box sx={{ display: { xs: "none", xl: "block" } }}>
                  <Typography
                    fontFamily="Aaaiight"
                    fontSize="80px"
                    color="#FFF"
                    lineHeight="80px"
                  >
                    Choose
                    <br />
                    your <span style={{ color: "#005B42" }}>Joe</span>
                  </Typography>
                </Box>
                <Box sx={{ marginTop: "32px" }}>
                  {perses.map((pers, index) => (
                    <Box
                      sx={{
                        width: { md: "400px", lg: "500px" },
                        border:
                          index === activePers
                            ? "1px solid #005B42"
                            : "1px solid #242424",
                        borderRadius: "4px",
                        marginBottom: "20px",
                        transition: "all 0.2s ease-in-out",
                      }}
                      key={`perses-swiper-slide-${index}`}
                    >
                      <Box
                        sx={{
                          padding: "20px",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          persSwiper.current.swiper.slideTo(index);
                          setActivePers(index);
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            "& > img": {
                              width: "24px",
                              height: "24px",
                            },
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <img
                              src={pers.logo}
                              alt={pers.title}
                              width="24px"
                            />
                            <Typography
                              fontFamily="Aaaiight"
                              fontSize="18px"
                              lineHeight="18px"
                              color="#FFF"
                              marginLeft="12px"
                            >
                              {pers.title}
                            </Typography>
                          </Box>
                          {pers.block && (
                            <Box
                              sx={{
                                width: "99px",
                                height: "28px",
                                background: "#003527",
                                fontSize: "12px",
                                lineHeight: "12px",
                                borderRadius: "14px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <Typography
                                fontFamily="Inter"
                                color="#05D19B"
                                textAlign="center"
                                style={{
                                  fontSize: "inherit",
                                  lineHeight: "inherit",
                                }}
                              >
                                Coming soon
                              </Typography>
                            </Box>
                          )}
                        </Box>
                        {!pers.block && (
                          <Box
                            sx={{
                              marginTop: "8px",
                              maxHeight: index === activePers ? "120px" : "0px",
                              opacity: index === activePers ? 1 : 0,
                              overflow: "hidden",
                              transition: "all 0.2s ease-in-out",
                            }}
                          >
                            <Typography
                              color="#FFF"
                              maxWidth="370px"
                              fontSize="12px"
                            >
                              {pers.description}
                            </Typography>
                            <Box sx={{ maxWidth: "110px" }}>
                              <Link
                                href={pers.link}
                                target="_blank"
                                underline="none"
                              >
                                <Box
                                  sx={{
                                    color: "#00FFB7",
                                    transition: "color 0.2 ease-in-out",
                                    ":hover": {
                                      color: "#FFF",
                                    },
                                  }}
                                >
                                  <Typography
                                    className="exploreLore"
                                    fontSize="12px"
                                    marginTop="12px"
                                  >
                                    Explore the full lore
                                  </Typography>
                                </Box>
                              </Link>
                            </Box>
                          </Box>
                        )}
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
              <Box sx={{ width: { md: "300px", lg: "500px", xl: "700px" } }}>
                <Swiper
                  slidesPerView={1}
                  centeredSlides={true}
                  grabCursor={false}
                  simulateTouch={false}
                  className="mySwiper"
                  effect={"flip"}
                  modules={[EffectFlip]}
                  pagination={false}
                  navigation={false}
                  ref={persSwiper}
                >
                  {perses.map((pers, index) => (
                    <SwiperSlide key={`pers-slide-${index}`}>
                      <Box
                        sx={{
                          position: "relative",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Box
                          sx={{
                            top: "50%",
                            left: "50%",
                            position: "absolute",
                            width: { md: 300, lg: 350, xl: 580 },
                            height: { md: 373, lg: 435, xl: 721 },
                            background: `url(${Noise}) 0 0/30% 30%, #2E2E2E`,
                            margin: "auto",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            transform: "rotate(10deg) translate(-50%, -50%)",
                            borderRadius: "8px",
                          }}
                        ></Box>
                        {pers.block ? (
                          <Box
                            sx={{
                              width: { md: 300, lg: 350, xl: 580 },
                              height: { md: 373, lg: 435, xl: 721 },
                              background: `url(${pers.img})`,
                              backgroundSize: "cover",
                              margin: "auto",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              transform: "rotate(-5deg)",
                              borderRadius: "8px",
                            }}
                          ></Box>
                        ) : (
                          <Box
                            sx={{
                              width: { md: 300, lg: 350, xl: 580 },
                              height: { md: 373, lg: 435, xl: 721 },
                              margin: "auto",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              transform: "rotate(-5deg)",
                              borderRadius: "8px",
                            }}
                          >
                            <video
                              // ref={refVideo}
                              autoPlay="autoPlay"
                              loop="loop"
                              muted
                              playsInline
                              onContextMenu={() => false}
                              preload="auto"
                              id="vid"
                              // poster={per}
                              style={{
                                objectFit: "cover",
                                height: "100%",
                                width: "100%",
                                position: "absolute",
                                top: 0,
                                right: 0,
                                zIndex: -1,
                                borderRadius: "8px",
                              }}
                            >
                              <source src={pers.video} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          </Box>
                        )}
                      </Box>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: "block", md: "none" },
                width: { xs: "100%", md: "668px", lg: "892px", xl: "1150px" },
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
                spaceBetween={12}
                grabCursor={true}
                className="mySwiper2"
                pagination={true}
                navigation={false}
                slidesOffsetBefore={20}
                slidesOffsetAfter={20}
                modules={[Pagination]}
              >
                {perses.map((pers, index) => (
                  <SwiperSlide
                    style={{ width: "auto" }}
                    key={`perses-swiper-mobile-slide-${index}`}
                  >
                    <Box
                      sx={{
                        width: 280,
                        height: 466,
                        borderRadius: "4px",
                        border: "1px solid #242424",
                      }}
                    >
                      <Box
                        sx={{
                          position: "relative",
                          display: "flex",
                          justifyContent: "center",
                          marginTop: "40px",
                        }}
                      >
                        <Box
                          sx={{
                            width: 240,
                            height: 201,
                            borderRadius: "8px",
                            background: `url(${Noise}) 0 0/30% 30%, #2E2E2E`,
                            backgroundBlendMode: "soft-light, normal, normal",
                            transform: "rotate(5deg) translate(-50%, 0)",
                            position: "absolute",
                            top: 0,
                            left: "50%",
                          }}
                        ></Box>
                        {pers.block ? (
                          <Box
                            sx={{
                              width: 240,
                              height: 201,
                              borderRadius: "8px",
                              transform: "rotate(-5deg)",
                              background: `url(${pers.img})`,
                              backgroundSize: "cover",
                            }}
                          ></Box>
                        ) : (
                          <Box
                            sx={{
                              width: 240,
                              height: 201,
                              borderRadius: "8px",
                              transform: "rotate(-5deg)",
                            }}
                          >
                            <video
                              // ref={refVideo}
                              autoPlay="autoPlay"
                              loop="loop"
                              muted
                              playsInline
                              onContextMenu={() => false}
                              preload="auto"
                              id="vid"
                              // poster={per}
                              style={{
                                objectFit: "cover",
                                height: "100%",
                                width: "100%",
                                position: "absolute",
                                objectPosition: "top",
                                top: 0,
                                right: 0,
                                zIndex: -1,
                                borderRadius: "8px",
                              }}
                            >
                              <source src={pers.video} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          </Box>
                        )}
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          marginTop: "30px",
                        }}
                      >
                        <Box sx={{ width: 240 }}>
                          <Typography
                            fontFamily="Aaaiight"
                            fontSize="18px"
                            lineHeight="18px"
                            color="#FFF"
                          >
                            {pers.title}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            marginTop: "8px",
                          }}
                        >
                          <Typography
                            fontFamily="Inter"
                            fontSize="12px"
                            lineHeight="19.2px"
                            color="#FFF"
                            maxWidth={240}
                          >
                            {pers.description}
                          </Typography>
                        </Box>

                        <Link href={pers.link} target="_blank" underline="none">
                          <Box
                            sx={{
                              width: 240,
                              height: 48,
                              background:
                                "linear-gradient(204.42deg, #00FFB7 -11.28%, #005B42 105.96%);",
                              borderRadius: "2px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              marginTop: "12px",
                            }}
                          >
                            <Typography
                              fontFamily="Inter"
                              fontSize="14px"
                              lineHeight="100%"
                              color="#FFF"
                              textAlign="center"
                              marginRight="8px"
                            >
                              Explore the full lore
                            </Typography>
                            <img
                              src={ArrowRightWhite}
                              alt="arrow-right"
                              width="16px"
                            />
                          </Box>
                        </Link>
                      </Box>
                    </Box>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Explore;
