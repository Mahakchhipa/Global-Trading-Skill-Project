"use client";
import { useState, useEffect, useRef } from "react";
import Headings from "./Headings";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function Investment() {
  const contentData = [
    {
      paragraph:
        "In the above testimonial, a customer named Jeanine shares her experience with Briogeo’s products. While the post is scattered with too many product mentions, it takes full advantage of its real estate by allowing the writer to tell",
      link: "/investing-for-income",
      name: "Guy Hawkins",
      profile: "/assets/guy-hawkins.webp",
      designation: "Trade Boss",
    },
    {
      paragraph:
        "The above testimonial is about Martha Chumo, who taught herself to code in one summer. This testimonial example works because it allows prospective customers to see themselves in Codeacademy’s current customer base.",
      link: "/global-market-access",
      name: "Guy Hawkins",
      profile: "/assets/belal-hossain.webp",
      designation: "Trade Genius",
    },
    {
      paragraph:
        "Leverage cutting-edge trading tools and market insights to make informed investment decisions tailored to your financial goals.",
      link: "/advanced-trading-tools",
      name: "Guy Hawkins",
      profile: "/assets/guy-hawkins.webp",
      designation: "Trade Boss",
    },
    {
      paragraph:
        "In the above testimonial, a customer named Jeanine shares her experience with Briogeo’s products. While the post is scattered with too many product mentions, it takes full advantage of its real estate by allowing the writer to tell",
      link: "/investing-for-income",
      name: "Guy Hawkins",
      profile: "/assets/guy-hawkins.webp",
      designation: "Trade Boss",
    },
    {
      paragraph:
        "Experience seamless trading across multiple asset classes, supported by a robust infrastructure and reliable execution on our award-winning trading platforms.",
      link: "/global-market-access",
      name: "Guy Hawkins",
      profile: "/assets/guy-hawkins.webp",
      designation: "Trade Boss",
    },
    {
      paragraph:
        "Leverage cutting-edge trading tools and market insights to make informed investment decisions tailored to your financial goals.",
      link: "/advanced-trading-tools",
      name: "Guy Hawkins",
      profile: "/assets/guy-hawkins.webp",
      designation: "Trade Boss",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndexMobile, setCurrentIndexMobile] = useState(0);
  const [isHovered, setIsHovered] = useState(false); // For hover state
  const intervalRef = useRef(null); // Reference to interval
  const [isPreviousClicked, setIsPreviousClicked] = useState(false);
  const [isNextClicked, setIsNextClicked] = useState(false);
  const cardsToShow = 2;

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : contentData.length - cardsToShow
    );
    setIsPreviousClicked(true);
    setIsNextClicked(false);
  };

  const handleNext = () => {
    setCurrentIndexMobile((prevIndex) =>
      prevIndex < contentData.length - 1 ? prevIndex + 1 : 0
    );
  };
  const handleNextWeb = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < contentData.length - cardsToShow ? prevIndex + 1 : 0
    );
    setIsNextClicked(true);
    setIsPreviousClicked(false);
  };

  // Auto-scroll functionality
  useEffect(() => {
    if (isHovered) return; // Do not auto-scroll if hovered

    intervalRef.current = setInterval(handleNext, 3000); // Scroll every 3 seconds

    return () => {
      clearInterval(intervalRef.current); // Clean up interval on component unmount
    };
  }, [isHovered]);
  const animateClass = (inView) =>
    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10";
  return (
    <>
      <div
        className=" gap-8 lg:gap-[47px] bg-[#1E1C1D] flex lg:flex-row flex-col lg:p-0 p-[20px]"
        onMouseEnter={() => setIsHovered(true)} // Pause scroll on hover
        onMouseLeave={() => setIsHovered(false)} // Resume scroll on hover leave
      >
        <div className="w-[300px] max-h-[400px] lg:flex hidden">
          <div className="ellipse"></div>
        </div>

        <div className="lg:py-[40px] flex flex-col lg:gap-[47px] gap-3">
          <div className="flex lg:grid grid-cols-2 max-w-[1170px] mx-auto">
            <div
              className={`secondary-data flex flex-col items-center lg:items-start justify-center gap-[12px] text-center lg:text-start`}
            >
              <h2>Connect with our clients</h2>
              <p>
                Anyone can invest money in different currencies to increase
                their earnings with Bitrader through online.
              </p>
            </div>

            <div className="flex gap-4 mx-auto lg:flex hidden w-full justify-end">
              <div
                className={`w-8 h-8 rounded-full border-white border-[1px] flex items-center justify-center ${
                  isPreviousClicked ? "bg-[#FEE73E]" : ""
                }`}
                onClick={handlePrevious}
              >
                <svg
                  width="10"
                  height="18"
                  viewBox="0 0 10 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.830566 8.20542C0.391113 8.64487 0.391113 9.35855 0.830566 9.798L6.45557 15.423C6.89502 15.8625 7.60869 15.8625 8.04814 15.423C8.4876 14.9835 8.4876 14.2699 8.04814 13.8304L3.21768 8.99995L8.04463 4.16948C8.48408 3.73003 8.48408 3.01636 8.04463 2.5769C7.60518 2.13745 6.8915 2.13745 6.45205 2.5769L0.827051 8.2019L0.830566 8.20542Z"
                    fill={`${isPreviousClicked ? "black" : "white"}`}
                  />
                </svg>
              </div>
              <div
                className={`w-8 h-8 rounded-full border-white border-[1px] flex items-center justify-center ${
                  isNextClicked ? "bg-[#FEE73E]" : ""
                }`}
                onClick={handleNextWeb}
              >
                <svg
                  width="9"
                  height="14"
                  viewBox="0 0 9 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.16973 6.20542C8.60918 6.64487 8.60918 7.35855 8.16973 7.798L2.54473 13.423C2.10527 13.8625 1.3916 13.8625 0.952148 13.423C0.512695 12.9835 0.512695 12.2699 0.952148 11.8304L5.78262 6.99995L0.955664 2.16948C0.516211 1.73003 0.516211 1.01636 0.955664 0.576904C1.39512 0.137451 2.10879 0.137451 2.54824 0.576904L8.17324 6.2019L8.16973 6.20542Z"
                    fill={`${isNextClicked ? "black" : "white"}`}
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-col  gap-8 justify-center items-center bg-[#3D3D3D] rounded-lg p-6 min-h-[250px] lg:hidden">
            <div className="flex flex-col gap-4 h-[280px] ternary-data text-center justify-center  ">
              <div className="border-b-[1px] border-[#5a5959] py-6">
                <p className="min-h-[120px]" style={{ color: "rgba(255, 255, 255, 0.4)" }}>
                  {contentData[currentIndexMobile].paragraph}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center  gap-3">
                  <div>
                    <Image
                      src={contentData[currentIndexMobile].profile}
                      width={80}
                      height={80}
                      alt={contentData[currentIndexMobile].name}
                    />
                  </div>
                  <div className="flex flex-col gap-2 ternary-data text-start">
                    <h3>{contentData[currentIndexMobile].name}</h3>
                    <p>{contentData[currentIndexMobile].designation}</p>
                  </div>
                </div>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 20 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.3">
                    <path
                      d="M19.1453 13.3053C19.1453 16.1239 16.8624 18.4068 14.0439 18.4068H13.7038C12.9513 18.4068 12.3434 17.7989 12.3434 17.0464C12.3434 16.2939 12.9513 15.686 13.7038 15.686H14.0439C15.3575 15.686 16.4246 14.6189 16.4246 13.3053V12.9652H13.7038C12.2031 12.9652 10.983 11.7451 10.983 10.2444V7.52364C10.983 6.02296 12.2031 4.80286 13.7038 4.80286H16.4246C17.9252 4.80286 19.1453 6.02296 19.1453 7.52364V8.88403V10.2444V13.3053ZM8.26221 13.3053C8.26221 16.1239 5.9793 18.4068 3.16074 18.4068H2.82064C2.06817 18.4068 1.46025 17.7989 1.46025 17.0464C1.46025 16.2939 2.06817 15.686 2.82064 15.686H3.16074C4.47437 15.686 5.54142 14.6189 5.54142 13.3053V12.9652H2.82064C1.31996 12.9652 0.0998535 11.7451 0.0998535 10.2444V7.52364C0.0998535 6.02296 1.31996 4.80286 2.82064 4.80286H5.54142C7.04211 4.80286 8.26221 6.02296 8.26221 7.52364V8.88403V10.2444V13.3053Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 justify-center items-center   lg:grid hidden max-w-[1170px] mx-auto">
            {contentData
              .slice(currentIndex, currentIndex + cardsToShow)
              .map((content, index) => {
                const { ref, inView } = useInView({
                  triggerOnce: true,
                  threshold: 0.5,
                });
                return (
                  <div
                    ref={ref}
                    key={index}
                    className={`flex flex-col gap-4 rounded-lg p-6 min-h-[250px] bg-[#3D3D3D] ternary-data text-start justify-center transform transition-all duration-700 ease-out ${animateClass(
                      inView
                    )}`}
                  >
                    <div className="border-b-[1px] border-[#5a5959] py-6">
                      <p style={{ color: "rgba(255, 255, 255, 0.4)" }}>
                        {content.paragraph}
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div>
                          <Image
                            src={content.profile}
                            width={80}
                            height={80}
                            alt={content.name}
                          />
                        </div>
                        <div className="flex flex-col gap-2  text-start">
                          <h3 className="text-xl font-semibold">
                            {content.name}
                          </h3>
                          <p>{content.designation}</p>
                        </div>
                      </div>
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 20 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.3">
                          <path
                            d="M19.1453 13.3053C19.1453 16.1239 16.8624 18.4068 14.0439 18.4068H13.7038C12.9513 18.4068 12.3434 17.7989 12.3434 17.0464C12.3434 16.2939 12.9513 15.686 13.7038 15.686H14.0439C15.3575 15.686 16.4246 14.6189 16.4246 13.3053V12.9652H13.7038C12.2031 12.9652 10.983 11.7451 10.983 10.2444V7.52364C10.983 6.02296 12.2031 4.80286 13.7038 4.80286H16.4246C17.9252 4.80286 19.1453 6.02296 19.1453 7.52364V8.88403V10.2444V13.3053ZM8.26221 13.3053C8.26221 16.1239 5.9793 18.4068 3.16074 18.4068H2.82064C2.06817 18.4068 1.46025 17.7989 1.46025 17.0464C1.46025 16.2939 2.06817 15.686 2.82064 15.686H3.16074C4.47437 15.686 5.54142 14.6189 5.54142 13.3053V12.9652H2.82064C1.31996 12.9652 0.0998535 11.7451 0.0998535 10.2444V7.52364C0.0998535 6.02296 1.31996 4.80286 2.82064 4.80286H5.54142C7.04211 4.80286 8.26221 6.02296 8.26221 7.52364V8.88403V10.2444V13.3053Z"
                            fill="white"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="flex justify-center items-center gap-2 mt-4 lg:hidden">
          {contentData.map((_, index) => {
            const { ref, inView } = useInView({
              triggerOnce: true,
              threshold: 0.5,
            });
            return (
              <div
              ref={ref}
                key={index}
                className={`w-3 h-3 rounded-full cursor-pointer transform transition-all duration-700 ease-out ${
                  currentIndexMobile === index
                    ? "bg-[#FEE73E] w-4 h-4"
                    : "bg-gray-500"
                    
                } ${animateClass(
                  inView
                )}`}
                onClick={() => setCurrentIndexMobile(index)}
              />
            );
          })}
        </div>
        <div className="flex justify-end items-end lg:flex hidden">
          <div className="w-[300px]  lg:flex hidden">
            <div className="ellipse1"></div>
          </div>
        </div>
      </div>
    </>
  );
}
