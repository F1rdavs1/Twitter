import React, { useState } from "react";
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
import CustomModal from "./CustomModal";

function Navbar() {
  const userData = JSON.parse(window.localStorage.getItem("token"));
  const [openModal, setOpenModal] = useState(false)
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
  function SignOut(){
    localStorage.clear()
    location.pathname = "/"
  }
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
      <div className="flex gap-[4px] my-[20px]">
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
        <button onClick={() => setOpenModal(true)} className="ml-[42px]">
          <DotsIcon />
        </button>
      </div>
      <CustomModal isModal={openModal} setIsModal={setOpenModal}>
        <h2 className="font-bold text-center text-[35px] mt-[20px] ">Chiqmoqchimisiz</h2>
        <div className="flex justify-center space-x-[20px] mt-[50px]">
          <Button onClick={() => setOpenModal(false)} btn={"Bekor qilish"} extraStyle={'w-[200px] bg-green-600'}/>
          <Button onClick={SignOut} btn={"Rozi bo'lish"} extraStyle={'w-[200px] bg-red-600'}/>
        </div>
      </CustomModal>
    </div>
  );
}

export default Navbar;
