import BlogsPlaceholderImage from '../../assets/Images/BlogsPlaceholder.svg';

function Blogs() {
  return (
    <>
        <div className="px-8 container mx-auto sm:px-18 lg:px-28">
      <h1 className="text-3xl font-bold mb-6">All blog posts</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {[1, 2, 3, 4].map((post) => (
          <article key={post} className="group cursor-pointer">
            <div className="relative h-48 mb-4 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-100 to-blue-100 opacity-50" />
              <img
                src={BlogsPlaceholderImage}
                alt="Mountain landscape"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-pink-600">
                <span>Alan Whitman</span>
                <span className="mx-2">•</span>
                <span>17 Jan 2024</span>
              </div>
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium group-hover:text-blue-600">
                  {post % 2 === 0 
                    ? "Why Financial Preparedness Matters"
                    : "5 Smart Ways to Prepare for Financial Emergencies"}
                </h2>
                {/* <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" /> */}
              </div>
              <p className="text-sm text-gray-500">
                Mental models are simple expressions of complex processes or relationships
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 text-xs rounded-full bg-purple-100 text-purple-600">
                  Leadership
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-600">
                  Management
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
      <hr />

      <div className="flex items-center justify-between gap-1 mt-4 pb-5">
      <button
        className="inline-flex items-center justify-center px-5 py-2 text-sm text-gray-500 border rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
        disabled
      >
        <svg
          className="w-4 h-4 mr-2"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
        Previous
      </button>
      
      <div className="hidden sm:flex items-center gap-1">
        {[1, 2, 3].map((page) => (
          <button
            key={page}
            className={`inline-flex items-center justify-center w-10 h-10 text-sm border rounded-lg
              ${page === 1 
                ? 'bg-purple-50 border-purple-100 text-purple-600' 
                : 'text-gray-500 hover:bg-gray-50'}`}
          >
            {page}
          </button>
        ))}
        
        <span className="inline-flex items-center justify-center w-10 h-10 text-sm text-gray-500">
          ...
        </span>
        
        {[8, 9, 10].map((page) => (
          <button
            key={page}
            className="inline-flex items-center justify-center w-10 h-10 text-sm border rounded-lg text-gray-500 hover:bg-gray-50"
          >
            {page}
          </button>
        ))}
      </div>
      
      {/* Mobile pagination */}
      <div className="sm:hidden text-sm text-gray-500">
        <span>Page 1 of 10</span>
      </div>
      
      <button className="inline-flex items-center justify-center px-5 py-2 text-sm text-gray-500 border rounded-lg hover:bg-gray-50">
        Next
        <svg
          className="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
    </div>
    </>
  );
}

export default Blogs;