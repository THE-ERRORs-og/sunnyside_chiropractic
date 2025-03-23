"use client";
import React, { use } from "react";

const MainButton = ({ text, className = "" ,onClick = ()=>{}}) => {
  return (
    <button
      className={` ${className} btn-primary`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default MainButton;
