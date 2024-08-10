import React from 'react'
import Header from '../components/Header'
import { SettingsIcon } from '../assets/Images/Icons';
import AboutAcc from '../components/AboutAcc';

function Lists() {
    const handleFormSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
      };
      return (
        <div className="w-[80%] flex">
          <div className="w-[70%] border-r-[1px] border-r-slate-400 h-screen overflow-y-auto">
            <Header title={"Explore"} />
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
                  <SettingsIcon />
                </div>
                <AboutAcc />
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

export default Lists