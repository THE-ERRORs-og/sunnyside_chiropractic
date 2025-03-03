import React from "react";

const MainButton = ({ text, className = "" }) => {
  return (
    <button
      className={` ${className} btn-primary`}
    >
      {text}
    </button>
  );
};

export default MainButton;
