import React, { useContext, useState } from "react";
import Navbar from "./componets/Navbar";
import { useTypewriter } from "react-simple-typewriter";
import { Route, Routes } from "react-router-dom";
import AppContext from "./context/AppContext";
import Projects from "./pages/Projects";
import { icons } from "./assets/assests";
import About from "./pages/Skills";
import Skills from "./pages/Skills";
import Blog from "./pages/blog";

const Home = () => {
  const { isChat } = useContext(AppContext);
  const [typeEffect] = useTypewriter({
    words: [
      "Student ",
      "Begginer",
      "Programmer ",
      "Data scientist ",
      "Web dev",
    ],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  return (
    <div
      className={`h-screen w-screen bg-slate-900 ${isChat ? "fixed" : ""}  `}
    >
      <div className=" ">
        <Navbar />
      </div>
      <section className="w-[98%] h-[86vh] lg:overflow-y-hidden ">
        <Routes>
          <Route
            path="/"
            element={
              <div className="max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-5xl my-3 lg:my-0  mx-auto     ">
                <div className="flex items-center md:items-center  justify-between gap-12 flex-col lg:flex-row lg:gap-0 relative">
                  <div className="h-60 w-60 md:h-64 md:w-64 lg:w-80 lg:h-80  l_cir border-transparent  rounded-full flex items-center justify-center z-0">
                    <img
                      src={icons.icon_hero}
                      className="h-[95%] w-[95%] rounded-full z-[2] "
                      alt=""
                    />
                  </div>
                  <div className="lg:overflow-y-scroll h-[40rem] ">
                    <div className="flex flex-col gap-6 justify-center items-center md:items-start  h-auto min-h-[40rem] lg:pt-56">
                      <div className="text-slate-100 font-bold text-md lg:text-lg py-2  flex items-center gap-2 h-[25px] ">
                        Hi i'm a
                        <span className="typ after:bg-white text-md  lg:text-lg">
                          {typeEffect}
                        </span>
                      </div>
                      <span className=" font-extrabold text-4xl sm:text-5xl lg:text-8xl tracking-tight text-center  text-sky-500 animate-pulse">
                        I am Nikhil
                      </span>
                      <p className="text-slate-50  text-sm sm:text-md md:text-lg lg:text-xl flex-wrap py-2  md:max-w-xl pl-6 md:pl-0">
                      Building creative and functional digital experiences through code and design. I transform ideas into reality with innovation and dedication.
                      </p>
                      <div className="flex py-2 items-start gap-3 flex-col">
                        <button className="flex items-center gap-3">
                          <img src={icons.linkedin} alt="" className="w-8" />
                          <a
                            href="https://www.linkedin.com/in/katkurinikhil/"
                            target="_blank"
                            className="text-slate-50"
                          >
                            Linkedin
                          </a>
                        </button>
                        <button className="flex items-center gap-4 pl-1">
                          <img src={icons.gmail} alt="" className="w-6" />
                          <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=knikhil07k@gmail.com"
                            className="text-slate-50"
                          >
                            knikhil07k@gmail.com
                          </a>
                        </button>
                        <button className="flex items-center gap-4 pl-1">
                          <img src={icons.github_icon} alt="" className="w-6" />
                          <a
                            href="https://github.com/knikhil07"
                            target="_blank"
                            className="text-slate-50"
                          >
                            GITHUB
                          </a>
                        </button>
                      </div>
                      <div className="text-slate-50 flex-wrap py-2 w-[96%]  md:max-w-xl flex flex-col items-center gap-6 h-auto pb-36 mb-6 text-[12px] sm:md:text-base ">
                        <span className="autoshow w-full ">
                          <p className="font-bold flex flex-wrap items-center mb-4">
                            ✨Aspiring Data Scientist & Full-Stack Web Developer | B.Tech Student | Passionate about building robust, scalable, and user-friendly web applications, and leveraging data to drive insights and create intuitive user experiences.
                          </p>
                          Hello! I'm a first-year B.Tech student with a deep
                          fascination for Computer Science and Engineering,
                          particularly in the fields of Data Science and Web
                          Technologies. I'm passionate about how these areas can
                          solve real-world problems, unlock valuable insights,
                          tell compelling stories, and drive better
                          decision-making.
                        </span>

                        <span className="autoshow w-full">
  <p className="font-bold mb-3 text-sky-500 md:text-base">
    Introduction
  </p>
  <p>
    I am a passionate web developer with a strong foundation in front-end and back-end technologies. My journey in web development has been driven by a love for creating dynamic, user-friendly, and visually appealing websites.
  </p>
</span><span className="autoshow w-full">
  <p className="font-bold mb-4 text-sky-500 text-xs md:text-base">
    Skills and Technologies
  </p>
  <div className="flex gap-2 mx-8 text-slate-200 flex-wrap">
    <p className="text-slate-50">Front-end:</p> HTML5, CSS3, JavaScript, React.js, Tailwind
  </div>
  <div className="flex gap-2 mx-8 text-slate-200">
    <p className="text-slate-50">Back-end:</p> Node.js{" "}
    <span className="animate-pulse text-yellow-500">(learning)</span>
  </div>
  <div className="flex gap-2 mx-8 text-slate-200">
    <p className="text-slate-50">Databases:</p> MySQL, MongoDB{" "}
    <span className="animate-pulse text-yellow-500">(learning)</span>
  </div>
  <div className="flex gap-2 mx-8 text-slate-200">
    <p className="text-slate-50">Other Tools:</p> Git, GitHub, VS Code{" "}
    <span className="animate-pulse text-yellow-500">(learning)</span>
  </div>
  <div className="flex gap-2 mx-8 text-slate-200">
    <p className="text-slate-50">Other Languages:</p> C{" "}
    <span className="animate-pulse text-yellow-500">(learning)</span>
  </div>
</span>

                        <span className="">
                          <h1 className="autoshow w-full mb-5 font-semibold text-pink-500 text-xl">
                            Projects
                          </h1>

                          <div className="ml-8  grid space-y-6">
                            <h2 className="text-slate-300 md:text-base autoshow">
                              Using Js libraries
                            </h2>
                            <span className="autoshow w-full">
                              <p className="mb-3 font-semibold text-sky-500 flex  items-center gap-2 md:text-base ">
                                1 . Portfolio Website{" "}
                                <span className="after:animate-ping relative after:absolute  after:w-2 after:h-2 flex items-center justify-center after:rounded-full after:bg-green-500 w-2 h-2 rounded-full bg-green-500"></span>
                              </p>
                              <p className="ml-4 mt-2 grid space-y-1">
                                <span>
                                  A personal website to showcase my skills and
                                  projects effectively.
                                </span>
                                <span>
                                  Features include a responsive design, animated
                                  transitions, and a contact form.
                                </span>

                                <span>
                                  Technologies Used: React.js , Tailwind CSS
                                </span>
                              </p>
                            </span>
                            <h1 className="text-slate-300 font-bold md:text-base autoshow">
                              Future work{" "}
                            </h1>
                            <span className="autoshow w-full ">
                              <p className="mb-3 font-semibold text-sky-500  md:text-base">
                                2 . Musify
                              </p>
                              <p className="ml-4 mt-2 grid space-y-1">
                                <span>
                                  {" "}
                                  An idea to create a web application for music.
                                </span>
                                <span>
                                  Includes features like responsive design ,
                                  liked music , history.
                                </span>
                                <span>
                                  {" "}
                                  Technologies intended to be used for the
                                  project : React.js , Tailwind CSS
                                </span>
                              </p>
                            </span>
                            <span className="autoshow w-full ">
                              <p className="mb-3 font-semibold text-sky-500  md:text-base">
                                3 . E-commerce Store
                              </p>
                              <p className="ml-4 mt-2 grid space-y-1">
                                <span>
                                  {" "}
                                  A concept to develop a full-stack web
                                  application for online shopping.
                                </span>

                                <span>
                                  Includes features like product filtering, user
                                  authentication, and a shopping cart.
                                </span>
                                <span>
                                  {" "}
                                  Technologies intended to be used for the
                                  project : React.js, Node.js, MongoDB
                                </span>
                              </p>
                            </span>
                            <span className="autoshow w-full ">
                              <p className="mb-3 font-semibold text-sky-500  md:text-base">
                                4 . Social Media Application
                              </p>
                              <p className="ml-4 mt-2 grid space-y-1">
                                <span>
                                  {" "}
                                  Looking forward to creating a full-stack web
                                  application for real-time chatting between
                                  friends (users).
                                </span>
                                <span>
                                  Includes features like Group and personal
                                  chat.
                                </span>
                                <span>
                                  Technologies intended to be used for the
                                  project : React.js, Node.js, MongoDB, API
                                  integration
                                </span>
                              </p>
                            </span>

                            <h2 className="text-slate-300 font-bold md:text-base autoshow">
                              Using C
                            </h2>
                            <span className="autoshow w-full ">
                              <p className="mb-3 font-semibold text-sky-500  md:text-base">
                                1 . Scientific calculator
                              </p>
                              <p className="ml-4 mt-2 grid space-y-1">
                                <span>
                                  {" "}
                                  Created a C program to implement a calculator
                                  for performing mathematical calculations .
                                </span>
                                <span>
                                  Features include a basic calculator and
                                  functionality for matrices.
                                </span>
                                <span>
                                  This was my first project developed in C.
                                </span>
                              </p>
                            </span>
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            }
          />

          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </section>
    </div>
  );
};

export default Home;
