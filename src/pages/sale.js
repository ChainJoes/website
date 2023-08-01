import React, { useEffect, useState, useCallback } from "react";
import { Box } from "@mui/system";
import { Loader } from "../modules";
import { getAllImage, getAllVideo } from "../allImage";
import PreLogoWebM from "../videos/prelogo.webm";
import PreLogoMp4 from "../videos/prelogo.mp4";
import Cookies from "js-cookie";
import Sale from "../modules/sale/sale";
import { useMediaQuery } from "@mui/material";

const DELAY = 5000;

const Main = () => {
  const [progres, setProgres] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isPlayed, setIsPlayed] = useState(0);
  const [timeProgres, setTimeProgres] = useState(0);
  const [isPreload, setIsPreload] = useState(Cookies.get("Preloader"));

  const desktop = useMediaQuery("(min-width: 768px)");

  const increaseProgres = () => setProgres((prev) => prev + 1);

  const getTimeProgress = (startTime, currentTime) => {
    if (startTime) {
      return (currentTime.getTime() - startTime) / DELAY;
    } else {
      return 0;
    }
  };

  const updateTime = (startTime) => {
    let currentTime = new Date();
    if (currentTime.getTime() - startTime <= DELAY + 1000) {
      setTimeProgres(getTimeProgress(startTime, currentTime));
    }
  };

  useEffect(() => {
    const currentTime = new Date().getTime();
    const interval = setInterval(() => updateTime(currentTime), 10);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cook = Cookies.get("PreLogo");
    const preloader = Cookies.get("Preloader");
    if (preloader && !isPreload) {
      setIsPreload(true);
    }
    Cookies.set("VisitSale", 1);
    setProgres(0);
    setIsPlayed(cook);
    getAllVideo().forEach((src) => {
      const video = document.createElement("video");
      video.src = src;
      video.preload = "metadata";
      video.muted = "true";
      video.autoplay = "true";
      video.oncanplaythrough = () => {
        increaseProgres();
      };
      video.onsuspend = () => increaseProgres();
    });
    getAllImage().forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => increaseProgres();
    });
  }, []);

  useEffect(() => {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "ee563a71-cdb5-450c-8897-219b26832c5b";
    (function () {
      let d = document;
      let s = d.createElement("script");
      s.src = "https://client.crisp.chat/l.js";
      s.async = 1;
      d.getElementsByTagName("head")[0].appendChild(s);
    })();
  }, []);

  useEffect(() => {
    if (timeProgres >= 1) {
      const preloader = Cookies.get("Preloader");
      if (preloader && !isPreload) {
        setIsPreload(true);
      } else if (!preloader) {
        Cookies.set("Preloader", true);
        setIsPreload(true);
      }
    }
  }, [timeProgres]);

  const prevideo = useCallback((node) => {
    if (node) {
      node.onended = () => {
        Cookies.set("PreLogo", 1);
        setIsPlaying(false);
      };
    }
  }, []);

  return (
    <>
      {/* {timeProgres < 1 && !isPreload && isPlaying && !isPlayed ? (
        <Loader progres={timeProgres} />
      ) : (
        <> */}
          {/* {isPlaying && !isPlayed && desktop ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                height: "100vh",
                backgroundColor: "#000000",
              }}
            >
              <video
                ref={prevideo}
                autoPlay="autoPlay"
                muted
                playsInline
                onContextMenu={() => false}
                preload="auto"
                id="vid"
                style={{
                  objectFit: "cover",
                  width: "100%",
                }}
              >
                <source src={PreLogoWebM} type="video/webm" />
                <source src={PreLogoMp4} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Box>
          ) : ( */}
          <>
            <Box sx={{ overflowX: "hidden" }}>
              <Sale />
            </Box>
          </>
          {/* )} */}
        {/* </>
      )} */}
    </>
  );
};
export default Main;
