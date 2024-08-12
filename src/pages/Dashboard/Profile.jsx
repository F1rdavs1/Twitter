import React from "react";
import {
  BornIcon,
  DataIcon,
  LeftIcon,
  LinkIcon,
  LocationIcon,
  SettingsIcon,
} from "../../assets/Images/Icons";
import ProfileImg from "../../assets/Images/Profile-img.png";
import Bobur from "../../assets/Images/Bobur.svg";
import { Link, Outlet } from "react-router-dom";
import AboutAcc from "../../components/AboutAcc";

function Profile() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  };
  return (
    <div className="w-[80%] flex">
      <div className="w-[70%] border-r-[1px] border-r-slate-400 h-screen overflow-y-auto">
        <div className="sticky top-0 z-40 bg-white p-[20px] border-b-[1px] border-b-slate-400 flex space-x-[40px]">
          <button>
            <LeftIcon />
          </button>
          <div>
            <h2 className="font-bold text-[24px]">Bobur</h2>
            <span className="font-normal text-[16px] leading-[21.28px] text-[#666666]">
              1,070 Tweets
            </span>
          </div>
        </div>
        <div className="h-[280px] relative">
          <img src={ProfileImg} alt="Profile Image" width={910} height={280} />
          <div className="flex items-end justify-between -translate-y-[80px] px-[25px]">
            <img src={Bobur} alt="Profile Image" width={150} height={150} />
            <button className="w-[120px] py-[10px] border-[1px] rounded-[50px] border-[#999999] font-semibold text-[18px] leading-[23.94px] hover:bg-[#999999] hover:text-white duration-200">
              Edit profile
            </button>
          </div>
        </div>
        <div className=" mt-[25px]">
          <strong className="font-bold text-[24px] leading-[31.92px] px-[25px]">
            Bobur
          </strong>
          <a
            href="mailto:"
            className="block font-normal text-[16px] leading-[21.28px] text-[#666666] px-[25px]"
          >
            @bobur_mavlonov
          </a>
          <h3 className="px-[25px] my-[15px] font-normal text-[18px] leading-[23.94px]">
            UX&UI designer at{" "}
            <span className="font-normal text-[18px] leading-[23.94px] text-[#1DA1F2]">
              @abutechuz
            </span>
          </h3>
          <div className="flex justify-between">
            <div className="flex items-center justify-between space-x-[5px]">
              <button>
                <LocationIcon />
              </button>
              <span className="font-normal text-[18px] leading-[23.94px] text-[#666666]">
                Mashag’daman
              </span>
            </div>
            <div className="flex items-center space-x-[5px]">
              <button>
                <LinkIcon />
              </button>
              <span className="font-normal text-[18px] leading-[23.94px] text-[#1DA1F2]">
                t.me/boburjon_mavlonov
              </span>
            </div>
            <div className="flex items-center space-x-[5px]">
              <button>
                <BornIcon />
              </button>
              <span className="font-normal text-[18px] leading-[23.94px] text-[#666666]">
                Born November
              </span>
            </div>
            <div className="flex items-center space-x-[5px]">
              <button>
                <DataIcon />
              </button>
              <span className="font-normal text-[18px] leading-[23.94px] text-[#666666]">
                Joined
              </span>
            </div>
          </div>
          <div className="mb-[40px] mt-[15px]">
            <strong className="font-bold px-[25px] text-[18px] leading-[23.94px]">
              67
              <span className="font-normal text-[18px] leading-[23.94px] ml-[5px]">
                Following
              </span>
            </strong>
            <strong className="font-bold px-[25px] text-[18px] leading-[23.94px] mb-[40px]">
              47
              <span className="font-normal text-[18px] leading-[23.94px] ml-[5px]">
                Followers
              </span>
            </strong>
          </div>
          <ul className="flex justify-around items-center pb-[19px] border-b-[1px]">
            <li>
              <Link
                className="font-normal text-[18px] leading-[23.94px] focus:font-bold focus:border-b-[4px] focus:border-[#1DA1F2] pb-[18px] focus:rounded-[2px] focus:duration-200"
                to={""}
              >
                Tweets
              </Link>
            </li>
            <li>
              <Link
                className="font-normal text-[18px] leading-[23.94px] focus:font-bold focus:border-b-[4px] focus:border-[#1DA1F2] pb-[18px] focus:rounded-[2px] focus:duration-200"
                to={"tweets-replies"}
              >
                Tweets & replies
              </Link>
            </li>
            <li>
              <Link
                className="font-normal text-[18px] leading-[23.94px] focus:font-bold focus:border-b-[4px] focus:border-[#1DA1F2] pb-[18px] focus:rounded-[2px] focus:duration-200"
                to={"media"}
              >
                Media
              </Link>
            </li>
            <li>
              <Link
                className="font-normal text-[18px] leading-[23.94px] focus:font-bold focus:border-b-[4px] focus:border-[#1DA1F2] pb-[18px] focus:rounded-[2px] focus:duration-200"
                to={"likes"}
              >
                Likes
              </Link>
            </li>
          </ul>
          <Outlet />
        </div>
      </div>
      <div className="w-[30%]">
        <div className="w-[30%] pt-[20px] pl-[28px]">
          <form autoComplete="off" onSubmit={handleFormSubmit}>
            <input
              className="pl-[20px] outline-none w-[373px] py-[16px] bg-[#EFF3F4] rounded-[31px] text-[#5C6C79] focus:shadow-md duration-300"
              type="text"
              placeholder="Search Twitter"
              name="searchInput"
            />
          </form>
          <div className="w-[373px] bg-[#F7F9F9] rounded-[10px] pt-[20px] pb-[30px] px-[15px] mt-[20px]">
            <div className="flex justify-between">
              <strong className="text-bold text-[24px] leading-[31.92px]">
                Trends for you
              </strong>
              <button>
                <SettingsIcon />
              </button>
            </div>
            <AboutAcc />
            <AboutAcc />
            <AboutAcc />
            <a
              className="block mt-[30px] font-normal text-[18px] leading-[18px] text-[#1DA1F2]"
              href="#"
            >
              Show more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
