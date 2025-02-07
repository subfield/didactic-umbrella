import { useState } from "react";

function Faqs() {
  const faqs = [
    {
      question: "How long do payouts take?",
      answer:
        "Once you're set up, payouts arrive in your bank account on a 2-day rolling basis. Or you can opt to receive payouts weekly or monthly.",
      more: " The exact time may vary depending on your bank and region. Make sure your account details are up to date to avoid delays.",
    },
    // Add more FAQs here if needed
    {
      question: "How long do payouts take?",
      answer:
        "Once you're set up, payouts arrive in your bank account on a 2-day rolling basis. Or you can opt to receive payouts weekly or monthly.",
      more: " The exact time may vary depending on your bank and region. Make sure your account details are up to date to avoid delays.",
    },
    {
      question: "How long do payouts take?",
      answer:
        "Once you're set up, payouts arrive in your bank account on a 2-day rolling basis. Or you can opt to receive payouts weekly or monthly.",
      more: " The exact time may vary depending on your bank and region. Make sure your account details are up to date to avoid delays.",
    },
    {
      question: "How long do payouts take?",
      answer:
        "Once you're set up, payouts arrive in your bank account on a 2-day rolling basis. Or you can opt to receive payouts weekly or monthly.",
      more: " The exact time may vary depending on your bank and region. Make sure your account details are up to date to avoid delays.",
    },
    {
      question: "How long do payouts take?",
      answer:
        "Once you're set up, payouts arrive in your bank account on a 2-day rolling basis. Or you can opt to receive payouts weekly or monthly.",
      more: " The exact time may vary depending on your bank and region. Make sure your account details are up to date to avoid delays.",
    },
    {
      question: "How long do payouts take?",
      answer:
        "Once you're set up, payouts arrive in your bank account on a 2-day rolling basis. Or you can opt to receive payouts weekly or monthly.",
      more: " The exact time may vary depending on your bank and region. Make sure your account details are up to date to avoid delays.",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
      <section className="bg-gray-50">
        <div className="py-20 container px-6 md:px-10 lg:px-18 mx-auto">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="flex rounded-lg p-4 transition-shadow"
              >
                <div className="mt-2">
                  <span className="text-pink-700 mr-4 bg-pink-200 py-1.5 px-3 rounded-full">
                    ?
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2 flex items-start">
                    {faq.question}
                  </h3>
                  <p className="text-gray-500 text-base">
                    {faq.answer}
                    {expandedIndex === index && (
                      <span className="block mt-2 text-gray-500">
                        {faq.more}
                      </span>
                    )}
                  </p>
                  <button
                    onClick={() => toggleExpand(index)}
                    className="text-pink-600 mt-2 text-sm focus:outline-none"
                  >
                    {expandedIndex === index ? "Show less" : "Read more"}
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-col md:flex-row items-start md:justify-between md:items-center bg-white py-12 px-10">
            <div>
              <h2 className="text-gray-700 font-bold text-2xl">
                Still have questions?
              </h2>
              <p className="mt-4">
                Cant find the answer youre looking for? Please chat to our
                friendly team.
              </p>
            </div>
            <button className="mt-4 px-6 py-2 bg-pink-600 text-white hover:bg-pink-700 transition-colors">
              Get in touch
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
export default Faqs;
