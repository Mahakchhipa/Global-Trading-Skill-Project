import Banner from "@/components/Banner";
import MarketData from "@/components/relationship/MarketData";

export default function InvestmentAdvisory() {
  return (
    <>
      <Banner
        heading="Investment Advisory"
        bgImage="/assets/investment-advisory-banner-image.webp"
      />
      <MarketData
        heading="Market Investment Advisory"
        dataImage="/assets/market-investing-data-image.webp"
        paragraph="Investment advisory services are essential for helping individuals and businesses make sound financial decisions by offering professional guidance on managing their investments. With Global Skill Trading, they play a crucial role as investment advisory by providing comprehensive and tailored solutions to meet the diverse financial goals of its clients.The company offers advisory services across multiple asset classes, including forex, crypto, and metals, enabling clients to diversify their portfolios effectively. We delivers expert market insights and data-driven strategies, helping investors make informed decisions in a complex financial environment. Operating under strict regulatory compliance with the Cayman Islands Monetary Authority (CIMA), the company upholds transparency and trust, reinforcing its credibility in the market.
"
heading1="Meet with our experts"
faqs={[
  {
    id: 1,
    question: "What is the role of advisory services?",
    answer:
      "In such scenarios, seeking expert advice from advisory firms can provide invaluable insights and help in making informed decisions. By leveraging market intelligence, industry trends, and data analytics, advisory services empower businesses to identify opportunities, mitigate risks, and capitalize on emerging trends."
  },
  {
    id: 2,
    question: "What are advisory services?",
    answer:
      "Those services where the practitioner “develops findings, conclusions, and recommendations for client consideration and decision making."
  },
  {
    id: 3,
    question: "What is advisory services in investment banking?",
    answer:
      "Advisory management services allow private individuals to consult with investment professionals before making changes to their portfolios. Advisory management professionals have expertise in one or more investment areas."


  },
  {
    id: 4,
    question: "What is the difference between consulting and advisory services?",
    answer:
      "Consultants focus on instant action, solving problems, and delivering results. However, advisors help clients prepare for future uncertainties or meet growth goals."
  },
]}
      />
    </>
  );
}
