import React, { useContext } from "react";
import {
  CommentIcon,
  ReplyIcon,
  LikeIcon,
  ShareIcon,
  DotsIcon,
  StatsticIcon,
} from "../assets/Images/Icons";
import { Context } from "../context/Context";
export default function PostItem({ item }) {
  const { postList, setPostList } = useContext(Context);
  function handleCommentBtn(value) {
    value.isCommented = !value.isCommented;
    item.commentCount = value.isCommented
      ? ++value.commentCount
      : --value.commentCount;
    if (value.commentCount == 0) value.commentCount = null;
    setPostList([...postList]);
  }
  function handleReplyBtn(value) {
    value.isReplyed = !value.isReplyed;
    item.replyCount = value.isReplyed ? ++value.replyCount : --value.replyCount;
    if (value.replyCount == 0) value.replyCount = null;
    setPostList([...postList]);
  }
  function handleLikeBtn(value) {
    value.isLiked = !value.isLiked;
    item.likeCount = value.isLiked ? ++value.likeCount : --value.likeCount;
    if (value.likeCount == 0) value.likeCount = null;
    setPostList([...postList]);
  }
  function handleUplodeBtn(value) {
    value.isUplode = !value.isUplode;
    item.uplode = value.isUplode ? ++value.uplode : --value.uplode;
    if (value.uplode == 0) value.uplode = null;
    setPostList([...postList]);
  }
  function handleStatisticBtn(value) {
    value.isStatistic = !value.isStatistic;
    item.statistic = value.isStatistic ? ++value.statistic : --value.statistic;
    if (value.statistic == 0) value.statistic = null;
    setPostList([...postList]);
  }
  return (
    <li className="flex relative space-x-[15px] items-start pt-[10px] px-[25px] pb-[21px] border-b-[1px] border-b-slate-400">
      <img src={item.imgUrl} alt="" />
      <div>
        <div className="flex space-x-[5px] ">
          <strong>{item.name}</strong>
          <span>{item.email}</span>
        </div>
        <p className="mb-[15px]">{item.text}</p>
        {item.postImg ? (
          <img src={item.postImg} alt="kebab" width={679} height={453} />
        ) : (
          ""
        )}
        <div className="flex w-[586px] justify-between mt-[22px]">
          <div
            onClick={() => handleCommentBtn(item)}
            className={`flex space-x-[10px] ${
              item.isCommented ? "text-blue-500" : "text-[#536471]"
            }`}
          >
            <CommentIcon />
            <span>{item.commentCount}</span>
          </div>
          <div
            onClick={() => handleReplyBtn(item)}
            className={`flex space-x-[10px] ${
              item.isReplyed ? "text-green-500" : "text-[#536471]"
            }`}
          >
            <ReplyIcon />
            <span>{item.replyCount}</span>
          </div>
          <div
            onClick={() => handleLikeBtn(item)}
            className={`flex space-x-[10px] ${
              item.isLiked ? "text-red-500" : "text-[#536471]"
            }`}
          >
            <LikeIcon />
            <span>{item.likeCount}</span>
          </div>
          <div
            onClick={() => handleUplodeBtn(item)}
            className={`flex space-x-[10px] ${
              item.isUplode ? "text-yellow-500" : "text-[#536471]"
            }`}
          >
            <ShareIcon />
            <span>{item.uplode}</span>
          </div>
          <div
            onClick={() => handleStatisticBtn(item)}
            className={`flex space-x-[10px] ${
              item.isStatistic ? "text-fuchsia-500" : "text-[#536471]"
            }`}
          >
            <StatsticIcon />
            <span>{item.statistic}</span>
          </div>
        </div>
      </div>

      <button className="absolute top-[21px] right-[25px]">
        <DotsIcon />
      </button>
    </li>
  );
}
