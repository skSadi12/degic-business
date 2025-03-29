import React, { useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Slider() {
  const slider = [
    {
      id: 1,
      heading: "Make more time for the work that matters most",
      description: "Best software platform for running an internet business.",
      image: "Character.png",
    },
    {
      id: 2,
      heading: "Grow your business with smart automation",
      description: "Automate tasks and focus on what truly matters.",
      image: "Group3.png",
    },
    {
      id: 3,
      heading: "Achieve better results with powerful tools",
      description: "Unlock new opportunities with our feature-rich platform.",
      image: "Group4.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevCard = () => {
    setCurrentIndex((prev) => (prev === 0 ? slider.length - 1 : prev - 1));
  };

  const nextCard = () => {
    setCurrentIndex((prev) => (prev === slider.length - 1 ? 0 : prev + 1));
  };

  const { heading, description, image } = slider[currentIndex];

  return (
    <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-10">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        
        {/* Left Side */}
        <div className="flex flex-col justify-between space-y-6 w-full md:w-1/2 text-center md:text-left">
          <img className="w-12 md:w-20 mx-auto md:mx-0" src="/Shape.png" alt="Shape" />
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">{heading}</h2>
          <p className="text-lg md:text-xl text-gray-600">{description}</p>
          <div className="flex justify-center md:justify-start space-x-4">
            <button
              onClick={prevCard}
              className="bg-gray-300 hover:bg-gray-400 rounded-full p-3 transition duration-300"
            >
              <ArrowBackIosNewIcon />
            </button>
            <button
              onClick={nextCard}
              className="bg-gray-300 hover:bg-gray-400 rounded-full p-3 transition duration-300"
            >
              <ArrowForwardIosIcon />
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img className="w-full max-w-xs md:max-w-md" src={image} alt="Slider Image" />
        </div>
      </div>

      {/* Logo Section */}
      <div className="mt-10">
        <img className="w-full" src="/Logos.png" alt="Logos" />
      </div>
    </section>
  );
}

export default Slider;
