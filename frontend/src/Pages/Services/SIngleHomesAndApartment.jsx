import TopNav from "../../Components/TopNav"
import Navbar from "../../Components/Navbar"
import ContactUs from "../../Components/ContactUs"
import NewsletterSignup from "../../Components/NewsletterSignup"
import Footer from "../../Components/Footer"
import PicturesAndPrice from "../../Components/SingleHomes/PicturesAndPrice"
import PropertyDescription from "../../Components/SingleHomes/PropertyDescription"
import Facilities from "../../Components/SingleHomes/Facilities"

function SIngleHomesAndApartment() {
  return (
    <>
      <TopNav />
      <Navbar />
      <GoBack />
      <PicturesAndPrice />
      <PropertyDescription />
      <Facilities />
      <ContactUs />
      <NewsletterSignup />
      <Footer />
    </>
  )
}
export default SIngleHomesAndApartment