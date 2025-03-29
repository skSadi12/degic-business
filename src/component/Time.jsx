import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Time() {
  return (
    <section className="max-w-screen-xl mx-auto px-6 lg:px-12 py-16 space-y-16">
      {/* First Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Side */}
        <div className="w-full lg:w-1/2">
          <img className="w-full object-cover rounded-lg" src="/Group11.png" alt="Work Illustration" />
        </div>
        {/* Right Side */}
        <div className="space-y-6 w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl md:text-5xl font-bold leading-snug">
            Make more time for the work
          </h2>
          <div className="space-y-4">
            {["Many ways to use illustrations in design", "Simply explained with illustrations", "Make more time for the work"].map((text, index) => (
              <p key={index} className="text-md flex items-center justify-center lg:justify-start">
                <CheckCircleOutlineIcon className="text-green-500 mr-3" />
                {text}
              </p>
            ))}
          </div>
          <button className="p-3 mt-5 bg-[#5F62E2] rounded-lg text-white hover:bg-blue-700 transition duration-300 flex items-center mx-auto lg:mx-0">
            Learn more <ArrowForwardIcon className="ml-2" />
          </button>
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* Left Side */}
        <div className="space-y-6 w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl md:text-5xl font-bold leading-snug">
            Organize your workflow efficiently
          </h2>
          <div className="space-y-4">
            {["Optimize your workflow with smart tools", "Boost productivity with automation", "Track and manage tasks easily"].map((text, index) => (
              <p key={index} className="text-md flex items-center justify-center lg:justify-start">
                <CheckCircleOutlineIcon className="text-green-500 mr-3" />
                {text}
              </p>
            ))}
          </div>
          <button className="p-3 bg-[#5F62E226] text-[#5F62E2] hover:text-white hover:bg-blue-700 transition duration-300 flex items-center mx-auto lg:mx-0">
            Learn more <ArrowForwardIcon className="ml-2" />
          </button>
        </div>
        {/* Right Side */}
        <div className="w-full lg:w-1/2">
          <img className="w-full object-cover rounded-lg" src="/Group22.png" alt="Workflow Illustration" />
        </div>
      </div>
    </section>
  );
}

export default Time;
