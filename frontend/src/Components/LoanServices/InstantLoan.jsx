import { Link } from "react-router-dom";

function InstantLoan() {
  return (
    <>
      <section className="bg-white">
        <div className="py-8 container px-6 md:px-10 lg:px-18 mx-auto">
          <div className="flex border border-pink-300 flex-col md:flex-row items-start md:justify-between md:items-center bg-white py-12 px-10">
            <div>
              <h2 className="text-gray-700 font-semiboldc text-xl md:text-2xl">
              Instant loans whenever you need it. Try the Loan Calculator
              </h2>
              <p className="mt-4">
              The amount on the loan calculator is an initial estimate only.
              </p>
            </div>
            <Link to={`/loan_calculator`}>
            <button className="mt-4 px-6 py-2 bg-pink-600 text-white hover:bg-pink-700 transition-colors">
              Try Loan Calculator
            </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
export default InstantLoan;
