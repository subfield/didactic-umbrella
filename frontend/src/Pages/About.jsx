import TopNav from "../Components/TopNav"
import Navbar from "../Components/Navbar"
import GoBack from '../Components/GoBack'
import Sponsors from "../Components/Sponsors"
import Allservice from "../Components/Allservice"
import WhyChooseUs from "../Components/Whychooseus"
import ContactUs from "../Components/ContactUs"
import NewsletterSignup from "../Components/NewsletterSignup"
import Footer from "../Components/Footer"
import VisionAndMission from "../Components/AboutComponents/VisionAndMission"
import Numbers from "../Components/AboutComponents/Numbers"
import Testimonials from "../Components/AboutComponents/Testimonials"

function About() {
  return (
    <>
      <TopNav />
      <Navbar />
      <GoBack />
      <Allservice />
      <Sponsors />
      <VisionAndMission />
      <Numbers />
      <Testimonials />
      <WhyChooseUs />
      <ContactUs />
      <NewsletterSignup />
      <Footer />
    </>
  )
}
export default About