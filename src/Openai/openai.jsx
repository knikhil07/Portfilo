import React, { useContext } from "react";
import { BiSolidSend } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import AppContext from "../context/AppContext";
import Loader from "../componets/loader";

const Openai = () => {
  const {
    setChat,
    promt,
    setPromt,
    resultData,
    setResultData,
    isResult,
    onPromt,
    fckpromt,
    isload,
  } = useContext(AppContext);
  return (
    <div className="fixed top-0 left-0 h-screen w-screen bg-slate-600/80 z-[100] overflow-hidden grid place-items-center">
      <button
        onClick={() => {
          setChat(false);
        }}
        className="fixed right-4 top-4 h-8  w-8 rounded-full bg-slate-900 grid  place-items-center text-slate-200 z-20 hover:bg-white/5"
      >
        <IoMdClose />
      </button>
      <div className="h-full w-full md:h-[80vh]  lg:h-[90vh] md:w-[40rem] lg:w-[56rem] bg-slate-900 md:rounded-2xl overflow-hidden flex flex-col items-center justify-center">
        {isResult ? (
          isload ? (
            <>
              <Loader />
            </>
          ) : (
            <div className="h-[70%] relative max-h-[70%] w-[90%] bg-white/5 gap-6 rounded-2xl flex  flex-col items-start  overflow-y-scroll py-4">
              <div className="w-full flex justify-start flex-row-reverse   ">
                <div className="px-6  flex  items-center flex-row-reverse gap-3 mr-4 ">
                  <button className="ml-4 text-sky-500 ">N</button>
                  <p className="bg-white px-6 py-1 rounded-full text-slate-900/90">
                    {fckpromt}
                  </p>
                </div>
              </div>
              <div className="w-full flex justify-start   ">
                <div className="px-6  flex  items-start flex-col  gap-3 mr-4 w-full ">
                  <button className="ml-4 text-sky-500 ">G</button>
                  <p
                    className="bg-slate-50/5 text-slate-200 px-6 py-6   rounded  gap-3 text-[12px] sm:text-base"
                    dangerouslySetInnerHTML={{ __html: resultData }}
                  >
                    {/* {resultData} */}
                  </p>
                </div>
              </div>
            </div>
          )
        ) : isload ? (
          <>
            {/* <div className="h-[70%] relative max-h-[70%] w-[90%] flex items-center justify-center flex-col">
              <div className="h-36 w-36 rounded-full border-4 border-t-sky-500 border-l-sky-500 border-b-sky-200 border-r-sky-200 animate-spin"></div>
              <span className="text-slate-100 mt-4">please wait</span>
            </div> */}

            {/* <div className="h-[70%] relative max-h-[70%] w-[90%] bg-white/5 gap-6 rounded-2xl flex justify-center items-center  overflow-y-scroll py-4">
              <div className="h-64 w-72  flex items-center justify-center relative">
                <div className="absolute animation_l flex items-end left-2 top-28 -space-x-8">
                  <div className="h-20 w-20 z-20 bg-sky-500   rounded-tr-[50%] rounded-tl-[50%] rounded-bl-[50%]"></div>
                  <div className="h-14 w-14 z-20  bg-sky-500  rounded-tr-[50%] rounded-br-[50%]"></div>
                </div>

                <div className="h-32 w-32 bg-yellow-400 rounded-full z-10 before:z-0 relative before:h-24 before:w-24 before:bg-yellow-500 before:rounded-full before:absolute flex items-center justify-center before:animate-ping"></div>

                <div className="absolute animation_r flex items-end right-2 top-14 scale-[.8] -space-x-8 z-30">
                  <div className="h-14 w-14 z-20  bg-sky-500  rounded-tl-[50%] rounded-bl-[50%]"></div>
                  <div className="h-20 w-20 z-20 bg-sky-500   rounded-tl-[50%] rounded-tr-[50%] rounded-br-[50%] "></div>
                </div>
                <div className="h-48 w-48 rounded-full   absolute  per z-20 flex items-start">
                  <div className="relative  ">
                    <img
                      src="src\Openai\satellite.png"
                      alt=""
                      className="h-10 w-10 ml-4"
                    />
                  </div>
                </div>
              </div>
            </div> */}
            <Loader />
          </>
        ) : (
          <div className="h-[70%] max-h-[70%] lg:h-[80%] lg:max-h-[80%] w-full  flex items-center justify-center flex-col space-y-4 overflow-y-scroll">
            <h1 className="text-5xl text-slate-100">Hello , User</h1>
            <p className=" font-medium text-sky-400 text-sm">
              Build with Gemini API
            </p>
            <div className="flex flex-wrap h-auto items-center justify-center sm:w-[60%] w-[90%] gap-4 py-4   ">
              <button
                onClick={() => {
                 onPromt("About me");
                }}
                className="px-6 py-2 hover:bg-white/5 border-2 rounded-full text-[12px] sm:text-xs text-slate-200"
              >
                About me
              </button>
              <button
                onClick={() => {
                 onPromt(" my projects");
                }}
                className="px-6 py-2 hover:bg-white/5 border-2 rounded-full text-[12px] sm:text-xs text-slate-200"
              >
                my projects
              </button>
              <button
                onClick={() => {
                 onPromt(" my skills");
                }}
                className="px-6 py-2 hover:bg-white/5 border-2 rounded-full text-[12px] sm:text-xs text-slate-200"
              >
                my skills
              </button>
              <button
                onClick={() => {
                 onPromt(" Find new");
                }}
                className="px-6 py-2 hover:bg-white/5 border-2 rounded-full text-[12px] sm:text-xs text-slate-200"
              >
                Find new
              </button>
              <button
                onClick={() => {
                 onPromt("  Learn ");
                }}
                className="px-6 py-2 hover:bg-white/5 border-2 rounded-full text-[12px] sm:text-xs text-slate-200"
              >
                Learn
              </button>
            </div>
          </div>
        )}
        <div className=" py-3 px-6 w-[90%] md:w-[80%] lg:mt-2 lg:w-[40rem] mt-4 bg-slate-700/40  rounded-full flex justify-center  items-center gap-3">
          <input
            type="text"
            placeholder="Ask your query ?"
            name=""
            id=""
            value={promt}
            onChange={(e) => {
              setPromt(e.target.value);
            }}
            className=" bg-transparent h-8  w-[80%] outline-0 text-slate-200 font-medium"
          />
          <button
            onClick={() => {
              onPromt(promt);
            }}
            className="text-2xl text-sky-500"
          >
            <BiSolidSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Openai;
// dangerouslySetInnerHTML={{__html:resultData}}
