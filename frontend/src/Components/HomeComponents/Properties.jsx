import PropertiesPlaceholder from "../../assets/images/PropertiesPlaceholder.svg";

function Properties() {
  return (
    <>
      <section className="py-0 ">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-20">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Properties
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {/* Property Card 1 */}
            <div className="relative overflow-hidden shadow-md">
              <img
                src={PropertiesPlaceholder}
                alt="3 Bedroom Apartment"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-0 left-0 bg-pink-500 text-white text-xs font-semibold px-6 py-3">
                FOR LEASE
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-lg font-semibold text-white">
                  3 Bedroom Apartment
                </h3>
                <p className="text-sm text-gray-200">Lugbe, Abuja</p>
                <p className="mt-1 text-xl font-bold text-white">
                  ₦400,000,000/night
                </p>
              </div>
            </div>

            {/* Property Card 2 */}
            <div className="relative overflow-hidden shadow-md">
              <img
                src={PropertiesPlaceholder}
                alt="3 Bedroom Apartment"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-0 left-0 bg-pink-500 text-white text-xs font-semibold px-6 py-3">
                NEW
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-lg font-semibold text-white">
                  3 Bedroom Apartment
                </h3>
                <p className="text-sm text-gray-200">Lugbe, Abuja</p>
                <p className="mt-1 text-xl font-bold text-white">
                  ₦150,000/night
                </p>
              </div>
            </div>

            {/* Property Card 3 */}
            <div className="relative overflow-hidden shadow-md">
              <img
                src={PropertiesPlaceholder}
                alt="3 Bedroom Apartment"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-0 left-0 bg-pink-500 text-white text-xs font-semibold px-6 py-3">
                NEW
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-lg font-semibold text-white">
                  3 Bedroom Apartment
                </h3>
                <p className="text-sm text-gray-200">Lugbe, Abuja</p>
                <p className="mt-1 text-xl font-bold text-white">
                  ₦150,000/night
                </p>
              </div>
            </div>

            {/* Property Card 4 */}
            <div className="relative overflow-hidden shadow-md">
              <img
                src={PropertiesPlaceholder}
                alt="3 Bedroom Apartment"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-0 left-0 bg-pink-500 text-white text-xs font-semibold px-6 py-3">
                NEW
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-lg font-semibold text-white">
                  3 Bedroom Apartment
                </h3>
                <p className="text-sm text-gray-200">Lugbe, Abuja</p>
                <p className="mt-1 text-xl font-bold text-white">
                  ₦150,000/night
                </p>
              </div>
            </div>
            {/* Property Card 3 */}
            <div className="relative overflow-hidden shadow-md">
              <img
                src={PropertiesPlaceholder}
                alt="3 Bedroom Apartment"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-0 left-0 bg-pink-500 text-white text-xs font-semibold px-6 py-3">
                NEW
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-lg font-semibold text-white">
                  3 Bedroom Apartment
                </h3>
                <p className="text-sm text-gray-200">Lugbe, Abuja</p>
                <p className="mt-1 text-xl font-bold text-white">
                  ₦150,000/night
                </p>
              </div>
            </div>

            {/* Property Card 4 */}
            <div className="relative overflow-hidden shadow-md">
              <img
                src={PropertiesPlaceholder}
                alt="3 Bedroom Apartment"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-0 left-0 bg-pink-500 text-white text-xs font-semibold px-6 py-3">
                NEW
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-lg font-semibold text-white">
                  3 Bedroom Apartment
                </h3>
                <p className="text-sm text-gray-200">Lugbe, Abuja</p>
                <p className="mt-1 text-xl font-bold text-white">
                  ₦150,000/night
                </p>
              </div>
            </div>
          </div>
            {/* New Alternative Pagination */}
        <div className="mt-8 flex items-center justify-between gap-1 px-4 py-6">
          <button className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700 border">
            Previous
          </button>
          
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4].map((page) => (
              <button
                key={page}
                className={`w-8 h-8 flex items-center justify-center text-sm
                  ${page === 1 
                    ? 'bg-pink-100 text-pink-600' 
                    : 'text-gray-500 hover:bg-gray-100'}`}
              >
                {page}
              </button>
            ))}
          </div>

          <button className="flex items-center gap-1 px-4 py-2 border text-sm text-gray-500 hover:text-gray-700">
            Next
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Mobile version */}
        {/* <div className="mt-8 sm:hidden flex justify-between items-center px-4">
          <button className="px-3 py-1 text-sm text-gray-500 hover:text-gray-700">
            Previous
          </button>
          <span className="text-sm text-gray-500">Page 3 of 10</span>
          <button className="flex items-center gap-1 px-3 py-1 text-sm text-gray-500 hover:text-gray-700">
            Next
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>           */}
        </div>
      </section>
    </>
  );
}
export default Properties;
