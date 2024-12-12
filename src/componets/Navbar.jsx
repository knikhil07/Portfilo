import React, { useContext } from "react";
import { CiMenuKebab } from "react-icons/ci";
import AppContext from "../context/AppContext";
import { IoMdClose } from "react-icons/io";
import { BiSolidSend } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { isNavMenu, setNavMenu, setChat } = useContext(AppContext);
  const nav = useNavigate();
  return (
    <>
      <div className="z-40 py-4 md:py-6  w-full sticky  top-0 right-0 ">
        <div className="mx-6 md:mx-8    flex items-center justify-between">
          <a href="/" className="logo text-slate-200 text-3xl md:text-4xl ">
            Nikhil
          </a>

          <div className="flex items-center space-x-2 ">
            <button
              onClick={() => {
                setNavMenu(true);
              }}
              className="text-xl text-slate-400 hover:text-slate-200 md:hidden"
            >
              <CiMenuKebab />
            </button>

            <div className={`${isNavMenu ? "" : "hidden"}   md:hidden`}>
              <div className="fixed h-screen w-screen top-0 left-0 bg-black/30  backdrop-blur-md z-50">
                <div className="fixed top-4 right-4 h-72 w-64 bg-slate-800 rounded-lg p-8 shadow-xl shadow-slate-900">
                  <button
                    onClick={() => {
                      setNavMenu(!true);
                    }}
                    className="absolute right-5 top-5 text-xl text-slate-400 hover:text-red-500"
                  >
                    <IoMdClose />
                  </button>
                  <ul className="space-y-6 ">
                    <li className="font-semibold text-slate-500 hover:text-sky-500">
                      <span
                        onClick={() => {
                          nav("/");
                        }}
                        className=""
                      >
                        Home
                      </span>
                    </li>

                    <li className="font-semibold text-slate-500 hover:text-sky-500">
                      <span
                        onClick={() => {
                          nav("/skills");
                        }}
                        className=""
                      >
                        Skills
                      </span>
                    </li>
                    <li className="font-semibold text-slate-500 hover:text-sky-500">
                      <span
                        onClick={() => {
                          nav("/projects");
                        }}
                        className=""
                      >
                        Projects
                      </span>
                    </li>
                    <li className="font-semibold text-slate-500 hover:text-sky-500">
                      <span className="">Blog</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="">
              <ul className="space-x-8 hidden md:flex items-center justify-center border-r-2 px-4 mr-4 ">
                <li className="font-semibold text-slate-500 hover:text-sky-500">
                  <a
                    onClick={() => {
                      nav("/");
                    }}
                    className=""
                  >
                    Home
                  </a>
                </li>

                <li className="font-semibold text-slate-500 hover:text-sky-500">
                  <a
                    onClick={() => {
                      nav("/skills");
                    }}
                    className=""
                  >
                    Skills
                  </a>
                </li>
                <li className="font-semibold text-slate-500 hover:text-sky-500">
                  <a
                    onClick={() => {
                      nav("/projects");
                    }}
                    className=""
                  >
                    Projects
                  </a>
                </li>
                <li className="font-semibold text-slate-500 hover:text-sky-500">
                  <a className="">Blog</a>
                </li>
              </ul>
            </div>
            <button
              onClick={() => {
                setChat(true);
              }}
              className="w-8 h-8 flex  items-center justify-center  rounded-full bg-white/5 hover:bg-white/15 amd-send-icons-p text-yellow-500 text-md  rotate-[-30deg] "
            >
              <p className="">
                <BiSolidSend />
              </p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
