import React from "react";

const AccelatorSection = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-6 w-full">
        {/* Combined box for "Big Box," "Box 1," and "Box 2" */}
        <div className="col-span-6 bg-[#FDFDFD] p-10 pt-10 rounded-l-2xl rounded-tr-2xl font-orbitron text-5xl text-right">
          Conceptualise<span className="text-[#61C0CC] font-bold"> , </span>
          Validate <span className="text-[#61C0CC] font-bold"> , </span>{" "}
          <strong> Accelerate!</strong>
        </div>

        {/* Three equal columns for "Box 3" */}
        <div className="bg-[#FF858D] h-40 w-52 p-4 mr-3 mt-3 rounded-2xl border-2 border-white relative">
          <p className=" font-bold text-xl">
            Join Now
          </p>{" "}
          {/* Your content here */}
          <button className="absolute bottom-3 left-3 border-2 border-black p-1 px-2 rounded-md">
            <strong>&rarr;</strong>
          </button>
        </div>
        <div className="bg-[#FDFDFD] col-span-5 p-8 rounded-b-2xl text-right text-4xl">
          <p><strong>AI</strong>-Powered Advancement <br />
          <span className="text-[#61C0CC]">for</span> Your Innovations</p>
        </div>
      </div>
    </div>
  );
};

export default AccelatorSection;
