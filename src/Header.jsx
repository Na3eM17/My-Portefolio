import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";

function Header() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* Desktop Nav Bar */}
      <div
        className="md:flex fixed bg-black w-full h-[55px] lg:h-[100px] hidden items-center z-20 justify-between px-5 text-2xl border-b border-gray-500 shadow-md"
        data-aos="fade-down"
      >
        <div className="text-gray-500 font-bold">MY-PORTIFOLIO</div>
        <ul className="flex gap-6 h-full text-center">
          <li className="hover:text-gray-500 cursor-pointer flex items-center h-full hover:border-b-4 hover:border-gray-500 ">
            <a data-aos="fade-up-up" href="#Home">
              Home
            </a>
          </li>
          <li className="hover:text-gray-500 cursor-pointer flex items-center h-full hover:border-b-4 hover:border-gray-500 ">
            <a data-aos="fade-up-up" href="#About">
              About
            </a>
          </li>
          <li className="hover:text-gray-500 cursor-pointer flex items-center h-full hover:border-b-4 hover:border-gray-500 ">
            <a data-aos="fade-up-up" href="#Project">
              Project
            </a>
          </li>
          <li className="hover:text-gray-500 cursor-pointer flex items-center h-full hover:border-b-4 hover:border-gray-500 ">
            <a data-aos="fade-up-up" href="#Contact">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Nav */}
      <nav className="navbar" data-aos="fade-up">
        <div className="logo">MY_PORTFILIO</div>

        <input type="checkbox" id="menu-toggle" />
        <label htmlFor="menu-toggle" className="menu-btn">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <div className="menu">
          <a href="#Home">Home</a>
          <a href="#About">About</a>
          <a href="#Project">Projects</a>
          <a href="#Contact">Contact</a>
        </div>
      </nav>
    </>
  );
}

export default Header;
