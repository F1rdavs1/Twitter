import React from "react";
import { CommentIcon, LikeIcon, ReplyIcon, ShareIcon, StatsticIcon } from "../../../assets/Images/Icons";
import Bobur from "../../../assets/Images/Bobur.svg";
import BoburProfile from "../../../assets/Images/bobur-profile.png";



function Tweets() {
  return (
    <div className="px-[25px] pb-[38px] ">
      <div className="flex items-center gap-[10px] pb-[40px] border-b-[1px]">
        <img src={Bobur} alt="Avatar" width={60} height={60} />
        <div className="mt-[30px]">
          <strong className="font-bold text-[20px] leading-[26.6px] ">
            Bobur{" "}
            <span className="font-mormal text-[18px] leading-[23.94px] text-[#666666]">
              @bobur_mavlonov · Apr 1
            </span>
          </strong>
          <p className="mt-[5px] mb-[22px] font-normal text-[18px] leading-[23.94px]">
            4-kursni tugatgunimcha kamida bitta biznesim bo'lishini, uylanish
            uchun moddiy jihatdan to'la-to'kis tayyor bo'lishni, sog'lik va
            jismoniy holatni normallashtirishni reja qildim
          </p>
          <ul className="flex justify-between">
            <li className="flex items-center gap-[10px]">
              <button>
                <CommentIcon />
              </button>
              <span>10</span>
            </li>
            <li className="flex items-center gap-[10px]">
              <button>
                <ReplyIcon />
              </button>
              <span>10</span>
            </li>
            <li className="flex items-center gap-[10px]">
              <button>
                <LikeIcon />
              </button>
              <span>10</span>
            </li>
            <li className="flex items-center gap-[10px]">
              <button>
                <ShareIcon />
              </button>
            </li>
            <li className="flex items-center gap-[10px]">
              <button>
                <StatsticIcon />
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center gap-[10px] pb-[40px] border-b-[1px]">
        <img src={Bobur} alt="Avatar" width={60} height={60} />
        <div className="mt-[30px]">
          <strong className="font-bold text-[20px] leading-[26.6px] ">
            Bobur{" "}
            <span className="font-mormal text-[18px] leading-[23.94px] text-[#666666]">
              @bobur_mavlonov · Apr 1
            </span>
          </strong>
          <p className="mt-[5px] mb-[22px] font-normal text-[18px] leading-[23.94px]">
            Bizda shunaqa bir illat bor: gap bo'lsa bo'ldi, nima
            deyayotganimizga qarab ham o'tirmaymiz. Bitta biznes trener nito
            gapirib qo'ysa, hamma biznes trenerlar yomonga chiqadi slishkom
            aqlli odamlar nazdida. Gap faqat biznes trenerlar haqida emas.
          </p>
          <ul className="flex justify-between">
            <li className="flex items-center gap-[10px]">
              <button>
                <CommentIcon />
              </button>
            </li>
            <li className="flex items-center gap-[10px]">
              <button>
                <ReplyIcon />
              </button>
              <span>5</span>
            </li>
            <li className="flex items-center gap-[10px]">
              <button>
                <LikeIcon />
              </button>
              <span>9</span>
            </li>
            <li className="flex items-center gap-[10px]">
              <button>
                <ShareIcon />
              </button>
            </li>
            <li className="flex items-center gap-[10px]">
              <button>
                <StatsticIcon />
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center gap-[10px] pb-[40px] border-b-[1px]">
        <img src={Bobur} alt="Avatar" width={60} height={60} />

        <div className="mt-[30px]">
          <strong className="font-bold text-[20px] leading-[26.6px] ">
            Bobur{" "}
            <span className="font-mormal text-[18px] leading-[23.94px] text-[#666666]">
              @bobur_mavlonov · Apr 1
            </span>
          </strong>
          <p className="mt-[5px] mb-[22px] font-normal text-[18px] leading-[23.94px]">
            <img src={BoburProfile} alt="" />A bo'pti maskamasman
          </p>
          <ul className="flex justify-between">
            <li className="flex items-center gap-[10px]">
              <button>
                <CommentIcon />
              </button>
            </li>
            <li className="flex items-center gap-[10px]">
              <button>
                <ReplyIcon />
              </button>
              <span>5</span>
            </li>
            <li className="flex items-center gap-[10px]">
              <button>
                <LikeIcon />
              </button>
              <span>9</span>
            </li>
            <li className="flex items-center gap-[10px]">
              <button>
                <ShareIcon />
              </button>
            </li>
            <li className="flex items-center gap-[10px]">
              <button>
                <StatsticIcon />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Tweets;
