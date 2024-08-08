import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  TwitterIcon,
  HomeIcon,
  ExploreIcon,
  NotificationIcon,
  MessagesIcon,
  BookmarksIcon,
  ListsIcon,
  ProfileIcon,
  MoreIcon,
  DotsIcon,
} from "../assets/Images/Icons";
import NavbarItem from "./NavbarItem";
import Button from "./Button";
import Bobur from "../assets/Images/Bobur.svg";

function Navbar() {
  const userData = JSON.parse(window.localStorage.getItem("token"));
  const navbarList = [
    {
      id: 1,
      title: "Home",
      path: "/",
      icon: <HomeIcon />,
    },
    {
      id: 2,
      title: "Explore",
      path: "/explore",
      icon: <ExploreIcon />,
    },
    {
      id: 3,
      title: "Notifications",
      path: "/notifications",
      icon: <NotificationIcon />,
    },
    {
      id: 4,
      title: "Messages",
      path: "/messages",
      icon: <MessagesIcon />,
    },
    {
      id: 5,
      title: "Bookmarks",
      path: "/bookmarks",
      icon: <BookmarksIcon />,
    },
    {
      id: 6,
      title: "Lists",
      path: "/lists",
      icon: <ListsIcon />,
    },
    {
      id: 7,
      title: "Profile",
      path: "/profile",
      icon: <ProfileIcon />,
    },
    {
      id: 8,
      title: "More",
      path: "/more",
      icon: <MoreIcon />,
    },
  ];
  return (
    <div className="w-[20%] pt-[31px] border-r-[1px] border-slate-400 h-screen overflow-y-auto">
      <Link to={"/"}>
        <TwitterIcon />
      </Link>
      <ul className="mt-[49px] mb-[30px] space-y-[30px]">
        {navbarList.map((item, index) => (
          <NavbarItem key={index} item={item} />
        ))}
      </ul>
      <Button btn={"Tweet"} extraStyle={"py-[15px] w-[230px]"} />
      <div className="flex gap-[4px] mt-[260px]">
        <img src={Bobur} alt="Bobur Mavlonov" width={50} height={50} />
        <div className="flex flex-col">
          <strong className="capitalize font-semibold text-[16px] leading-[21.28px] text-[#000000]">
            {userData.login}
          </strong>
          <a
            href="mailto:"
            className="font-normal text-[16px] leading-[21.28px] text-[#000000]"
          >
            @{userData.login}
          </a>
        </div>
        <button className="ml-[42px]">
          <DotsIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
