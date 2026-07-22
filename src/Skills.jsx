import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaGithub, FaNodeJs, FaLaravel } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiMysql, SiExpress, SiMongodb, SiVite, SiPhp, SiPostgresql, SiNpm, SiPostman, SiLinux } from "react-icons/si";

const skills = [
  {
    name: "React.js",
    level: "Frontend",
    icon: <FaReact className="text-blue-500" size={50} />,
  },
  {
    name: "HTML5",
    level: "Frontend",
    icon: <FaHtml5 className="text-orange-500" size={50} />,
  },
  {
    name: "Tailwind CSS",
    level: "Frontend",
    icon: <SiTailwindcss className="text-cyan-500" size={50} />,
  },
  {
    name: "JavaScript (ES6+)",
    level: "Frontend",
    icon: <SiJavascript className="text-yellow-400" size={50} />,
  },
  {
    name: "Vite",
    level: "Frontend",
    icon: <SiVite className="text-violet-500" size={50} />,
  },
  {
    name: "CSS3",
    level: "Frontend",
    icon: <FaCss3Alt className="text-blue-600" size={50} />,
  },
  {
    name: "Node.js",
    level: "Backend",
    icon: <FaNodeJs className="text-green-600" size={50} />,
  },
  {
    name: "Express.js",
    level: "Backend",
    icon: <SiExpress className="text-slate-700 dark:text-slate-300" size={50} />,
  },
  {
    name: "PHP",
    level: "Backend",
    icon: <SiPhp className="text-indigo-600" size={50} />,
  },
  {
    name: "Laravel",
    level: "Backend",
    icon: <FaLaravel className="text-red-600" size={50} />,
  },
  {
    name: "MongoDB",
    level: "Database",
    icon: <SiMongodb className="text-green-700" size={50} />,
  },
  {
    name: "PostgreSQL",
    level: "Database",
    icon: <SiPostgresql className="text-sky-700" size={50} />,
  },
  {
    name: "MySQL",
    level: "Database",
    icon: <SiMysql className="text-blue-700" size={50} />,
  },
  {
    name: "Git & GitHub",
    level: "Tools",
    icon: <FaGithub className="text-gray-700 dark:text-slate-300" size={50} />,
  },
  {
    name: "Postman",
    level: "Tools",
    icon: <SiPostman className="text-orange-600" size={50} />,
  },
  {
    name: "npm",
    level: "Tools",
    icon: <SiNpm className="text-red-500" size={50} />,
  },
  {
    name: "Linux Basics",
    level: "Deployment",
    icon: <SiLinux className="text-slate-800 dark:text-slate-300" size={50} />,
  },
  {
    name: "REST APIs",
    level: "Architecture",
    icon: <SiPostman className="text-teal-600" size={50} />,
  },
];

const Skills = () => {
  return (
    <div className="px-4 py-12 text-slate-900 dark:text-slate-100 transition-colors duration-300 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <p className="fade-in-up text-sm font-semibold uppercase tracking-[0.3em] text-amber-600 dark:text-amber-400">Technical Skills</p>
        <h1 className="fade-in-up animate-delay-1 display-font mt-3 text-4xl font-bold sm:text-5xl dark:text-white">Tools I Use To Build</h1>
        <p className="fade-in-up animate-delay-2 mx-auto mt-4 max-w-3xl text-slate-600 dark:text-slate-400">
          Frontend, backend, databases, architecture, deployment, and development tools aligned with my CV and project experience.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-7xl gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {skills.map((skill, index) => (
          <article key={skill.name} className={`glass-card fade-in-up group rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:shadow-2xl ${index % 4 === 0 ? 'animate-delay-1' : index % 4 === 1 ? 'animate-delay-2' : index % 4 === 2 ? 'animate-delay-3' : 'animate-delay-4'}`}>
            <div className="flex items-center justify-between gap-4">
              <div className="rounded-2xl bg-slate-950/5 dark:bg-white/5 p-3 transition group-hover:bg-slate-950/10 dark:group-hover:bg-white/10">{skill.icon}</div>
              <span className="rounded-full bg-amber-100 dark:bg-amber-950/40 px-3 py-1 text-xs font-semibold text-amber-800 dark:text-amber-400">{skill.level}</span>
            </div>
            <h2 className="display-font mt-5 text-xl font-bold text-slate-950 dark:text-white">{skill.name}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
              Practical experience applying this in deployed projects and day-to-day development work.
            </p>
          </article>
        ))}
      </div>
    </div>

  );
};

export default Skills;
