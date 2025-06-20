import React from "react";
import "./index.css";
function header() {
  return (
    <>
      {/* Nav Bar */}
      <div className="md:flex fixed  bg-black w-full h-[100px] hidden items-center z-20 justify-between px-5 text-2xl border-b border-gray-500 shadow-md">
        <div className="text-gray-500 font-bold">MY-PORTIFOLIO</div>
        <ul className="flex gap-6 h-full text-center">
          <li className="hover:text-gray-500 cursor-pointer flex items-center h-full hover:border-b-4 hover:border-gray-500 ">
            <a href="#Home">Home</a>
          </li>
          <li className="hover:text-gray-500 cursor-pointer flex items-center h-full hover:border-b-4 hover:border-gray-500 ">
            <a href="#About">About</a>
          </li>
          <li className="hover:text-gray-500 cursor-pointer flex items-center h-full hover:border-b-4 hover:border-gray-500 ">
            <a href="#Project">Project</a>
          </li>
          <li className="hover:text-gray-500 cursor-pointer flex items-center h-full hover:border-b-4 hover:border-gray-500 ">
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </div>
      <nav class="navbar">
        <div class="logo">MY_PORTFILIO</div>

        <input type="checkbox" id="menu-toggle" />
        <label for="menu-toggle" class="menu-btn">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <div class="menu">
          <a href="#Home">Home</a>
          <a href="#About">About</a>
          <a href="#Project">Projects</a>
          <a href="#Contact">Contact</a>
        </div>
      </nav>
    </>
  );
}

export default header;
