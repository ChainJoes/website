import React from "react";
const ArrowDown = ({ color }) => (
  <svg
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.96004 4.9751L6.70004 8.2351C6.31504 8.6201 5.68504 8.6201 5.30004 8.2351L2.04004 4.9751"
      stroke={color || "white"}
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default ArrowDown;
