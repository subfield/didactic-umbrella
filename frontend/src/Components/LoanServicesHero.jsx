import { useState } from "react";
import heroImage from "../assets/Images/LoanServicesGroup.svg";

function LoanServicesHero() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <>
      <section className="flex flex-col md:w-[550px] sm:w-[400px] w-[300] m-auto items-center text-center py-10 px-5">
      {/* Title */}
      <h2 className="text-4xl md:font-extrabold font-bold md:text-5xl">
        Meeting Your{" "}
        <span className="relative">
          <span className="underline decoration-pink-500 decoration-4">
            Financial
          </span>
        </span>{" "}
        Requirements
      </h2>
      {/* Subtitle */}
      <p className="text-gray-500 md:text-2xl text-lg mt-4">
        Discover a range of services crafted to meet your needs.
      </p>
    </section>

      <section className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6 lg:gap-10 px-6 md:px-12 lg:px-28 py-16">
        {/* Left Side - Image */}
        <div className="relative flex-shrink-0 w-full lg:w-1/2 flex justify-center lg:justify-start">
          <div className="relative flex justify-center lg:justify-start w-full">
            {/* Background Shape */}
            {/* <div
              className="absolute bg-pink-500 transform -translate-y-6 -translate-x-6 rotate-3 rounded-lg"
              style={{
                width: "100%",
                height: "100%",
                zIndex: 0,
              }}
            ></div> */}

            {/* Image */}
            <img
              src={heroImage}
              alt="Hero"
              className="relative z-10 w-full max-w-[320px] md:max-w-[400px] lg:max-w-[480px] h-auto shadow-lg rounded-lg"
            />

            {/* Button */}
            {/* <button
              className="absolute bottom-4 left-4 px-4 py-2 bg-pink-500 text-white font-bold hover:bg-pink-600 transition rounded-md"
              style={{ zIndex: 10 }}
            >
              Learn More →
            </button> */}
          </div>
        </div>

        {/* Right Side - Accordion */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Loan Services</h1>
          <p className="text-gray-700 text-lg md:text-xl  mb-6">
            Our loan services are tailored to help you achieve your financial
            goals, whether for personal needs, business growth, or unexpected
            expenses.
          </p>
          {["Salary Advance", "Restocking", "Bridging", "Back To School"].map(
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
      </section>
    </>
  );
}
export default LoanServicesHero;
