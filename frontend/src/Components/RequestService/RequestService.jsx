import {useNavigate} from 'react-router-dom'
import {useEffect, useState} from "react";
import {Loader2} from "lucide-react";
import {useStepFormStore} from "../../store/index.js";
import {useCreateRequestMutation} from "../../../redux/api.js";

const formDataInitial = {
  service: "",
  serviceType: "",
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  businessName: "",
  businessIndustry: "",
  businessEmail: "",
  businessBrief: "",
  whyApply: "",
  otherInfo: "",
  businessLocation: "",
  paymentType: "",
  paymentPlan: ""
}

function RequestService() {
  const [formData, setFormData] = useState(formDataInitial);
  const navigate = useNavigate();

  const setStep = useStepFormStore((state) => state.setStep)
  const [createRequest, {isLoading, error: err, data}] = useCreateRequestMutation();
  const [error, setError] = useState(!!0)

  const [isSubmitting, setIsSubmitting] = useState(!!0)

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const {
    service,
    serviceType,
    firstName,
    lastName,
    phone,
    email,
    businessName,
    businessIndustry,
    businessEmail,
    businessLocation,
    businessBrief,
    whyApply,
    otherInfo,
    paymentType,
    paymentPlan
  } = formData

  const handleSubmit = async (e) => {
    setIsSubmitting(!!1)
    e.preventDefault();

    if(
      !service ||
      !serviceType ||
      !firstName ||
      !lastName ||
      !phone ||
      !email ||
      !businessName ||
      !businessIndustry ||
      !businessLocation ||
      !businessBrief ||
      !whyApply ||
      !paymentType ||
      !paymentPlan
    ) {
      setError(true)
      setIsSubmitting(!!0)
      return !0
    }

    // navigate("/thank-you");
    try {
      const {requestId} = await createRequest(formData).unwrap();
      if(requestId === "create-account") {
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
        <section className="bg-pink-50 py-8 px-6 md:py-8 md:px-32">
          <div className="max-w-7xl mx-auto">
            <span
              onClick={() => navigate(-1)}
              className="text-pink-600 font-semibold mb-1 inline-block self-start p-1 cursor-pointer"
            >
            &larr; Go back
          </span> <br/>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              Request service
            </h1>
          </div>
        </section>

        <section className="min-h-screen bg-white p-6 lg:p-12">
          <div className="max-w-6xl mx-auto bg-white p-8">
            {/* SERVICE DETAILS */}
            <h3 className="text-lg font-semibold text-gray-500 mb-4">SERVICE DETAILS</h3>
            {error ? <span className="text-red-500 text-sm italic block py-3">* Fill all required fields</span> : ""}
            {err ? <span
                className="text-red-500 text-sm font-medium block py-3">Error occurred while submitting your data</span> : ""}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div>
                <label className="block text-gray-600 mb-1">Service</label>
                <select
                  onChange={handleChange}
                  value={service}
                  name="service"
                  className="w-full border border-gray-300 px-4 py-2   focus:outline-none focus:ring-2 focus:ring-pink-500">
                  <option>Select</option>
                  <option>Loan</option>
                  <option>Investment</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-600 mb-1">Service Type</label>
                <select
                  onChange={handleChange}
                  value={serviceType}
                  name="serviceType"
                  className="w-full border border-gray-300 px-4 py-2   focus:outline-none focus:ring-2 focus:ring-pink-500">
                  <option>Select</option>
                  <option>Short-term</option>
                  <option>Long-term</option>
                </select>
              </div>
            </div>

            {/* YOUR DETAILS */}
            <h3 className="text-lg font-semibold text-gray-500 mb-4">YOUR DETAILS</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div>
                <label className="block text-gray-600 mb-1">First Name</label>
                <input
                  onChange={handleChange}
                  value={firstName}
                  name="firstName"
                  type="text"
                  className="w-full border border-gray-300 px-4 py-2   focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1">Last Name</label>
                <input
                  onChange={handleChange}
                  value={lastName}
                  name="lastName"
                  type="text"
                  className="w-full border border-gray-300 px-4 py-2   focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1">Phone Number</label>
                <input
                  onChange={handleChange}
                  value={phone}
                  name="phone"
                  type="tel"
                  placeholder="+234"
                  className="w-full border border-gray-300 px-4 py-2   focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1">Email Address</label>
                <input
                  onChange={handleChange}
                  value={email}
                  name="email"
                  type="email"
                  className="w-full border border-gray-300 px-4 py-2   focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
            </div>

            {/* BUSINESS DETAILS */}
            <h3 className="text-lg font-semibold text-gray-500 mb-4">BUSINESS DETAILS</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div>
                <label className="block text-gray-600 mb-1">Business Name</label>
                <input
                  onChange={handleChange}
                  value={businessName}
                  name="businessName"
                  type="text"
                  className="w-full border border-gray-300 px-4 py-2   focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1">Business Industry</label>
                <select
                  onChange={handleChange}
                  value={businessIndustry}
                  name="businessIndustry"
                  className="w-full border border-gray-300 px-4 py-2   focus:outline-none focus:ring-2 focus:ring-pink-500">
                  <option>Select...</option>
                  <option>Finance</option>
                  <option>Technology</option>
                  <option>Retail</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-600 mb-1">Business Email (Optional)</label>
                <input
                  onChange={handleChange}
                  value={businessEmail}
                  name="businessEmail"
                  type="email"
                  className="w-full border border-gray-300 px-4 py-2   focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1">Business Location</label>
                <input
                  onChange={handleChange}
                  value={businessLocation}
                  name="businessLocation"
                  type="text"
                  className="w-full border border-gray-300 px-4 py-2   focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
            </div>

            {/* BUSINESS BRIEF */}
            <div className="mb-6">
              <label className="block text-gray-600 mb-1">Business Brief</label>
              <textarea
                onChange={handleChange}
                value={businessBrief}
                name="businessBrief"
                rows={3}
                className="w-full border border-gray-300 px-4 py-2   focus:outline-none focus:ring-2 focus:ring-pink-500"
              ></textarea>
            </div>

            {/* BUSINESS ACHIEVEMENT */}
            <div className="mb-6">
              <label className="block text-gray-600 mb-1">
                What do you want your business to achieve with this loan?
              </label>
              <textarea
                onChange={handleChange}
                value={whyApply}
                name="whyApply"
                rows={3}
                className="w-full border border-gray-300 px-4 py-2   focus:outline-none focus:ring-2 focus:ring-pink-500"
              ></textarea>
            </div>

            <div className="mb-6">
              <label className="block text-gray-600 mb-1">
                Other Relevant Information (Optional)
              </label>
              <textarea
                onChange={handleChange}
                value={otherInfo}
                name="otherInfo"
                rows={3}
                className="w-full border border-gray-300 px-4 py-2   focus:outline-none focus:ring-2 focus:ring-pink-500"
              ></textarea>
            </div>

            <h3 className="text-lg font-semibold text-gray-500 mb-4">PAYMENT METHOD</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div>
                <label className="block text-gray-600 mb-1">Payment Type</label>
                <select
                  onChange={handleChange}
                  value={paymentType}
                  name="paymentType"
                  className="w-full border border-gray-300 px-4 py-2   focus:outline-none focus:ring-2 focus:ring-pink-500">
                  <option>Select...</option>
                  <option>Installment</option>
                  <option>Technology</option>
                  <option>Retail</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-600 mb-1">Payment Plan</label>
                <select
                  onChange={handleChange}
                  value={paymentPlan}
                  name="paymentPlan"
                  className="w-full border border-gray-300 px-4 py-2   focus:outline-none focus:ring-2 focus:ring-pink-500">
                  <option>Select...</option>
                  <option>3-Months Installments</option>
                  <option>Technology</option>
                  <option>Retail</option>
                </select>
              </div>
            </div>

            {/* SUBMIT BUTTON */}
            <div className="flex justify-end">
              <button
                onClick={handleSubmit}
                className="bg-pink-600 text-white px-8 py-2 hover:bg-pink-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-pink-500">
                {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin mx-4 my-0.5"/> : "submit"}
              </button>
            </div>
          </div>
        </section>
      </>
    )
  }

  export default RequestService