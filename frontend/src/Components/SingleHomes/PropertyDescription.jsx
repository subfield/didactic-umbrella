function PropertyDescription() {
  return (
    <>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Description Section */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">Property Description</h2>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 leading-relaxed">
              Nestled on a sprawling estate with breathtaking panoramic views of the Pacific Ocean, this extraordinary mansion redefines luxury living. A masterpiece of architectural brilliance, the residence boasts unparalleled craftsmanship and exquisite attention to detail. Step into a world of grandeur as you enter through the imposing double doors.
            </p>
            
            <ul className="space-y-3 text-gray-600 mt-4">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>where a grand foyer with soaring ceilings and a sweeping marble staircase sets the tone for the opulence that awaits.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>with state-of-the-art appliances and a butlers pantry.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>frame the stunning coastal vistas. A gourmet kitchen, a chefs dream, is equipped</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>frame the stunning coastal vistas. A gourmet kitchen, a chefs dream, is equipped</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Interest Card */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Interested in this property?
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Send a request to check availability
            </p>
            <button className=" bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 transition-colors">
              Book Reservation
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
export default PropertyDescription