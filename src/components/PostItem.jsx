import React from "react";
import { DotsIcon } from "../assets/Images/Icons";

function PostItem({ item }) {
  return (
    <li className="flex items-start space-x-[15px] relative  pt-[10px] pb-[21px] px-[25px] border-b-[1px] border-slate-400">
      <img src={item.imgUrl} alt="Avatar Icon" width={60} height={60} />
      <div className="">
        <div>
          <div className="flex space-x-[5px]">
            <strong>{item.name}</strong>
            <span>{item.email}</span>
          </div>
          <p>{item.comment}</p>
        </div>
        {item.postImg ? (
          <img
            className="mt-[15px]"
            src={item.postImg}
            alt="Post Image"
            width={679}
            height={453}
          />
        ) : (
          ""
        )}
      </div>
      <button className="absolute top-[21px] right-[25px]">
        <DotsIcon />
      </button>
    </li>
  );
}

export default PostItem;
