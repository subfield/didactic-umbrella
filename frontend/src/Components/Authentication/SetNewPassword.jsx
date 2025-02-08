import {useNavigate} from 'react-router-dom'
import GetStartedImg from '../../assets/Images/AuthImages/GetStarted.svg'
import {useCreateUserMutation, useVerifyOtpMutation} from "../../../redux/api.js";
import {useStepFormStore} from "../../store/index.js";
import {useEffect, useState} from "react";
import {Loader2} from "lucide-react";

function SetNewPassword() {
  const [createUser, {isLoading, error: err}] = useCreateUserMutation();
  const [verifyOtp, {isLoading: sessionSaveLoading, error: sessionLoadErr}] = useVerifyOtpMutation();
  const navigate = useNavigate();
  const step = useStepFormStore((state) => state.step)
  const resetForm = useStepFormStore((state) => state.resetForm)
  const saveFormData = useStepFormStore((state) => state.updateFormData)
  const formData = useStepFormStore((state) => state.formData)
  const [isSubmitting, setIsSubmitting] = useState(!!0)
  const [error, setError] = useState(!!0)
  const [errMsg, setErrMsg] = useState("* All field are required")

  const [conPassword, setConPassword] = useState("")

  const {firstName, lastName, email, phone, password} = formData

  useEffect(() => {
    if(step !== 3){
      if (!firstName || !lastName || !email || !phone) {
        navigate("/signup")
      }
    }
  }, [formData])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(!!1)

    if (!password || !conPassword) {
      setError(true)
      setErrMsg("All fields are required")
      setIsSubmitting(!!0)
      return !0
    }

    if (password !== conPassword) {
      setError(true)
      setErrMsg("Both passwords don't match")
      setIsSubmitting(!!0)
      return !0
    }

    try {
      let res
      if(step === 2) {
       res = await createUser(formData).unwrap();
      } else if (step === 3) {
        const {data: sessionData} = await verifyOtp({
          token: localStorage.getItem('token'),
          stage: 'session',
          password
        })
        if(sessionData.message.includes('success')) {
          localStorage.removeItem('token')
          navigate(`/login`)
        }
      }
      if(res.user === "create-account") {
        navigate('/one_time_password')
      } else {
        // navigate(`/dashboard`)
        navigate('/one_time_password')
      }
    } catch (err) {
      console.error("Create user failed:", err);
      setIsSubmitting(!!0)
    }


  }

  return (
    <>
      <div className="flex flex-col md:flex-row container mx-auto min-h-screen">
        {/* Left Section */}
        <div className="w-full md:w-1/2 flex flex-col py-6">
          {/* Top Light Background */}
          <div className="w-full px-8 py-6">
            {step !== 3 ? (<span
              onClick={() => navigate(-1)}
              className="text-pink-600 font-semibold mb-4 inline-block self-start p-1 cursor-pointer"
            >
            &larr; Go back
          </span>) : ("")}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Set new password
            </h2>
          </div>

          {/* Bottom Section */}
          <div className="w-full flex-1 px-8 py-8">
            <form className="space-y-6 max-w-md">

              {error ? <span className="text-red-500 text-sm italic block py-3">{errMsg}</span> : ""}
              {err || sessionLoadErr ? <span
                className="text-red-500 text-sm font-medium block py-3">Error occurred while submitting your data</span> : ""}
              <div>
                <label className="block text-gray-600 mb-1">New Password</label>
                <input
                  value={password}
                  onChange={(e) => saveFormData({password: e.target.value})}
                  type="password"
                  placeholder=""
                  className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <div>
                <label className="block text-gray-600 mb-1">Confirm Password</label>
                <input
                  value={conPassword}
                  onChange={(e) => setConPassword(e.target.value)}
                  type="password"
                  placeholder=""
                  className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              {/* Resend and Submit */}
              <div className="flex items-center justify-between">
                {step !== 3 ? (<p className="text-sm text-gray-600">
                  {" "}
                  <a href="/" onClick={resetForm} className="text-pink-600 font-bold">
                    Go back to login
                  </a>
                </p>) : ("")}
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className={`${isSubmitting ? "pointer-events-none" : ""} bg-pink-600 px-12 text-white font-semibold py-2 hover:bg-pink-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2`}>
                  {isSubmitting ?
                    <Loader2 className="w-5 h-5 animate-spin mx-4 my-0.5"/> : step === 2 ? "submit" : "Save Password"}
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

export default SetNewPassword