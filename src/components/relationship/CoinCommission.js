
import React from "react";
import Image from "next/image";
import background from "../../../public/assets/background.webp";
import coinmarket from "../../../public/assets/coinmarket.webp";
import Link from "next/link";
const CoinCommission = () => {
  return (
 
        
      <div className="">
      <div
        className="  w-full bg-cover p-[20px] xl:px-[100px] lg:py-[40px] grid gap-3 lg:gap-[47px] bg-center my-6 lg:my-12"
        style={{ backgroundImage: `url(${background.src})` }}
      >
        <div className="grid md:grid-cols-2 gap-8 lg:gap-[121px]  h-full">
          <div className="flex flex-col gap-[21px] justify-center items-center text-center secondary-data ">
            <h2 className="">
              Get up to $600 plus 60 days of commission-free stocks
            </h2>
            <Link
              href="/"
              className="button border-[1px] border-[#FEE73E] rounded-md flex items-center justify-center gap-3 py-[14px] px-[31px] text-xs lg:text-lg font-medium hover:text-black w-fit"
            >
             Open an Account

       
            </Link>
          </div>
          <div className="flex justify-center content-center items-center ">
            <Image
              src={coinmarket}
              alt="Coin Market"
              //   height={236}
              //   width={492}
              className="sm:h-[236px] sm:w-[492px] w-[153px]"
            />
          </div>
        </div>
      </div>
      <div className="bg-inherit h-[70px]">

      </div>
      </div>
  
  );
};

export default CoinCommission;
