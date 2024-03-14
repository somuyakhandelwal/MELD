import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-6 w-full">
        {/* Combined box for "Big Box," "Box 1," and "Box 2" */}
        <div className="col-span-6  h-80 bg-[#FDFDFD] p-10 pt-16 rounded-r-2xl rounded-tl-2xl font-orbitron text-5xl">
          Ideate <span className="text-[#61C0CC] font-bold">,</span>
          <strong>Validate</strong>{" "}
          <span className="text-[#61C0CC] font-bold">,</span> Innovate <br />{" "}
          <br /> <strong>AI</strong>-Powered Evolution <br />
          <span className="text-[#61C0CC]">for</span> Your Ideas
        </div>

        {/* Three equal columns for "Box 3" */}
        <div className="bg-[#FDFDFD] col-span-4 p-8 rounded-b-2xl ">
          <p className="text-2xl text-gray-600">For Future Updates</p>
          <button className="border border-black bg-[#ACE0E9] text-black font-orbitron px-6 py-3 rounded-xl w-1/2 transition duration-300 ease-in-out hover:bg-[#98d3e0] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ACE0E9]">
            Join Our Newsletter &rarr;
          </button>
        </div>
        <div className="bg-[#61C0CC] h-40 w-52 p-4 ml-2 mt-2 rounded-2xl border-2 border-white relative">
          <p className=" font-bold text-xl">Get <br /> Started</p>
          <button className="absolute bottom-2 right-2 border-2 border-black p-1 px-2 rounded-md">
          <strong>&rarr;</strong>
          </button>
        </div>
        <div className="bg-[#FF858D] h-40 w-52 p-4 ml-2 mt-2 rounded-2xl border-2 border-white relative">
          <p className=" font-bold text-xl">Start a Free <br /> Trial</p> {/* Your content here */}
          <button className="absolute bottom-2 right-2 border-2 border-black p-1 px-2 rounded-md">
            <strong>&rarr;</strong>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
