import React, { useState } from "react";
import {
  DarkModeIcon,
  GifIcon,
  SaveImgIcon,
  ScheduleIcon,
  SmileIcon,
  StatsIcon,
} from "../../assets/Images/Icons";
import Bobur from "../../assets/Images/Bobur.svg";
import Button from "../../components/Button";
import Designsta from "../../assets/Images/designsta.svg";
import Cloutexhibition from "../../assets/Images/cloutexhibition.svg";
import CreativePhoto from "../../assets/Images/creativePhoto.svg";
import KebabImg from "../../assets/Images/kebab.png";
import PostItem from "../../components/PostItem";
function Home() {
  const [postValue, setPostValue] = useState("");
  const [postList, setPostList] = useState([
    {
      id: 1,
      name: "Designsta",
      imgUrl: Designsta,
      email: "@inner · 25m",
      comment:
        "Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?",
      commentComment: "10",
      replyCount: "1",
      likeCount: "8",
      uplode: null,
      statistic: null,
      postImg: null,
    },
    {
      id: 2,
      name: "cloutexhibition",
      imgUrl: Cloutexhibition,
      email: "@RajLahoti · 22m",
      comment:
        "YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam.",
      commentComment: null,
      replyCount: "5",
      likeCount: "9",
      uplode: null,
      statistic: null,
      postImg: null,
    },
    {
      id: 3,
      name: "CreativePhoto",
      imgUrl: CreativePhoto,
      email: "@cloutexhibition · 1h",
      comment: "Обетда..... Кечиринглар",
      commentComment: "10",
      replyCount: "1",
      likeCount: "8",
      uplode: null,
      statistic: null,
      postImg: KebabImg,
    },
  ]);
  return (
    <div className="w-[80%]">
      <div className="w-[70%] border-r-[1px] h-screen border-slate-400 overflow-y-auto">
        <div className="sticky top-0 z-50 bg-white p-[20px] border-b-[1px] border-slate-400 flex items-center justify-between">
          <h2 className="font-bold text-[24px] leading-[31.92px] text-[#000000]">
            Home
          </h2>
          <button>
            <DarkModeIcon />
          </button>
        </div>
        <form className="pb-[46px] pl-[22px] items-start relative flex space-x-[15px] border-b-[1px] border-slate-400">
          <img src={Bobur} alt="Bobur" width={60} height={60} />
          <div className="flex flex-col w-full mt-[11px] ">
            <input
              onChange={(e) => setPostValue(e.target.value)}
              className="font-semibold mb-[51px] text-[22px] leading-[29.26px] text-[#828282] outline-none"
              type="text"
              placeholder="What’s happening"
              name="postValue"
            />
            <div className="flex space-x-[20px]">
              <label>
                <input type="file" className="hidden" />
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
            extraStyle={`max-w-[108px] absolute bottom-[5px] right-[18px] duration-300  ${
              postValue ? "" : "opacity-[40%]"
            }`}
            type={"submit"}
          />
        </form>
        <ul>
          {postList.map((item, index) => (
            <PostItem key={index} item={item} />
          ))}
        </ul>
      </div>
      <div className="w-[30%]"></div>
    </div>
  );
}

export default Home;
