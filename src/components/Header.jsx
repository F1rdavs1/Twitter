import React from "react";
import { DarkModeIcon } from "../assets/Images/Icons";

function Header({ title }) {
  return (
    <div className="flex flex-col justify-between">
      <div className="sticky top-0 z-40 bg-white p-[20px] border-b-[1px] border-b-slate-400 flex justify-between">
        <h2 className="font-bold text-[24px]">{title}</h2>
        <button>
          <DarkModeIcon />
        </button>
      </div>
    </div>
  );
}

export default Header;
