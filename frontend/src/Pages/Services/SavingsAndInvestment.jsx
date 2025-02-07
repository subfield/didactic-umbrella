import TopNav from "../../Components/TopNav"
import Navbar from "../../Components/Navbar"
import ContactUs from "../../Components/ContactUs"
import NewsletterSignup from "../../Components/NewsletterSignup"
import Footer from "../../Components/Footer"
import SavingsHeader from "../../Components/SavingsAndInvestment/SavingsHeader"
import FourGridItems from "../../Components/LoanServices/FourGridItems"
import LoanServiceOptions from "../../Components/LoanServices/LoanServiceOptions"
import GettingStarted from '../../Components/LoanServices/GettingStarted'
import GoBack from "../../Components/GoBack"

function SavingsAndInvestment() {
  return (
    <>
      <TopNav />
      <Navbar />
      <GoBack />
      <SavingsHeader />
      <FourGridItems />
      <LoanServiceOptions />
      <GettingStarted />
      <ContactUs />
      <NewsletterSignup />
      <Footer />
    </>
  )
}
export default SavingsAndInvestment