import Image from "next/image";
import logo from "../../../public/assets/global-skill-trading-logo.png";
import Icons from "./Icons";
import Link from "next/link";
export default function Footer() {
  return (
    <>
      <footer className="bg-[#1E1C1D] p-[20px] xl:px-[100px] lg:py-[40px] ">
        <div className=" mx-auto grid lg:grid-cols-2 gap-8">
          <div className="max-w-[380px] flex flex-col gap-4">
            <Image src={logo} width={200} height={100} alt="logo" />
            <p>
              Welcome to our trading site! We offer the best, most affordable
              products and services around. Shop now and start finding great
              deals!
            </p>

            <div className="grid grid-cols-2 gap-2">
              <div className="bg-[#FEE73E] gap-[10px] flex rounded-lg text-black px-3 py-2 items-center justify-center">
                <img src="/assets/icons/ios-icon.webp" className="w-6 h-6" />
                <div className="flex flex-col ">
                  {" "}
                  <p className="text-sm">Download on the</p>
                  <h3>App Store</h3>
                </div>
              </div>
              <div className="bg-[#124D6D]  gap-[10px] flex rounded-lg  px-3 py-2 items-center justify-center">
                <img src="/assets/icons/playstore-.png" className="w-6 h-6" />

                <div>
                  {" "}
                  <p className="text-sm">GET IT ON</p>
                  <h3>Google Play</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-8  lg:gap-4">
            <div className="flex flex-col gap-[17px]">
              <h4 className="text-xl font-bold"> Quick links</h4>
              <ul className="flex flex-col gap-[10px]">
                <li>
                  <Link href="/s">Home</Link>
                </li>
                <li>
                  <Link href="/about-us">About Us</Link>
                </li>
                <li>
                  <Link href="/market">market</Link>
                </li>
                <li>
                  <Link href="/blogs">Blogs</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-[17px]">
              <h4 className="text-xl font-bold">Market</h4>
              <ul className="flex flex-col gap-[10px]">
                <li>
                  <Link href="/market/investing">Investing</Link>
                </li>
                <li>
                  <Link href="/market/trading">Trading</Link>
                </li>
                <li>
                  <Link href="/market/wealth-management">
                    Wealth Management
                  </Link>
                </li>
                <li>
                  <Link href="/market/investment-advisory">
                    Investment Advisory
                  </Link>
                </li>
                <li>
                  <Link href="/market/smart-portfolio">Smart Portfolio</Link>
                </li>
                <li>
                  <Link href="/market/mutual-fund">Mutual Fund Advisor</Link>
                </li>
              </ul>
            </div>
            {/* <div className="flex flex-col gap-[17px]">
              <h4 className="text-xl font-bold"> Support</h4>
              <ul className="flex flex-col gap-[10px]">
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>FAQs</li>
                <li>Support Center</li>
              </ul>
            </div> */}
            <div className="flex flex-col gap-[17px]">
              <h4 className="text-xl font-bold"> Company</h4>
              <ul className="flex flex-col gap-[10px]">
                <li>Careers</li>
                <li>Updates</li>
                <li>Job</li>
                <li>Announce</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="py-6  border-t-[1px] border-[#383838] mx-auto mt-12 flex md:flex-row flex-col md:gap-0 gap-4 justify-center items-center md:items-start md:justify-between">
          <p>© 2024 All Rights Reserved By</p>
          <Icons />
        </div>
      </footer>
    </>
  );
}
