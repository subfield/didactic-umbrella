import TopNav from "../../Components/TopNav";
import Navbar from "../../Components/Navbar";;
import Footer from "../../Components/Footer";
import BookSessionSuccessful from "../../Components/Bookings/BookSessionSuccessful";

function session_booked() {
  return (
    <>
        <TopNav />
        <Navbar />
        <BookSessionSuccessful />
        <Footer />
    </>
  )
}
export default session_booked