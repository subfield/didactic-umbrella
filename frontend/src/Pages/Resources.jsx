import TopNav from "../Components/TopNav"
import Navbar from "../Components/Navbar"
import GoBack from '../Components/GoBack'
import ContactUs from "../Components/ContactUs"
import NewsletterSignup from "../Components/NewsletterSignup"
import Footer from "../Components/Footer"
import TabsComponent from "../Components/Resources/Tabs"

function Resources() {
  return (
    <>
      <TopNav />
      <Navbar />
      <GoBack />
      <TabsComponent />
      <ContactUs />
      <NewsletterSignup />
      <Footer />
    </>
  )
}
export default Resources