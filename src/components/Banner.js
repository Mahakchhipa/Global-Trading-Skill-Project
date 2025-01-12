"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
const capitalizeFirstLetter = (str) =>
  str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
export default function Banner({ heading, bgImage ,showPara="true"}) {
  const pathname = usePathname(); // Get the current path

  // Split the pathname into parts
  const pathSegments = pathname.split("/").filter(Boolean);

  // Determine the base breadcrumb dynamically
  const baseBreadcrumb =
    pathSegments[1] === "market"
      ? { label: "Market", href: "/market" }
      : { label: "Home", href: "/" };

  // Generate breadcrumbs
  const breadcrumbs = [
    baseBreadcrumb,
    ...pathSegments.map((segment, index) => {
      const href = "/" + pathSegments.slice(0, index + 1).join("/");
      return { label: capitalizeFirstLetter(segment.replace("-", " ")), href };
    }),
  ];
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true,
  });
  const { ref: paragraphRef, inView: paragraphInView } = useInView({
    triggerOnce: true,
  });
  return (
    <div>
      <div
        className="relative bg-cover bg-center h-[370px]"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* <div className="absolute inset-0 bg-black opacity-20"></div> */}
        <div className="absolute top-1/2 left-[43%] sm:left-[21%] transform -translate-y-1/2 text-left  ">
        <div className="text-white flex flex-col gap-[15px] primary-data pl-16">
          <h1 ref={headingRef} className={`font-bold mb-2 opacity-0 translate-y-0 transition-all duration-1000 ease-out ${
            headingInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>{heading}</h1>
          {showPara&&
          <p ref={paragraphRef} className={`flex gap-2 opacity-0 translate-y-0 transition-all duration-1000 ease-out ${
            paragraphInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            {breadcrumbs.map((crumb, index) => (
              <span key={index} className="flex items-center gap-2">
                {index > 0 && (
                  <span>
                    <svg
                      width="8"
                      height="9"
                      viewBox="0 0 8 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.00463867 6.95312L6.12183 4.36719L0.00463867 1.46875V0.3125L7.52026 4.03125V4.77344L0.00463867 8.10156V6.95312Z"
                        fill="white"
                      />
                    </svg>
                    {" "}
                  </span>
                )}
                <Link href={crumb.href}><span>  </span> {crumb.label}</Link>
              </span>
            ))}
          </p>
}
          </div>
        </div>
      </div>
    </div>
  );
}
