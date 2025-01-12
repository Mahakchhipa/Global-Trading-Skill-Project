import Image from "next/image";
import Headings from "./Headings";
export default function GlobalTrading() {
  const iconsArray = [
    "/assets/icons/slack-icon.webp",
    "/assets/icons/dropbox-icon.webp",
    "/assets/icons/slack-icon.webp",
    "/assets/icons/slack-icon.webp",
    "/assets/icons/dropbox-icon.webp",
    "/assets/icons/slack-icon.webp",
  ];
  return (
    <>
      <div className="bg-[#1E1C1D] p-[20px] xl:px-[100px] lg:py-[40px]  ">
        <div className="grid lg:grid-cols-2 gap-8lg:gap-[47px] max-w-[1280px] mx-auto">
        <div
          className={`secondary-data flex flex-col text-center lg:text-start justify-center gap-[12px] `}
        >
          <h2>Why Global Trading Hub is a  trusted broker</h2>
          <p>
          As a trusted broker, we adhere to strict regulatory standards, ensuring your funds are secure and your trading activities are conducted fairly. Our platform offers transparent trading conditions, competitive spreads, and advanced tools designed to help traders maximize their profits.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-7 items-center">
          {iconsArray.map((icon, index) => (
            <Image
              key={index}
              src={icon}
              width={100}
              height={100}
              className="mx-auto w-[100px] lg:w-[160px]"
              alt="trading"
            />
          ))}
        </div>
        </div>
      </div>
    </>
  );
}
