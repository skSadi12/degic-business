import React from "react";

function BoomArea() {
  return (
    <section className="bg-[#5F62E2] ">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12  gap-10">
        {/* Text Section */}
        <div className="space-y-6 text-center lg:text-left w-full py-10 lg:w-1/2">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-snug">
            The quickest way to create awesome presentations
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="p-3 w-full sm:w-auto rounded-md bg-green-400 text-white hover:bg-black font-semibold transition duration-300">
              Get Started
            </button>
            <button className="p-3 w-full sm:w-auto rounded-md bg-indigo-400 text-white hover:bg-black font-semibold transition duration-300">
              Learn More
            </button>
          </div>
        </div>
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/bom.png"
            alt="Presentation Illustration"
            className="w-full max-w-md lg:max-w-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default BoomArea;
