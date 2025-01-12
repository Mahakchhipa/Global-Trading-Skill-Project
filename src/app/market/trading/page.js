import Banner from "@/components/Banner";
import MarketData from "@/components/relationship/MarketData";

export default function Trading() {
  return (
    <>
      <Banner
        heading="Trading"
        bgImage="/assets/market-trading-banner-image.webp"
      />
      <MarketData
        heading=" Market Trading"
        dataImage="/assets/market-trading-data-image.webp"
        paragraph="Trading is the buying and selling of financial instruments in order to make a profit. Traders make profits from buying low and selling high (going long) or selling high and buying low (going short), usually over the short or medium term. Since the trader would only be speculating on the market price’s future movement.Investors aim to buy the underlying outright at a favourable price. They make profits from owning the asset, and then selling it at a higher price. 
In recent years, the popularity of cryptocurrency trading has skyrocketed. Bitcoin, Ethereum, and other digital assets introduced a new asset class, with global crypto trading volumes peaking at over $2 trillion in 2021. The Australian Securities Exchange (ASX) saw a 50% rise in new company listings in 2024 compared to 2023, reflecting increased investor confidence and market activity.
"
        heading1="Meet with our experts"
        faqs={[
          {
            id: 1,
            question: "How to choose a forex broker?",
            answer:
              "  The forex market is the biggest, most liquid and the most volatile market in the world, so you really want a forex broker you can rely on. Some factors that we have to consider like Amount of forex markets available, Trading hours, Deposits and withdrawals, Customer service and so on.",
          },
          {
            id: 2,
            question: "What is trading and how it works?",
            answer:
              " Trading involves the buying and selling of financial assets, such as stocks, to earn profits based on the price fluctuations of these assets. There are different types of trading, and traders use various strategies, techniques, and tools to decide when to buy or sell different assets.",
          },
          {
            id: 3,
            question: " What is a trade job?",
            answer:
              "A skilled trade is any occupation that requires a particular skill set, knowledge, or ability. It is usually a hands-on job, but skilled trades are found in every career cluster. When it comes to finding a career that is right for you, everyone's path is different.",
          },
          {
            id: 4,
            question: "What is a DP account?",
            answer:
              "  In India, demat accounts are maintained by two depository organizations: the National Securities Depository Limited and the Central Depository Services Limited. A depository participant (DP), such as a bank, acts as an intermediary between the investor and the depository.",
          },
        ]}
      />
    </>
  );
}
