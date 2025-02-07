import { useState } from "react";
import { Link } from 'react-router-dom'
import Logo from "../assets/Images/Logo.svg";
import UpForwardArrow from "../assets/Icons/UpForwardArrow.svg";
import IconBox from "./IconBox";
import FinancialAdvisory from '../assets/Icons/ServiceLinkIcons/FinancialAdvisory.svg'
import MoneyManagement from '../assets/Icons/ServiceLinkIcons/MoneyManagement.svg'
import HomesAndApartment from '../assets/Icons/ServiceLinkIcons/HomesAndApartment.svg'
import SavingsAndInvestment from '../assets/Icons/ServiceLinkIcons/SavingsAndInvestment.svg'
import LoanServices from '../assets/Icons/ServiceLinkIcons/LoanServices.svg'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const services = [
    { name: "Loan Services", icon: LoanServices, path: "/LoanServices" },
    { name: "Homes & Apartments", icon: HomesAndApartment, path: "/HomeAndApartment" },
    { name: "Money Management", icon: MoneyManagement, path: "/MoneyManagement" },
    { name: "Savings & Investments", icon: SavingsAndInvestment, path: "/SavingsAndInvestment" },
    { name: "Financial Advisory", icon: FinancialAdvisory, path: "/FinancialAdvisory" },
  ];
  

  return (
    <nav className="bg-white border-b relative z-20">
      <div className="flex lg:h-[100px] py-3 items-center justify-between">
        {/* Left Section: Logo */}
        <Link to={`/`}>
          <div className="flex items-center ">
            <img src={Logo} alt="Logo" className="h-[63px] w-auto sm:ml-10 ml-4" />
          </div>
        </Link>

        {/* Center Section: Links */}
        <div className="hidden lg:flex">
          <Link
            to={`/About`}
            className="hover:text-pink-600 font-bold flex items-center justify-center text-center h-[100px] w-[120px] transition duration-300"
          >
            About Us
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative h-[100px] w-[120px] flex items-center justify-center"
            onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
          >
            <a
              href=""
              className="hover:text-pink-600 font-bold flex items-center justify-center text-center h-full w-full transition duration-300"
              onClick={(e) => e.preventDefault()}
            >
              Services
            </a>
            {servicesDropdownOpen && (
              <div className="absolute top-full mt-7 left-0 shadow bg-white w-[450px] z-10">
                <div className="grid grid-cols-2 gap-2 p-4">
                  {services.map((service, index) => (
                    <Link
                    to={service.path}
                    key={index}
                    className="flex items-center gap-3 p-3 hover:bg-pink-50 rounded-lg transition-colors"
                    onClick={() => setServicesDropdownOpen(false)} // Close the dropdown after click
                  >
                    <IconBox
                      icon={service.icon}
                      iconClassName="h-8 w-8 text-pink-600"
                    />
                    <span className="text-sm font-bold">{service.name}</span>
                  </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            to={`/Resources`}
            className="hover:text-pink-600 font-bold flex items-center justify-center text-center h-[100px] w-[120px] transition duration-300"
          >
            Resources
          </Link>
          <Link
            to={`/Team`}
            className="hover:text-pink-600 font-bold flex items-center justify-center text-center h-[100px] w-[120px] transition duration-300"
          >
            Team
          </Link>
          <Link
            to={`/Contact`}
            className="hover:text-pink-600 font-bold flex items-center justify-center text-center h-[100px] w-[120px] transition duration-300"
          >
            Contact Us
          </Link>
          <div className="flex bg-[#C51077] hover:bg-pink-400 text-white items-center justify-center h-[100px] w-[140px]">
            <div className="flex items-center justify-center">
              <Link
                to={`/request_service`}
                className="font-bold flex text-center transition duration-300"
              >
                Get Started
              </Link>
              <IconBox
                icon={UpForwardArrow}
                alt="Arrow"
                className="ml-0 flex items-center justify-center"
                iconClassName="h-5 w-5"
              />
            </div>
          </div>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="lg:hidden text-pink-600 text-2xl focus:outline-none px-6"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-gray-200 z-100 shadow-md px-6 absolute w-full py-3 pb-5">
          <Link
            to={`/About`}
            className="block px-4 py-2 mt-1 font-bold hover:bg-pink-50 hover:text-pink-600"
          >
            About Us
          </Link>
          <button
            onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
            className="block w-full text-left px-4 py-2 mt-1 font-bold hover:bg-pink-50 hover:text-pink-600"
          >
            Services
          </button>
          {servicesDropdownOpen && (
            <div className="bg-white pl-8">
              <div className="grid grid-cols-1 gap-2">
                {services.map((service, index) => (
                  
                  <Link to={service.path}
                    
                    key={index}
                    className="flex items-center gap-3 py-2 hover:bg-pink-50 rounded-lg"
                  >
                    <IconBox
                      icon={service.icon}
                      iconClassName="h-5 w-5 text-pink-600"
                    />
                    <p className="text-sm font-bold">{service.name}</p>
                  
                  </Link>
                ))}
              </div>
            </div>
          )}
          <Link
            to={`/Resources`}
            className="block px-4 py-2 mt-1 font-bold hover:bg-pink-50 hover:text-pink-600"
          >
            Resources
          </Link>
          <Link
            to={`/Team`}
            className="block px-4 py-2 mt-1 font-bold hover:bg-pink-50 hover:text-pink-600"
          >
            Team
          </Link>
          <Link
            to={`/Contact`}
            className="block px-4 py-2 mt-1 font-bold hover:bg-pink-50 hover:text-pink-600"
          >
            Contact Us
          </Link>
          <div className="flex bg-pink-600 mt-1 px-4 py-2">
            <Link
              to={`/request_service`}
              className="block text-white text-center hover:bg-pink-700 transition duration-300"
            >
              Get Started
            </Link>
            <IconBox
              icon={UpForwardArrow}
              alt="Arrow"
              className="ml-0 flex items-center justify-center"
              iconClassName="h-5 w-5"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

