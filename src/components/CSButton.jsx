import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { useState, CSSProperties } from "react";
import spinnerLoadingImage from "../assets/img/spinner.gif";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

const CSButton = ({ type, onClick, className, disabled, buttonText, loading }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={false}
      className={`${className} ${disabled && `opacity-50 cursor-not-allowed`} text-white text-sm h-12 font-semibold align-bottom inline-flex items-center justify-center leading-5 transition-colors duration-150 focus:outline-none`}
    >
        { disabled && <img src={spinnerLoadingImage} alt="Loading" width={20} height={10} />}
      <span className="font-serif ml-1 font-light text-sm text-white">
        {buttonText}
      </span>
    </button>
  );
};

export default CSButton;
