import TopNav from "../Components/TopNav"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import RequestService from "../Components/RequestService/RequestService"

function request_service() {
  return (
    <>
        <TopNav />
        <Navbar />
        <RequestService />
        <Footer />
    </>
  )
}
export default request_service