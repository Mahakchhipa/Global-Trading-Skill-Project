import React from "react";
import Image from "next/image";
import investmenticon7 from "../../../public/assets/icons/investmenticon7.svg";
import investmenticon8 from "../../../public/assets/icons/investmenticon8.svg";
import investmenticon9 from "../../../public/assets/icons/investmenticon9.svg";
import Cards from "../../components/About/Cards";
const Aboutservice = ({ cityName = "Delhi" }) => {
  return (
    <section className="p-[20px] xl:px-[100px] lg:py-[40px]">
      <div className="grid  md:grid-cols-3  gap-8 lg:gap-[73px]">
        <Cards services={getServices} />
      </div>
    </section>
  );
};

// Helper function to dynamically update services
const getServices = [
  {
    id: 1,
    icon: investmenticon7,
    title: `History`,
    description: `
statistics reflect GAIN Global Markets Inc. orders routed to FOREX.com metals markets accessible through FOREX.com platforms during New York Market close (i.e., between August 31, 2024, at 5:01 pm ET through September 30, 2024, at 4:59 pm ET) and exclude trades/orders entered on MetaTrader platform.`,
  },
  {
    id: 2,
    icon: investmenticon8,
    title: `Philosophy`,
    description: `
GAIN Global Markets provides access to a wide range of currency pairs with competitive spreads and fast execution but we would like to advice our clients about several factors like trading strategies, connectivity, account type.
`,
  },
  {
    id: 3,
    icon: investmenticon9,
    title: `Culture`,
    description: `
Price can change quickly in fast market conditions, resulting in an execution price different from the price available at the time order is submitted. Price improvement is not guaranteed and will not occur in all situations. 
`,
  },
];

export default Aboutservice;
