import Banner from "@/components/Banner";
import MarketData from "@/components/relationship/MarketData";

export default function Portfolio() {
  return (
    <>
      <Banner
        heading="Smart Portfolio"
        bgImage="/assets/smart-portfolio-banner-image.webp"
      />
      <MarketData
        heading="Smart Portfolio"
        dataImage="/assets/smart-portfolio-data-image.webp"
        childHeading="Global Skill Trading benefits:
"
        points={[
          "Expert Guidance",
          "Global Market Access",
          "Diverse Investment Opport unities",
          "Improved Risk Management",
          "Education and Resources",
        ]}
        paragraph="A smart portfolio is a well-diversified investment strategy designed to maximize returns while minimizing risks by leveraging modern financial tools, data-driven insights, and strategic asset allocation. Global Skill Trading empowers users to create and manage smart portfolios by offering access to a wide range of investment options, including forex, cryptocurrencies, and metals.
"
        heading1="Meet with our experts"
        faqs={[
          {
            id: 1,
            question: "What is a smart investment strategy?",
            answer:
              " While this strategy varies from person to person, smart investing should always be centered around your financial goals. Other characteristics of a smart investing approach include optimization, diversification, flexibility, periodic rebalancing and consistency.",
          },
          {
            id: 2,
            question: "What does portfolio mean in trading?",
            answer:
              "A portfolio refers to group of assets that are held by a trader or trading company. Assets in a portfolio can come in many forms, including stocks, bonds, commodities or derivatives.",
          },
          {
            id: 3,
            question: "What is the best type of portfolio?",
            answer:
              "    A well-balanced portfolio typically includes a mix of asset classes to reduce risk while aiming for returns. For instance, stocks may offer high growth potential but come with higher risk, while bonds may provide more stable, lower-risk income.",
          },
          {
            id: 4,
            question: "What is portfolio risk?",
            answer:
              "  Portfolio risk refers to the chance that the value of your investments will decrease, leading to reduced returns or losses. It can involve losing part or all of your initial investment. Risk is often measured by standard deviation, with higher returns usually associated with greater risk.",
          },
        ]}
      />
    </>
  );
}
