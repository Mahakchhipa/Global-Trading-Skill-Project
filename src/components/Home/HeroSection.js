"use client";
import Link from "next/link";

import Image from "next/image";
import videoIcon from "../../../public/assets/icons/video-play-icon.svg";
import backImage from "../../../public/assets/coin-background-image.webp";
import Icons from "./Icons";
import { useInView } from "react-intersection-observer";
export default function HeroSection() {
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true,
  });
  const { ref: paragraphRef, inView: paragraphInView } = useInView({
    triggerOnce: true,
  });
  const { ref: buttonRef, inView: buttonInView } = useInView({
    triggerOnce: true,
  });
  const { ref: iconRef, inView: iconInView } = useInView({ triggerOnce: true });
  return (
    <>
      <div className=" flex lg:flex-row flex-col gap-[19px]">
        <div className="lg:flex hidden">
          <img src="/assets/banner-shadow.svg" className="w-fit h-fit" />
        </div>
        <div className="flex flex-col gap-8 px-[20px] lg:px-0  py-[60px]">
          <div className="flex flex-col gap-4 xl:gap-[36px] text-center lg:text-start justify-center items-center lg:items-start mt-12 lg:mt-0 xl:mt-12">
            <div className="lg:flex hidden">
              <img src="/assets/icons/shadow-coin.svg"  />
            </div>
            <h1
              ref={headingRef}
              className={`text-2xl lg:text-3xl xl:text-6xl 2xl:text-[76px] 2xl:leading-[77px] font-semibold uppercase opacity-0 translate-x-0 transition-all duration-500 ${
                headingInView ? "opacity-100 translate-x-0" : ""
              }`}
            >
              Secure your future With 
              <span className="text-[#FEE53D] "> Higher Profits</span>
            </h1>
            <p
              ref={paragraphRef}
              className={`text-base xl:text-xl font-normal opacity-0 translate-x-0 transition-all duration-500 delay-200 ${
                paragraphInView ? "opacity-100 translate-x-0" : ""
              }`}
            >
              Trading Must be Easy and Profitable by putting money into various
              currencies with global skill trading. Everyone can take the
              advantage of global markets and to boost their income.
            </p>

            <div
              ref={buttonRef}
              className={`flex gap-[18px] mx-auto lg:mx-0 w-fit opacity-0 translate-x-0 transition-all duration-500 delay-400 ${
                buttonInView ? "opacity-100 translate-x-0" : ""
              }`}
            >
              <Link
                href="/"
                className="bg-[#FEE73E] text-black w-[120px] h-[34px] lg:w-[178px] lg:h-[50px] flex items-center justify-center gap-2 rounded-md  transition-transform duration-300 transform hover:scale-110"
              >
                <p className="text-base lg:text-xl font-semibold">
                  Get Started
                </p>
                <svg
                  width="10"
                  height="12"
                  viewBox="0 0 10 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.6878 6.59726C9.9504 6.33466 9.9504 5.9082 9.6878 5.64559L6.3265 2.28429C6.0639 2.02169 5.63743 2.02169 5.37483 2.28429C5.11223 2.54689 5.11223 2.97336 5.37483 3.23596L7.59119 5.45022H1.14589C0.774049 5.45022 0.473633 5.75064 0.473633 6.12248C0.473633 6.49432 0.774049 6.79474 1.14589 6.79474H7.58909L5.37693 9.009C5.11433 9.2716 5.11433 9.69807 5.37693 9.96067C5.63953 10.2233 6.066 10.2233 6.3286 9.96067L9.6899 6.59936L9.6878 6.59726Z"
                    fill="black"
                  />
                </svg>
              </Link>
              <Link
                href="/"
                className="flex items-center justify-center gap-2 w-[133px]  lg:w-[198px] lg:h-[50px] h-[34px] border-[1px] border-[#FEE73E] rounded-md transition-transform duration-300 transform hover:scale-110"
              >
                <Image src={videoIcon} alt="video icon" />
                <p className="text-base lg:text-xl font-semibold text-[#fee73e]">
                  {" "}
                  Watch Video
                </p>
              </Link>
            </div>
          </div>
          <div
            ref={iconRef}
            className={` flex-col gap-6 secondary-data lg:flex hidden  opacity-0 translate-x-0 transition-all duration-500 delay-400 ${
              iconInView ? "opacity-100 translate-x-0" : ""
            }`}
          >
            <h2>Follow Us:</h2>
            <Icons />
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          {/* Background Image */}
          <Image
            src={backImage}
            alt="background"
            className="xl:max-w-[700px] h-auto"
          />

          {/* Coin Image */}
          <div className="absolute top-1/2 left-1/2">
            <Image
              src="/assets/coin.gif"
              alt="coin"
              width={603}
              height={603}
              className="coinImage  w-[340px] lg:max-w-[603px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
