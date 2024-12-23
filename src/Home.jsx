import React, { useContext } from "react";
import Navbar from "./componets/Navbar";
import { useTypewriter } from "react-simple-typewriter";
import { Route, Routes } from "react-router-dom";
import AppContext from "./context/AppContext";
import Projects from "./pages/Projects";
import { icons } from "./assets/assests";
import Skills from "./pages/Skills";

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
      <section className="w-[98%] h-[86vh] lg:overflow-y-hidden  ">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="w-full flex items-center justify-center  my-3 lg:my-0  mx-auto     ">
                  <div className="flex items-center md:items-center  justify-between gap-12 flex-col lg:flex-row lg:gap-20 relative">
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
                        <span className="text-slate-50  text-sm sm:text-md md:text-lg lg:text-xl flex-wrap py-2  md:max-w-xl pl-6 md:pl-0">
                          Building creative and functional digital experiences
                          through code and design. I transform ideas into
                          reality with innovation and dedication.
                        </span>
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
                            <img
                              src={icons.github_icon}
                              alt=""
                              className="w-6"
                            />
                            <a
                              href="https://github.com/knikhil07"
                              target="_blank"
                              className="text-slate-50"
                            >
                              GITHUB
                            </a>
                          </button>
                        </div>
                        <div className="text-slate-50 flex-wrap py-2 w-[96%]  md:max-w-[50rem] flex flex-col items-center gap-6 h-auto pb-36 mb-6 text-[12px] sm:md:text-base ">
                          <div className="autoshow w-full ">
                            <h1 className="font-bold flex flex-wrap items-center mb-4">
                              ✨Aspiring Data Scientist & Full-Stack Web
                              Developer | B.Tech Student | Passionate about
                              building robust, scalable, and user-friendly web
                              applications, and leveraging data to drive
                              insights and create intuitive user experiences.
                            </h1>
                            Hello! I'm a first-year B.Tech student with a deep
                            fascination for Computer Science and Engineering,
                            particularly in the fields of Data Science and Web
                            Technologies. I'm passionate about how these areas
                            can solve real-world problems, unlock valuable
                            insights, tell compelling stories, and drive better
                            decision-making.
                          </div>

                          <div className="autoshow w-full list-none">
                            <h1 className="font-bold mb-3 text-sky-500 md:text-base">
                              Introduction
                            </h1>
                            <summary>
                              I am a passionate web developer with a strong
                              foundation in front-end and back-end technologies.
                              My journey in web development has been driven by a
                              love for creating dynamic, user-friendly, and
                              visually appealing websites.
                            </summary>
                          </div>
                          <div className="autoshow w-full flex flex-col items-center gap-4">
                            <h1 className="font-bold mb-4 text-sky-500 text-sm md:text-base">
                              Skills and Technologies
                            </h1>
                            <div className="flex flex-wrap justify-center items-center gap-6 ">
                              <div className="autoshow relative p-6  rounded-lg bg-white/5  w-80   flex *:cursor-pointer items-center justify-center">
                                <h1 className="absolute px-5 py-1 bg-sky-500 text-white text-xs rounded-full -top-2  ">
                                  code
                                </h1>

                                <div className="flex  flex-wrap items-center justify-center mt-2 gap-2">
                                  <img
                                    src={icons.htmlIcon}
                                    alt=""
                                    className="aspect-auto  h-16 "
                                  />
                                  <img
                                    src={icons.cssIcon}
                                    alt=""
                                    className="aspect-auto  h-16 "
                                  />
                                  <img
                                    src={icons.tailwindIcon}
                                    alt=""
                                    className=" aspect-auto h-6 "
                                  />
                                  <img
                                    src={icons.reactIcon}
                                    alt=""
                                    className="aspect-auto  h-16 "
                                  />
                                  <img
                                    src={icons.jsIcon}
                                    alt=""
                                    className="aspect-auto  h-16 "
                                  />
                                  <img
                                    src={icons.nodejsIcon}
                                    alt=""
                                    className="aspect-auto  h-16 "
                                  />
                                  <img
                                    src={icons.mongodbIcon}
                                    alt=""
                                    className="aspect-auto  h-16 "
                                  />
                                  <img
                                    src={icons.cIcon}
                                    alt=""
                                    className="aspect-auto  h-16 "
                                  />
                                  <img
                                    src={icons.gitHubIcon}
                                    alt=""
                                    className="aspect-auto  h-16 "
                                  />
                                  <img
                                    src={icons.gitIcon}
                                    alt=""
                                    className="aspect-auto  h-16 "
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="w-full p-4">
                            <h1 className="autoshow  mb-5 font-semibold text-pink-500 text-xl">
                              Projects
                            </h1>

                            <div className="w-full gap-8  flex flex-wrap items-center justify-center sm:justify-start ">
                              <div className="autoshow w-[80%]  sm:w-80  px-4 bg-slate-100/5 py-6 min-h-64">
                                <div className="mb-3 font-semibold text-sky-500 flex  items-center gap-2 text-base ">
                                  1 . Portfolio Website
                                  <span className="after:animate-ping relative after:absolute  after:w-2 after:h-2 flex items-center justify-center after:rounded-full after:bg-green-500 w-2 h-2 rounded-full bg-green-500"></span>
                                </div>
                                <div className="ml-4 mt-2 flex flex-col gap-4">
                                  <div className="text-sm">
                                    A personal website to showcase my skills and
                                    projects effectively.
                                  </div>
                                  <div className="text-sm">
                                    Features include a responsive design and a
                                    contact form.
                                  </div>

                                  <div className="flex flex-wrap gap-3 ">
                                    <span className="px-6 py-1 text-[12px] lg:text-sm bg-sky-500 rounded-full text-white">
                                      React.js
                                    </span>
                                    <span className="px-6 py-1 text-[12px]  bg-sky-500 rounded-full text-white">
                                      Tailwind.css
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="autoshow w-[80%]  sm:w-80  px-4 bg-slate-100/5 py-6 min-h-64">
                                <h1 className="mb-3 font-semibold text-sky-500  text-base">
                                  2 . Musify
                                </h1>
                                <div className="ml-4 mt-2 flex flex-col gap-4">
                                  <span className="text-sm">
                                    {" "}
                                    An idea to create a web application for
                                    music.
                                  </span>
                                  <span className="text-sm">
                                    Includes features like responsive design ,
                                    liked music , history.
                                  </span>
                                  <span className="flex flex-wrap gap-3 ">
                                    <p className="px-6 py-1.5 text-[12px] lg:text-sm bg-sky-500 rounded-full text-white">
                                      React.js
                                    </p>
                                    <p className="px-6 py-1.5 text-[12px]  bg-sky-500 rounded-full text-white">
                                      Tailwind.css
                                    </p>
                                  </span>
                                </div>
                              </div>
                              <div className="autoshow w-[80%]  sm:w-80  px-4 bg-slate-100/5 py-6 min-h-64">
                                <div className="mb-3 font-semibold text-sky-500  text-base">
                                  3 . E-commerce Store
                                </div>
                                <div className="ml-4 mt-2 flex flex-col gap-4">
                                  <span className="text-sm">
                                    {" "}
                                    A concept to develop a full-stack web
                                    application for online shopping.
                                  </span>

                                  <span className="text-sm">
                                    Includes features like product filtering and
                                    a shopping cart.
                                  </span>
                                  <span className="flex flex-wrap gap-3 ">
                                    <p className="px-6 py-1.5 text-[12px] lg:text-sm bg-sky-500 rounded-full text-white">
                                      React.js
                                    </p>
                                    <p className="px-6 py-1.5 text-[12px] lg:text-sm bg-sky-500 rounded-full text-white">
                                      Node.js
                                    </p>
                                    <p className="px-6 py-1.5 text-[12px] lg:text-sm bg-sky-500 rounded-full text-white">
                                      MongoDb
                                    </p>
                                  </span>
                                </div>
                              </div>
                              <div className="autoshow w-[80%]  sm:w-80  px-4 bg-slate-100/5 py-6 min-h-64">
                                <h1 className="mb-4 font-semibold text-sky-500  text-base">
                                  4 . Social Media Application
                                </h1>
                                <div className="ml-4 mt-2 flex flex-col gap-3">
                                  <span className="text-sm">
                                    {" "}
                                    A concept to develop a full-stack web
                                    application for real-time chat
                                  </span>
                                  <span className="text-sm">
                                    Includes features like Group and personal
                                    chat.
                                  </span>
                                  <span className="flex flex-wrap gap-3 ">
                                    <p className="px-6 py-1.5 text-[12px] lg:text-sm bg-sky-500 rounded-full text-white">
                                      React.js
                                    </p>
                                    <p className="px-6 py-1.5 text-[12px] lg:text-sm bg-sky-500 rounded-full text-white">
                                      Node.js
                                    </p>
                                    <p className="px-6 py-1.5 text-[12px] lg:text-sm bg-sky-500 rounded-full text-white">
                                      MongoDb
                                    </p>
                                  </span>
                                </div>
                              </div>

                              <div className="autoshow w-[80%]  sm:w-80  px-4 bg-slate-100/5 py-6 min-h-64">
                                <p className="mb-3 font-semibold text-sky-500  text-base">
                                  5 . Scientific calculator
                                </p>
                                <p className="ml-4 mt-2 flex flex-col gap-3">
                                  <span className="text-sm">
                                    {" "}
                                    Created a C program to implement a
                                    calculator for performing mathematical
                                    calculations .
                                  </span>
                                  <span className="text-sm">
                                    Features include a basic calculator and
                                    functionality for matrices.
                                  </span>
                                  <span className="text-sm">
                                    This was my first project developed in C.
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="text-center text-white">
                          &copy; {new Date().getFullYear()} Nikhil | Portfilo
                        </div>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </>
            }
          />

          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          {/* <Route path="/blog" element={<Blog />} /> */}
        </Routes>
      </section>
    </div>
  );
};

export default Home;
