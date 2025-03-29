import React from "react";

function Vedio() {
  return (
    <section className="bg-gray-100 py-10 md:py-20">
      <div className="max-w-screen-xl mx-auto flex flex-col justify-center items-center gap-6 md:gap-12 px-4 md:px-0">
        <h2 className="text-center text-2xl md:text-5xl font-bold leading-tight">
          Use illustrations in UI design
        </h2>
        <img
          src="/vedio.png"
          className="w-full max-w-6xl rounded-lg shadow-lg object-cover"
          alt="Video Illustration"
        />
      </div>
    </section>
  );
}

export default Vedio;
