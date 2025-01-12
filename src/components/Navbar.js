"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import "./Navbar.css";
import Link from "next/link";
import logo from "../../public/assets/global-skill-trading-logo.png";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled more than 50 pixels
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isMenuOpen]);
  const [expandedMarket, setExpandedMarket] = useState(false);

  const toggleExpandMarket = () => {
    setExpandedMarket(!expandedMarket);
  };
  return (
    <>
      <nav
        style={{
          boxShadow: isScrolled ? "0px 4px 22px 0px #0000001C" : "none",
        }}
        className={`w-full fixed top-0 left-0 z-50  py-[16px] xl:px-[100px] transition-all duration-500 lg:h-auto  ${
          isScrolled ? "bg-[#1E1C1D]" : "bg-[#1E1C1D] lg:bg-transparent"
        }`}
      >
        <div className="w-full flex items-center justify-between mx-auto px-[20px]">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse w-40  text-white"
          >
            <Image
              src={logo}
              width={120}
              height={120}
              className="w-48"
              alt="logo"
            />
          </Link>

          <div className="flex justify-end w-full lg:hidden">
            {isMenuOpen ? (
              <button
                data-collapse-toggle="navbar-search"
                type="button"
                className="inline-flex items-center p-2  justify-center text-sm lg:hidden order-3"
                aria-controls="navbar-search"
                aria-expanded="false"
                onClick={handleClick}
              >
                <span className="sr-only">Open main menu</span>
                <img src="/assets/icons/cross-icon.svg" alt="cancel" />
              </button>
            ) : (
              <button
                data-collapse-toggle="navbar-search"
                type="button"
                className="inline-flex items-center p-2  justify-center text-sm lg:hidden order-3"
                aria-controls="navbar-search"
                aria-expanded="false"
                onClick={toggleMenu}
              >
                <span className="sr-only">Open main menu</span>
                <img src="/assets/icons/menu-icon.svg" alt="menu" />
              </button>
            )}
          </div>

          {/* Desktop menu */}
          <div
            className={`items-center justify-between w-full md:w-auto hidden   lg:flex ${
              isMenuOpen ? "block" : "hidden"
            }`}
            id="navbar-search"
          >
            <ul className="flex flex-col lg:flex-row justify-evenly gap-8 xl:gap-12 uppercase w-full">
              <li>
                <Link
                  href="/"
                  className="block py-2 px-3  bg-blue-700 rounded md:bg-transparent md:text-[#FEE73E] md:p-0 "
                  aria-current="page"
                  onClick={handleClick}
                >
                  Home
                </Link>
              </li>
              <li className="dropdown">
                <Link
                  href="/market"
                  className="block py-2 px-3  rounded md:hover:bg-transparent hover:underline decoration-[#FEE73E] md:p-0   md:dark:hover:bg-transparent"
                  onClick={handleClick}
                >
                  Market
                </Link>
                <div className="dropdown-content w-[400px]">
                <ul className="flex flex-col gap-2 p-4">
                    <li>
                      <Link
                        href="/market/investing"
                        className="text-white hover:underline"
                      >
                        Investing
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/market/trading"
                        className="text-white hover:underline"
                      >
                        Trading
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/market/wealth-management"
                        className="text-white hover:underline"
                      >
                        Wealth Management
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/market/investment-advisory"
                        className="text-white hover:underline"
                      >
                        Investment Advisory
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/market/smart-portfolio"
                        className="text-white hover:underline"
                      >
                        Smart Portfolio
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/market/mutual-fund"
                        className="text-white hover:underline"
                      >
                        Mutual Fund Advisory
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="block py-2 px-3  rounded md:hover:bg-transparent hover:underline decoration-[#FEE73E] md:p-0   md:dark:hover:bg-transparent"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/blogs"
                  className="block py-2 px-3  rounded md:hover:bg-transparent hover:underline decoration-[#FEE73E] md:p-0   md:dark:hover:bg-transparent"
                >
                  Blog
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/products"
                  className="block py-2 px-3  rounded md:hover:bg-transparent hover:underline decoration-[#FEE73E] md:p-0   md:dark:hover:bg-transparent"
                >
                  Login Now
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="block py-2 px-3  rounded md:hover:bg-transparent hover:underline decoration-[#FEE73E] md:p-0   md:dark:hover:bg-transparent"
                >
                  Register Now
                </Link>
              </li> */}
            </ul>
          </div>
          <Link
            href="/contact-us"
            className="button rounded-lg text-xl font-bold overflow-hidden lg:flex hidden bg-transparent border-[1px] border-[#FEE73E] w-[131px] h-[50px]  justify-center items-center hover:text-black "
            // style={{
            //   // border: "2px solid",
            //   boxShadow: "2px 2px 66px 0px #048B79",
            //   background:
            //     "linear-gradient(100.52deg, #0221B3 11.5%, #04897A 106.26%)", // use 'background' instead of 'backgroundColor'
            // }}
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile menu */}
        <div
          className={`flex flex-col items-center bg-[#1e1c1d] justify-between px-[20px] w-full md:w-auto lg:hidden transition-all duration-700 overflow-hidden ${
            isMenuOpen ? "max-h-[700px]" : "max-h-0"
          }`}
          id="navbar-search"
        >
          <ul className="flex flex-col lg:flex-row justify-evenly gap-8 xl:gap-12 uppercase w-full mt-6">
            <li className="border-b-[1px] border-[#272727]">
              <Link
                href="/"
                className="block py-2 px-3 text-lg bg-[#FEE73E]rounded md:bg-transparent md:text-[#FEE73E] md:p-0 "
                aria-current="page"
                onClick={handleClick}
              >
                Home
              </Link>
            </li>
            <div>
              <li className="border-b-[1px] border-[#272727] flex items-center justify-between">
                <Link
                  href="/market"
                  onClick={handleClick}
                  className="block py-2 px-3 text-lg rounded md:hover:bg-transparent hover:underline decoration-[#FEE73E] md:p-0   md:dark:hover:bg-transparent"
                >
                  Market
                </Link>
                <span
                  onClick={toggleExpandMarket}
                  className="cursor-pointer text-2xl lg:text-3xl font-normal pr-4"
                >
                  {expandedMarket ? "-" : "+"}
                </span>
              </li>
              <div
                className={`transition-all duration-700 overflow-hidden ${
                  expandedMarket ? "max-h-[700px]" : "max-h-0"
                }`}
              >
                <div className="flex flex-col gap-2 overflow-x-auto overflow-y-auto mr-6 p-4">
                  <ul className="flex flex-col gap-2 p-4">
                    <li>
                      <Link
                        href="/market/investing"
                        className="text-white hover:underline"
                      >
                        Investing
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/market/trading"
                        className="text-white hover:underline"
                      >
                        Trading
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/market/wealth-management"
                        className="text-white hover:underline"
                      >
                        Wealth Management
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/market/investment-advisory"
                        className="text-white hover:underline"
                      >
                        Investment Advisory
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/market/smart-portfolio"
                        className="text-white hover:underline"
                      >
                        Smart Portfolio
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/market/mutual-fund"
                        className="text-white hover:underline"
                      >
                        Mutual Fund Advisory
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <li className="border-b-[1px] border-[#272727]">
              <Link
                href="/about-us"
                onClick={handleClick}
                className="block py-2 px-3 text-lg rounded md:hover:bg-transparent hover:underline decoration-[#FEE73E] md:p-0   md:dark:hover:bg-transparent"
              >
                About Us
              </Link>
            </li>

            <li className="border-b-[1px] border-[#272727]">
              <Link
                href="/blogs"
                onClick={handleClick}
                className="block py-2 px-3 text-lg rounded md:hover:bg-transparent hover:underline decoration-[#FEE73E] md:p-0   md:dark:hover:bg-transparent"
              >
                Blog
              </Link>
            </li>
            {/* <li>
              <Link
                href="/products"
                className="block py-2 px-3 text-lg rounded md:hover:bg-transparent hover:underline decoration-[#FEE73E] md:p-0   md:dark:hover:bg-transparent"
              >
                Login Now
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="block py-2 px-3 text-lg rounded md:hover:bg-transparent hover:underline decoration-[#FEE73E] md:p-0   md:dark:hover:bg-transparent"
              >
                Register Now
              </Link>
            </li> */}
          </ul>
          <Link
            href="/contact-us"
            className="button rounded-lg text-xl font-bold overflow-hidden lg:hidden bg-transparent border-[1px] border-[#FEE73E] px-[31px] py-[12px] justify-center items-center hover:text-black mt-4 mx-auto "
            // style={{
            //   // border: "2px solid",
            //   boxShadow: "2px 2px 66px 0px #048B79",
            //   background:
            //     "linear-gradient(100.52deg, #0221B3 11.5%, #04897A 106.26%)", // use 'background' instead of 'backgroundColor'
            // }}
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </>
  );
}
