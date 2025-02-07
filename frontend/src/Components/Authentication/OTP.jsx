import {useNavigate} from 'react-router-dom'
import GetStartedImg from '../../assets/Images/AuthImages/GetStarted.svg'
import {useStepFormStore} from "../../store/index.js";
import {useEffect, useState} from "react";
import {useVerifyOtpMutation} from "../../../redux/api.js";
import {Loader2} from "lucide-react";

function OTP() {
    const step = useStepFormStore((state) => state.step)
    const [verifyOtp, {isLoading, error: err, data}] = useVerifyOtpMutation();
    const [otp, setOtp] = useState("")
    const navigate = useNavigate();
    const [local, setLocal] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(!!0)
    const [error, setError] = useState(!!0)

    useEffect(() => {
        const getStep = localStorage.getItem('step')
        if (getStep) setLocal(getStep)
    }, [])

    const handleVerify = async (e) => {
        e.preventDefault();
        setIsSubmitting(!!1)

        if(!otp) {
            setError(true)
            setIsSubmitting(!!0)
            return
        }


        try {
            const stage = step === 2 ? 'signup' : step === 3 || local === "bookings" ? "session" : ""
            const {data} = await verifyOtp({
                token: otp,
                stage
            })
            console.log(data)

            if(data.message.includes("success")) {
                navigate('/dashboard')
            } else {
                setIsSubmitting(!!0)
            }
        } catch (e) {
            console.log({e})
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
          <span
              onClick={() => navigate(-1)}
              className="text-pink-600 font-semibold mb-4 inline-block self-start p-1 cursor-pointer"
          >
            &larr; Go back
          </span>
                        {error ? <span className="text-red-500 text-sm italic block py-3">* All field are required</span> : ""}
                        {err ? <span
                            className="text-red-500 text-sm font-medium block py-3">Error occurred while submitting your data</span> : ""}
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
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    type="text"
                                    placeholder="Enter code"
                                    className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                                />
                            </div>

                            {/* Resend and Submit */}
                            <div className="flex items-center justify-between">
                                <p className="text-sm text-gray-600">
                                    Didn’t receive code?{" "}
                                    <span onClick={() => {
                                        step === 1 || step === 3 ? navigate("/login") : ""
                                    }} className="text-pink-600 font-bold hover:text-underline">
                                        Resend
                                    </span>
                                </p>
                                <button
                                    onClick={handleVerify}
                                    className={`${isSubmitting ? "pointer-events-none" : ""} bg-pink-600 px-12 text-white font-semibold py-2 hover:bg-pink-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2`}>
                                    {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin mx-4 my-0.5"/> : "Continue"}
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

export default OTP