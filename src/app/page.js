import Earnings from "@/components/Home/Earnings";
import GlobalTrading from "@/components/Home/GlobalTrading";
import HeroSection from "@/components/Home/HeroSection";
import Investment from "@/components/Home/Investment";
import Markets from "@/components/Home/Markets";
import Clients from "@/components/Home/Clients";

import ContactUs from "@/components/Home/ContactUs";
export default function Home() {
  return (
  <>
      <HeroSection/>
<GlobalTrading/>
<Earnings/>
<Markets/>
<Investment/>
<Clients/>
<ContactUs/>
</>
  );
}
