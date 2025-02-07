/* eslint-disable react/no-unescaped-entities */
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
    {
      name: "Aisha O.",
      role: "Business Owner",
      text: "I joined Crystal Bricks a year ago, and it’s been a lifesaver. Having access to funds during emergencies has given me peace of mind, and my savings have grown beyond my expectations.",
    },
    {
      name: "Tunde M.",
      role: "Entrepreneur",
      text: "Crystal Bricks’ investment package has helped my business expand without worrying about funds. It’s a reliable financial partner for personal and professional goals.",
    },
    {
      name: "Hafeez M.",
      role: "Store Owner",
      text: "Crystal Bricks has been a sure partner through the highs and lows. Thank you so much for your dedication and commitment to our success.",
    },
    {
        name: "Aisha O.",
        role: "Business Owner",
        text: "I joined Crystal Bricks a year ago, and it’s been a lifesaver. Having access to funds during emergencies has given me peace of mind, and my savings have grown beyond my expectations.",
      },
      {
        name: "Tunde M.",
        role: "Entrepreneur",
        text: "Crystal Bricks’ investment package has helped my business expand without worrying about funds. It’s a reliable financial partner for personal and professional goals.",
      },
      {
        name: "Hafeez M.",
        role: "Store Owner",
        text: "Crystal Bricks has been a sure partner through the highs and lows. Thank you so much for your dedication and commitment to our success.",
      },
    // Add more testimonials if needed
];

function Testimonials() {

    const swiperRef = useRef(null);

  return (
    <>
        <div className="bg-white pt-20 px-6 sm:px-12 md:px-20 lg:px-48">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-8">
        {/* Left Content */}
        <div className="lg:w-1/2">
          <h3 className="text-xl sm:text-2xl font-bold text-pink-900 mb-2">
            Community Impact
          </h3>
          <p className="italic text-gray-700 font-bold">
            Crystal Bricks is more than just a financial institution;{" "}
            <span className="font-semibold">we’re a support system.</span>
          </p>
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2">
          <div className="flex flex-col items-start gap-2">
            <div className="h-2 w-10 bg-pink-900 mt-1"></div>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our cooperative approach ensures that members have access to
              resources they need to thrive—whether it’s immediate funding for
              unforeseen situations or guidance on making informed investment
              decisions.
            </p>
          </div>
        </div>
      </div>
    </div>


    <div className="py-12 px-4 sm:px-8 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Swiper Container */}
        <Swiper
          modules={[Navigation, Autoplay]}
          centeredSlides={true} // Center active slide, next slide peeks on the right
          slidesPerView={1.15} // Slightly more than 1 slide visible
          spaceBetween={16}
          breakpoints={{
            640: { slidesPerView: 1.5, spaceBetween: 20 },
            768: { slidesPerView: 2.2, spaceBetween: 24 },
            1024: { slidesPerView: 3.2, spaceBetween: 30 },
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          loop={true}
          navigation={{ prevEl: ".prev-button", nextEl: ".next-button" }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="px-6 py-8 border bg-pink-50 h-72 flex flex-col justify-between">
                <p className="text-gray-700 mb-6 text-base flex-grow">
                  "{item.text}"
                </p>
                <div>
                  <h4 className="font-bold text-gray-900">{item.name}</h4>
                  <p className="text-pink-600 text-sm">{item.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            className="prev-button p-4 border hover:bg-gray-200 transition"
            aria-label="Previous Slide"
          >
            ←
          </button>
          <button
            className="next-button p-4 border hover:bg-gray-200 transition"
            aria-label="Next Slide"
          >
            →
          </button>
        </div>
      </div>
    </div>
    </>
  )
}
export default Testimonials