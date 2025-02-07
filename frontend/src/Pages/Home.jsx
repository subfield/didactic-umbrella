import TopNav from "../Components/TopNav"
import Navbar from "../Components/Navbar"
import HeaderSlider from "../Components/HeaderSlider"
import Sponsors from "../Components/Sponsors"
import Allservice from "../Components/Allservice"
import VideoExplainer from "../Components/VideoExplainer"
import LoanServicesHero from "../Components/LoanServicesHero"
import WhyChooseUs from "../Components/Whychooseus"
import ContactUs from "../Components/ContactUs"
import NewsletterSignup from "../Components/NewsletterSignup"
import Footer from "../Components/Footer"
import SavingAndInvestment from "../Components/HomePageComponents/Saving_Investment"
import HomesAndApartment from "../Components/HomePageComponents/HomesAndApartment"
import MoneyManagement from "../Components/HomePageComponents/MoneyManagement"
import FinancialAdvisory from "../Components/HomePageComponents/FinancialAdvisory"

function Home() {
  return (
    <>
      <TopNav />
      <Navbar />
      <HeaderSlider />
      <Sponsors />
      <Allservice />
      <VideoExplainer />
      <LoanServicesHero />
      <SavingAndInvestment />
      <HomesAndApartment />
      <MoneyManagement />
      <FinancialAdvisory />
      <WhyChooseUs />
      <ContactUs />
      <NewsletterSignup />
      <Footer />
    </>
  )
}
export default Home