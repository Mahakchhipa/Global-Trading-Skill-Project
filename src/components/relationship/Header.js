import React from "react";
import investmenticon2 from "../../../public/assets/icons/investmenticon2.svg";
import investmenticon1 from "../../../public/assets/icons/investmenticon1.svg";
import investmenticon4 from "../../../public/assets/icons/investmenticon4.svg";
import investmenticon5 from "../../../public/assets/icons/investmenticon5.svg";
import investmenticon6 from "../../../public/assets/icons/investmenticon6.svg";
import investmenticon3 from "../../../public/assets/icons/investmenticon3.svg";

import ClientHeading from "../About/Clientheading";
import Cards from "../../components/About/Cards";
const Header = () => {
  return (
    <div className="p-[20px] lg:p-0 grid gap-3 lg:gap-[47px]">
      <div className="w-[300px] max-h-[400px] lg:flex hidden">
        <div className="ellipse"></div>
      </div>
      <ClientHeading
        heading="A Partnership Built Around You"
        paragraph="Everyone has the chance to invest some money in other currencies to earn more money."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6 md:gap-[34px] xl:px-[100px] lg:py-[40px] lg:px-[20px]">
        <Cards
          services={[
            {
              title: "Investing",
              subtitle: "Direct Market Access (DMA)",
              icon: investmenticon1,
            },
            {
              title: "Trading",
              subtitle: "Direct Market Access (DMA)",
              icon: investmenticon3,
            },
            {
              title: "Wealth Management ",
              subtitle: "Direct Market Access (DMA)",
              icon: investmenticon2,
            },
            {
              title: "Investment Advisory",
              subtitle: "Direct Market Access (DMA)",
              icon: investmenticon4,
            },
            {
              title: "Smart Portfolio",
              subtitle: "Direct Market Access (DMA)",
              icon: investmenticon5,
            },
            {
              title: "Mutual fund",
              subtitle: "Direct Market Access (DMA)",
              icon: investmenticon6,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Header;
