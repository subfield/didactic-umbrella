import { Link, useNavigate } from "react-router-dom"

function Contactus() {
  const navigate = useNavigate();
  return (
    <>
        <section className="flex flex-col lg:flex-row min-h-screen">
      {/* Left Section - Calendar */}
      <div className="w-full lg:w-1/2 bg-pink-50 p-6 lg:p-12">
        <div className="max-w-2xl mx-auto">
          <Link
            onClick={() => navigate(-1)}
            className="text-pink-600 font-semibold mb-4 inline-block self-start"
          >
            &larr; Go back
          </Link> <br />
          <h2 className="text-4xl font-bold text-gray-800 mb-8 inline-block self-start">
            Contact us
          </h2>
          <hr className="mb-8" />

          
        </div>
      </div>

      {/* Right Section - Form */}
      <div className="w-full lg:w-1/2 bg-white p-6 lg:p-12">
        <div className="max-w-2xl mx-auto bg-white p-8">
          {/* Purpose */}
          <div className="mb-8">
            <label className="block text-gray-600 mb-1">Purpose</label>
            <select className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500">
              <option disabled selected>Select</option>
              <option>Consultation</option>
              <option>Follow-up</option>
              <option>Advisory</option>
            </select>
          </div>
          
          <h3 className="text-lg font-semibold mb-4 text-gray-400">
            YOUR DETAILS
          </h3>
          
          {/* User Information */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-600 mb-1">First Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Last Name</label>
              <input
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
                type="tel"
                placeholder="+234"
                className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Email Address</label>
              <input
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
              rows={3}
              className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            ></textarea>
          </div>
          {/* Submit Button */}
          <div className="w-full flex items-end justify-end">
            <button className="bg-pink-600 px-12 text-white font-semibold py-2 hover:bg-pink-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
export default Contactus