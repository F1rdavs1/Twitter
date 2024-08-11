import React, { useContext, useState } from "react";
import {
  SaveImgIcon,
  GifIcon,
  StatsIcon,
  SmileIcon,
  ScheduleIcon,
  SettingsIcon,
} from "../../assets/Images/Icons";
import Bobur from "../../assets/Images/Bobur.svg";
import Button from "../../components/Button";
import PostItem from "../../components/PostItem";
import { Context } from "../../context/Context";
import AboutAcc from "../../components/AboutAcc";
import Header from "../../components/Header";

export default function Home() {
  const { postList, setPostList } = useContext(Context);
  const token = JSON.parse(localStorage.getItem("token"));
  const [postValue, setPostValue] = useState("");
  const [postImg, setPostImg] = useState("");

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const data = {
      id: postList.length ? postList[postList.length - 1].id + 1 : 1,
      name: token.login,
      imgUrl: Bobur,
      email: "@inner · 25m",
      homeComment: e.target.postValuee.value,
      commentCount: null,
      replyCount: null,
      likeCount: null,
      uplode: null,
      statistic: null,
      postImg: postImg,
    };
    setPostList([data, ...postList]);
    e.target.reset();
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  };
  return (
    <div className="w-[80%] flex">
      <div className="w-[70%] border-r-[1px] border-r-slate-400 h-screen overflow-y-auto">
        <Header title={"Home"} />
        <form
          onSubmit={handleSubmitForm}
          autoComplete="off"
          className="pb-[46px] relative pl-[22px] flex items-start space-x-[15px] border-b-[1px] border-b-slate-400 "
        >
          <img src={Bobur} alt="Bobur" width={60} height={60} />
          <div className="flex flex-col w-full mt-[11px] space-y-[51px] ">
            <input
              type="text"
              onChange={(e) => setPostValue(e.target.value)}
              placeholder="What’s happening"
              className="font-semibold text-[22px] outline-none placeholder:text-[#828282]"
              name="postValuee"
            />
            <div className="flex space-x-[22px]">
              <label>
                <input
                  onChange={(e) =>
                    setPostImg(URL.createObjectURL(e.target.files[0]))
                  }
                  type="file"
                  className="hidden"
                />
                <SaveImgIcon />
              </label>
              <label>
                <input type="file" className="hidden" />
                <GifIcon />
              </label>
              <label>
                <input type="file" className="hidden" />
                <StatsIcon />
              </label>
              <label>
                <input type="file" className="hidden" />
                <SmileIcon />
              </label>
              <label>
                <input type="file" className="hidden" />
                <ScheduleIcon />
              </label>
            </div>
          </div>
          <Button
            btn={"Tweet"}
            extraStyle={`!w-[108px] absolute bottom-[5px] right-[18px] duration-300  ${
              postValue ? "" : "opacity-[40%]"
            }`}
            type={"submit"}
          />
        </form>
        <ul>
          {postList.map((item) => (
            <PostItem key={item.id} item={item} />
          ))}
        </ul>
      </div>

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
  );
}
