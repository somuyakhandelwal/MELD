import React from "react";

const Featuresection = () => {
  return (
    <div className="grid grid-cols-5 grid-rows-4 gap-7 text-black">
      <div className="col-span-2 p-6 row-span-2 rounded-lg bg-white relative">
        <p className="text-5xl leading-[4rem]">
          IDEA <strong>VALIDATION</strong> <br />{" "}
          <span className=" font-roboto italic text-[#61C0CC]">for</span> YOUNG
          <br /> ENTREPRENEURS
        </p>
        <button className="absolute bottom-4 left-6 border-2 border-black p-1 px-2 rounded-md text-xl">
          <strong>&rarr;</strong>
        </button>
      </div>
      <div className="col-start-3 p-4 rounded-lg bg-white flex justify-center text-center items-center">
        <p className="leading-10 font-roboto">
          <span className="text-5xl font-bold">30</span> <br />{" "}
          <span className="text-2xl font-medium"> MVP Created</span>
        </p>
      </div>
      <div className="col-start-4 p-4 bg-white rounded-lg flex justify-center text-center items-center">
        <p className="leading-10 font-roboto">
          <span className="text-5xl font-bold">1290</span> <br />{" "}
          <span className="text-2xl font-medium"> Ideas Genrated</span>
        </p>
      </div>
      <div className="row-span-2 p-4 col-start-5 bg-white rounded-lg flex justify-center text-center items-center">
        <p className=" leading-loose text-5xl">
          <span className=" font-bold italic">Mentor</span> <br />{" "}
          <span className=" font-bold">Available</span> <br />{" "}
          <span className="text-[#FF858D]">24</span> /{" "}
          <span className="text-[#61C0CC]">7</span>
        </p>
      </div>
      <div className="col-start-4 p-4 row-start-2 bg-white rounded-lg flex justify-center text-center items-center">
        <p className="leading-10 font-roboto">
          <span className="text-5xl font-bold">2459</span> <br />{" "}
          <span className="text-2xl font-medium"> Scores Given</span>
        </p>
      </div>
      <div className="row-span-2 p-4 col-start-3 row-start-2 bg-white rounded-lg">
        6
      </div>
      <div className="row-span-2 p-4 row-start-3 bg-white rounded-lg flex justify-center text-center items-center">
        <p className="text-5xl leading-relaxed font-medium">
          <span className=" font-bold">MVP</span> <br /> ready in <br />
          <span className="text-[#FF858D]">14</span> days
        </p>
      </div>
      <div className="row-start-3 p-4 bg-white rounded-lg flex justify-center text-center items-center">
        <p className="leading-10 font-roboto">
          <span className="text-5xl font-bold">100,000</span> <br />{" "}
          <span className="text-2xl font-medium"> Saved</span>
        </p>
      </div>
      <div className="col-start-2 p-4 row-start-4 bg-white rounded-lg flex justify-center text-center items-center">
        <p className="leading-10 font-roboto">
          <span className="text-5xl font-bold">100</span> <br />{" "}
          <span className="text-2xl font-medium"> users</span>
        </p>
      </div>
      <div className="col-start-3 p-4 row-start-4 bg-white rounded-lg flex justify-center text-center items-center">
        <p className="leading-10 font-roboto">
          <span className="text-5xl font-bold">22</span> <br />
          {"  "}
          <span className="text-2xl font-medium"> Incubated</span>
        </p>
      </div>
      <div className="col-span-2  p-4 row-span-2 col-start-4 row-start-3 bg-white rounded-lg relative">
        <p className="text-5xl leading-[4rem]">
          <span className=" font-roboto italic text-[#61C0CC]">Kickstart</span>{" "}
          your <br />
          journey with <br />
          <strong>Accelerator</strong> program
        </p>
        <button className="absolute bottom-4 left-6 border-2 border-black p-1 px-2 rounded-md text-xl">
          <strong>&rarr;</strong>
        </button>
      </div>
    </div>
  );
};

export default Featuresection;
