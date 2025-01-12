"use client";
import { useState } from "react";
import Icons from "../Home/Icons";
import Image from "next/image";
import teamImage1 from "../../../public/assets/albert-flores.webp";
import teamImage2 from "../../../public/assets/courtney-henry.webp";
import { useInView } from "react-intersection-observer";
import Headings from "../Home/Headings";
export default function MarketData({
  dataImage,
  heading,
  paragraph,
  heading1,
  faqs,
  points,
  childHeading,
}) {
  const [activeIndex, setActiveIndex] = useState(null);

  const team = [
    {
      image: teamImage1,
      name: "Albert Flores",
      position: "Management Consultant",
    },
    {
      image: teamImage2,
      name: "Courtney Henry",
      position: "Strategic Advisor",
    },
  ];
  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
  });
  return (
    <>
      <div className="p-[20px] xl:px-[160px] 2xl:px-[200px] lg:py-[40px]">
        <div className="grid lg:grid-cols-[600_auto] xl:grid-cols-[680_auto] gap-[35px] max-w-[1400px] mx-auto">
          <div className="flex flex-col gap-[25px]">
            <div className="ternary-data flex flex-col gap-3">
              <h3>{heading1}</h3>
              <div className="grid grid-cols-2 gap-4">
                {team.map((member, index) => (
                  <div
                    key={index}
                    className="relative w-full bg-cover bg-center overflow-hidden shadow-lg rounded-3xl  h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]"
                    style={{
                      backgroundImage: `url(${member.image.src})`,
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="w-full h-full flex items-end justify-end p-2 sm:p-4">
                      <div className="   bg-[#00150F] opacity-80 rounded-lg backdrop-blur-sm flex flex-col gap-1 top-[90%] items-center justify-center p-2  h-fit w-full text-center transition-all duration-300">
                        <h3 className="text-white">{member.name}</h3>
                        <p>{member.position}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-[25px] bg-[#1E1C1D] rounded-lg p-4">
              <div className="border-b-[1px] border-[#383737] py-4 ">
                <p>Social Links</p>
              </div>
              <div className="flex items-center rounded-lg px-4">
                <Icons />
              </div>
            </div>
          </div>
          <div className="p-4 flex flex-col gap-8">
          <div ref={imageRef} className={` opacity-0 translate-y-0 transition-all duration-1000 ease-out ${
            imageInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
              <Image
                src={dataImage}
                width={642}
                height={240}
                alt="data image"
              />
            </div>
            <div className="secondary-data flex flex-col gap-[12px]">
            <Headings paragraph={paragraph} heading={heading} textcolor="#6B777F"/>
            </div>
            {points && childHeading && (
              <div className="secondary-data flex flex-col gap-[12px] ternary-data">
                <h3>{childHeading}</h3>
                <ol className="px-4">
                  {points.map((point, index) => (
                    <li key={index} className="text-[#6B777F] list-decimal">
                      {point}
                    </li>
                  ))}
                </ol>
              </div>
            )}
           <div className="bg-[#484546] p-2 sm:p-4 rounded-2xl">
  <ul className="p-2 sm:p-5 rounded-md">
    {faqs.map((faq, index) => (
      <div key={faq.id}>
        <li className="border-b border-gray-700 bg-[#010101] p-4">
          <button
            onClick={() => toggleAccordion(index)}
            className="flex justify-between items-center w-full py-4 text-left text-white font-medium"
          >
            {faq.question}
            <span
              className={`text-3xl ${
                activeIndex === index
                  ? "rounded-full w-6 h-6 border-[1px] border-white flex items-center justify-center"
                  : ""
              }`}
            >
              {activeIndex === index ? "-" : "+"}
            </span>
          </button>
        </li>
        {activeIndex === index && (
          <div className="text-gray-300 text-sm py-2 px-4">
            <p className="text-lg font-semibold">{faq.answerHeading}</p>
            {Array.isArray(faq.answer) ? (
              <ul className="list-disc pl-5">
                {faq.answer.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            ) : (
              <p>{faq.answer}</p>
            )}
          </div>
        )}
      </div>
    ))}
  </ul>
</div>

          </div>
        </div>
      </div>
    </>
  );
}
