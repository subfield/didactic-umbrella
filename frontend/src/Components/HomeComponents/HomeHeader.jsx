import { Link } from 'react-router-dom';
import HomeBG from '../../assets/Images/HomeBG.svg';

function HomeHeader() {
  return (
    <>
        <div
        className="relative w-full h-[580px] overflow-hidden"
      >
        {/* Background Image with Linear Gradient */}
        <div
          className="absolute inset-0 bg-cover bg-top"
          style={{
            backgroundImage:  
              `linear-gradient(to right, rgba(148, 0, 85, 0.6), rgba(148, 0, 85, 0.3)), url(${HomeBG})`,
          }}
        ></div>
  
        {/* Content */}
        <div className="relative flex flex-col justify-center items-start px-8 lg:px-20 h-full pt-40 text-white w-full lg:w-1/2">
          <h1 className="text-3xl lg:text-5xl font-bold mb-4">
          Discover Your Dream Home
          </h1>
          <p className="text-lg lg:text-xl mb-6">
          Browse our listings to find the perfect property for your lifestyle and budget.
          </p>
          <div className="flex gap-4">
            <Link to={`/book_a_session`}>
              <button className="px-6 py-3 bg-transparent text-white border font-light hover:bg-pink-700">
                Book Consultation
              </button>
            </Link>
            <Link to={`/request_service`}>
              <button className="px-6 py-3 bg-[#AC4185] text-white font-light  hover:bg-pink-400">
                Explore Now →
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
export default HomeHeader