import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Blogs() {
    const MyCard = [
        {
            id: 1,
            image: "blogs1.png",
            heading: "Make myspace your best designed space",
            dis: "A lot of different components that will help you create the perfect look for your project",
            btnText: "Design"
        },
        {
            id: 2,
            image: "blogs2.png",
            heading: "My company culture has changed today",
            dis: "A lot of different components that will help you create the perfect look for your project",
            btnText: "3D illustrations"
        },
        {
            id: 3,
            image: "blogs3.png",
            heading: "Professionals in craft! All products were super great",
            dis: "A lot of different components that will help you create the perfect look for your project",
            btnText: "Development"
        }
    ];

    return (
        <section className="max-w-[1400px] mx-auto my-16 px-4 sm:px-6 lg:px-12">
            <div className="space-y-6 text-center md:text-left">
                <h1 className="text-3xl sm:text-5xl font-bold">Get more from our blog</h1>
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="max-w-96 text-md sm:text-lg text-gray-500 text-center md:text-left">
                        There are a lot of different components that will help you create the perfect look for your project.
                    </p>
                    <button className="p-3 bg-[#5F62E226] text-[#5F62E2] hover:text-white hover:bg-blue-700 transition duration-300 flex items-center">
                        Explore All <ArrowForwardIcon className="ml-2" />
                    </button>
                </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                {MyCard.map((data) => (
                    <div key={data.id} className="bg-gray-100 rounded-lg p-6 space-y-5 hover:shadow-xl transition duration-300">
                        <img className="w-full h-auto rounded-md" src={data.image} alt="coming soon" />
                        <h3 className="text-xl sm:text-2xl font-semibold">{data.heading}</h3>
                        <p className="text-sm sm:text-md text-gray-500">{data.dis}</p>
                        <button className="px-4 py-2 bg-green-200 rounded-lg hover:bg-green-500 transition duration-300">
                            {data.btnText}
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Blogs;