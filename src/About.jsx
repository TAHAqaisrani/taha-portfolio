import React from "react";

const About = () => {
  return (
    <div className="px-4 py-10 text-slate-900 sm:px-6 lg:px-8 lg:py-16">
      <section className="mx-auto max-w-6xl text-center">
        <p className="fade-in-up text-sm font-bold uppercase tracking-[0.35em] text-amber-600">About Me</p>
        <h1 className="fade-in-up animate-delay-1 display-font mt-3 text-4xl font-bold sm:text-5xl lg:text-6xl">Muhammad Taha Khan</h1>
        <p className="fade-in-up animate-delay-2 mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
          Motivated and detail-oriented Computer Science undergraduate with hands-on experience in full-stack web development. I build responsive, practical applications with React, JavaScript, and modern backend tools, and I enjoy turning ideas into clean, deployable products.
        </p>
      </section>

      <section className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-3">
        <article className="glass-card fade-in-up rounded-3xl p-6 lg:col-span-2">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-600">Career Objective</p>
          <h2 className="display-font mt-3 text-2xl font-bold text-slate-950">Build useful software with clean architecture and polished UI.</h2>
          <p className="mt-4 leading-8 text-slate-600">
            Seeking opportunities to apply technical expertise and contribute to impactful software solutions. My focus is on building reliable interfaces, strong API-driven workflows, and maintainable codebases that solve real business problems.
          </p>
        </article>

        <article className="fade-in-up animate-delay-1 rounded-3xl bg-slate-950 p-6 text-white shadow-2xl shadow-slate-950/10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">Experience</p>
          <h2 className="display-font mt-3 text-2xl font-bold">1 year as MERN developer</h2>
          <p className="mt-4 leading-7 text-slate-300">
            Softonic Pvt. Ltd., Dera Ghazi Khan, Pakistan, plus remote client work.
          </p>
        </article>
      </section>

      <section className="mx-auto mt-12 max-w-6xl">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-600">Education</p>
            <h2 className="display-font mt-2 text-3xl font-bold text-slate-950">Academic Background</h2>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Bachelor of Science in Computer Science (BS-CS)",
              meta: "2023 - Present | 5th Semester | CGPA: 3.0",
            },
            {
              title: "Intermediate (FSc Pre-Engineering)",
              meta: "2021 - 2023 | Marks: 87%",
            },
            {
              title: "Matriculation (Science Group)",
              meta: "2019 - 2021 | Marks: 98%",
            },
          ].map((item, index) => (
            <article key={item.title} className={`glass-card fade-in-up rounded-3xl p-6 transition duration-300 hover:-translate-y-1 ${index === 0 ? 'animate-delay-1' : index === 1 ? 'animate-delay-2' : 'animate-delay-3'}`}>
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white">
                0{index + 1}
              </div>
              <h3 className="display-font text-lg font-bold text-slate-950">{item.title}</h3>
              <p className="mt-2 leading-7 text-slate-600">{item.meta}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-2">
        <article className="glass-card fade-in-up rounded-3xl p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-600">Strengths</p>
          <h2 className="display-font mt-3 text-2xl font-bold text-slate-950">What I bring to a team</h2>
          <ul className="mt-4 space-y-3 text-slate-600">
            <li>Quick learner and adaptable to new technologies</li>
            <li>Strong analytical and logical problem-solving skills</li>
            <li>Passionate about technology, innovation, and clean code</li>
            <li>Effective communicator and team collaborator</li>
          </ul>
        </article>

        <article className="glass-card fade-in-up animate-delay-1 rounded-3xl p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-600">Personal Information</p>
          <h2 className="display-font mt-3 text-2xl font-bold text-slate-950">Profile details</h2>
          <div className="mt-4 space-y-3 text-slate-600">
            <p><span className="font-semibold text-slate-950">Father's Name:</span> Muhammad Alyas</p>
            <p><span className="font-semibold text-slate-950">Nationality:</span> Pakistani</p>
            <p><span className="font-semibold text-slate-950">Languages:</span> English, Urdu</p>
            <p><span className="font-semibold text-slate-950">Email:</span> m.tahaqaisrani@gmail.com</p>
            <p><span className="font-semibold text-slate-950">Phone:</span> +92 330 6721738</p>
          </div>
        </article>
      </section>
    </div>

  );
};

export default About;
