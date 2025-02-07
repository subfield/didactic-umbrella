// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './Routes/routes';
import ScrollToTop from './scrolltotop';
import DashboardLayout from './Layout/Layout';
import Dashboard from './Pages/dashboard'
import ProductsPage from './Pages/products';
import ApplicationsPage from './Pages/Application/application';
import ApplicationDetail from './Pages/Application/applicationID';
import BookingsPage from './Pages/Booking/bookings';
import BookingDetail from './Pages/Booking/bookingdetails';
import ContactInfo from './Pages/help';
import ProfileSettings from './Pages/settings';
const App = () => (
  <Router>
    <ScrollToTop />
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
        <Routes>
          <Route element={<DashboardLayout />}>

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/application" element={<ApplicationsPage />} />
          <Route path="/applicationID/:applicationId" element={<ApplicationDetail/>} />
          <Route path="/bookings" element={<BookingsPage />} />
          <Route path="/bookingdetails/:bookingId" element={<BookingDetail />} />
          <Route path="/help" element={<ContactInfo />} />
          <Route path="/settings" element={<ProfileSettings />} />
          </Route>
        </Routes>
  </Router>
);

export default App;
