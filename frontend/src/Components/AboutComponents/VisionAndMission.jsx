import IconBox from "../IconBox"
import OurVision from "../../assets/Icons/OurVision.svg"
import OurMission from "../../assets/Icons/OurMission.svg"

function VisionAndMission() {
  return (
    <>
        <section className="py-12 px-6 sm:py-16 sm:px-10 lg:py-24 md:px-24 lg:px-48">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-6">
      {/* Mission */}
      <div className="bg-gray-100 px-6 py-8 md:px-10 md:py-12">
        <div className="flex flex-col items-start">
          <div className="p-3 bg-pink-100">
            <IconBox icon={OurMission} iconClassName="h-6 w-6" />
          </div>
          <h3 className="text-2xl md:text-3xl mt-4 font-bold text-pink-700">Our Mission</h3>
        </div>
        <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed">
          Crystal Bricks Cooperative is dedicated to consistently delivering
          high-quality financial services to enable our clients to meet their
          objectives in terms of profitability, financial freedom, and safety.
        </p>
      </div>

      {/* Vision */}
      <div className="px-6 py-8 md:px-10 md:py-12">
        <div className="flex flex-col items-start">
          <div className="p-3 bg-pink-100">
            <IconBox icon={OurVision} iconClassName="h-6 w-6" />
          </div>
          <h3 className="text-2xl md:text-3xl mt-4 font-bold text-pink-700">Our Vision</h3>
        </div>
        <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed">
          To be a leading provider of financial support and services by
          delivering high-quality services to our clients, empowering our
          people, giving back to the community, and earning a fair return on the
          value we deliver.
        </p>
      </div>
    </div>
  </div>
</section>


    </>
  )
}
export default VisionAndMission