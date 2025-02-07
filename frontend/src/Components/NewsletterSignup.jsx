
const NewsletterSignup = () => {
  return (
    <div className="w-full flex justify-center py-20 px-4 md:px-6">
      <div className="w-full max-w-4xl py-14 px-12 md:py-20 md:px-24 text-center bg-gradient-to-r from-pink-400 via-pink-300 to-pink-200">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Get notified when we have new updates
        </h2>

        {/* Description */}
        <p className="text-gray-800 md:text-lg text-base mb-6">
          Amat minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint velit officia consequat duis enim velit mollit.
        </p>

        {/* Input Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          {/* Input */}
          <input
            type="email"
            placeholder="Enter Email Address"
            className="w-full md:w-2/3 px-4 py-2 border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />

          {/* Button */}
          <button
            className="w-full md:w-auto bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 font-semibold transition duration-300"
            onClick={() => alert("Thank you for subscribing!")}
          >
            Notify Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;
