import TopNav from "../../Components/TopNav"
import Navbar from "../../Components/Navbar"
import ContactUs from "../../Components/ContactUs"
import NewsletterSignup from "../../Components/NewsletterSignup"
import Footer from "../../Components/Footer"
import FinancialHeader from "../../Components/FinancialAdvisory/FinancialHeader"
import ExpertAdvise from "../../Components/FinancialAdvisory/ExpertAdvise"
import GetAdvice from "../../Components/FinancialAdvisory/GetAdvice"
import GoBack from "../../Components/GoBack"

function FinancialAdvisory() {
  return (
    <>
      <TopNav />
      <Navbar />
      <GoBack />
      <FinancialHeader />
      <ExpertAdvise />
      <GetAdvice />
      <ContactUs />
      <NewsletterSignup />
      <Footer />
    </>
  )
}
export default FinancialAdvisory