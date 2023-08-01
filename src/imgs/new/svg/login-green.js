import React from "react";
const LoginGreen = ({ color }) => (
  <svg
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.2599 2.5C10.7799 2.5 10.3999 2.88 10.3999 3.36V11.82H14.0699L12.4999 10.25C12.2099 9.96 12.2099 9.48 12.4999 9.19C12.7899 8.9 13.2699 8.9 13.5599 9.19L16.3999 12.04C16.6899 12.33 16.6899 12.81 16.3999 13.1L13.5599 15.95C13.4099 16.1 13.2199 16.17 13.0299 16.17C12.8399 16.17 12.6499 16.1 12.4999 15.95C12.2099 15.66 12.2099 15.18 12.4999 14.89L14.0599 13.33H10.3999V21.66C10.3999 22.13 10.7799 22.52 11.2599 22.52C17.1499 22.52 21.2599 18.41 21.2599 12.52C21.2599 6.63 17.1399 2.5 11.2599 2.5Z"
      fill={color || "url(#paint0_linear_321_194)"}
    />
    <path
      d="M4.48999 11.8201C4.07999 11.8201 3.73999 12.1601 3.73999 12.5701C3.73999 12.9801 4.07999 13.3201 4.48999 13.3201H10.39V11.8201H4.48999Z"
      fill={color || "url(#paint1_linear_321_194)"}
    />
    <defs>
      <linearGradient
        id="paint0_linear_321_194"
        x1="22.5722"
        y1="0.314228"
        x2="5.77395"
        y2="20.3814"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00FFB7" />
        <stop offset="1" stopColor="#005B42" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_321_194"
        x1="11.1935"
        y1="11.6563"
        x2="10.9343"
        y2="14.1869"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00FFB7" />
        <stop offset="1" stopColor="#005B42" />
      </linearGradient>
    </defs>
  </svg>
);

export default LoginGreen;
