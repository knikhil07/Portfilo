import React from 'react';

const Loader = () => {
    return (
        <>
          <div className="h-[70%] relative max-h-[70%] w-[90%] bg-white/5 gap-6 rounded-2xl flex justify-center items-center  overflow-y-scroll py-4">
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
                 
                </div>
              </div>
            
        </>
    );
}

export default Loader;
