import React from "react";
import { DotsIcon } from "../assets/Images/Icons";

function AboutAcc() {
  return (
    <>
      <div className="mt-[20px]">
        <div className="flex justify-between items-end">
          <span className="font-normal text-[16px] leading-[21.28px] text-[#393B41]">
            Trending in Germany
          </span>
          <button>
            <DotsIcon />
          </button>
        </div>
        <strong className="block font-semibold text-[20px] leading-[26.6px] mt-[2px] mb-[3px]">
          Revolution
        </strong>
        <span
          className={`font-normal text-[16px] leading-[21.28px] text-[#393B41]`}
        >
          50.4K Tweets
        </span>
      </div>
    </>
  );
}

export default AboutAcc;
