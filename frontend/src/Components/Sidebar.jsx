// /* eslint-disable react/prop-types */
// import { Home, Package, FileText, Calendar, HelpCircle, Settings, LogOut } from "lucide-react"
// import Logo from '../assets/Logo.svg'

// const menuItems = [
//   { icon: Home, text: "Home", path: "/" },
//   { icon: Package, text: "Product/Services", path: "/products" },
//   { icon: FileText, text: "My Applications", path: "/application" },
//   { icon: Calendar, text: "My Bookings", path: "/bookings" },
//   { icon: HelpCircle, text: "Help Center", path: "/help" },
//   { icon: Settings, text: "Settings", path: "/settings" },
// ]

// export default function Sidebar({ isOpen }) {
//   return (
//     <aside
//       className={`fixed top-0 left-0 z-40 h-screen transition-transform ${
//         isOpen ? "translate-x-0" : "-translate-x-full"
//       } md:translate-x-0 bg-white border-r border-gray-200 w-64`}
//     >
//       {/* Logo */}
//       <div className="flex items-center gap-2 px-6 py-4">
//         <img src={Logo} alt="Crystalbricks Logo" />
//       </div>

//       {/* Navigation */}
//       <nav className="px-4 py-4">
//         <ul className="space-y-2">
//           {menuItems.map((item, index) => {
//             const Icon = item.icon
//             return (
//               <li key={index}>
//                 <a
//                   href={item.path}
//                   className="flex items-center gap-4 px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-100"
//                 >
//                   <Icon size={20} />
//                   <span>{item.text}</span>
//                 </a>
//               </li>
//             )
//           })}
//         </ul>
//       </nav>

//       {/* Logout Button */}
//       <div className="absolute bottom-0 w-full p-4 border-t">
//         <button className="flex items-center w-full gap-4 px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-100">
//           <LogOut size={20} />
//           <span>Log out</span>
//         </button>
//       </div>
//     </aside>
//   )
// }




import React, { useState } from "react";
import {
  Home,
  Package,
  FileText,
  Calendar,
  HelpCircle,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import Logo from "../assets/Logo.svg";

const menuItems = [
  { icon: Home, text: "Home", path: "/" },
  { icon: Package, text: "Product/Services", path: "/products" },
  { icon: FileText, text: "My Applications", path: "/application" },
  { icon: Calendar, text: "My Bookings", path: "/bookings" },
  { icon: HelpCircle, text: "Help Center", path: "/help" },
  { icon: Settings, text: "Settings", path: "/settings" },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        className="fixed top-4 left-4 z-50 md:hidden p-2 rounded-full bg-white shadow-md"
        onClick={toggleSidebar}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-screen transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 bg-white border-r border-gray-200 w-64`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 px-6 py-4">
          <img src={Logo} alt="Crystalbricks Logo" />
        </div>

        {/* Navigation */}
        <nav className="px-4 py-4">
          <ul className="space-y-2">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <li key={index}>
                  <a
                    href={item.path}
                    className="flex items-center gap-4 px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-100"
                  >
                    <Icon size={20} />
                    <span>{item.text}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Logout Button */}
        <div className="absolute bottom-0 w-full p-4 border-t">
          <button className="flex items-center w-full gap-4 px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-100">
            <LogOut size={20} />
            <span>Log out</span>
          </button>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black opacity-50 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}
