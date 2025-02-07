import PropertiesPlaceholder from '../../assets/Images/PropertiesPlaceholder.svg'
import PropertiesPlaceholer2 from '../../assets/Images/PropertiesPlaceholer2.svg'

function PicturesAndPrice() {
  return (
    <>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">3 Bedroom Apartment</h1>
          <p className="text-gray-600 mt-1">Lugbe Axis, Abuja</p>
        </div>
        <div className="mt-2 sm:mt-0">
          <p className="text-2xl sm:text-3xl font-bold text-gray-900">₦150,000</p>
        </div>
      </div>

      {/* Main Image Container */}
      <div className="relative mb-4">
        <div className="absolute top-2 left-0 z-10">
          <span className="bg-pink-600 text-white px-6 py-3 text-sm font-semibold">
            FOR LEASE
          </span>
        </div>
        <div className="aspect-[16/9] relative overflow-hidden">
          <img
            src={PropertiesPlaceholder}
            alt="Main property view"
            width={1600}
            height={900}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Thumbnail Gallery */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((index) => (
          <button 
            key={index}
            className="relative aspect-[4/3] overflow-hidden focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
          >
            <img
              src={PropertiesPlaceholer2}
              alt={`Property view ${index}`}
              width={400}
              height={300}
              className="object-cover w-full h-full hover:opacity-75 transition-opacity"
            />
          </button>
        ))}
      </div>

      {/* Mobile Scroll Indicator */}
      <div className="mt-4 sm:hidden flex justify-center gap-1">
        {[1, 2, 3, 4].map((index) => (
          <div 
            key={index}
            className={`h-1 rounded-full ${
              index === 1 ? 'w-4 bg-pink-600' : 'w-1 bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
    </>
  )
}
export default PicturesAndPrice