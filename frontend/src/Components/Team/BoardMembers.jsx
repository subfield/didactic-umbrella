import { useState, useEffect } from "react";
import Member1 from '../../assets/Images/TeamMembers/Member1.svg';
import Member2 from '../../assets/Images/TeamMembers/Member2.svg';
import Member3 from '../../assets/Images/TeamMembers/Member3.svg';
import Member4 from '../../assets/Images/TeamMembers/Member4.svg';
import Member5 from '../../assets/Images/TeamMembers/Member5.svg';
import Member6 from '../../assets/Images/TeamMembers/Member6.svg';

const BoardMembers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(5);

  const members = [
    {
      name: "Uche Iroasukwu",
      role: "Founder & CEO",
      image: Member1,
    },
    {
      name: "Uche Thomas",
      role: "Director of Operations",
      image: Member2,
    },
    {
      name: "Uche Godson",
      role: "Chief Technology Officer",
      image: Member3,
    },
    {
      name: "Uche Ekpo",
      role: "Chief Financial Officer",
      image: Member4,
    },
    {
      name: "John Doe",
      role: "VP of Marketing",
      image: Member5,
    },
    {
      name: "Jane Smith",
      role: "Head of HR",
      image: Member6,
    },
  ];

  // Update items to show based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsToShow(5);
      } else if (window.innerWidth >= 768) {
        setItemsToShow(3);
      } else {
        setItemsToShow(1);
      }
    };

    // Set initial state
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? members.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === members.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Calculate displayed members with circular wrapping
  const displayedMembers = members.slice(currentIndex, currentIndex + itemsToShow).concat(
    members.slice(0, Math.max(0, currentIndex + itemsToShow - members.length))
  );

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4 lg:px-16">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl md:text-4xl font-extrabold">Board Members</h2>
            <p className="text-gray-500 pt-4">Lorem ipsum dats Lorem ipsum datsLorem ipsum <br/>datsLorem ipsum dats</p>
          </div>
          <div className="flex items-center space-x-4">
            <button
              className="prev-button p-4 border hover:bg-gray-200 transition"
              onClick={handlePrevious}
              aria-label="Previous Members"
            >
              ←
            </button>
            <button
              className="next-button p-4 border hover:bg-gray-200 transition"
              onClick={handleNext}
              aria-label="Next Members"
            >
              →
            </button>
          </div>
        </div>

        {/* Members */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-6">
          {displayedMembers.map((member, index) => (
            <div 
              key={index} 
              className="relative transition-opacity duration-300 p-2 border-2"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-62 md:h-56  object-cover"
              />
              <div className="w-full px-4 py-1 rounded-b-lg">
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-sm text-pink-800">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BoardMembers;