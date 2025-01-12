"use client";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function Aboutservice({ services }) {
  const animateClass = (inView) =>
    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10";

  return (
    <>
      {services.map((service, index) => {
        const { ref, inView } = useInView({
          triggerOnce: true,
          threshold: 0.5,
        });
        return (
          <div
            ref={ref}
            key={index} // Ensure `service.id` is unique
            className={`bg-black border-[3px] border-[#6F7078] rounded-xl flex flex-col items-center justify-start gap-[10px] text-center py-6  lg:py-[52px] px-4  transform transition-all duration-700 ease-out ${animateClass(
              inView
            )}`}
          >
            <Image
              src={service.icon}
              className="rounded-lg"
              alt={service.title}
            />
            <div className="flex flex-col justify-between gap-3 secondary-data">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}
