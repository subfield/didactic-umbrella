import MoneyManagementImg from '../../assets/Images/MoneyManagement.svg'
import ForwardArrow from '../../assets/Icons/ForwardArrow.svg'
import IconBox from '../IconBox'

function MoneyManagement() {
    
  return (
    <div>
        <section className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-6 lg:gap-10 px-6 md:px-12 lg:px-28 py-16">
    
    {/* Right Side - Accordion */}
    <div className="w-full lg:w-1/2">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Money Management</h1>
      <p className="text-gray-700 text-lg md:text-lg  mb-6">
      At Crystal bricks, our clients are not limited to our products and services only. We offer brokerage services to clients who wish to engage in Government Treasury Bills, Bonds, Money Market, Pensions etc. we have bespoke services tailored to accommodate our clients financial status such as the Monthly Contributions groups also called AJOR
      </p>
      <p className='text-pink-700 flex items-center gap-1'>Request Service <IconBox icon={ForwardArrow} iconClassName='h-6 w-6' className='text-pink-700 '/></p>
    </div>
    <div className="relative flex-shrink-0 w-full lg:w-1/2 flex justify-center lg:justify-start">
      <div className="relative flex justify-center lg:justify-start w-full">
        <img
          src={MoneyManagementImg}
          alt="Hero"
          className="relative z-10 w-full max-w-[320px] md:max-w-[400px] lg:max-w-[480px] h-auto shadow-lg rounded-lg"
        />
      </div>
    </div>
  </section>
    </div>
  )
}
export default MoneyManagement