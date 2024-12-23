import React from "react";

const Skills = () => {
  return (
    <>
      <div className="w-full py-16  text-white">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center text-sky-500 mb-6">
      Skills & Technologies
    </h2>
    <p className="text-center text-lg mb-12">
      I am passionate about both Data Science and Full-Stack Web Development, and I constantly strive to learn and master new technologies in these fields.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      
      <div className="bg-slate-50/5 p-6 rounded-lg shadow-md shadow-white/5 hover:bg-slate-50/10">
        <h3 className="text-xl font-semibold text-sky-400 mb-4">
          Full-Stack Web Development Skills
        </h3>
        <ul className="text-gray-300 space-y-2">
          <li>Front-End Development (HTML5, CSS3, JavaScript, React.js, Tailwind CSS)</li>
          <li>Back-End Development (Node.js, Express.js)</li>
          <li>Database Management (MySQL, MongoDB)</li>
          <li>Version Control (Git, GitHub)</li>
          <li>API Development and Integration (RESTful APIs)</li>
        </ul>
      </div>

     
      <div className="bg-slate-50/5 p-6 rounded-lg shadow-md shadow-white/5 hover:bg-slate-50/10">
        <h3 className="text-xl font-semibold text-sky-400 mb-4">
          Data Science Skills
        </h3>
        <ul className="text-gray-300 space-y-2">
          <li>Data Analysis with Python (Pandas, NumPy)</li>
          <li>Machine Learning Algorithms (Scikit-Learn, TensorFlow)</li>
          <li>Data Visualization (Matplotlib, Seaborn)</li>
          <li>SQL & NoSQL Databases (MySQL, MongoDB)</li>
          <li>Statistical Analysis and Probability</li>
        </ul>
      </div>

  
      <div className="bg-slate-50/5 p-6 rounded-lg shadow-md shadow-white/5 hover:bg-slate-50/10">
        <h3 className="text-xl font-semibold text-sky-400 mb-4">
          Tools & Technologies
        </h3>
        <ul className="text-gray-300 space-y-2">
          <li>Code Editors (VS Code, Sublime Text)</li>
          <li>Containerization (Docker)</li>
          <li>Cloud Platforms (AWS, Heroku)</li>
          <li>Data Science Libraries (Jupyter Notebook, Keras)</li>
          <li>CI/CD Tools (Jenkins, GitHub Actions)</li>
        </ul>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default Skills;
