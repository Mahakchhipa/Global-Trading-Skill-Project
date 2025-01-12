import React from "react";
import Image from "next/image";
import Link from "next/link";
import arrow from "../../../public/assets/icons/arrow.svg";

function TradingInstruments() {
  return (
    <>
      <section className="p-[20px] xl:px-[100px] lg:py-[40px]">
        <div className="grid lg:grid-cols-2 lg:gap-0 gap-8">
          <div className="flex flex-col gap-8">
            <div className="secondary-data  max-w-[500px]">
              <h2>Always One Step Ahead</h2>
            </div>
            <Link
              href="/"
              className="button border-[1px] border-[#FEE73E] rounded-md flex items-center justify-center gap-3 py-[14px] px-[31px] text-xs lg:text-lg font-medium hover:text-black w-fit"
            >
              <p>Learn More</p>

              <svg
                className="hover:text-black"
                width="10"
                height="12"
                viewBox="0 0 10 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.6878 6.59726C9.9504 6.33466 9.9504 5.9082 9.6878 5.64559L6.3265 2.28429C6.0639 2.02169 5.63743 2.02169 5.37483 2.28429C5.11223 2.54689 5.11223 2.97336 5.37483 3.23596L7.59119 5.45022H1.14589C0.774049 5.45022 0.473633 5.75064 0.473633 6.12248C0.473633 6.49432 0.774049 6.79474 1.14589 6.79474H7.58909L5.37693 9.009C5.11433 9.2716 5.11433 9.69807 5.37693 9.96067C5.63953 10.2233 6.066 10.2233 6.3286 9.96067L9.6899 6.59936L9.6878 6.59726Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
          </div>
          <div className="grid gap-8">
            <div className="flex gap-4 lg:gap-8 items-center">
              <div className="border-[1px] border-[#FEE73E]  p-4 md:p-8 flex items-center justify-center">
                <strong className="text-3xl md:text-[54px] md:leading-[56px]">
                  410
                </strong>
              </div>
              <div className="ternary-data flex flex-col gap-3">
                <h3>Trading instruments:</h3>
                <p>
                  Global skill trading regulated by the Cayman Islands Monetary
                  Authority (CIMA) under the Securities Investment Business Law.
                  Licensed by CIMA, we ensure a trustworthy platform for forex,
                  crypto, and metal trading.
                </p>
              </div>
            </div>

            <div className="flex gap-4 lg:gap-8 items-center">
              <div className="border-[1px] border-[#FEE73E]  py-4 px-6 md:py-8 md:px-12 flex items-center justify-center">
                <strong className="text-3xl md:text-[54px] md:leading-[56px]">
                  27
                </strong>
              </div>
              <div className="ternary-data flex flex-col gap-3">
                <h3>Countries covered:</h3>
                <p>
                All client deposits are held separately from our operational accounts to ensure maximum security. These funds are distributed across a trusted global network of custodian banks, offering an additional layer of protection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TradingInstruments;
