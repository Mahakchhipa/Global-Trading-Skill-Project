"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import shoppingimage from "../../../public/assets/img/shoppingimage.webp";
import author from "../../../public/assets/icons/author.svg";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Pagination } from "@mui/material";

// import { Button, IconButton } from "@material-tailwind/react";
// import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const articles = [
  {
    id: 1,
    image: shoppingimage,
    title:
      "The typical U.S. household is spending $445 more a month due to inflation",
    description:
      "Inflation is causing American households to spend $445 more per month buying the same items they did a year ago, according to an estimate from Moody’s ...",
    author: {
      name: "Warren Wang",
      date: "December 29, 2022",
      image: author,
    },
    category: "investing",
    readMoreLink: "#",
  },
  {
    id: 2,
    image: shoppingimage,
    title:
      "The typical U.S. household is spending $445 more a month due to inflation",
    description:
      "Inflation is causing American households to spend $445 more per month buying the same items they did a year ago, according to an estimate from Moody’s ...",
    author: {
      name: "Warren Wang",
      date: "December 29, 2022",
      image: author,
    },
    category: "investing",
    readMoreLink: "#",
  },
  {
    id: 3,
    image: shoppingimage,
    title:
      "The typical U.S. household is spending $445 more a month due to inflation",
    description:
      "Inflation is causing American households to spend $445 more per month buying the same items they did a year ago, according to an estimate from Moody’s ...",
    author: {
      name: "Warren Wang",
      date: "December 29, 2022",
      image: author,
    },
    category: "investing",
    readMoreLink: "#",
  },
  {
    id: 4,
    image: shoppingimage,
    title:
      "The typical U.S. household is spending $445 more a month due to inflation",
    description:
      "Inflation is causing American households to spend $445 more per month buying the same items they did a year ago, according to an estimate from Moody’s ...",
    author: {
      name: "Warren Wang",
      date: "December 29, 2022",
      image: author,
    },
    category: "investing",
    readMoreLink: "#",
  },
  {
    id: 5,
    image: shoppingimage,
    title:
      "The typical U.S. household is spending $445 more a month due to inflation",
    description:
      "Inflation is causing American households to spend $445 more per month buying the same items they did a year ago, according to an estimate from Moody’s ...",
    author: {
      name: "Warren Wang",
      date: "December 29, 2022",
      image: author,
    },
    category: "investing",
    readMoreLink: "#",
  },
  {
    id: 6,
    image: shoppingimage,
    title:
      "The typical U.S. household is spending $445 more a month due to inflation",
    description:
      "Inflation is causing American households to spend $445 more per month buying the same items they did a year ago, according to an estimate from Moody’s ...",
    author: {
      name: "Warren Wang",
      date: "December 29, 2022",
      image: author,
    },
    category: "investing",
    readMoreLink: "#",
  },
  {
    id: 7,
    image: shoppingimage,
    title:
      "The typical U.S. household is spending $445 more a month due to inflation",
    description:
      "Inflation is causing American households to spend $445 more per month buying the same items they did a year ago, according to an estimate from Moody’s ...",
    author: {
      name: "Warren Wang",
      date: "December 29, 2022",
      image: author,
    },
    category: "investing",
    readMoreLink: "#",
  },
  {
    id: 8,
    image: shoppingimage,
    title:
      "The typical U.S. household is spending $445 more a month due to inflation",
    description:
      "Inflation is causing American households to spend $445 more per month buying the same items they did a year ago, according to an estimate from Moody’s ...",
    author: {
      name: "Warren Wang",
      date: "December 29, 2022",
      image: author,
    },
    category: "investing",
    readMoreLink: "#",
  },
  {
    id: 9,
    image: shoppingimage,
    title:
      "The typical U.S. household is spending $445 more a month due to inflation",
    description:
      "Inflation is causing American households to spend $445 more per month buying the same items they did a year ago, according to an estimate from Moody’s ...",
    author: {
      name: "Warren Wang",
      date: "December 29, 2022",
      image: author,
    },
    category: "investing",
    readMoreLink: "#",
  },
];

function NewsBlogs() {
  const [active, setActive] = React.useState(1);

  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: "gray",
    onClick: () => setActive(index),
    className: "rounded-full",
  });

  const next = () => {
    if (active === 5) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 3;
  const limit = 3;
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const startIndex = (currentPage - 1) * cardsPerPage;
  const displayBlogs = limit
    ? articles.slice(0, limit)
    : articles.slice(startIndex, startIndex + cardsPerPage);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="p-[20px] overflow-x-hidden xl:px-[140px] lg:py-[80px] grid gap-3 lg:gap-[47px]">
      <div className="grid lg:grid-cols-2 lg:gap-1 gap-8">
        <div className="order-[2] lg:order-[1]">
          {displayBlogs.map((article) => (
            <div key={article.id} className="ternary-data lg:my-20">
              <div className="w-fit h-fit overflow-hidden">
              <Image src={article.image} width={831} height={358} alt="blog-image"  className="transition-transform duration-300  transform hover:scale-110"/>
              </div>
              <h3 className="pt-7">{article.title}</h3>
              <p className="pt-4">{article.description}</p>

              <div className="flex items-center my-6">
                <Link href="#">
                  <Image src={article.author.image} alt={article.author.name} />
                </Link>
                <div className="text-sm flex flex-wrap gap-4 justify-center items-center">
                  <p className="text-white font-normal pl-2">
                    {article.author.name} &nbsp; .
                  </p>
                  <p className="text-white">{article.author.date}</p>
                </div>
              </div>

              <div className="w-full h-[67px] border-t-2 border-[#E8E8E8] bg-[#1E1C1D] flex flex-wrap justify-evenly items-center lg:gap-28 xl:gap-52">
                <div>
                  <button className="uppercase bg-[#445362] w-28 h-8">
                    {article.category}
                  </button>
                </div>

                <div className="2xl:mx-14 lg:mx-20 xs:mx-10 sm:mx-10 md:mx-16 xs:top-2.5">
                  <button className="border-b-2 border-white xs:w-[120px] xs:h-[34px]">
                    <Link
                      href={article.readMoreLink}
                      className="inline-flex md:text-s lg:text-base"
                    >
                      <FaArrowRightLong className="mr-2 mt-1" />
                      Read More
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
          {limit && (
            <div className="flex justify-center mt-8">
              <Pagination
                count={Math.ceil(articles.length / cardsPerPage)}
                page={currentPage}
                onChange={handlePageChange}
                color="primary"
                sx={{
                  "& .MuiPaginationItem-root": {
                    backgroundColor: "transparent",
                    border: "1px solid #FEE73E",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "#FEE73E",
                    },
                    "&.Mui-selected": {
                      backgroundColor: "#FEE73E", 
                      color: "black", 
                    },
                  },
                }}
              />
            </div>
          )}
        </div>

        <div className="lg:py-[80px] order-[1] lg:order-[2] my-20 lg:my-0" >
          <form className="mx-auto flex flex-col gap-7 items-center max-w-[600px] lg:sticky lg:top-[100px]" >
            <input
              className="w-full h-11  py-1 px-3 bg-[#1E1C1D]"
              type="text"
              name="name"
              placeholder="Search here..."
            />

            <input
              className="w-full h-24 py-1 px-3 bg-[#1E1C1D]"
              type="text"
              name="name"
              placeholder="Categories"
            />

            <input
              className="w-full h-16 py-1 px-3 bg-[#1E1C1D]"
              type="text"
              name="name"
              placeholder="Latest News"
            />

            <input
              className="w-full h-[109px] py-2 px-3 bg-[#1E1C1D]"
              type="text"
              name="name"
              placeholder="Tags"
            />
          </form>
        </div>
      </div>
    </section>
  );
}

export default NewsBlogs;