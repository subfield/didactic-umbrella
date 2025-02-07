import TopNav from "../../Components/TopNav"
import Navbar from "../../Components/Navbar"
import ContactUs from "../../Components/ContactUs"
import NewsletterSignup from "../../Components/NewsletterSignup"
import Footer from "../../Components/Footer"
import HomeHeader from "../../Components/HomeComponents/HomeHeader"
import HomeTabs from "../../Components/HomeComponents/HomeTabs"
import GoBack from "../../Components/GoBack"

function HomeAndApartment() {
  return (
    <>
      <TopNav />
      <Navbar />
      <GoBack />
      <HomeHeader />
      <HomeTabs />
      <ContactUs />
      <NewsletterSignup />
      <Footer />
    </>
  )
}
export default HomeAndApartment