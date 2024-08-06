import React from "react";

function Button({ btn, type, extraStyle }) {
  return (
    <button
      className={`w-full rounded-[76px] bg-[#1DA1F2] text-white py-[18px] font-bold text-[18px] leading-[23.94px] ${extraStyle}`}
      type={type}
    >
      {btn}
    </button>
  );
}

export default Button;
