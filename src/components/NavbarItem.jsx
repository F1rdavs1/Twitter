import React from "react";
import { NavLink } from "react-router-dom";
import { HomeIcon } from "../assets/Images/Icons";

function NavbarItem({ item, index }) {
  return (
    <li>
      <NavLink to={item.path} className={"flex items-center space-x-[20px]"}>
        {item.icon}
        <strong className="font-semibold text-[18px] leading-[23.94px] text-[#000000]">
          {item.title}
        </strong>
      </NavLink>
    </li>
  );
}

export default NavbarItem;
