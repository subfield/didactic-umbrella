import TopNav from "../../Components/TopNav";
import Navbar from "../../Components/Navbar";;
import Footer from "../../Components/Footer";
import BookSession from "../../Components/Bookings/BookSession";

function book_a_session() {
  return (
    <>
        <TopNav />
        <Navbar />
        <BookSession />
        <Footer />
    </>
  )
}
export default book_a_session