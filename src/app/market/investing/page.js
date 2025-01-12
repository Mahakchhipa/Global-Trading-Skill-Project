import Banner from "@/components/Banner";
import MarketData from "@/components/relationship/MarketData";

export default function Investing() {
  return (
    <>
      <Banner
        heading="Investing"
        bgImage="/assets/marketing-investment-banner-image.webp"
      />
      <MarketData
        heading="Market Investing"
        dataImage="/assets/market-investing-data-image.webp"
        paragraph="Investing involves deploying capital (money) toward projects or activities expected to generate a positive return over time. Risk and return go hand-in-hand in investing i.e. low risk generally means low expected returns, while higher returns are usually accompanied by higher risk.
In the last decade, the rise of cryptocurrencies has reshaped the investment landscape. Bitcoin, launched in 2009, grew exponentially, reaching a peak of nearly $69,000 in 2021.
Currently, investors are focusing on sustainability and innovation, with ESG (Environmental, Social, and Governance) investments gaining popularity. In 2023, ESG-related assets were estimated to be worth over $40 trillion, reflecting growing interest in ethical investing.
"
        heading1="Meet with our experts"
        faqs={[
          {
            id: 1,
            question: "Is it safe to invest in SIP?",
            answer:
              "SIP is a very safe method to invest in mutual funds. If you invest in a mutual fund lump sum, depending on the market condition, you could end up paying a very high price for a mutual fund",
          },
          {
            id: 2,
            question: "How to invest in Nifty 50?",
            answer:
              "An easy approach to invest in the NIFTY 50 index is through NIFTY 50 ETFs. These ETFs are available for purchase and sale like any other stock exchange stock. They want to expose investors to the whole index through a single asset, emulating the performance of the NIFTY 50 index.",
          },
          {
            id: 3,
            question: "How do I start trading?",
            answer: [
              "Choose an online broker. The first step will be to find an online stockbroker.",
              "Open demat and trading account.",
              "Login to your Demat/ trading account and add money.",
              "View stock details and start trading.",
            ],
          },
          {
            id: 4,
            question: "Is bitcoin a good investment?",

            answer:
              " Unlike other assets that are valued based on tangible components — for    example, a company's goods and services or a natural resource — bitcoin is considered a store of value, the price of which depends strictly on what others are willing to pay for it. Its pricing is highly volatile — and therefore highly risky.",
          },
        ]}
      />
    </>
  );
}
