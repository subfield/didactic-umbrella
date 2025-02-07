import Facebook from "../assets/Icons/Facebook.svg";
import Instagram from "../assets/Icons/Instagram.svg";
import X from "../assets/Icons/X.svg";
import Linkedin from "../assets/Icons/Linkedin.svg";
import Footerlogo from "../assets/Images/Footerlogo.svg";
import IconBox from "./IconBox";
import Call from "../assets/Icons/Call.svg";
import At from "../assets/Icons/At.svg";
import Location from "../assets/Icons/Location.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="w-full bg-[#42032B] text-white py-12">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {/* Logo Section */}
            <div className="space-y-4 md:col-span-1 lg:col-span-2">
              <Link to={`/`} className="flex items-center space-x-2">
                <img src={Footerlogo} alt="Footer Logo" />
              </Link>
            </div>

            {/* Quick Links Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Quicklinks</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to={`/About`}
                    className="hover:text-gray-300 text-sm transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                
                <li>
                  <Link
                    to={`/Contact`}
                    className="hover:text-gray-300 text-sm transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/book_a_reservation`}
                    className="hover:text-gray-300 text-sm font-light transition-colors"
                  >
                    Book Reservation
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/book_a_session`}
                    className="hover:text-gray-300 text-sm transition-colors"
                  >
                    Book Consultation
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to={`/Resources`}
                    className="hover:text-gray-300 text-sm transition-colors"
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/Resources`}
                    className="hover:text-gray-300 text-sm transition-colors"
                  >
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Get in touch</h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2 text-sm">
                    <span>
                      <IconBox icon={Call} iconClassName="h-5 w-5" />
                    </span>
                    <span>070CRYSTALBRICKS</span>
                  </li>
                  <li className="flex items-center space-x-2 text-sm">
                    <span>
                      <IconBox icon={At} iconClassName="h-5 w-5" />
                    </span>
                    <span>help@crystalbricks.com</span>
                  </li>
                  <li className="flex items-center space-x-2 text-sm">
                    <span>
                      <IconBox icon={Location} iconClassName="h-5 w-5" />
                    </span>
                    <span>Lagos, Abuja</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Socials Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Socials</h3>
              <div className="flex space-x-4">
                <a to="#" className="hover:text-gray-300 transition-colors">
                  <IconBox icon={Facebook} iconClassName="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a to="#" className="hover:text-gray-300 transition-colors">
                  <IconBox icon={Instagram} iconClassName="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a to="#" className="hover:text-gray-300 transition-colors">
                  <IconBox icon={Linkedin} iconClassName="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a to="#" className="hover:text-gray-300 transition-colors">
                  <IconBox icon={X} iconClassName="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 pt-8 border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-gray-300">
                © 2024 CrystalBricks. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a
                  to="/privacy"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Privacy
                </a>
                <a
                  to="/terms"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Terms
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <section className="container py-5">
        <p className="text-center text-sm">Built with Love by 
          <a href="https://tfnsolutions.us" className="underline" target="_blank"> TFN Solution</a></p>
      </section>
    </>
  );
}

export default Footer;
