"use client";
import Headings from "./Headings";
import Image from "next/image";
import graph from "../../../public/assets/trading-graph.webp";
import { useInView } from "react-intersection-observer";
export default function Earnings() {
  const pointArray = [
    "flexible leverage levels to suit your risk appetite.",
    "top-tier security measures to protect your funds.",
    "Fast and hassle-free payment solutions.",
    "Regular Market Insights & Updates.",
    "Advanced charting tools and technical indicators",
    "Сompetitive spreads with no commission",
  ];
  const animateClass = (inView) =>
    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10";
  return (
    <>
      <div className="p-[20px] xl:px-[100px] lg:py-[40px] grid gap-8 lg:gap-[47px]">
        <Headings
          textposition="center"
          itemsposition="center"
          heading="Experience superior trading conditions"
          paragraph="Determined in the task of producing a comprehensive journal with an innovative outlook."
        />
        <div className="grid lg:grid-cols-2">
          <div className="relative  h-fit w-full lg:h-[400px]">
            <img
              src="/assets/bg-shadow.svg"
              className="w-full h-full lg:max-w-[500px] mx-auto"
              alt="Background Shadow"
            />
            <Image
              src={graph}
              width={500}
              height={500}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              alt="graph"
            />
          </div>
          <div>
            <div className="flex flex-col justify-center  gap-7 lg:gap-6">
              {pointArray.map((points, index) => {
                const { ref, inView } = useInView({
                  triggerOnce: true,
                  threshold: 0.5,
                });
                return (
                  <div
                  ref={ref}
                    key={index}
                    className={`flex  items-center  gap-8 ternary-data transform transition-all duration-700 ease-out ${animateClass(
                      inView
                    )}`}
                  >
                    <img src="/assets/icons/right-click.svg" />

                    <h3>{points}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
