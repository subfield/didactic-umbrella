import TopNav from "../../Components/TopNav";
import Navbar from "../../Components/Navbar";;
import Footer from "../../Components/Footer";
import Login from "../../Components/Authentication/Login";

function login() {
  return (
    <>
        <TopNav />
        <Navbar />
        <Login />
        <Footer />
    </>
  )
}
export default login