'use client'
import React from "react";
import Image from "next/image";
import aboutbitcoin from "../../../public/assets/img/bitcoincandle.webp";
import ClientHeading from "./Clientheading";
import Headings from "../Home/Headings";
import { useInView } from "react-intersection-observer";
function Aboutbanner() {
  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
  });
  return (
    <>
      <section className="p-[20px]  lg:px-0  grid gap-8 lg:gap-[47px] ">
        <div className="w-[300px] max-h-[400px] lg:flex hidden">
          <div className="ellipse"></div>
        </div>

        <ClientHeading
          heading="Since 1983, our clients our first priority"
          paragraph="Integrity and deep understanding of evolving needs of clients with long-standing relationships."
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-[47px] justify-center items-center xl:px-[100px] lg:px-[20px]">
          <div ref={imageRef} className={`max-w-[668px] opacity-0 translate-y-0 transition-all duration-1000 ease-out ${
            imageInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <Image
              src={aboutbitcoin}
              width={668}
              height={668}
              alt="bit-coin-image"
            />
          </div>

          <div className="secondary-data  flex flex-col gap-4 lg:gap-8 ">
            <Headings
              heading="Why trade with global skill trading"
              paragraph=" Refers to trade executions for GAIN Global Markets Inc. Please
              note that multiple factors may impact execution speed, including
              but not limited; market conditions, platform type, network
              connectivity, trading strategies, and account type. Forex.com’s
              execution statistics represent GAIN Global
            "
              paragraph1=" Markets Inc. orders executed on FOREX.com's platforms during
              market hours between August 31, 2024, 5:00 pm ET, and September
              30, 2024, 5:00 pm ET. "
            />
            <div className="w-[300px] max-h-[400px] lg:flex hidden"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Aboutbanner;
