function Numbers() {
  return (
    <>
        <div className="bg-pink-50 py-12 md:py-24 px-6 sm:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        {/* Transactions */}
        <div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-pink-900">
            200M+
          </h2>
          <p className="text-gray-600 text-lg md:text-xl mt-2">Transactions</p>
        </div>

        {/* Satisfied Customers */}
        <div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-pink-900">
            1k+
          </h2>
          <p className="text-gray-600 text-lg mt-2 md:text-xl">Satisfied Customers</p>
        </div>

        {/* Partners/Clients */}
        <div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-pink-900">
            20+
          </h2>
          <p className="text-gray-600 text-lg mt-2 md:text-xl">Partners/Clients</p>
        </div>
      </div>
    </div>
    </>
  )
}
export default Numbers