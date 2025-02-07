const WhyChooseUs = () => {
  const reasons = [
    {
      title: "24/7 Access to Credit",
      description:
        "Enjoy round-the-clock access to funds whenever you need them.",
    },
    {
      title: "Community-Centered Growth",
      description:
        "We prioritize a people-first approach, ensuring every member has the support they need to succeed.",
    },
    {
      title: "Tailored Financial Solutions",
      description:
        "Our team takes the time to understand your goals and tailor our packages to suit your individual needs.",
    },
  ];

  return (
    <section className="px-6 lg:px-20 py-16 bg-white">
      <div className="mx-auto flex flex-col md:flex-row gap-8 md:gap-20">
        {/* Left Section */}
        <div className="space-y-4 md:basis-1/3 md:flex-grow-0">
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            <span className="relative">
              Why Choose <br />
              <span className="z-0 absolute bottom-0 left-0 w-full h-1 bg-pink-500 rounded opacity-50"></span>
              <span className="relative z-10">CrystalBricks</span>
            </span>
          </h2>
        </div>

        {/* Right Section */}
        <div className="space-y-6 md:basis-2/3 md:flex-grow">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white border border-gray-200 p-6">
              <h3 className="text-xl md:text-2xl font-bold text-pink-900 mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-600 md:text-lg">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
