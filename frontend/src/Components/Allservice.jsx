import Allservices from '../assets/Images/Allservice.svg';

function Allservice() {
  return (
    <>
        <div className="flex flex-col md:flex-row container mx-auto gap-10 items-center justify-center px-6 py-12 bg-white">
      {/* Left Side: Image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0">
        <img
          src={Allservices}
          alt="Services"
          className="w-64 md:w-auto h-auto"
        />
      </div>

      {/* Right Side: Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h4 className="text-lg font-medium text-gray-600">
          WELCOME TO CRYSTAL BRICKS COOPERATIVE
        </h4>
        <h2 className="md:text-5xl sm:text-3xl text-3xl font-extrabold text-gray-800 mt-2 leading-tight">
          Building Financial <br /> Confidence Together
        </h2>
        <p className="text-gray-600 mt-4 max-w-lg text-lg md:text-2xl md:leading-9">
          Whether you are an individual, a business owner, or someone looking for
          flexible financial solutions, Crystal Bricks Cooperative is here to
          help you manage your money smartly and create lasting wealth. We
          provide a range of accessible investment, savings, and loan packages
          tailored to meet diverse financial needs, with the added convenience
          of 24/7 access to funds in emergencies.
        </p>
        <a
          href="#"
          className="inline-block mt-6 text-purple-700 font-semibold hover:underline"
        >
          Learn More →
        </a>
      </div>
    </div>
    </>
  )
}
export default Allservice