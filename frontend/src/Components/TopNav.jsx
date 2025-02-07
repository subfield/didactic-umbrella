import IconBox from "./IconBox"
import Call from '../assets/Icons/Call.svg';
import Facebook from '../assets/Icons/Facebook.svg'
import Instagram from '../assets/Icons/Instagram.svg'
import X from '../assets/Icons/X.svg'
import Linkedin from '../assets/Icons/Linkedin.svg'
import ForwardArrow from '../assets/Icons/ForwardArrow.svg'
import { Link } from "react-router-dom";

// import { useState } from "react";

function TopNav() {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="relative flex items-center justify-between px-6 lg:px-32 py-5 border-b">
  {/* Full Layout */}
  <div className="flex items-center w-full">
    {/* Support Section */}
    <div className="hidden lg:flex items-center gap-6">
      <p className="flex items-center gap-2 text-sm font-bold">
        Talk to Support:{" "}
        <span className="text-pink-600 font-bold">0700CRYSTALBRICKS</span>
        <IconBox icon={Call} iconClassName="h-4 w-4" />
      </p>
      <span className="text-sm font-bold flex items-center gap-3">
        Connect with Us:
        <a href="#" aria-label="Facebook">
          <IconBox icon={Facebook} iconClassName="h-4 w-4" />
        </a>
        <a href="#" aria-label="Instagram">
          <IconBox icon={Instagram} iconClassName="h-4 w-4" />
        </a>
        <a href="#" aria-label="LinkedIn">
          <IconBox icon={Linkedin} iconClassName="h-4 w-4" />
        </a>
        <a href="#" aria-label="X (Twitter)">
          <IconBox icon={X} iconClassName="h-4 w-4" />
        </a>
      </span>
    </div>

    {/* "Try Our Loan Calculator" Always Visible */}
    <div className="ml-auto flex items-center gap-2">
      <Link
        to={`/loan_calculator`}
        className="text-pink-600 text-sm font-bold hover:text-pink-800 transition-colors"
      >
        Try Our Loan Calculator
      </Link>
      <IconBox icon={ForwardArrow} iconClassName="h-5 w-5" />
    </div>

    {/* Toggle Menu Button (For Small Screens) */}
    {/* <button
      onClick={() => setIsOpen(!isOpen)}
      className="lg:hidden text-pink-600 text-2xl ml-4 focus:outline-none"
    >
      ☰
    </button> */}
  </div>

  {/* Collapsible Content for Smaller Screens */}
  {/* {isOpen && (
    <div className="absolute top-full left-0 w-full bg-white border-t shadow-md lg:hidden">
      <div className="flex flex-col px-4 py-4 gap-4">
        <p className="text-sm font-bold">
          Talk to Support:{" "}
          <span className="text-pink-600 font-bold">0700CRYSTALBRICKS</span>
        </p>
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold">Connect with Us:</span>
          <a href="#" aria-label="Facebook">
          <IconBox icon={Facebook} iconClassName="h-5 w-5" />
        </a>
        <a href="#" aria-label="Instagram">
          <IconBox icon={Instagram} iconClassName="h-5 w-5" />
        </a>
        <a href="#" aria-label="LinkedIn">
          <IconBox icon={Linkedin} iconClassName="h-5 w-5" />
        </a>
        <a href="#" aria-label="X (Twitter)">
          <IconBox icon={X} iconClassName="h-5 w-5" />
        </a>
        </div>
      </div>
    </div>
  )} */}
</nav>

    </>
  );
}
export default TopNav;
