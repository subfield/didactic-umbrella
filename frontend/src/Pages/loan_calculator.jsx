import TopNav from "../Components/TopNav";
import Navbar from "../Components/Navbar";;
import Footer from "../Components/Footer";
import LoanCalculatorForm from "../Components/LoanCalculator/LoanCalculatorForm";
import LoanCalculatorResults from "../Components/LoanCalculator/LoanCalculatorResults";

function loan_calculator() {
  return (
    <>
        <TopNav />
        <Navbar />
        <LoanCalculatorForm />
        <LoanCalculatorResults />
        <Footer />
    </>
  )
}
export default loan_calculator