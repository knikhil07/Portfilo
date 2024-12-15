import React from 'react';

const Blog = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {
          name: event.target.name.value,
          email: event.target.email.value,
          feedback: event.target.feedback.value,
        };

        console.log('Form submitted:', formData);
      };
      
    return (
        
            
       <>
       <div className="w-full py-16 text-white overflow-y-scroll h-[90vh]">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center text-sky-500 mb-6">
      My Blog
    </h2>
    <p className="text-center text-lg mb-12">
      Welcome to my blog! Here, I share insights, tutorials, and ideas about Data Science, Full-Stack Web Development, and other tech topics.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* <div className="bg-gray-900 p-6 shadow-white/5 hover:scale-[1.03] rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-sky-400 mb-4">
          Exploring the Power of Data Science in Real-World Applications
        </h3>
        <p className="text-gray-300 mb-4">
          
          In this post, I dive into how Data Science can unlock insights, predict outcomes, and drive decisions in various industries. Learn how I’m applying these techniques in my projects.
        </p>
        <a href="#" className="text-sky-500 hover:underline">
          Read more
        </a>
      </div> */}

      <div className="bg-gray-900 p-6 shadow-white/5 hover:scale-[1.03] rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-sky-400 mb-4">
         
          Building a Full-Stack Web Application: My Journey with React & Node.js
        </h3>
        <p className="text-gray-300 mb-4">
        From front-end to back-end, I share my experience building a full-stack web application using React, Node.js, and MongoDB. Get insights into the process, challenges, and solutions.
        </p>
        <a href="#" className="text-sky-500 hover:underline cursor-not-allowed">
          Read more
        </a>
      </div>

      <div className="bg-gray-900 p-6 shadow-white/5 hover:scale-[1.03] rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-sky-400 mb-4">
       
          How I’m Leveraging AI and Web Technologies in My Personal Projects
        </h3>
        <p className="text-gray-300 mb-4  " >
         In this post, I explore how I’m using AI and full-stack web technologies to create innovative solutions. I discuss key learnings and how I’m applying these skills to real-life projects.
        
        </p>
        <a href="#" className="text-sky-500 hover:underline cursor-not-allowed">
          Read more
        </a>
      </div>
    </div>
  </div>
  <div className="max-w-7xl mx-auto px-4 py-16">
  <h2 className="text-3xl font-semibold text-center text-sky-500 mb-6">
    We Value Your Feedback!
  </h2>
  <p className="text-center text-lg text-slate-300 mb-12">
    Please provide your feedback below. It helps us improve and create better experiences for you.
  </p>

  <div className="bg-gray-800 p-8 rounded-lg shadow-md">
    <form className="space-y-6">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-slate-200 text-sm font-semibold mb-2">
          Your Name
        </label>
        <input
          id="name"
          type="text"
          className="w-full px-4 py-2 rounded-md border border-gray-700 bg-gray-900 text-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
          placeholder="Enter your name"
          required
        />
      </div>

    
      <div>
        <label htmlFor="email" className="block text-slate-200 text-sm font-semibold mb-2">
          Your Email
        </label>
        <input
          id="email"
          type="email"
          className="w-full px-4 py-2 rounded-md border border-gray-700 bg-gray-900 text-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
          placeholder="Enter your email"
          required
        />
      </div>

      
      <div>
        <label htmlFor="feedback" className="block text-slate-200 text-sm font-semibold mb-2">
          Your Feedback
        </label>
        <textarea
          id="feedback"
          rows="6"
          className="w-full px-4 py-2 rounded-md border border-gray-700 bg-gray-900 text-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
          placeholder="Share your thoughts or suggestions"
          required
        ></textarea>
      </div>

      <div>
        <button
          type="submit"
          onSubmit={()=>{handleSubmit()}}
          className="w-full px-4 py-2 bg-sky-500 text-white font-semibold rounded-md hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
        >
          Submit Feedback
        </button>
      </div>
    </form>
  </div>
</div>

     </div>

       </>
    );
}

export default Blog;
