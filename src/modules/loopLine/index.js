import React from "react";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, FreeMode } from "swiper";
import BannerLogo from "../../imgs/new/banner-logo.svg";
import Noise from "../../imgs/new/noise.png";

const LoopLine = () => {
  return (
    <Box
      sx={{
        background: `url(${Noise})  0 0/30% 30%, #464646`,
        backgroundBlendMode: "soft-light, normal",
        paddingY: { xs: "12px", md: "32px" },
        ".swiper-free-mode > .swiper-wrapper": {
          transitionTimingFunction: "linear",
        },
        ".banner-slide": {
          display: "flex",
          fontSize: { xs: "16px", md: "32px", lg: "40px" },
          lineHeight: { xs: "19.2px", md: "28.8px", lg: "36px" },
          width: { xs: 210, md: 385, lg: 466 },
          "& > img": {
            width: { xs: "20px", md: "32px" },
          },
        },
      }}
    >
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={false}
        spaceBetween={24}
        className="mySwiper"
        loop={true}
        autoplay={{ delay: 2.2, disableOnInteraction: false }}
        speed={1500}
        freeMode={true}
        modules={[Autoplay, FreeMode]}
      >
        <SwiperSlide style={{ width: "auto" }}>
          <Box className="banner-slide" sx={{}}>
            <img src={BannerLogo} alt="banner-logo" />
            <Typography
              fontFamily="Aaaiight"
              color="#FFF"
              marginLeft="24px"
              style={{ fontSize: "inherit", lineHeight: "inherit" }}
            >
              Discover Chain Verse
            </Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide style={{ width: "auto" }}>
          <Box className="banner-slide" sx={{}}>
            <img src={BannerLogo} alt="banner-logo" />
            <Typography
              fontFamily="Aaaiight"
              color="#FFF"
              marginLeft="24px"
              style={{ fontSize: "inherit", lineHeight: "inherit" }}
            >
              Discover Chain Verse
            </Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide style={{ width: "auto" }}>
          <Box className="banner-slide" sx={{}}>
            <img src={BannerLogo} alt="banner-logo" />
            <Typography
              fontFamily="Aaaiight"
              color="#FFF"
              marginLeft="24px"
              style={{ fontSize: "inherit", lineHeight: "inherit" }}
            >
              Discover Chain Verse
            </Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide style={{ width: "auto" }}>
          <Box className="banner-slide" sx={{}}>
            <img src={BannerLogo} alt="banner-logo" />
            <Typography
              fontFamily="Aaaiight"
              color="#FFF"
              marginLeft="24px"
              style={{ fontSize: "inherit", lineHeight: "inherit" }}
            >
              Discover Chain Verse
            </Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide style={{ width: "auto" }}>
          <Box className="banner-slide" sx={{}}>
            <img src={BannerLogo} alt="banner-logo" />
            <Typography
              fontFamily="Aaaiight"
              color="#FFF"
              marginLeft="24px"
              style={{ fontSize: "inherit", lineHeight: "inherit" }}
            >
              Discover Chain Verse
            </Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide style={{ width: "auto" }}>
          <Box className="banner-slide" sx={{}}>
            <img src={BannerLogo} alt="banner-logo" />
            <Typography
              fontFamily="Aaaiight"
              color="#FFF"
              marginLeft="24px"
              style={{ fontSize: "inherit", lineHeight: "inherit" }}
            >
              Discover Chain Verse
            </Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide style={{ width: "auto" }}>
          <Box className="banner-slide" sx={{}}>
            <img src={BannerLogo} alt="banner-logo" />
            <Typography
              fontFamily="Aaaiight"
              color="#FFF"
              marginLeft="24px"
              style={{ fontSize: "inherit", lineHeight: "inherit" }}
            >
              Discover Chain Verse
            </Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide style={{ width: "auto" }}>
          <Box className="banner-slide" sx={{}}>
            <img src={BannerLogo} alt="banner-logo" />
            <Typography
              fontFamily="Aaaiight"
              color="#FFF"
              marginLeft="24px"
              style={{ fontSize: "inherit", lineHeight: "inherit" }}
            >
              Discover Chain Verse
            </Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide style={{ width: "auto" }}>
          <Box className="banner-slide" sx={{}}>
            <img src={BannerLogo} alt="banner-logo" />
            <Typography
              fontFamily="Aaaiight"
              color="#FFF"
              marginLeft="24px"
              style={{ fontSize: "inherit", lineHeight: "inherit" }}
            >
              Discover Chain Verse
            </Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide style={{ width: "auto" }}>
          <Box className="banner-slide" sx={{}}>
            <img src={BannerLogo} alt="banner-logo" />
            <Typography
              fontFamily="Aaaiight"
              color="#FFF"
              marginLeft="24px"
              style={{ fontSize: "inherit", lineHeight: "inherit" }}
            >
              Discover Chain Verse
            </Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide style={{ width: "auto" }}>
          <Box className="banner-slide" sx={{}}>
            <img src={BannerLogo} alt="banner-logo" />
            <Typography
              fontFamily="Aaaiight"
              color="#FFF"
              marginLeft="24px"
              style={{ fontSize: "inherit", lineHeight: "inherit" }}
            >
              Discover Chain Verse
            </Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide style={{ width: "auto" }}>
          <Box className="banner-slide" sx={{}}>
            <img src={BannerLogo} alt="banner-logo" />
            <Typography
              fontFamily="Aaaiight"
              color="#FFF"
              marginLeft="24px"
              style={{ fontSize: "inherit", lineHeight: "inherit" }}
            >
              Discover Chain Verse
            </Typography>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default LoopLine;
