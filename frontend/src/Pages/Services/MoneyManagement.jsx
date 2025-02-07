import TopNav from "../../Components/TopNav"
import Navbar from "../../Components/Navbar"
import ContactUs from "../../Components/ContactUs"
import NewsletterSignup from "../../Components/NewsletterSignup"
import Footer from "../../Components/Footer"
import MMHeaderBG from "../../Components/MoneyManagement/MMHeaderBG"
import Capabilities from "../../Components/MoneyManagement/Capabilities"
import ManagingFunds from "../../Components/MoneyManagement/ManagingFunds"
import GoBack from "../../Components/GoBack"

function MoneyManagement() {
  return (
    <>
      <TopNav />
      <Navbar />
      <GoBack />
      <MMHeaderBG />
      <Capabilities />
      <ManagingFunds />
      <ContactUs />
      <NewsletterSignup />
      <Footer />
    </>
  )
}
export default MoneyManagement