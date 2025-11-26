import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper v12 modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Images
import imag1 from "./assets/images/img1.png";
import imag2 from "./assets/images/img3.png";
import imag3 from "./assets/images/img2.png";
import imag4 from "./assets/images/img4.png";
import imag5 from "./assets/images/img5.png";
import imag6 from "./assets/images/img6.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Project() {
  const projects = [
    { img: imag1, title: "Project 1", desc: "Fetch API Project", link: "https://na3em17.github.io/Fech-Project/" },
    { img: imag2, title: "Project 2", desc: "Shop Frontend Project", link: "https://na3em17.github.io/FrontendProject/" },
    { img: imag3, title: "Project 3", desc: "Password Generator", link: "https://passwordgenerator-tau-dusky.vercel.app/" },
    { img: imag4, title: "Project 4", desc: "Abstract Project", link: "https://na3em17.github.io/Abstract/" },
    { img: imag5, title: "Project 5", desc: "Info of Project", link: "https://na3em17.github.io/project_6/" },
    { img: imag6, title: "Art Gallery Design", desc: "Music Page", link: "https://na3em17.github.io/project_4/" },
  ];

  return (
    <div
      className="w-[90%] mx-auto md:p-10 min-h-[400px] bg-gradient-to-br from-black via-gray-900 to-black text-white rounded-2xl shadow-2xl"
      id="Project"
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div
              onClick={() => window.open(project.link, "_blank")}
              className="flex flex-col justify-center bg-gray-900 p-6 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.7)] hover:shadow-[0_15px_45px_rgba(255,255,255,0.1)] hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
            >
              <img src={project.img} alt={project.title} className="rounded-lg object-cover w-full h-64" />
              <h1 className="text-center text-2xl font-semibold mt-4">{project.title}</h1>
              <p className="text-gray-300 mt-2">{project.desc}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:underline mt-3 text-center"
              >
                go to project →
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Project;
