import React from "react";

function Input({ type, placeholder, extraStyle, name }) {
  return (
    <input
      className={`w-full py-[23px] pl-[20px] font-normal text-[18px] leading-[23.94px] text-[#00000099] opacity-[100%] border-[1px] border-[#00000033] border-opacity-[20%] outline-none rounded-[6px] focus:shadow-md duration-300 ${extraStyle}`}
      type={type}
      placeholder={placeholder}
      required
      name={name}
    />
  );
}

export default Input;
