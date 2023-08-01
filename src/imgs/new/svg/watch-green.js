import React from "react";
const WatchGreen = ({ color, width }) => (
  <svg
    width={width || "17"}
    height={width || "16"}
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.2934 1.33331H5.70671C3.28004 1.33331 1.83337 2.77998 1.83337 5.20665V10.7866C1.83337 13.22 3.28004 14.6666 5.70671 14.6666H11.2867C13.7134 14.6666 15.16 13.22 15.16 10.7933V5.20665C15.1667 2.77998 13.72 1.33331 11.2934 1.33331ZM10.2734 9.15331L9.42004 9.64665L8.56671 10.14C7.46671 10.7733 6.56671 10.2533 6.56671 8.98665V7.99998V7.01331C6.56671 5.73998 7.46671 5.22665 8.56671 5.85998L9.42004 6.35331L10.2734 6.84665C11.3734 7.47998 11.3734 8.51998 10.2734 9.15331Z"
      fill={color || "url(#paint0_linear_678_64)"}
    />
    <defs>
      <linearGradient
        id="paint0_linear_678_64"
        x1="16.7704"
        y1="-0.122413"
        x2="8.21057"
        y2="18.7186"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00FFB7" />
        <stop offset="1" stopColor="#005B42" />
      </linearGradient>
    </defs>
  </svg>
);

export default WatchGreen;
