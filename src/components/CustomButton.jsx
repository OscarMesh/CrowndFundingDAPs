import React from "react";

const CustomButton = ({ btnType, title, styles, handleClick }) => {
  return (
    <button
      type={btnType}
      className={`fons-epilogue font-bold text-[14px]
       text-[#fff] rounded-[10px] px-[20px] py-[10px] ${styles} cursor-pointer`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
