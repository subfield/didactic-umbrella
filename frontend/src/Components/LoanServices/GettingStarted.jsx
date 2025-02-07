function GettingStarted() {
  return (
    <>
        <div className="bg-white py-16 px-4 sm:px-8 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Steps Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* Title */}
          <div className="flex flex-col items-start justify-center text-gray-900 p-6 rounded-lg">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Getting Started with CrystalBricks
            </h2>

          </div>

          {/* Step 1 */}
          <div className="border p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="flex items-center justify-between mb-4">
              <span className="text-pink-600 text-2xl font-bold">01</span>
              <span className="text-pink-600">
                {/* Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14V7a2 2 0 00-2-2H7a2 2 0 00-2 2v7c0 .276.11.526.293.707L7 17h5m4 0v2a2 2 0 11-4 0v-2m4 0H9"
                  />
                </svg>
              </span>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Apply</h3>
            <p className="text-gray-600">
              Share some information about yourself, and choose your preferred
              investment tenure.
            </p>
          </div>

          {/* Step 2 */}
          <div className="border p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="flex items-center justify-between mb-4">
              <span className="text-pink-600 text-2xl font-bold">02</span>
              <span className="text-pink-600">
                {/* Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 11c0-1.104-.896-2-2-2s-2 .896-2 2a2 2 0 104 0zM5.459 20H18.54a2 2 0 002-2v-5a8 8 0 10-16 0v5a2 2 0 002 2z"
                  />
                </svg>
              </span>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Verify</h3>
            <p className="text-gray-600">
              We’ll verify the information that you’ve provided.
            </p>
          </div>

          {/* Step 3 */}
          <div className="border p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="flex items-center justify-between mb-4">
              <span className="text-pink-600 text-2xl font-bold">03</span>
              <span className="text-pink-600">
                {/* Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2zm0 12c-4.418 0-8-1.791-8-4V6a2 2 0 012-2h12a2 2 0 012 2v10c0 2.209-3.582 4-8 4z"
                  />
                </svg>
              </span>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              Deposit your funds
            </h3>
            <p className="text-gray-600">
              Sign needed documents, and funds are then deposited directly into
              the investment account in as little as 24 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
export default GettingStarted