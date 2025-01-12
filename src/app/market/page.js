import CoinCommission from "@/components/relationship/CoinCommission";
import GlobalSkillTrading from "@/components/relationship/GlobalSkillTrading";
import Header from "@/components/relationship/Header";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <GlobalSkillTrading />
      <CoinCommission/>
    </div>
  );
};

export default page;
