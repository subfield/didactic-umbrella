import Tfnlogo from '../assets/Images/Tfnlogo.svg'
import AfriwokLogo from '../assets/Images/AfriwokLogo.svg'

const Sponsors = () => {
  return (
    <div className="bg-gray-50 w-full py-8 h-auto">
  {/* Title */}
  <h2 className="text-center font-bold sm:text-lg md:text-xl text-xl mb-6 px-20">
    We are Trusted by Over 100+ Businesses and Partners
  </h2>

  {/* Sponsors Logos */}
  <div className="flex flex-wrap justify-center items-center space-x-4 space-y-4 lg:space-y-0 lg:space-x-8">
    {/* Logo 1 */}
    <div className="grayscale hover:grayscale-0 transition">
      <img
        src={Tfnlogo}
        alt="Sponsor 1"
        className="w-auto h-[50px] md:h-[60px]"
      />
    </div>

    {/* Logo 2 */}
    <div className="grayscale hover:grayscale-0 transition">
      <img
        src={AfriwokLogo}
        alt="Sponsor 2"
        className="w-auto h-[50px] md:h-[60px]"
      />
    </div>

    {/* Logo 3 */}
    <div className="grayscale hover:grayscale-0 transition">
      <img
        src={Tfnlogo}
        alt="Sponsor 3"
        className="w-auto h-[50px] md:h-[60px]"
      />
    </div>

    {/* Logo 4 */}
    <div className="grayscale hover:grayscale-0 transition">
      <img
        src={AfriwokLogo}
        alt="Sponsor 4"
        className="w-auto h-[50px] md:h-[60px]"
      />
    </div>

    {/* Logo 5 */}
    <div className="grayscale hover:grayscale-0 transition">
      <img
        src={AfriwokLogo}
        alt="Sponsor 5"
        className="w-auto h-[50px] md:h-[60px]"
      />
    </div>
  </div>
</div>

  );
};

export default Sponsors;
