import FinancialAdvisoryImg from '../../assets/Images/FinancialAdvisory.svg'
import ForwardArrow from '../../assets/Icons/ForwardArrow.svg'
import IconBox from '../IconBox'

function FinancialAdvisory() {
  return (
    <>
        <section className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-6 lg:gap-10 px-6 md:px-12 lg:px-28 py-16">
    
    
    <div className="relative flex-shrink-0 w-full lg:w-1/2 flex justify-center lg:justify-start">
      <div className="relative flex justify-center lg:justify-start w-full">
        <img
          src={FinancialAdvisoryImg}
          alt="Hero"
          className="relative z-10 w-full max-w-[320px] md:max-w-[400px] lg:max-w-[480px] h-auto shadow-lg rounded-lg"
        />
      </div>
    </div>
    {/* Right Side - Accordion */}
    <div className="w-full lg:w-1/2">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Financial Advisory</h1>
      <p className="text-gray-700 text-lg md:text-lg  mb-6">
      Here at crystal bricks, we have a team of experts who provides tested and trusted professional guidance, recommendation and suggestions to enable our clients make better financial decisions on Money matters, personal finances and investments.<br />
        The primary goal of this service is to help clients manage their finances effectively, achieve their financial goals and plan for the future.
      </p>
      <p className='text-pink-700 flex items-center gap-1'>Request Service <IconBox icon={ForwardArrow} iconClassName='h-6 w-6' className='text-pink-700 '/></p>
    </div>
  </section>
    </>
  )
}
export default FinancialAdvisory