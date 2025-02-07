import TopNav from "../../Components/TopNav";
import Navbar from "../../Components/Navbar";;
import Footer from "../../Components/Footer";
import ReservationSuccessful from "../../Components/Bookings/ReservationSuccessful";

function reservation_booked() {
  return (
    <>
        <TopNav />
        <Navbar />
        <ReservationSuccessful />
        <Footer />
    </>
  )
}
export default reservation_booked