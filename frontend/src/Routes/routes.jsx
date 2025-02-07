// src/routes/routes.js
import Home from '../Pages/Home';
import About from '../Pages/about';
import Contact from '../Pages/contact';
import Resources from '../Pages/resources';
import Team from '../Pages/team';
import LoanServices from '../Pages/Services/loanservices';
import SavingsAndInvestment from '../Pages/Services/savingsandinvestment';
import MoneyManagement from '../Pages/Services/moneymanagement';
import FinancialAdvisory from '../Pages/Services/financialadvisory';
import HomeAndApartment from '../Pages/Services/homeandapartment';
import SingleHomesAndApartment from '../Pages/Services/singlehomesandapartment';
import Signup from '../Pages/Auth/signup';
import Login from '../Pages/Auth/login';
import OTP from '../Pages/Auth/one_time_password';
import ResetPassword from '../Pages/Auth/reset_password';
import SetNewPassword from '../Pages/Auth/set_new_password';
import BookaSession from '../Pages/Bookings/book_a_session';
import SessionBooked from '../Pages/Bookings/session_booked';
import BookReservation from '../Pages/Bookings/book_a_reservation';
import ReservationBooked from '../Pages/Bookings/reservation_booked';
import LoanCalculator from '../Pages/loan_calculator';
import RequestService from '../Pages/request_service';

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/team',
    element: <Team />,
  },
  {
    path: '/resources',
    element: <Resources />,
  },
  {
    path: '/loanservices',
    element: <LoanServices />,
  },
  {
    path: '/savingsandinvestment',
    element: <SavingsAndInvestment />,
  },
  {
    path: '/moneymanagement',
    element: <MoneyManagement />,
  },
  {
    path: '/financialadvisory',
    element: <FinancialAdvisory />,
  },
  {
    path: '/homeandapartment',
    element: <HomeAndApartment />,
  },
  {
    path: '/singlehomeandapartment',
    element: <SingleHomesAndApartment />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/reset_password',
    element: <ResetPassword />
  },
  {
    path: '/one_time_password',
    element: <OTP />,
  },
  {
    path: '/set_new_password',
    element: <SetNewPassword />,
  },
  {
    path: '/book_a_session',
    element: <BookaSession />,
  },
  {
    path: '/session_booked',
    element: <SessionBooked />,
  },
  {
    path: '/book_a_reservation',
    element: <BookReservation />,
  },
  {
    path: '/reservation_booked',
    element: <ReservationBooked />,
  },
  {
    path: '/loan_calculator',
    element: <LoanCalculator />,
  },
  {
    path: '/request_service',
    element: <RequestService />,
  },
];

export default routes;
