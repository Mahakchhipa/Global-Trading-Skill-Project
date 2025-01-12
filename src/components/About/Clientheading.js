'use client'
import React from "react";

import { useInView } from "react-intersection-observer";
function ClientHeading({heading,paragraph}){
    const { ref: headingRef, inView: headingInView } = useInView({
        triggerOnce: true,
      });
      const { ref: paragraphRef, inView: paragraphInView } = useInView({
        triggerOnce: true,
      });
    return(
        <>
        <section className="primary-data lg:mt-8 mt-20 flex flex-col gap-6 items-center justify-center ">
            <h1 ref={headingRef} className={`opacity-0 translate-y-0 transition-all duration-1000 ease-out ${
            headingInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>{heading}
            </h1>
            <p ref={paragraphRef} className={`opacity-0 translate-y-0 transition-all duration-1000 ease-out ${
            paragraphInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>{paragraph}</p>

        </section>
        </>
    );
}

export default ClientHeading;;