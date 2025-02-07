import LoanServicesbg from "../../assets/Images/LoanServicesbg.svg";
import TopNav from "../../Components/TopNav";
import Navbar from "../../Components/Navbar";
import ContactUs from "../../Components/ContactUs";
import NewsletterSignup from "../../Components/NewsletterSignup";
import Footer from "../../Components/Footer";
import FourGridItems from "../../Components/LoanServices/FourGridItems";
import LoanServiceOptions from "../../Components/LoanServices/LoanServiceOptions";
import InstantLoan from "../../Components/LoanServices/InstantLoan";
import GettingStarted from "../../Components/LoanServices/GettingStarted";
import GoBack from "../../Components/GoBack";
import { Link } from "react-router-dom";

function LoanServices() {
  return (
    <>
      <TopNav />
      <Navbar />
      <GoBack />

      <div className="relative w-full h-[580px] overflow-hidden">
        {/* Background Image with Linear Gradient */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(148, 0, 85, 0.6), rgba(148, 0, 85, 0.3)), url(${LoanServicesbg})`,
          }}
        ></div>

        {/* Content */}
        <div className="relative flex flex-col justify-center items-start px-8 lg:px-20 h-full pt-40 text-white w-full lg:w-1/2">
          <h1 className="text-3xl lg:text-5xl font-bold mb-4">Need a Loan?</h1>
          <p className="text-lg lg:text-xl mb-6">
            From personal loans to secure savings plans, we offer solutions that
            align with your financial goals.
          </p>
          <div className="flex gap-4">
            <Link to={`/book_a_session`}>
              <button className="px-6 py-3 bg-transparent text-white border font-light hover:bg-pink-700">
                Book Consultation
              </button>
            </Link>
            <Link to={`/request_service`}>
              <button className="px-6 py-3 bg-[#AC4185] text-white font-light  hover:bg-pink-400">
                Apply Now →
              </button>
            </Link>
          </div>
        </div>
      </div>

      <FourGridItems />
      <LoanServiceOptions />
      <InstantLoan />
      <GettingStarted />
      <ContactUs />
      <NewsletterSignup />
      <Footer />
    </>
  );
}

export default LoanServices;
