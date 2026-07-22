import React from "react";
import heroImage from "../IMAGES/hero.png";
const featuredProjects = [
  {
    name: "Pharmacy Management System",
    stack: "React.js | Vite | Vercel",
    description:
      "Full-featured pharmacy management web app for inventory, prescriptions, and billing. Sole developer responsible for UI, component architecture, and deployment.",
  },
  {
    name: "Vehicle Management System",
    stack: "React.js | Vite | Vercel",
    description:
      "Frontend for a vehicle management system with clean UI, form handling, and integration-ready structure.",
  },
  {
    name: "Password Generator",
    stack: "JavaScript | React.js | Vercel",
    description:
      "Interactive password generator with customizable length and character options, focused on hooks and state management.",
  },
];

const Main = () => {
  return (
    <div className="text-slate-900 dark:text-slate-100 transition-colors duration-300">
     <section className="mx-auto grid min-h-[calc(100vh-5.5rem)] max-w-7xl items-center gap-14 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-16">

  {/* LEFT SIDE */}

  <div className="max-w-3xl">

    <p className="fade-in-up mb-5 inline-flex rounded-full border border-amber-400/30 bg-amber-400/15 px-4 py-2 text-sm font-bold text-amber-700 dark:text-amber-400 dark:bg-amber-400/10 shadow-sm">
      Muhammad Taha Khan | Computer Science Undergraduate | MERN Stack Developer
    </p>

    <h1 className="fade-in-up animate-delay-1 display-font text-5xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">

      Modern web experiences built with clean code and practical product thinking.

    </h1>

    <p className="fade-in-up animate-delay-2 mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400 sm:text-xl">

      I build responsive web applications using React, JavaScript,
      Node.js, Express, MongoDB and modern deployment workflows.
      Passionate about creating premium user experiences with scalable,
      maintainable code.

    </p>

    <div className="fade-in-up animate-delay-3 mt-8 flex flex-col gap-3 sm:flex-row">

      <a
        href="mailto:m.tahaqaisrani@gmail.com"
        className="inline-flex items-center justify-center rounded-full bg-slate-950 px-7 py-3 font-semibold text-white shadow-lg shadow-slate-950/15 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-800 hover:shadow-2xl dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200 dark:shadow-white/5"
      >

        Email Me

      </a>

      <a
        href="/contact"
        className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3 font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:border-slate-600"
      >

        Contact Me

      </a>

    </div>

    <div className="fade-in-up animate-delay-4 mt-8 flex flex-wrap gap-3">

      {[
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind CSS",
        "REST APIs",
      ].map((item) => (

        <span
          key={item}
          className="glass-card rounded-full px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-300 transition-all duration-300 hover:scale-105"
        >

          {item}

        </span>

      ))}

    </div>

    <div className="mt-10 grid gap-4 sm:grid-cols-3">

      {[
        ["1+ Year", "MERN Experience"],
        ["10+", "Projects Built"],
        ["BS-CS", "Computer Science"],
      ].map(([value, label], index) => (

        <article
          key={value}
          className={`glass-card fade-in-up rounded-3xl p-5 transition-all duration-300 hover:-translate-y-2 ${
            index === 0
              ? "animate-delay-1"
              : index === 1
              ? "animate-delay-2"
              : "animate-delay-3"
          }`}
        >

          <div className="display-font text-3xl font-bold text-slate-950 dark:text-white">

            {value}

          </div>

          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">

            {label}

          </p>

        </article>

      ))}

    </div>

  </div>

  {/* RIGHT SIDE */}

  <div className="fade-in-up animate-delay-4 flex justify-center lg:justify-end">

    <div className="relative float-gentle">

      {/* Background Glow */}

      <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-amber-400/30 via-orange-400/20 to-sky-400/30 blur-3xl dark:opacity-50"></div>

      {/* Hero Image */}

      <img
        src={heroImage}
        alt="Muhammad Taha Khan"
        className="relative z-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg drop-shadow-[0_30px_60px_rgba(0,0,0,.25)] transition-all duration-700 hover:scale-105 cursor-pointer"
      />

    </div>

  </div>

</section>
      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
        <div className="mb-8 text-center">
          <h2 className="display-font text-3xl font-bold text-slate-950 dark:text-white sm:text-4xl">Core Focus</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400">A mix of academic grounding, practical experience, and shipped projects.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Frontend Development",
              text: "React, Vite, Tailwind CSS, responsive design, and component-driven UI systems.",
            },
            {
              title: "Backend Development",
              text: "Node.js, Express.js, PHP, Laravel, RESTful APIs, JWT authentication, and MVC architecture.",
            },
            {
              title: "Problem Solving",
              text: "Data structures, debugging, clean code, performance optimization, and scalable application design.",
            },
          ].map((item, index) => (
            <article key={item.title} className={`glass-card fade-in-up rounded-3xl p-6 transition duration-300 hover:-translate-y-1 ${index === 0 ? 'animate-delay-1' : index === 1 ? 'animate-delay-2' : 'animate-delay-3'}`}>
              <h3 className="display-font text-xl font-bold text-slate-950 dark:text-white">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-3 text-center lg:text-left">
            <h2 className="display-font text-3xl font-bold sm:text-4xl">Featured Projects</h2>
            <p className="text-slate-300">Selected work from the portfolio and CV.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <article key={project.name} className={`fade-in-up rounded-3xl border border-white/10 bg-white/10 p-6 shadow-xl shadow-black/10 backdrop-blur ${index === 0 ? 'animate-delay-1' : index === 1 ? 'animate-delay-2' : 'animate-delay-3'}`}>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">{project.stack}</p>
                <h3 className="display-font mt-3 text-2xl font-bold text-white">{project.name}</h3>
                <p className="mt-4 leading-7 text-slate-300">{project.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
