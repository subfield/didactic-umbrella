import { useState, useEffect } from "react";
import Firstslider from "../assets/Images/Firstslider.svg";
import SecondSlider from "../assets/Images/SecondSlider.svg";
import ThirdSlider from "../assets/Images/ThirdSlider.svg";
import { Link } from "react-router-dom";

const HeaderSlider = () => {
  const slides = [
    {
      id: 1,
      image: Firstslider,
      title: "Your Financial Success, Our Priority.",
      description:
        "From personal loans to secure savings plans, we offer solutions that align with your financial goals.",
      buttons: [
        {
          text: "Book consultation",
          link: "/book_a_session",
          style: "bg-transparent text-white border border-white",
        },
        {
          text: "Explore Offerings →",
          link: "/about",
          style: "bg-pink-600 text-white",
        },
      ],
    },
    {
      id: 2,
      image: SecondSlider,
      title: "Discover Your Dream Home",
      description:
        "Browse our listings to find the perfect property for your lifestyle and budget.",
      buttons: [
        {
          text: "Book consultation",
          link: "/book_a_session",
          style: "bg-transparent text-white border border-white",
        },
        {
          text: "Explore Offerings →",
          link: "/about",
          style: "bg-pink-600 text-white",
        },
      ],
    },
    {
      id: 3,
      image: ThirdSlider,
      title: "Join Our Team!",
      description:
        "We're Expanding Our Horizons and Looking for Talented Individuals Like You! Think you have what it takes to be part of our dynamic team? ",
      buttons: [
        {
          text: "Apply Now",
          link: "request_service",
          style: "bg-transparent text-white border border-white",
        },
        { text: "View Careers →", 
          link: "/team", 
          style: "bg-pink-600 text-white" },
      ],
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  // Manual navigation
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-[622px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image with Linear Gradient */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(148, 0, 85, 1), rgba(0, 0, 0, 0)), 
                url(${slide.image})
              `,
            }}
          ></div>

          {/* Content */}
          <div className="relative z-20 flex flex-col justify-center items-start px-8 lg:px-20 h-full pt-40 text-white w-full lg:w-1/2">
            <h1 className="text-3xl lg:text-5xl font-bold mb-4">
              {slide.title}
            </h1>
            <p className="text-lg lg:text-xl mb-6">{slide.description}</p>
            <div className="flex gap-4">
              {slide.buttons.map((button, i) => (
                <Link
                  key={i}
                  to={button.link}
                  className={`px-6 py-3 text-sm lg:text-base font-bold ${button.style} hover:opacity-90`}
                >
                  {button.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-6 right-6 flex flex-col items-center space-y-2">
        {/* Navigation Button */}
        <button
          className="bg-white text-pink-600 p-4 shadow-md hover:bg-pink-600 hover:text-white transition"
          onClick={nextSlide}
        >
          →
        </button>

        {/* Active Slide Indicators */}
        <div className="flex items-center gap-1">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-0.5 w-3 rounded ${
                currentSlide === index ? "bg-pink-600" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderSlider;
