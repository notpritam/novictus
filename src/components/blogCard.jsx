import React from "react";
import arrow from "../assets/img/svg/arrow.svg";

function BlogCard({ image, title, link, tag, category }) {
  return (
    <>
      <div className="flex flex-col gap-4 p-4">
        <div className="h-[15rem] relative">
          <img
            className="rounded-[8px]"
            src="https://assets.website-files.com/63d50b3dc09c1b55ee9fa8f7/64b314620ad51dbf01fd9efb_Blog-RPA-p-500.png"
          ></img>
          <div className="absolute top-4 left-4 bg-green-400 text-black pl-2 pr-2 pt-1 pb-1">
            Blog
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-[.875rem]">automation</span>
          <span className="text-[1.5rem]">Robotic Proces Automation (RPA)</span>
          <div className="flex gap-4">
            <span className="text-[16px] text-accentColor">read more</span>
            <img src={arrow}></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogCard;
