/* eslint-disable react/prop-types */
import {useEffect, useState} from "react"
import Sidebar from "../Components/Sidebar"
import Header from "../Components/Header"
import {Outlet, useNavigate} from "react-router-dom";
import {useUserStore} from "../store/index.js";
import {Preloader} from "../Components/Preloader.jsx";
import {useValidateTokenMutation} from "../../redux/api.js";

export default function DashboardLayout() {
  const [validateToken, {isLoading, error: err, data}] = useValidateTokenMutation();
  const navigate = useNavigate();
  const {isAuthenticated} = useUserStore();
  const setUser = useUserStore((state) => state.setUser)
  const setAuth = useUserStore((state) => state.setAuth)
  const logout = useUserStore((state) => state.logout)
  const [isSidebarOpen, setSidebarOpen] = useState(true)
  const [authentication, setAuthentication] = useState(!!1)

  const checkAuth = async () => {
    try {
      const res = await validateToken()
      if (res.error.originalStatus > 200) {
        navigate("/login")
      } else {
        setAuthentication(!!0)
      }
    } catch (e) {
      // setAuth(!!0)
      logout()
      navigate("/login")
    }
  }
      if(err) {
        console.error("Token validation failed:", err);
        logout()
        navigate("/login")
      }

  // useEffect(() => {
  //     err && setAuthentication(err)
  // }, [err]);

  useEffect(() => {
    if (!isAuthenticated) {
      checkAuth()
    } else {
      setAuthentication(!!0)
    }
  }, [isAuthenticated])

  if (authentication) {
    return <Preloader/>
  }

  return (
    <div className="min-h-screen">
      <Sidebar isOpen={isSidebarOpen}/>
      <div className={`${isSidebarOpen ? "md:ml-64" : ""} transition-margin duration-200`}>
        <Header isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen}/>
        <main className="p-6"><Outlet/></main>
      </div>
    </div>
  )
}

