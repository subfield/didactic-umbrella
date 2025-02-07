import TopNav from "../../Components/TopNav";
import Navbar from "../../Components/Navbar";;
import Footer from "../../Components/Footer";
import OTP from "../../Components/Authentication/OTP";

function one_time_password() {
  return (
    <>
        <TopNav />
        <Navbar />
        <OTP />
        <Footer />
    </>
  )
}
export default one_time_password