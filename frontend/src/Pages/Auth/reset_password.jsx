import TopNav from "../../Components/TopNav";
import Navbar from "../../Components/Navbar";;
import Footer from "../../Components/Footer";
import ResetPassword from "../../Components/Authentication/ResetPassword";

function reset_password() {
  return (
    <>
        <TopNav />
        <Navbar />
        <ResetPassword />   
        <Footer />
    </>
  )
}
export default reset_password