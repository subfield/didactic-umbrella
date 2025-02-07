import { useState } from 'react';
import HomeAndApartmentImg from '../../assets/Images/HomesAndApartment.svg'

function HomesAndApartment() {
    const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };
  return (
    <>
        <section className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-6 lg:gap-10 px-6 md:px-12 lg:px-28 py-16">
    
    {/* Right Side - Accordion */}
    <div className="relative flex-shrink-0 w-full lg:w-1/2 flex justify-center lg:justify-start">
      <div className="relative flex justify-center lg:justify-start w-full">
        <img
          src={HomeAndApartmentImg}
          alt="Hero"
          className="relative z-10 w-full max-w-[320px] md:max-w-[400px] lg:max-w-[480px] h-auto shadow-lg rounded-lg"
        />
      </div>
    </div>
    <div className="w-full lg:w-1/2">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Homes And Apartment</h1>
      <p className="text-gray-700 text-lg md:text-lg  mb-6">
      Explore a curated list of properties, from family homes to modern apartments. Find the perfect property suited to your lifestyle and budget.
      </p>
      {["Shortlets", "Properties"].map(
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
  )
}
export default HomesAndApartment