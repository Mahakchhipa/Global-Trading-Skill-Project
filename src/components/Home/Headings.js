"use client";
import { useInView } from "react-intersection-observer";

export default function Headings({
  heading,
  paragraph,
  textposition,
  itemsposition,
  paragraph1,
  textcolor
}) {
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true,
  });
  const { ref: paragraphRef, inView: paragraphInView } = useInView({
    triggerOnce: true,
  });
  const { ref: paragraphRef1, inView: paragraphInView1 } = useInView({
    triggerOnce: true,
  });

  return (
    <>
      <div
        className={`secondary-data flex flex-col items-${itemsposition} justify-center gap-[12px] text-${textposition}`}
      >
        <h2
          ref={headingRef}
          className={`opacity-0 translate-y-0 transition-all duration-1000 ease-out ${
            headingInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {heading}
        </h2>
        <p
          ref={paragraphRef}
          className={`opacity-0 translate-y-0 transition-all duration-1000 ease-out text-[${textcolor}] ${
            paragraphInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {paragraph}
        </p>
        <p
          ref={paragraphRef1}
          className={`opacity-0 translate-y-0 transition-all duration-1000 ease-out ${
            paragraphInView1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {paragraph1}
        </p>
      </div>
    </>
  );
}
