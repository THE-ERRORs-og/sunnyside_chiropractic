import React from "react";

const GrayGradient = ({ className = "" }) => {
  return (
    <div
      className={`w-full ${className} z-2 absolute top-0 `}
      style={{
        background:
          "linear-gradient(to top, rgba(0, 0, 0, 0.2) 0%,  rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.4) 100%)",
      }}
    ></div>
  );
};

export default GrayGradient;
