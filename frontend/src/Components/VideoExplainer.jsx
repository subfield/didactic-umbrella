/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import Videobackground from '../assets/Images/Videobackground.svg'

const SpotlightHeader = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    const video = document.getElementById("video");
    video.play();
  };

  const handlePause = () => {
    setIsPlaying(false);
    const video = document.getElementById("video");
    video.pause();
  };
  return (
      <>
    <div className="container mx-auto px-4 mt-5 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="md:text-5xl sm:text-4xl text-3xl font-extrabold">
            Today's Spotlight on{' '} <br />
            <span className="relative">
              Proven Results
              <span className="absolute -bottom-17 left-0 w-full h-1 bg-pink-600"></span>
            </span>
          </h2>
        </div>
        <div className="text-gray-600 max-w-md">
          <p className="text-base sm:text-lg md:text-1xl"> 
            <span className="font-semibold">Adetokunbo Odeni</span> shares her story:
            <br className="hidden sm:block" />
            From loan to successful store owner.
          </p>
        </div>
      </div>
    </div> 


    <div
      className="relative w-full h-[400px] lg:h-[500px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${Videobackground})`, // Adjust the path if necessary
      }}
    >
      {/* Video Element */}
      <video
        id="video"
        className="absolute inset-0 w-full h-full object-cover"
        src="path-to-your-video.mp4" // Replace with your video path
        muted
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        style={{ display: isPlaying ? "block" : "none" }}
      ></video>

      {/* Overlay Content */}
      {!isPlaying && (
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white">
          {/* Play Button */}
          <button
            className="flex items-center justify-center w-16 h-16 rounded-full bg-white text-black shadow-md mb-2"
            onClick={handlePlay}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 5.25l13.5 6.75-13.5 6.75V5.25z"
              />
            </svg>
          </button>
          {/* Caption */}
          <p className="text-lg">Watch</p>
        </div>
      )}

      {/* Pause Button */}
      {isPlaying && (
        <button
          className="absolute top-4 right-4 bg-white text-black rounded-full p-2 shadow-md"
          onClick={handlePause}
        >
          Pause
        </button>
      )}
    </div>
    </>
    )
  }
  
  export default SpotlightHeader