'use client'
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import React from "react";
import skilltrading from "../../../public/assets/skilltrading.webp";
const features = [
  "Access to Multiple Markets",
  "T+0 settlement",
  "Free Demo Account",
  "Dividends paid in cash",
  "Fast Deposits & Withdrawals",
  "24/7 Personalized Service",
];
const GlobalSkillTrading = () => {
  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
  });
  return (
    <div className="p-[20px] xl:px-[100px] lg:py-[40px] grid gap-3 lg:gap-[47px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <div className="secondary-data flex flex-col gap-4 lg:gap-8">
          <h2 className="">Why trade with global skill trading</h2>
          <p className="">
          Global Skill Trading stands as your go-to ally in the tricky world of forex, crypto, and metal trading. We offer a cutting-edge platform that gives traders top-notch trading conditions safe transactions, and expert help. Our platform works for everyone, from newbies to pros making sure you have a smooth and money-making trading experience. We put a lot of stock in being open, reliable, and giving you advanced trading tools. This means Global Skill Trading helps you earn more while keeping risks in check.
          </p>
          <div ref={imageRef} className={`flex justify-center items-center lg:hidden opacity-0 translate-y-0 transition-all duration-1000 ease-out ${
            imageInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
        
          <Image
            src={skilltrading}
            width={571}
            height={450}
            alt="Skill Trading"
            className="max-w-full h-auto"
          />
        </div>
          <div className="lg:mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* First column */}
              <div className="rounded-lg shadow-md flex flex-col gap-4">
                {features.slice(0, 3).map((feature, index) => (
                  <div key={index} className="flex items-center ">
                    <input
                      type="checkbox"
                      className="form-checkbox h-6 w-6 mr-4"
                      style={{ accentColor: "#FEE73E" }}
                      defaultChecked
                    />
                    <h3 className="text-sm md:text-base">{feature}</h3>
                  </div>
                ))}
              </div>
              {/* Second column */}

              <div className="rounded-lg shadow-md flex flex-col gap-4">
                {features.slice(3).map((feature, index) => (
                  <div key={index} className="flex items-center ">
                    <input
                      type="checkbox"
                      className="form-checkbox h-6 w-6 mr-4"
                      style={{ accentColor: "#FEE73E" }}
                      defaultChecked
                    />
                    <h3 className="text-sm md:text-base">{feature}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className=" justify-center items-center lg:flex hidden">
          <Image
            src={skilltrading}
            width={571}
            height={450}
            alt="Skill Trading"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};
export default GlobalSkillTrading;
