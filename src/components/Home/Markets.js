'use client'
import { useInView } from "react-intersection-observer";
import Headings from "./Headings";
import Image from "next/image";

export default function Markets() {
  const marketData = [
    {
      icon: "/assets/icons/forex-icon.svg",
      heading: "Forex",
    },
    {
      icon: "/assets/icons/metal-icon.svg",
      heading: "Metal",
    },
    {
      icon: "/assets/icons/crypto-currency-icon.svg",
      heading: "Crypto Currency",
    },
    // {
    //   icon: "/assets/icons/shares-icon.webp",
    //   heading: "Shares",
    // },
  ];
  const animateClass = (inView) =>
    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10";
  return (
    <>
      <div className="p-[20px] xl:px-[100px] lg:py-[40px] grid  gap-8 lg:gap-[47px]">
        <Headings
          textposition="center"
          itemsposition="center"
          heading="Connect to global capital markets"
          paragraph="Anyone can invest money to different currency to increase their earnings by the help of Global Trading through online."
        />

        <div className="grid grid-cols-3 gap-2 lg:gap-[18px]">
          {marketData.map((points, index) => {
             const { ref, inView } = useInView({
              triggerOnce: true,
              threshold: 0.5,
            });
            return(
            <div
            ref={ref}
              key={index}
              style={
                index === 0 || index === 3 || index === 1 || index === 2
                  ? {
                      backgroundImage: "url('/assets/shadow-div.svg')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }
                  : {}
              }
              className={`flex flex-col items-center justify-center gap-3 border-[1px] border-[#6F7372] rounded-[5px]  min-h-[120px] lg:h-[301px] ternary-data transform transition-all duration-700 ease-out ${animateClass(
                      inView
                    )}`}
            >
              <Image
                src={points.icon}
                alt={points.heading}
                width={150}
                height={46}
                className="w-[46] lg:w-[150px]"
              />
              <h3 className="text-center" style={{wordBreak: 'break-word'}}>{points.heading}</h3>
            </div>
            )
})}
        </div>
      </div>
    </>
  );
}
