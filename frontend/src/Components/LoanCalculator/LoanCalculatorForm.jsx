import { Link, useNavigate } from "react-router-dom";

const LoanCalculatorForm = () => {
  const navigate = useNavigate();
    return (
      <section className="py-12 px-6 md:py-16 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Section */}
          <div>
            <Link
              onClick={() => navigate(-1)}
              className="text-pink-600 text-sm font-medium flex items-center mb-6"
            >
              ← Go back
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Loan Calculator
            </h1>
            <hr />
          </div>
  
          {/* Right Section */}
          <form className="space-y-6">
            {/* Loan Amount */}
            <div>
              <label
                htmlFor="loanAmount"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Loan Amount (₦)
              </label>
              <input
                id="loanAmount"
                type="number"
                placeholder="800,000"
                className="w-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-pink-600"
              />
            </div>
  
            {/* Interest Rate */}
            <div>
              <label
                htmlFor="interestRate"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Interest Rate %
              </label>
              <input
                id="interestRate"
                type="number"
                placeholder="0"
                className="w-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-pink-600"
              />
            </div>
            <hr />
  
            {/* Duration */}
            <div>
              <label
                htmlFor="duration"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Duration (Month)
              </label>
              <input
                id="duration"
                type="number"
                placeholder="0"
                className="w-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-pink-600"
              />
            </div>
            <hr />
  
            {/* Buttons */}
            <div className="flex gap-4">
              <button
                type="reset"
                className="px-12 text-gray-700 font-medium border border-gray-300 py-2 hover:bg-gray-100 transition duration-300"
              >
                Clear
              </button>
              <button
                type="submit"
                className="px-10 bg-pink-600 text-white font-medium py-2 hover:bg-pink-700 transition duration-300 flex items-center justify-center"
              >
                Calculate →
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  };
  
  export default LoanCalculatorForm;
  