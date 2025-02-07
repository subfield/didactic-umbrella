import ExpertAdvice from '../../assets/Images/ExpertAdvice.svg'

function ExpertAdvise() {
  return (
    <>
        <section className="py-12 px-6 sm:px-12 lg:px-28 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Left Section - Image (Smaller) */}
        <div className="flex-1 lg:flex-[0.4]">
          <img
            src={ExpertAdvice} // Replace with your image path
            alt="Financial Advice"
            className="w-full rounded-lg object-cover"
          />
        </div>

        {/* Right Section - Content (Bigger) */}
        <div className="flex-1 lg:flex-[0.6]">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Get expert financial advice and take control of your financial journey.
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Navigating the complexities of personal finances and investments can
            be challenging. At Crystal Bricks, our team of financial experts
            provides personalized guidance to help you:
          </p>
          {/* Bullet Points */}
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-pink-600">
                {/* Arrow Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
              <span>Make smarter money decisions.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
              <span>Manage your finances effectively.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
              <span>Plan and achieve your financial goals.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
    </>
  )
}
export default ExpertAdvise