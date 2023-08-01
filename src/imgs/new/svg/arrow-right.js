import React from "react";
const ArrowRight = ({ color }) => (
  <svg
    width="17"
    height="16"
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.43994 13.2802L10.7866 8.93355C11.2999 8.42021 11.2999 7.58021 10.7866 7.06688L6.43994 2.72021"
      stroke={color || "white"}
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default ArrowRight;
