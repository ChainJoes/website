import React from "react";
const ArrowRightGreen = ({ color }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.90991 19.9201L15.4299 13.4001C16.1999 12.6301 16.1999 11.3701 15.4299 10.6001L8.90991 4.08008"
      stroke={color || "url(#paint0_linear_321_417)"}
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear_321_417"
        x1="16.865"
        y1="2.35068"
        x2="3.36468"
        y2="15.6721"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00FFB7" />
        <stop offset="1" stopColor="#005B42" />
      </linearGradient>
    </defs>
  </svg>
);

export default ArrowRightGreen;
