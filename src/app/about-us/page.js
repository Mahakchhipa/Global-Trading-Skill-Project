import Aboutbanner from "@/components/About/Aboutbanner";
import ClientHeading from "@/components/About/Clientheading";
import Aboutservice from "@/components/About/Differentservice";
import TradingInstruments from "@/components/About/Instruments";
import React from "react";

const page = () => {
  return (
    <>
      <Aboutbanner />
      <Aboutservice />
      <TradingInstruments />
    </>
  );
};

export default page;

