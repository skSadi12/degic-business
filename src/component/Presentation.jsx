import React from "react";

function Presentation() {
  const cardData = [
    {
      source: "Group1.png",
      heading: "Management",
      text: "Software platform for running your new internet business",
    },
    {
      source: "Group2.png",
      heading: "Entertainment",
      text: "Software platform for running your new internet business",
    },
    {
      source: "Group3.png",
      heading: "Marketing",
      text: "Software platform for running your new internet business",
    },
    {
      source: "Group4.png",
      heading: "References",
      text: "Software platform for running your new internet business",
    },
  ];

  const social = [
    { link: "fb.png", name: "Facebook" },
    { link: "inst.png", name: "Instagram" },
    { link: "tw.png", name: "Twitter" },
  ];

  return (
    <section className="bg-gray-100 py-10">
      <div className="container flex flex-col lg:flex-row items-center max-w-[1400px] mx-auto p-6 md:p-10 gap-10 lg:gap-20">
        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-1/2">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-md text-center shadow-md hover:bg-gray-300 transition-all duration-500"
            >
              <div className="flex items-center justify-center">
                <img
                  src={card.source}
                  alt={card.heading}
                  className="w-16 h-16"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold">{card.heading}</h3>
                <p className="text-sm text-gray-600">{card.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Text Section */}
        <div className="space-y-6 w-full lg:w-1/2 text-center lg:text-start">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            The quickest way to create modern presentation
          </h1>
          <p className="text-gray-700 text-lg">
            Best software platform for running an internet business. We build
            the most powerful and flexible tools for internet commerce.
          </p>
          <button className="px-6 py-3 bg-[#5F62E226] text-[#5F62E2] hover:text-white hover:bg-blue-700 transition duration-300 rounded-md">
            Explore All →
          </button>

          {/* Social Icons */}
          <p className="text-gray-600 font-semibold">Follow us</p>
          <div className="flex gap-4 justify-center lg:justify-start">
            {social.map((data, index) => (
              <a key={index} href="#" aria-label={data.name}>
                <img
                  src={data.link}
                  className="h-8 w-8 md:h-10 md:w-10 transition-transform transform hover:scale-110"
                  alt={data.name}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Presentation;
