import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import imag from "./assets/images/thoughtworks-gif_dribbble.gif";

function home() {
  const [text] = useTypewriter({
    words: [" fro", " bac", " fullStak developer 😅", " mobile developer"],
    loop: 0,
  });
  return (
    <>
      {/* Home Section */}
      <div
        className="w-full mt-30 flex flex-col md:flex-row items-center justify-center text-2xl gap-10 md:gap-28 py-10 px-4"
        id="Home"
      >
        <div className="space-y-4">
          <button
            data-aos="fade-right"
            onClick={() =>
              window.open("https://na3em17.github.io/My-Profiles/")
            }
            className="z-0 bg-gray-600 px-4 py-2 rounded shadow-[0_0_10px_#999999] hover:bg-black hover:border hover:border-gray-500 hover:text-gray-500 hover:shadow-[0_0_50px_#999999]"
          >
            My Profiles
          </button>
          <h1
            data-aos="fade-right"
            className=" mt-6 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-white"
          >
            WELCOME TO
          </h1>
          <h1 data-aos="fade-right" className="text-3xl">
            MY-PORTIFOLIO
          </h1>
          <h1 data-aos="fade-right" className="italic text-gray-400">
            I'm a
            <span>
              {text}
              <Cursor />
            </span>
          </h1>
          <p data-aos="fade-right" className="text-gray-300">
            I build clean, responsive websites that <br /> look great and work
            fast.
          </p>
          <ul data-aos="fade-right" className="flex gap-4 flex-wrap">
            {["React", "Flutter", "Tailwind", "ASP.NET"].map((tech) => (
              <li key={tech}>
                <a className="border border-gray-500 text-gray-500 px-3 py-1 rounded transition shadow-[0_0_10px_#999999] hover:text-white hover:border-white hover:shadow-[0_0_50px_#999999]">
                  {tech}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex gap-4 flex-wrap">
            <button
              data-aos="fade-right"
              className="bg-gray-600 px-4 py-2 rounded shadow-[0_0_10px_#999999] hover:bg-black hover:border hover:border-gray-500 hover:text-gray-500 hover:shadow-[0_0_50px_#999999]"
              onClick={() =>
                window.open("https://github.com/Na3eM17?tab=repositories")
              }
            >
              Projects
            </button>
            <a href="#Contact">
              <button
                data-aos="fade-right"
                className="bg-gray-600 px-4 py-2 rounded-sm shadow-[0_0_10px_#999999] hover:bg-black hover:border hover:border-gray-500 hover:text-gray-500 hover:shadow-[0_0_50px_#999999]"
              >
                Contact
              </button>
            </a>
          </div>
        </div>
        <div className="text-white text-3xl font-light max-w-md">
          <img data-aos="fade-left" src={imag} className="w-full rounded-xl" />
        </div>
      </div>
    </>
  );
}

export default home;
