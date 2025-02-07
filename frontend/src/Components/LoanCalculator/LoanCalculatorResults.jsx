import { Link, useNavigate } from "react-router-dom"

function LoanCalculatorResults() {
  const navigate = useNavigate();
  return (
    <>
        <section className="flex flex-col lg:flex-row min-h-screen">
      {/* Left Section - Title */}
      <div className="w-full lg:w-1/2 bg-white p-6 lg:p-12">
        <div className="max-w-2xl mx-auto">
          <Link
            onClick={() => navigate(-1)}
            className="text-pink-600 font-semibold mb-4 inline-block"
          >
            &larr; Go back
          </Link>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Loan Calculator
          </h1>
          <hr className="mt-2" />
        </div>
      </div>

      {/* Right Section - Loan Calculation Results */}
      <div className="w-full lg:w-1/2 p-6 lg:p-12">
        <div className="max-w-2xl mx-auto">
          <a
            href="/"
            className="text-pink-600 font-semibold mb-8 inline-block"
          >
            &larr; Return
          </a>
          <h3 className="text-lg font-semibold text-gray-500 mb-8">
            Your Monthly payments
          </h3>
          <p className="text-4xl font-bold text-gray-900 mb-10">
            N139,296.768
          </p>
          <div className="flex justify-between text-gray-600 text-sm mb-4">
            <span className="font-semibold">TOTAL INTERESTS</span>
            <span className="text-pink-600">N586,874.149</span>
          </div>
          <hr />
          <div className="flex justify-between text-gray-600 text-sm mb-10 mt-4">
            <span className="font-semibold">TOTAL PAYMENTS</span>
            <span className="text-gray-800">N1,114,374.149</span>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="border border-gray-400 px-8 py-2 text-gray-700 hover:bg-gray-200 transition duration-300">
              Clear
            </button>
            <button className="bg-pink-600 text-white px-6 py-2 hover:bg-pink-700 transition duration-300">
              Proceed to Apply &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
export default LoanCalculatorResults