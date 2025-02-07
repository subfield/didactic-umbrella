import TopNav from "../../Components/TopNav";
import Navbar from "../../Components/Navbar";;
import Footer from "../../Components/Footer";
import SetNewPassword from "../../Components/Authentication/SetNewPassword";

function set_new_password() {
  return (
    <>
        <TopNav />
        <Navbar />
        <SetNewPassword />   
        <Footer />
    </>
  )
}
export default set_new_password