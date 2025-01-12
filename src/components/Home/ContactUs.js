'use client';
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import contact from "../../../public/assets/contact-us.webp";

export default function ContactUs() {
  const { ref: contactUsRef, inView: formInView } = useInView({
    triggerOnce: true,
    threshold: 0.5, 
  });

  return (
    <>
      <div className="py-[20px] xl:px-[100px] lg:py-[40px] ">
        <div
          ref={contactUsRef}
          className={`bg-[#D5C868] rounded-3xl grid grid-cols-[120px_auto] lg:flex items-center gap-8 lg:gap-[47px] p-4 max-w-[917px] mx-auto opacity-0 translate-y-0 transition-all duration-500 delay-200 ${
            formInView ? "opacity-100 translate-y-0" : ""
          }`}
        >
          <div className="w-[120px] lg:w-[236px]">
            <Image
              src={contact}
              width={236}
              height={76}
              className="w-[100px] lg:w-[236px]"
              alt="contact-us"
            />
          </div>
          <div className="flex flex-col gap-3 secondary-data text-black w-fit">
            <h2 style={{ color: "black" }}>Connect With Us</h2>
            <p>
              Hey! Are you tired of missing out on our updates? Subscribe to our
              news now and stay in the loop!
            </p>
            <div className="grid grid-cols-[110px_auto] sm:flex :flex gap-1 sm:gap-3">
              <input
                placeholder="Email Address"
                className="bg-white rounded-lg px-3 w-auto lg:w-full max-w-[200px] sm:w-full"
              />
              <Link
                href="/"
                className="bg-black p-3 lg:py-[14px] lg:px-[31px] rounded-lg text-white text-sm lg:text-lg w-fit"
              >
                Submit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
