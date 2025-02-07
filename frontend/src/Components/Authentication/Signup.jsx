import {Link, useNavigate} from 'react-router-dom'
import GetStartedImg from '../../assets/Images/AuthImages/GetStarted.svg'
import {useCreateUserMutation} from "../../../redux/api.js";
import {useStepFormStore} from "../../store/index.js";

function Signup() {
  const navigate = useNavigate();
  const saveFormData = useStepFormStore((state) => state.updateFormData)
  const setStep = useStepFormStore((state) => state.setStep)
  const formData = useStepFormStore((state) => state.formData)

  const {firstName, lastName, email, phone} = formData

  const handleChange = (e) => {
    saveFormData({[e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStep(2)
    navigate('/set_new_password',)
  }

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center mx-auto container min-h-screen">
        {/* Left Section - Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center py-12 px-8">
          <div className="max-w-md w-full">
            <h2 className="md:text-4xl text-3xl font-bold mb-8 text-gray-800 text-left">
              Get started
            </h2>

            <form className="space-y-6">
              {/* First Name */}
              <div>
                <label className="block text-gray-600 mb-1">First Name</label>
                <input
                  name="firstName"
                  onChange={handleChange}
                  value={firstName}
                  type="text"
                  className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-gray-600 mb-1">Last Name</label>
                <input
                  name="lastName"
                  onChange={handleChange}
                  value={lastName}
                  type="text"
                  className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-600 mb-1">Email Address</label>
                <input
                  name="email"
                  onChange={handleChange}
                  value={email}
                  type="email"
                  className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-600 mb-1">Phone Number</label>
                <input
                  name="phone"
                  onChange={handleChange}
                  value={phone}
                  type="tel"
                  className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              {/* Buttons */}
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">
                  Got an account?{" "}
                  <Link to={`/login`} className="text-pink-600 font-bold">
                    Log in
                  </Link>
                </p>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="bg-pink-800 text-white px-6 py-2 hover:bg-pink-900 transition duration-300"
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img
            src={GetStartedImg}
            alt="Financial Problems Solved"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </>
  )
}

export default Signup