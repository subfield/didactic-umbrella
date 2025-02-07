import TopNav from "../../Components/TopNav";
import Navbar from "../../Components/Navbar";;
import Footer from "../../Components/Footer";
import BookReservation from "../../Components/Bookings/BookReservation";

function book_a_reservation() {
  return (
    <>
        <TopNav />
        <Navbar />
        <BookReservation />
        <Footer />
    </>
  )
}
export default book_a_reservation
