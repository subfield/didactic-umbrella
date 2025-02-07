import { Link } from "react-router-dom"

function BookSessionSuccessful() {
  return (
    <>
      <section className="bg-pink-50 py-8 px-6 md:py-12 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Session booked
        </h1>
      </div>
    </section>

    <section className="py-12 px-6 md:py-16 md:px-12 bg-white">
      <div className="max-w-xl text-gray-800">
        {/* Header */}
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Details received</h2>
        
        {/* Description */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          Thank you for booking your session with us. We will confirm your appointment 
          and provide further details via email shortly.
        </p>
        
        {/* Extra Info */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          If you have any questions or need to make changes, please don’t hesitate to reach out to  
          <a href="https://wa.me/2347069790950" target="_blank" rel="noopener noreferrer" className="text-pink-600 underline">
             wa.me/2347069790950
          </a>.
        </p>

        {/* Button */}
        <Link
          to={`/`}
          className="inline-block text-pink-500 font-medium px-5 py-2 border border-pink-500 hover:bg-pink-700 transition duration-300"
        >
          Go Home
        </Link>
      </div>
    </section>
    </>
  )
}
export default BookSessionSuccessful