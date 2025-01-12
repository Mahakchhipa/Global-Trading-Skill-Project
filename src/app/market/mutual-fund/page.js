import Banner from "@/components/Banner";
import MarketData from "@/components/relationship/MarketData";

export default function MutualFund() {
    return(
        <>
        <Banner
          heading="Mutual Fund"
          bgImage="/assets/mutual-fund-banner-image.webp"
        />
        <MarketData
          heading="Mutual Fund"
          dataImage="/assets/mutual-fund-data-image.webp"
          paragraph="Are you ready to take your trading skills to the next level? Then, you need to check
  out these modules for smart trading! With these modules, you'll be able to analyze
  market trends and make intelligent trades. Whether you're a beginner or a
  seasoned pro, these modules are designed to help you succeed. You'll learn
  everything from technical analysis to risk management, so you can make the best
  decisions for your investments."
          heading1="Meet with our experts"
          faqs={[
            {
              id: 1,
              question: "Trading FAQs: How to Start Investing",
              answer:
                "This is an artificial intelligence integrated tool by which you can automate your PTE and IELTS mock test systems in your educational systems.",
            },
            {
              id: 2,
              question: "Got questions about trading? Here's FAQ!",
              answer:
                "This is an artificial intelligence integrated tool by which you can automate your PTE and IELTS mock test systems in your educational systems.",
            },
            {
              id: 3,
              question: "Is trading hard? Not necessarily, mate!",
              answer:
                "This is an artificial intelligence integrated tool by which you can automate your PTE and IELTS mock test systems in your educational systems.",
            },
            {
              id: 4,
              question: "What's trading? How do I start?",
              answerHeading:'Invest In Yourself. Education and training is your investment in you. ',
              answer: [
                "Plan Your Spending. Know the difference between net and gross",
                "Save, Save More, and",
                "Learn to Invest. ...",
                "Credit Can Be Your Friend",
                "Nothing is Ever Free",
              ],
            },
          ]}
        />
      </>
    )
}