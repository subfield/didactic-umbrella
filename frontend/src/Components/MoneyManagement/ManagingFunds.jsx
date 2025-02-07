import { Link } from "react-router-dom";
import Managingfunds from "../../assets/Images/ManagingFunds.svg";

function ManagingFunds() {
  return (
    <>
      <div
        className="relative bg-cover bg-top bg-no-repeat h-[400px] flex items-center"
        style={{
          backgroundImage: `url(${Managingfunds})`, // Replace with actual path
        }}
      >

      {/* Content */}
      <div className="relative z-10 px-6 sm:px-12 lg:px-24 pt-12 text-white max-w-6xl flex gap-4">
      <div className="h-8 w-1 bg-pink-600 mt-2 "></div>
        <div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4">
          Managing Funds is our craft
        </h1>
        <p className="text-lg sm:text-xl lg:text-xl mb-8">
          We’re here to guide you every step of the way.
        </p>
        <Link to={`/request_service`}>
        <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 text-sm font-medium transition duration-300 ease-in-out flex items-center gap-2">
          Apply Now{" "}
          <span>
            {/* Arrow Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </button>
        </Link>
        </div>
      </div>
    </div>
    </>
  );
}
export default ManagingFunds;
