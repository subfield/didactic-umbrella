import TopNav from "../../Components/TopNav";
import Navbar from "../../Components/Navbar";;
import Footer from "../../Components/Footer";
import Signup from "../../Components/Authentication/Signup";

function signup() {
  return (
    <>
        <TopNav />
        <Navbar />
        <Signup />
        <Footer />
    </>
  )
}
export default signup