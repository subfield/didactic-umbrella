import {useEffect, useState} from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Default styles
import "./CalendarCustom.css"; // Custom styles for the calendar
import { useNavigate } from "react-router-dom";
import {Loader2} from "lucide-react";
import {useCreateReservationMutation} from "../../../redux/api.js";
import {useStepFormStore} from "../../store/index.js";

function BookReservation() {
  const setStep = useStepFormStore((state) => state.setStep)
  const [createReservation, {isLoading, error: err, data}] = useCreateReservationMutation();
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date());
  const [isSubmitting, setIsSubmitting] = useState(!!0)
  const [error, setError] = useState(!!0)
  const [formData, setFormData] = useState({
    shortlet: "",
    checkInDate: date.toDateString(),
    checkInTime: "09:00 AM",
    checkOutDate: "",
    checkOutTime: "09:00 AM",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    otherInfo: "",
  });

  const {shortlet,  checkInDate, checkInTime, checkOutTime, firstName, lastName, email, phone, otherInfo} = formData

  useEffect(() => {
    handleChange({target: {name: "checkInDate", value: date.toDateString()}})
  }, [date])

  useEffect(() => {
    setTimeout(() => {
      handleChange({target: {name: "checkOutDate", value: date.toDateString()}})
    }, 700)
  }, [date])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(!!1)

    if(!shortlet || !checkInDate || !checkInTime || !checkOutTime || !firstName || !lastName || !email || !phone || !otherInfo) {
      setError(true)
      setIsSubmitting(!!0)
      return !0
    }
    console.log(formData)

    try {
      const {sessionId} = await createReservation(formData).unwrap();
      if(sessionId === "create-account") {
        setStep(3)
        localStorage.setItem("step", "bookings")
        navigate('/one_time_password')
      } else {
        navigate(`/dashboard`)
      }
    } catch (err) {
      console.error("Create session failed:", err);
      setIsSubmitting(!!0)
    }
  }

  return (
    <>
      <section className="flex flex-col lg:flex-row min-h-screen">
      {/* Left Section - Calendar */}
      <div className="w-full lg:w-1/2 bg-pink-50 p-6 lg:p-12">
        <div className="max-w-2xl mx-auto">
          <span
            onClick={() => navigate(-1)}
            className="text-pink-600 font-semibold mb-4 inline-block self-start p-1 cursor-pointer"
          >
            &larr; Go back
          </span> <br />
          <h2 className="text-4xl font-bold text-gray-800 mb-8 inline-block self-start">
            Book a reservation
          </h2>
          <hr className="mb-8" />

          {/* React Calendar */}
          <div className="w-full flex justify-center mt-10">
            <Calendar
              onChange={setDate}
              value={date}
              className="custom-calendar"
              tileClassName={({ date }) => {
                // Highlight specific dates (e.g., 6th and 24th)
                const specialDates = [6, 24];
                return specialDates.includes(date.getDate())
                  ? 'highlighted-date'
                  : null;
              }}
            />
          </div>
        </div>
      </div>

      {/* Right Section - Form */}
      <div className="w-full lg:w-1/2 bg-white p-6 lg:p-12">
        <div className="max-w-2xl mx-auto bg-white p-8">
          {/* Purpose */}
          {error ? <span className="text-red-500 text-sm italic block py-3">* All field are required</span> : ""}
          {err ? <span
            className="text-red-500 text-sm font-medium block py-3">Error occurred while submitting your data</span> : ""}
          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Shortlet</label>
            <select name="shortlet" value={shortlet} onChange={handleChange} className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500">
              <option disabled value="">3 bedroom apartment @ Lugbe Abuja</option>
              <option>Consultation</option>
              <option>Follow-up</option>
              <option>Advisory</option>
            </select>
          </div>
          <h3 className="text-lg font-semibold mb-4 text-gray-400">
            CHECK-IN DETAILS
          </h3>
          {/* Date and Time */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-gray-600 mb-1">Date</label>
              <input
                name="date"
                onChange={handleChange}
                type="text"
                value={date.toDateString()}
                readOnly
                className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Time</label>
              <select name="checkInTime" value={checkInTime} onChange={handleChange}  className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500">
                <option>09:00 AM</option>
                <option>10:00 AM</option>
                <option>11:00 AM</option>
                <option>01:00 PM</option>
              </select>
            </div>
          </div>
          <h3 className="text-lg font-semibold mb-4 text-gray-400">
            CHECK-OUT DETAILS
          </h3>
          {/* Date and Time */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-gray-600 mb-1">Date</label>
              <input
                type="text"
                name="date"
                onChange={handleChange}
                value={date.toDateString()}
                readOnly
                className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Time</label>
              <select name="checkOutTime" value={checkOutTime} onChange={handleChange} className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500">
                <option>09:00 AM</option>
                <option>10:00 AM</option>
                <option>11:00 AM</option>
                <option>01:00 PM</option>
              </select>
            </div>
          </div>
          <hr className="mb-8" />
          <h3 className="text-lg font-semibold mb-4 text-gray-400">
            YOUR DETAILS
          </h3>

          {/* User Information */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-600 mb-1">First Name</label>
              <input
                onChange={handleChange}
                value={firstName}
                name="firstName"
                type="text"
                className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Last Name</label>
              <input
                onChange={handleChange}
                value={lastName}
                name="lastName"
                type="text"
                className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
          </div>
          {/* Contact Information */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-600 mb-1">Phone Number</label>
              <input
                onChange={handleChange}
                value={phone}
                name="phone"
                type="tel"
                placeholder="+234"
                className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Email Address</label>
              <input
                onChange={handleChange}
                value={email}
                name="email"
                type="email"
                className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
          </div>
          {/* Other Relevant Information */}
          <div className="mb-6">
            <label className="block text-gray-600 mb-1">
              Other Relevant Information
            </label>
            <textarea
              onChange={handleChange}
              value={otherInfo}
              name="otherInfo"
              rows={3}
              className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            ></textarea>
          </div>
          {/* Submit Button */}
          <div className="w-full flex items-end justify-end">
            <button
              onClick={handleSubmit}
              className={`${isSubmitting ? "pointer-events-none" : ""} bg-pink-600 px-12 text-white font-semibold py-2 hover:bg-pink-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2`}>
              {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin mx-4 my-0.5"/> : "submit"}
            </button>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
export default BookReservation;
