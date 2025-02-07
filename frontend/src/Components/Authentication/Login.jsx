import {Link, useNavigate} from 'react-router-dom'
import GetStartedImg from '../../assets/Images/AuthImages/GetStarted.svg'
import {useState} from "react";
import {useUserLoginMutation} from "../../../redux/api.js";
import {Loader2} from "lucide-react";
import {useUserStore} from "../../store/index.js";

function Login() {
  const setAuth = useUserStore((state) => state.setAuth)
  const navigate = useNavigate();
  const [userLogin, {isLoading, error: err, data}] = useUserLoginMutation();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errMsg, setErrMsg] = useState("")
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(!!0)


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(!!1);
    setError(false);


    // Validation
    if (!email ||!password) {
      setError(true);
      setErrMsg("All fields are required");
    setIsSubmitting(!!0);
      return;
    }

    try {
      const {data, status} = await userLogin({email, password})
      console.log({data, status})
      if(data.message.includes('User logged in')) {
        setAuth(!!1)
        navigate("/dashboard")
      }
    setIsSubmitting(!!0);
    } catch (e) {
      console.log({e})
    setIsSubmitting(!!0);
    }
  }
  return (
    <>
        <div className="flex flex-col md:flex-row container mx-auto min-h-screen">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col py-6">
        {/* Top Light Background */}
        <div className="w-full px-8 py-6">
          <Link to={`/`} className="text-sm text-pink-600 font-bold inline-block mb-4">
            &larr; Go to Home
          </Link>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Log In
          </h2>
        </div>

        {/* Bottom Section */}
        <div className="w-full flex-1 px-8 py-8">
          <form className="space-y-6 max-w-md" method={"post"}>
            {/* Verification Code */}
            {error ? <span className="text-red-500 text-sm italic block py-3">{errMsg}</span> : ""}
            {err ? <span
                className="text-red-500 text-sm font-medium block py-3">Error occurred while submitting your data</span> : ""}
            <div>
              <label className="block text-gray-600 mb-1">Email Address</label>
              <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder=""
                className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-1">Password</label>
              <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder=""
                className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            {/* Resend and Submit */}
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">
                Forgot Password?{" "}
                <Link to={`/reset_password`} className="text-pink-600 font-bold">
                  Resend
                </Link>
              </p>
              <button
                  onClick={handleSubmit}
                  className={`${isSubmitting ? "pointer-events-none" : ""} bg-pink-600 px-12 text-white font-semibold py-2 hover:bg-pink-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2`}>
                {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin mx-4 my-0.5"/> : "Login"}
              </button>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">
                Don&apos;t  have an account?{" "}
                <Link href={`/signup`} className="text-pink-600 font-bold">
                  Sign up
                </Link>
              </p>
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
export default Login