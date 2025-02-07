import { useState } from 'react';
import SavingPlansImg from '../../assets/Images/SavingsPlans.svg'

function SavingAndInvestment() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };
  return (
    <>
      

      <section className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-6 lg:gap-10 px-6 md:px-12 lg:px-28 py-16">
    
        {/* Right Side - Accordion */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Savings & Investment Plans</h1>
          <p className="text-gray-700 text-lg md:text-xl  mb-6">
          Build wealth securely with our range of savings and investment plans. Designed with your future in mind, each plan offers growth, security, and peace of mind.
          </p>
          {["Target Savings", "Redeemable Contribution", "Real Estate Investment",].map(
            (item, index) => (
              <div key={index} className="mb-4">
                <button
                  className="w-full flex justify-between items-center border-b-2 p-4 text-pink-900 transition"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="font-semibold text-lg md:text-2xl">
                    {item}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 transform transition ${
                      activeAccordion === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {/* Accordion Content */}
                {activeAccordion === index && (
                  <div className="p-4 ">
                    <p className="text-gray-600 text-lg md:text-base">
                      Here’s more information about {item}. Customize this
                      content as needed.
                    </p>
                  </div>
                )}
              </div>
            )
          )}
        </div>
        <div className="relative flex-shrink-0 w-full lg:w-1/2 flex justify-center lg:justify-start">
          <div className="relative flex justify-center lg:justify-start w-full">
            <img
              src={SavingPlansImg}
              alt="Hero"
              className="relative z-10 w-full max-w-[320px] md:max-w-[400px] lg:max-w-[480px] h-auto shadow-lg rounded-lg"
            />
          </div>
        </div>
      </section>
    </>
  )
}
export default SavingAndInvestment