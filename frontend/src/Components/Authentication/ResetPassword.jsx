import { Link, useNavigate } from 'react-router-dom'
import GetStartedImg from '../../assets/Images/AuthImages/GetStarted.svg'

function ResetPassword() {
  const navigate = useNavigate();
  return (
    <>
        <div className="flex flex-col md:flex-row container mx-auto min-h-screen">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col py-6">
        {/* Top Light Background */}
        <div className="w-full px-8 py-6">
        <Link 
            onClick={() => navigate(-1)}
          className="text-sm text-pink-600 font-bold inline-block mb-4">
            &larr; Go back
          </Link>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Confirm email address
          </h2>
        </div>

        {/* Bottom Section */}
        <div className="w-full flex-1 px-8 py-8">
          <form className="space-y-6 max-w-md">
            {/* Verification Code */}
            <div>
              <label className="block text-gray-600 mb-1">Verification Code</label>
              <input
                type="text"
                placeholder="Enter code"
                className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            {/* Resend and Submit */}
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">
                Didn’t receive code?{" "}
                <a href="/" className="text-pink-600 font-bold">
                  Resend
                </a>
              </p>
              <button
                type="submit"
                className="bg-pink-800 text-white px-6 py-2 hover:bg-pink-900 transition duration-300"
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 md:h-auto flex items-center justify-center">
        <img
          src={GetStartedImg}
          alt="Financial Problems Solved"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
    </>
  )
}
export default ResetPassword