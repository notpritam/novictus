import React from "react";

function Button({ text, link, borders }) {
  return (
    <>
      {borders ? (
        <>
          <div className="border-[1px] border-white  text-[16px] text-white pt-[12px] pb-[12px] pl-[24px] pr-[24px] flex items-center justify-center rounded-[5rem]">
            {text}
          </div>
        </>
      ) : (
        <>
          <div className="  text-[16px] text-white pt-[12px] pb-[12px] pl-[24px] pr-[24px] flex items-center justify-center">
            {text}
          </div>
        </>
      )}
    </>
  );
}

export default Button;
