import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div className="w-full flex flex-col items-center bg-gray-50 py-12 px-4 md:px-48">
      {/* Section Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 text-left w-full">
        Contact us
      </h2>


      {/* Contact Box */}
      <div className="w-full max-w-4xl bg-white border-2 p-6 md:p-8">
        {/* Box Heading */}
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">
          Have a question or need assistance?
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-lg md:text-xl mb-6 leading-relaxed">
          Get in touch with our team today to learn more about our savings,
          investment, and credit options designed to help you stay prepared and
          financially resilient.
        </p>

        {/* Button */}
        <Link to={`/Contact`}>
        <button
          className="flex items-center space-x-2 text-sm md:text-lg border-2 border-black font-medium text-black hover:bg-gray-700 hover:text-white px-5 py-3 transition duration-300"
        >
          <span>Contact us</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
        </Link>
      </div>
    </div>
  );
};

export default ContactUs;
