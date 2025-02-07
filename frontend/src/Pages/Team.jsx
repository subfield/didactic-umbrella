import TopNav from "../Components/TopNav"
import Navbar from "../Components/Navbar"
import WhyChooseUs from "../Components/Whychooseus"
import ContactUs from "../Components/ContactUs"
import NewsletterSignup from "../Components/NewsletterSignup"
import Footer from "../Components/Footer"
import Background from "../Components/Team/Background"
import BoardMembers from "../Components/Team/BoardMembers"
import TeamMembers from "../Components/Team/TeamMembers"
import JobApplication from "../Components/Team/JobApplication"
import GoBack from "../Components/GoBack"

function Team() {
  return (
    <>
      <TopNav />
      <Navbar />
      <GoBack />
      <Background />
      <BoardMembers />
      <TeamMembers />
      <JobApplication />
      <WhyChooseUs />
      <ContactUs />
      <NewsletterSignup />
      <Footer />
    </>
  )
}
export default Team