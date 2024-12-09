import React from 'react';

const Projects = () => {
    return (
        <div className='max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-5xl my-3 lg:my-0  mx-auto min-h-full'>
            <div className="flex flex-col items-center lg:flex-row flex-wrap overflow-y-scroll">
                <div className="w-full text-pink-500 font-medium text-2xl "><h2 className='logo '>Projects</h2></div>
                <div className="ml-8  grid space-y-6 text-slate-300 mt-10 ">
                            <span className=" w-full">
                              <p className="mb-3 font-semibold text-sky-500 flex   items-center gap-2 text-base ">
                                1 . Portfolio Website{" "}
                                <span className="after:animate-ping relative after:absolute  after:w-2 after:h-2 flex items-center justify-center after:rounded-full after:bg-green-500 w-2 h-2 rounded-full bg-green-500"></span>
                              </p>
                              <p className="ml-4 mt-2 grid space-y-1">
                                <span>
                                  A personal website to showcase my skills and
                                  projects.
                                </span>
                                <span>
                                  Features include a responsive design, animated
                                  transitions, and a contact form.
                                </span>

                                <span className='text-green-500'>
                                  Technologies Used: React.js , Tailwind CSS
                                </span>

                                <span >
                                 Your are currently in this Project page
                                </span>
                              </p>
                            </span>
                            <span className=" w-full ">
                              <p className="mb-3 font-semibold text-sky-500  text-base">
                                2 . Musify
                              </p>
                              <p className="ml-4 mt-2 grid space-y-1">
                                <span>
                                  {" "}
                                  Developed a full-stack web application for
                                  Music.
                                </span>
                                <span>
                                  Includes features like responsive design ,
                                  liked music , history.
                                </span>
                                <span className='text-green-500'>
                                  {" "}
                                  Technologies Used: React.js , Tailwind CSS
                                </span>
                              </p>
                            </span>
                            <span className=" w-full ">
                              <p className="mb-3 font-semibold text-sky-500  text-base">
                                3 . E-commerce Store
                              </p>
                              <p className="ml-4 mt-2 grid space-y-1">
                                <span>
                                  {" "}
                                  Developed a full-stack web application for
                                  online shopping.
                                </span>
                                <span>
                                  Includes features like product filtering, user
                                  authentication, and a shopping cart.
                                </span>
                                <span className='text-green-500'>
                                  {" "}
                                  Technologies Used: React.js, Node.js, MongoDB
                                </span>
                              </p>
                            </span>
                            <span className=" w-full ">
                              <p className="mb-3 font-semibold text-sky-500  text-base">
                                4 . Social Media Application
                              </p>
                              <p className="ml-4 mt-2 grid space-y-1">
                                <span>
                                  {" "}
                                  Developed a full-stack web application for
                                  Real time chatting application between users.
                                </span>
                                <span>
                                  Includes features like Group and personal
                                  chat.
                                </span>
                                <span>
                                  Technologies Used: React.js, Node.js, MongoDB,
                                  API integration
                                </span>
                              </p>
                            </span>
                </div>
            </div>
        </div>
    );
}

export default Projects;
