import React from "react";
import imag from "./assets/images/img1.png";
import imag2 from "./assets/images/img3.png";
import imag3 from "./assets/images/img2.png";
import imag4 from "./assets/images/img4.png";
import imag5 from "./assets/images/img5.png";
import imag6 from "./assets/images/img6.png";
function project() {
  return (
    <>
      {/* Projects Section */}

      <div
        className="flex flex-wrap justify-center w-[90%] p-10 bg-gradient-to-br from-black via-gray-900 to-black text-white text-xl text-center border-2 border-gray-700 rounded-2xl shadow-2xl gap-12 mx-auto"
        id="Project"
      >
        <div
          onClick={() => window.open("https://na3em17.github.io/Fech-Project/")}
          className="flex flex-col justify-center w-full sm:w-[300px] md:w-[350px] lg:w-[400px] bg-gray-900 p-6 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.7)] hover:shadow-[0_15px_45px_rgba(255,255,255,0.1)] hover:scale-105 transition duration-300 ease-in-out"
        >
          <img src={imag} className="rounded-lg object-cover" />
          <h1 className="text-center text-2xl font-semibold mt-4">project 1</h1>
          <p className="text-gray-300 mt-2">info of project</p>
          <a href="#" className="text-gray-500 hover:underline mt-3">
            go to project →
          </a>
        </div>
        <div
          onClick={() =>
            window.open("https://passwordgenerator-tau-dusky.vercel.app/")
          }
          className="flex flex-col justify-center w-full sm:w-[300px] md:w-[350px] lg:w-[400px] bg-gray-900 p-6 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.7)] hover:shadow-[0_15px_45px_rgba(255,255,255,0.1)] hover:scale-105 transition duration-300 ease-in-out"
        >
          <img src={imag2} className="rounded-lg object-cover" />
          <h1 className="text-center text-2xl font-semibold mt-4">project 2</h1>
          <p className="text-gray-300 mt-2">info of project</p>
          <a href="#" className="text-gray-500 hover:underline mt-3">
            go to project →
          </a>
        </div>
        <div
          onClick={() =>
            window.open("https://na3em17.github.io/FrontendProject/")
          }
          className="flex flex-col justify-center w-full sm:w-[300px] md:w-[350px] lg:w-[400px] bg-gray-900 p-6 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.7)] hover:shadow-[0_15px_45px_rgba(255,255,255,0.1)] hover:scale-105 transition duration-300 ease-in-out"
        >
          <img src={imag3} className="rounded-lg object-cover" />
          <h1 className="text-center text-2xl font-semibold mt-4">project 3</h1>
          <p className="text-gray-300 mt-2">info of project</p>
          <a href="#" className="text-gray-500 hover:underline mt-3">
            go to project →
          </a>
        </div>
        <div
          onClick={() => window.open("https://na3em17.github.io/Abstract/")}
          className="flex flex-col justify-center w-full sm:w-[300px] md:w-[350px] lg:w-[400px] bg-gray-900 p-6 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.7)] hover:shadow-[0_15px_45px_rgba(255,255,255,0.1)] hover:scale-105 transition duration-300 ease-in-out"
        >
          <img src={imag4} className="rounded-lg object-cover" />
          <h1 className="text-center text-2xl font-semibold mt-4">project 4</h1>
          <p className="text-gray-300 mt-2">info of project</p>
          <a href="#" className="text-gray-500 hover:underline mt-3">
            go to project →
          </a>
        </div>
        <div className="flex flex-col justify-center w-full sm:w-[300px] md:w-[350px] lg:w-[400px] bg-gray-900 p-6 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.7)] hover:shadow-[0_15px_45px_rgba(255,255,255,0.1)] hover:scale-105 transition duration-300 ease-in-out">
          <img
            onClick={() => window.open("https://na3em17.github.io/project_6/")}
            src={imag5}
            className="rounded-lg object-cover"
          />
          <h1 className="text-center text-2xl font-semibold mt-4">project 5</h1>
          <p className="text-gray-300 mt-2">info of project</p>
          <a href="#" className="text-gray-500 hover:underline mt-3">
            go to project →
          </a>
        </div>
        <div
          onClick={() => window.open("https://na3em17.github.io/project_4/")}
          className="flex flex-col justify-center w-full sm:w-[300px] md:w-[350px] lg:w-[400px] bg-gray-900 p-6 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.7)] hover:shadow-[0_15px_45px_rgba(255,255,255,0.1)] hover:scale-105 transition duration-300 ease-in-out"
        >
          <img src={imag6} className="rounded-lg object-cover" />
          <h1 className="text-center text-2xl font-semibold mt-4">project 6</h1>
          <p className="text-gray-300 mt-2">info of project</p>
          <a href="#" className="text-gray-500 hover:underline mt-3">
            go to project →
          </a>
        </div>
      </div>
    </>
  );
}

export default project;
