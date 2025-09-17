import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaPython, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiMysql } from "react-icons/si";

const skills = [
  {
    name: "React",
    level: "Expert",
    icon: <FaReact className="text-blue-500" size={50} />,
  },
  {
    name: "HTML5",
    level: "Expert",
    icon: <FaHtml5 className="text-orange-500" size={50} />,
  },
  {
    name: "Tailwind CSS",
    level: "Expert",
    icon: <SiTailwindcss className="text-cyan-500" size={50} />,
  },
  {
    name: "Python",
    level: "Expert",
    icon: <FaPython className="text-yellow-500" size={50} />,
  },
  {
    name: "JavaScript",
    level: "Intermediate",
    icon: <SiJavascript className="text-yellow-400" size={50} />,
  },
  {
    name: "Node.js",
    level: "Beginner",
    icon: <FaCss3Alt className="text-blue-600" size={50} />,
  },
  {
    name: "MySQL",
    level: "Intermediate",
    icon: <SiMysql className="text-blue-700" size={50} />,
  },
  {
    name: "Git & GitHub",
    level: "Beginner",
    icon: <FaGithub className="text-gray-700" size={50} />,
  },
];

const Skills = () => {
  return (
  <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen py-12 px-4 sm:px-6 lg:px-12">
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-blue-700 mb-4 sm:mb-6">
    My Skills
  </h1>
  <p className="text-center text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-12">
    These are the technologies and tools I’ve mastered to build fast, modern, and scalable web applications.
  </p>

  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 px-2 sm:px-6">
    {skills.map((skill, index) => (
      <div
        key={index}
        className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col items-center justify-center hover:shadow-xl hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-300 cursor-pointer"
      >
        {skill.icon}
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mt-3 sm:mt-4 text-center">
          {skill.name}
        </h2>
        <span>
          {skill.level}
        </span>
      </div>
    ))}
  </div>
</div>

  );
};

export default Skills;
