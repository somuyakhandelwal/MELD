import React from "react";
import Logo from "../assets/Logo";

const Footer = () => {
  return (
    <div className="bg-[#F1FDFF] p-10 flex justify-between rounded-t-2xl">
      <div id="left-Footer" className="flex flex-col justify-between gap-20">
        <div className="text-xl">
          <h3>
            Stay informed on feature releases,
            <br />
            product roadmap,
            <br /> and community events!
          </h3>
        </div>
        <div>
          <Logo />
        </div>
      </div>
      <div id="right-footer" className="flex justify-center flex-col gap-5">
        {/* Upper-Left Box (Large) */}
        <div className=" flex gap-5">
          <div className="h-48 w-96 bg-[#FF858D] text-black border-2 border-black rounded-xl">
            <p className="text-2xl font-semibold px-4 py-2">
              Join our accelerator program
            </p>
          </div>
          <div className="h-48 w-48 bg-[#ACE0E9] text-black border-2 border-black rounded-xl">
            <p className="py-2 text-2xl font-semibold px-4">
              Start a free trial
            </p>
          </div>
        </div>

        {/* Lower-Right Boxes */}
        <div className=" flex gap-5">
          <div className="h-48 w-48 bg-[#ACE0E9] text-black border-2 border-black rounded-xl">
            <p className="text-2xl font-semibold px-4 py-2">Get Started</p>
          </div>
          <div className="h-48 w-96 bg-white flex flex-col items-start justify-between border-2 border-black rounded-xl">
            <div>
              <p className="text-2xl font-semibold px-4 py-2">
                Subscribe to our newsletter
              </p>
            </div>
            <div className=" self-center py-3">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="border border-black px-4 py-2 rounded-l"
                required
              />
              <button
                type="submit"
                className="bg-[#158D9D] text-white border border-black px-4 py-2 rounded-r"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
