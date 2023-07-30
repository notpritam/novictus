import React from "react";
import logo from "../assets/img/svg/novitusLogo.svg";
import menu from "../assets/img/svg/menu.svg";
import Button from "../components/button";
import c1 from "../assets/img/svg/c1.svg";
import c2 from "../assets/img/svg/c2.svg";

import c3 from "../assets/img/svg/c3.svg";
import c4 from "../assets/img/svg/c4.svg";
import c5 from "../assets/img/svg/c5.svg";
import c6 from "../assets/img/svg/c6.svg";
import c7 from "../assets/img/svg/c7.svg";
import c8 from "../assets/img/svg/c8.svg";
import c9 from "../assets/img/svg/c9.svg";
import c10 from "../assets/img/svg/c10.svg";
import c11 from "../assets/img/svg/c11.svg";
import c12 from "../assets/img/svg/c12.svg";
import c13 from "../assets/img/svg/c13.svg";
import settings from "../assets/img/svg/settings.svg";
import novi from "../assets/img/svg/novi360.svg";
import scan from "../assets/img/svg/search.svg";
import arrow from "../assets/img/svg/arrow.svg";
import bgFooter from "../assets/img/svg/bgFooter.svg";
import linkdein from "../assets/img/svg/linkdein.svg";
import footerBrand from "../assets/img/svg/footerLogo.svg";
import BlogCard from "../components/blogCard";

function Homepage() {
  return (
    <>
      <header className="z-[999] flex justify-between w-full fixed top-0 pt-[40px] pb-[40px] pl-[20px] pr-[20px]">
        <div className="w-full h-full opacity-20 absolute top-0 left-0 right-0 z-[991] bg-black"></div>
        <img src={logo}></img>

        <div className="w-[48px] h-[48px] flex justify-center items-center rounded-[24px] bg-accentColor">
          <img className="w-[32px] h-[32px]" src={menu}></img>
        </div>
      </header>
      <div className="w-screen h-screen relative bg-transparent flex justify-center items-center text-white">
        <div className="bg-black opacity-40 w-full h-full absolute top-0 bottom-0 left-0 right-0 z-10"></div>
        <div className="relative z-[12] flex flex-col gap-2 p-[20px]  bg-transparent">
          <h1 className="text-[40px] text-white font-thin">
            We value <br />
            your time
          </h1>

          <p className="text-[18px]">
            Make time for things that really matter. Our novi360 services really
            help your organization to optimize and automate time-consuming
            processes.
          </p>

          <div className="flex gap-4 mt-4">
            <Button borders={true} link={"/"} text={"Services"} />
            <Button borders={false} link={"/"} text={"About us"} />
          </div>
        </div>
        <div className="w-full h-full absolute">
          <video
            className="object-cover w-full h-full"
            autoPlay={true}
            loop={true}
          >
            <source
              type="video/mp4"
              src="https://assets.website-files.com/63c14b114de50217aacbf7b2/63c15d7aa5c1d46f3f62fe1a_Final%2003-transcode.mp4"
            ></source>
          </video>
        </div>
      </div>

      <div className="pl-[20px] w-full pr-[20px] flex flex-col gap-6 mt-6">
        <span className="text-[18px]">Organizations that trust us:</span>
        <div className="flex flex-nowrap overflow-hidden gap-12">
          <img src={c1} className="h-[15vw] max-h-[25vw] " />
          <img src={c2} className="h-[15vw] max-h-[25vw] " />
          <img src={c3} className="h-[15vw] max-h-[25vw] " />
          <img src={c4} className="h-[15vw] max-h-[25vw] " />
          <img src={c5} className="h-[15vw] max-h-[25vw] " />
          <img src={c6} className="h-[15vw] max-h-[25vw] " />
          <img src={c7} className="h-[15vw] max-h-[25vw] " />
          <img src={c8} className="h-[15vw] max-h-[25vw] " />
          <img src={c9} className="h-[15vw] max-h-[25vw] " />
          <img src={c10} className="h-[15vw] max-h-[25vw] " />
          <img src={c11} className="h-[15vw] max-h-[25vw] " />
          <img src={c12} className="h-[15vw] max-h-[25vw] " />
          <img src={c13} className="h-[15vw] max-h-[25vw] " />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-center flex-col gap-6 mt-12 mb-12">
          <div className="flex gap-4 items-center justify-center text-[12px]">
            <div className="h-[8px] w-[8px] bg-green-400 rounded-[50%]"></div>
            <span>NOVI360 – END-TO-END AUTOMATION</span>
          </div>

          <div className="flex items-center justify-center">
            <span className="_gradientText text-[1.5rem] text-center">
              Automation is combination between organization , processes and
              technology.
            </span>
          </div>
        </div>
      </div>

      <div className="pl-[20px] pr-[20px] mt-12 mb-12">
        <div className="w-full relative">
          <img src={settings}></img>
          <img className="absolute h-[50px] _center" src={novi}></img>
        </div>

        <div className="mt-12">
          <div className="flex bg-background flex-col top-[20%] gap-4 p-[64px] border-t-[1px] border-white sticky">
            <img src={scan} className="h-[56px] w-[56px]"></img>
            <span className="text-[20px]">Scan & Optimise</span>
            <span className="text-[18px]">
              Our scan & optimize service offers your organization the research
              and advice necessary for an optimal automation approach and
              design.
            </span>
            <div className="flex gap-4">
              <span className="text-[16px] text-accentColor">read more</span>
              <img src={arrow}></img>
            </div>
          </div>
          <div className="flex bg-background flex-col top-[20%] gap-4 p-[64px] border-t-[1px] border-white sticky">
            <img src={scan} className="h-[56px] w-[56px]"></img>
            <span className="text-[20px]">Scan & Optimise</span>
            <span className="text-[18px]">
              Our scan & optimize service offers your organization the research
              and advice necessary for an optimal automation approach and
              design.
            </span>
            <div className="flex gap-4">
              <span className="text-[16px] text-accentColor">read more</span>
              <img src={arrow}></img>
            </div>
          </div>
          <div className="flex flex-col  bg-background top-[20%] gap-4 p-[64px] border-t-[1px] border-white sticky">
            <img src={scan} className="h-[56px] w-[56px]"></img>
            <span className="text-[20px]">Scan & Optimise</span>
            <span className="text-[18px]">
              Our scan & optimize service offers your organization the research
              and advice necessary for an optimal automation approach and
              design.
            </span>
            <div className="flex gap-4">
              <span className="text-[16px] text-accentColor">read more</span>
              <img src={arrow}></img>
            </div>
          </div>
        </div>
      </div>

      <div className="ml-[20px] mr-[20px] border-b-[1px] mb-12 border-white">
        <div className="flex  flex-col gap-6 mt-12 mb-12">
          <div className="flex gap-4 items-center  text-[12px] uppercase">
            <div className="h-[8px] w-[8px] bg-green-400 rounded-[50%]"></div>
            <span>OUR Partners</span>
          </div>

          <div className="flex flex-col gap-8">
            <span className="text-[1.25rem]">Samen Sterker</span>
            <span className="text-[1.25rem]">
              Thanks to our collaborations with leading Automation partners,
              there is always a suitable solution for your organization.
            </span>
            <div className="flex justify-between">
              <img src={c11} className="h-[3rem] p-[.5rem] " />
              <img src={c12} className="h-[3rem] p-[.5rem] " />
              <img src={c13} className="h-[3rem] p-[.5rem] " />
            </div>

            <div>
              <Button borders={true} link={"/"} text={"read more"} />
            </div>
          </div>
        </div>
      </div>

      <div className="mr-[20px] ml-[20px]">
        <div className="flex gap-4 items-center text-[12px] uppercase">
          <div className="h-[8px] w-[8px] bg-green-400 rounded-[50%]"></div>
          <span>Blog</span>
        </div>
        <div className="mt-4 flex flex-col justify-between gap-4">
          <span className="text-[20px]">Case studies & meer</span>
          <div className="flex">
            <Button borders={true} link={"/"} text={"More posts"} />
          </div>
        </div>

        <div className="grid grid-cols-1">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>

      <div className="w-full pb-24 pl-[20px] pr-[20px] flex flex-col justify-center items-center bg-[#f3f2ff] text-background">
        <div className="flex w-[80%] items-center justify-center flex-col gap-4 mt-12 mb-12">
          <span className="text-[2rem] text-center">
            Report you on for the newsletter
          </span>
          <span className="text-[1.25rem] text-center box-border">
            And stay informed of automation developments and more.
          </span>
          <input
            className="w-full text-[#333] rounded-[5rem] pt-[.85rem] pb-[.85rem] pl-[1.5rem] pr-[1.5rem] border-[#b5b6bb] border-[1px]"
            placeholder="Email address"
          ></input>
        </div>
      </div>

      <footer className="relative">
        <div className="relative translate-y-[-50%] ml-[20px] mr-[20px] z-[10] text-white ">
          <div className=" flex  gap-4 flex-col p-6 bottom-0 z-[10] relative">
            <span className="text-[1.5rem]">
              Do you also want to work through Automation ?{" "}
            </span>
            <div className="flex">
              <button className="bg-accentColor pt-[0.875rem] pb-[0.875rem]  pl-[1.5rem] pr-[1.5rem] text-white rounded-[30px]">
                Mail us directly
              </button>
            </div>
          </div>
          <img
            className="w-full object-cover h-full absolute top-0 bottom-0 rounded-[10px]"
            src={bgFooter}
          ></img>
        </div>

        <div className="pl-[20px] pr-[20px] text-[18px]">
          <div className="flex items-start flex-col gap-4 border-b-[1px] border-white pb-12 mb-6">
            <img className="h-[2rem]" src={logo}></img>
            <div className="flex gap-4 flex-col">
              <span>Address</span>
              <div className="flex flex-col gap-2">
                <span>Hanselane 342B </span>
                <span>8017 JL Zwolle</span>
              </div>
            </div>
            <div className="flex gap-4 flex-col">
              <span>Contact</span>
              <div className="flex flex-col gap-2">
                <span>notpritamsharma@gmail.com </span>
                <span>+ 31 ( 0 ) 572 85 61 51</span>
              </div>
            </div>
            <img className="h-[2rem]" src={linkdein}></img>
          </div>

          <div className="text-[0.875rem] flex flex-col gap-4 font-thin mb-4 text-footerColor">
            <span>Copyright 2023© - Novictus</span>
            <div className="flex flex-col gap-2">
              <span>Terms & Conditions</span>
              <span>Privacy Policy</span>
              <div className="flex items-center  gap-2">
                <span>Creation of </span>
                <div className="border-[1px] border-footerColor pl-[1rem] pr-[1rem] pb-[.5rem] pt-[.5rem] rounded-[30px]">
                  notpritam
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Homepage;
