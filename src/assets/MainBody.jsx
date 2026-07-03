import React from "react";

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
    <div className="text-slate-900">
      <section className="mx-auto grid min-h-[calc(100vh-5.5rem)] max-w-7xl items-center gap-12 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-16">
        <div className="max-w-3xl">
          <p className="fade-in-up mb-5 inline-flex rounded-full border border-amber-400/30 bg-amber-400/15 px-4 py-2 text-sm font-bold text-amber-700 shadow-sm">
            Muhammad Taha Khan | Computer Science Undergraduate | Web Developer
          </p>
          <h1 className="fade-in-up animate-delay-1 display-font text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            Modern web experiences built with clean code and practical product thinking.
          </h1>
          <p className="fade-in-up animate-delay-2 mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            I build responsive applications with React, JavaScript, Node.js, and modern deployment workflows, backed by real projects and professional MERN experience.
          </p>

          <div className="fade-in-up animate-delay-3 mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="mailto:m.tahaqaisrani@gmail.com" className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 font-semibold text-white shadow-lg shadow-slate-950/15 transition hover:-translate-y-0.5 hover:bg-slate-800">
              Email Me
            </a>
            <a href="/contact" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50">
              View Contact Details
            </a>
          </div>

          <div className="fade-in-up animate-delay-4 mt-8 flex flex-wrap gap-3">
            {[
              "React",
              "MERN",
              "Responsive UI",
              "Vercel",
              "REST APIs",
              "Clean Code",
            ].map((item) => (
              <span key={item} className="glass-card rounded-full px-4 py-2 text-sm font-semibold text-slate-700">
                {item}
              </span>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              ["1+ year", "MERN development experience"],
              ["Multiple", "Deployed projects on Vercel"],
              ["BS-CS", "5th semester student"],
            ].map(([value, label], index) => (
              <article key={value} className={`glass-card fade-in-up rounded-3xl p-5 ${index === 0 ? 'animate-delay-1' : index === 1 ? 'animate-delay-2' : 'animate-delay-3'}`}>
                <div className="display-font text-3xl font-bold text-slate-950">{value}</div>
                <p className="mt-2 text-sm leading-6 text-slate-600">{label}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute -left-6 top-10 h-24 w-24 rounded-full bg-amber-300/30 blur-3xl" />
          <div className="absolute -right-4 bottom-8 h-28 w-28 rounded-full bg-sky-300/30 blur-3xl" />
          <div className="glass-card float-gentle overflow-hidden rounded-[2rem] p-4 shadow-2xl shadow-slate-950/10">
            <div className="overflow-hidden rounded-[1.5rem] bg-slate-900">
              <img src="/download.png" alt="Muhammad Taha Khan" className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="glass-card absolute -bottom-4 left-4 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 animate-delay-2 fade-in-up">
            Full-stack mindset. Frontend polish.
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
        <div className="mb-8 text-center">
          <h2 className="display-font text-3xl font-bold text-slate-950 sm:text-4xl">Core Focus</h2>
          <p className="mt-3 text-slate-600">A mix of academic grounding, practical experience, and shipped projects.</p>
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
              <h3 className="display-font text-xl font-bold text-slate-950">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
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
