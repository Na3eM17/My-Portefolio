import React from "react";

function AboutMe() {
  return (
    <>
      {/* About Me Section */}
      <div className="w-full py-10 my-16 flex flex-col items-center bg-black text-white px-4">
        <h1
          className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r  from-gray-700 to-gray-500"
          id="About"
        >
          About Me
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-44">
          <div className="text-left space-y-2 max-w-md">
            <h1 className="text-2xl">Hello I'm</h1>
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-white">
              Naeem Alhindi
            </h1>
            <p className="text-gray-300">
              A frontend developer dedicated to crafting high-quality, modern
              web interfaces.
            </p>
            <div className="flex gap-4 mt-4 flex-wrap">
              <button className="bg-gray-600 px-4 py-2 rounded shadow-[0_0_10px_#999999] hover:bg-black hover:border hover:border-gray-500 hover:text-gray-500 hover:shadow-[0_0_50px_#999999]">
                Download CV
              </button>
              <button className="bg-transparent border border-gray-500 text-gray-500 px-4 py-2 rounded shadow-[0_0_10px_#999999] hover:text-white hover:border-white hover:shadow-[0_0_50px_#999999]">
                View Projects
              </button>
            </div>
          </div>
          <div className="text-white text-3xl font-light">
            <div className="w-fit border-gray-700 rounded-full bg-[#2e2e2e62] shadow-[0px_0px_30px_#999999]">
              <img
                src="src/assets/images/MeImg.png"
                alt="From public"
                className="w-[200px] rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="flex  justify-center gap-6 mt-6 ">
          <div className="text-center bg-[rgba(175,175,175,0.1)] mt-20 px-11 py-7 h-fit rounded-2xl shadow-[0px_0px_15px_#999999] md:w-[300px] w-[90%]">
            <div className="text-gray-500 text-3xl">🔥</div>
            <p className="text-gray-400">3+ Years Experience</p>
          </div>
          <div className="text-center bg-[rgba(175,175,175,0.1)] mt-20 px-11 py-7 h-fit rounded-2xl shadow-[0px_0px_15px_#999999] md:w-[300px] w-[90%]">
            <div className="text-gray-500 text-3xl">🚀</div>
            <p className="text-gray-400 ">10+ Projects Completed</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
