import React from "react";

const ProjectsPage = () => {
  return (
    <>
      {" "}
      <div className="max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-6xl my-3 lg:my-0 mx-auto min-h-full">
  <div className="flex flex-col gap-10 overflow-y-scroll  w-full h-[85vh]">
    <div className="w-full text-pink-500 font-medium text-2xl">
      <h2 className="logo text-2xl">Projects</h2>
    </div>
    <div className=" flex flex-wrap gap-6 text-slate-300  w-full">
     
     
     
      <div className="w-full max-w-md hover:bg-slate-50/10 cursor-pointer transition-all  bg-slate-50/5 rounded-xl p-8">
        <p className="mb-3 font-semibold text-sky-500 flex items-center gap-2 text-base">
          1. Portfolio Website{" "}
          <span className="after:animate-ping relative after:absolute after:w-2 after:h-2 flex items-center justify-center after:rounded-full after:bg-green-500 w-2 h-2 rounded-full bg-green-500"></span>
        </p>
        <p className="ml-4 mt-2 text-sm flex flex-col flex-wrap">
          <span>A personal website to showcase my skills and projects effectively.</span>
          <span>Features include a responsive design, animated transitions, and a contact form.</span>
          <span>Technologies Used: React.js, Tailwind CSS</span>
          <span>Your are currently in this Project page</span> {/* Consider updating or removing */}
        </p>
      </div>

      
     
     
      <div className="w-full max-w-md hover:bg-slate-50/10 cursor-pointer transition-all  bg-slate-50/5 rounded-xl p-8">
        <p className="mb-3 font-semibold text-sky-500 text-base">2. Musify</p>
        <p className="ml-4 mt-2 grid space-y-2">
          <span>An idea to create a web application for music.</span>
          <span>Includes features like responsive design, liked music, and history.</span>
          <span>Technologies intended to be used: React.js, Tailwind CSS</span>
        </p>
      </div>

   
      <div className="w-full max-w-md hover:bg-slate-50/10 cursor-pointer transition-all  bg-slate-50/5 rounded-xl p-8">
        <p className="mb-3 font-semibold text-sky-500 text-base">3. E-commerce Store</p>
        <p className="ml-4 mt-2 grid space-y-2">
          <span>A concept to develop a full-stack web application for online shopping.</span>
          <span>Includes features like product filtering, user authentication, and a shopping cart.</span>
          <span>Technologies intended to be used: React.js, Node.js, MongoDB</span>
        </p>
      </div>

      
      <div className="w-full max-w-md hover:bg-slate-50/10 cursor-pointer transition-all  bg-slate-50/5 rounded-xl p-8">
        <p className="mb-3 font-semibold text-sky-500 text-base">4. Social Media Application</p>
        <p className="ml-4 mt-2 grid space-y-2">
          <span>Looking forward to creating a full-stack web application for real-time chatting between friends (users).</span>
          <span>Includes features like Group and personal chat.</span>
          <span>Technologies intended to be used: React.js, Node.js, MongoDB, API integration</span>
        </p>
      </div>

      
      <div className="w-full max-w-md hover:bg-slate-50/10 cursor-pointer transition-all  bg-slate-50/5 rounded-xl p-8">
        <p className="mb-3 font-semibold text-sky-500 text-base">5. Scientific Calculator</p>
        <p className="ml-4 mt-2 grid space-y-1">
          <span>Created a C program to implement a calculator for performing mathematical calculations.</span>
          <span>Features include a basic calculator and functionality for matrices.</span>
          <span>This was my first project developed in C.</span>
        </p>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default ProjectsPage;
