"use client";
import { useState } from "react";
import Headings from "./Headings";
import Link from "next/link";
import Image from "next/image";
import arrowLeft from "../../../public/assets/icons/arrow-left.svg";
import arrowRight from "../../../public/assets/icons/arrow-right.svg";
import { useInView } from "react-intersection-observer";
export default function Investment() {
  const contentData = [
    {
      heading: "What Traders Need",
      paragraph:
        "Successful trading requires more than just capital—it demands the right tools, knowledge, and a reliable platform.Access to a reliable and user-friendly trading platform, coupled with high-quality market data and educational resources, is crucial.Key tools include support/resistance levels (predicting price reversals), and indicators like RSI and MACD (gauging momentum and overbought/oversold conditions.",
      link: "/investing-for-income",
    },
    {
      heading: "Lessons Learned",
      paragraph:
        "In trading, Understanding that markets are unpredictable teaches traders to stay flexible and continuously adapt their strategies. every experience—whether a win or a loss—provides valuable lessons. Successful traders learn the importance of discipline, patience, and sticking to a well-thought-out strategy.",
      link: "/global-market-access",
    },
    {
      heading: "New Beginnings",
      paragraph:
        "Whether you're entering the market for the first time or refining your strategies after past experiences, a new beginning offers hope and the potential for success. we will witness the curves in the economy and one thing will remain constant: that is the mission of our company in giving the trader the right keys to the financial markets where they can be very successful.",
      link: "/advanced-trading-tools",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : contentData.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < contentData.length - 1 ? prevIndex + 1 : 0
    );
  };
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true,
  });
  const { ref: paragraphRef, inView: paragraphInView } = useInView({
    triggerOnce: true,
  });
  const { ref: buttonRef, inView: buttonInView } = useInView({
    triggerOnce: true,
  });
  return (
    <>
      <div className="p-[20px] xl:px-[100px] lg:py-[40px] grid gap-8 lg:gap-[47px]">
        <Headings
          textposition="center"
          itemsposition="center"
          heading="What just happened. And what comes next."
          paragraph="Track market trends with Past events analyzed and get reliable information from leading financial publications."
        />
        <div className="flex gap-8 lg:hidden">
          <Image src={arrowLeft} alt="arrows" onClick={handlePrevious} />

          <div className="flex flex-col gap-4 ternary-data text-center justify-center items-center">
            <h3
              ref={headingRef}
              className={`text-[#FEE73E] opacity-0 translate-x-0 transition-all duration-500 ${
                headingInView ? "opacity-100 translate-x-0" : ""
              }`}
            >
              {contentData[currentIndex].heading}
            </h3>
            <p
              ref={paragraphRef}
              className={`opacity-0 translate-x-0 transition-all duration-500 ${
                paragraphInView ? "opacity-100 translate-x-0" : ""
              }`}
            >
              {contentData[currentIndex].paragraph}
            </p>
            <Link
              ref={buttonRef}
              href={contentData[currentIndex].link}
              className={`border-[1px] border-[#FEE73E] rounded-md flex items-center justify-center w-[118px] h-[33px] text-xs font-medium hover:bg-[#FEE73E] hover:text-black opacity-0 translate-x-0 transition-all duration-500 ${
                buttonInView ? "opacity-100 translate-x-0" : ""
              }`}
            >
              Continue Reading
            </Link>
          </div>

          <Image src={arrowRight} alt="arrows" onClick={handleNext} />
        </div>
        <div className="grid grid-cols-3 gap-8 lg:grid hidden">
          {contentData.map((content, index) => (
            <div
              key={index}
              className="flex flex-col justify-between gap-4 ternary-data text-start  items-start"
            >
              <h3 className=" text-[#FEE73E]">{content.heading}</h3>
              <p>{content.paragraph}</p>
              <Link
                href={content.link}
                className="button border-[1px] border-[#FEE73E] rounded-md flex items-center justify-center  py-[14px] px-[31px] text-xs lg:text-lg font-medium  hover:text-black"
              >
                Continue Reading
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
