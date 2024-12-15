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
    isResult,
    onPromt,
    fckpromt,
    isload,
  } = useContext(AppContext);
  return (
    <div className="fixed top-0 left-0 h-screen w-screen bg-slate-600/80 z-[100] overflow-hidden grid place-items-center">
      <button
        onClick={() => {
          setChat(false), (document.title = "Nikhil : portfilo ");
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
            <Loader />
          </>
        ) : (
          <div className="h-[70%] max-h-[70%] lg:h-[80%] lg:max-h-[80%] w-full flex items-center justify-center flex-col space-y-4 overflow-y-scroll">
            <h1 className="text-5xl text-slate-100">Hello, User</h1>
            <p className="text-slate-50 text-center">
              Welcome to my AI! I am here to help you. <br />
              Prompt for good activities, i.e., to learn and adapt to new
              technologies.
            </p>
            <p className="font-medium text-sky-400 text-sm">
              Built with Gemini
            </p>
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
