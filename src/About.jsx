import React from "react";

const About = () => {
  return (
  <div className="bg-gray-50 min-h-[70vh] px-4 sm:px-8 md:px-16 py-8 md:py-16">
  
  <section className="text-center mb-8 md:mb-12">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-700 mb-4">
      About Muhammad Taha
    </h1>
    <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
      Passionate web developer and designer with a knack for building responsive, user-friendly, and visually captivating applications. Always eager to learn new technologies and bring innovative ideas to life.
    </p>
  </section>

  <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 md:mb-12">
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
      <h2 className="text-xl sm:text-2xl font-bold text-blue-600 mb-2">Experience</h2>
      <p className="text-gray-600 text-sm sm:text-base">
        3rd Semester Computer Science Student, with projects in React and full-stack development.
      </p>
    </div>
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
      <h2 className="text-xl sm:text-2xl font-bold text-blue-600 mb-2">Skills</h2>
      <p className="text-gray-600 text-sm sm:text-base">
        JavaScript, React, Tailwind CSS, Node.js, REST APIs.
      </p>
    </div>
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
      <h2 className="text-xl sm:text-2xl font-bold text-blue-600 mb-2">Goals</h2>
      <p className="text-gray-600 text-sm sm:text-base">
        Become a full-stack developer  and contribute to innovative tech projects.
      </p>
    </div>
  </section>

</div>

  );
};

export default About;
