import { Box } from "@mui/material";
import React, { useRef, useEffect, useState } from "react";
import SmokeThree from "../components/smoke";

const Test = () => {
  const block = useRef(null);
  const [smokeInit, setSmokeInit] = useState(false);

  useEffect(() => {
    if (block.current && !smokeInit) {
      setSmokeInit(true);
      SmokeThree(block.current);
    } else {
      return;
    }
  }, []);
  return <Box ref={block} sx={{ width: "50%", height: "50vh" }}></Box>;
};

export default Test;
