/* eslint-disable react/prop-types */
import { Menu, Bell, Settings } from "lucide-react"

export default function Header({ isSidebarOpen, setSidebarOpen }) {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 bg-white border-b">
      <div className="flex items-center gap-4">
        <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="p-2 rounded-lg hover:bg-gray-100 md:hidden">
          <Menu size={24} />
        </button>
        <h1 className="text-xl">Welcome, Anjola.</h1>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 border">
          <Bell size={24} />
        </button>
        <div className="p-2 border">
            <Settings size={24} />
        </div>
      </div>
    </header>
  )
}

