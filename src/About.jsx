
import React from "react";

import reactCourse from "./IMAGES/2React-courses.jpg";
import advancedReact from "./IMAGES/Advanced-React-Projects.jpg";
import backendDevelopment from "./IMAGES/BackEnd-Development.jpg";
import backendInfrastructure from "./IMAGES/backend-infrastructure.jpg";
import frontendCapstone from "./IMAGES/front-end capstone.jpg";
import genAIBackend from "./IMAGES/gen ai for backend.jpg";
import gitGithub from "./IMAGES/Git and GitHub.jpg";
import gitEssentials from "./IMAGES/git-and-github-essentials.1.png";
import ibmDesign from "./IMAGES/IBMDesign20250814-30-j0ew0z.jpg";
import mongoNodeExpress from "./IMAGES/mongoDB, nodejs, express.jpg";
import nodejs from "./IMAGES/node js .jpg";
import python from "./IMAGES/Python for everyone.jpg";
import reactProjects from "./IMAGES/React Projects Certificate .jpg";
import reactBasics from "./IMAGES/React-Basics_page-0001.jpg";
import reactRedux from "./IMAGES/React-Redux_page-0001.jpg";
import redux from "./IMAGES/Redux-React.jpg";
import tailwind from "./IMAGES/TailWind.jpg";

const certificates = [
  {
    title: "Meta React",
    issuer: "Meta",
    image: reactCourse,
  },

  {
    title: "Advanced React Projects",
    issuer: "Packt",
    image: advancedReact,
  },

  {
    title: "Backend Development",
    issuer: "IBM",
    image: backendDevelopment,
  },

  {
    title: "Backend Infrastructure",
    issuer: "Coursera",
    image: backendInfrastructure,
  },

  {
    title: "Frontend Capstone",
    issuer: "Meta",
    image: frontendCapstone,
  },

  {
    title: "Generative AI",
    issuer: "IBM",
    image: genAIBackend,
  },

  {
    title: "Git & GitHub",
    issuer: "Coursera",
    image: gitGithub,
  },

  {
    title: "GitHub Essentials",
    issuer: "Coursera",
    image: gitEssentials,
  },

  {
    title: "IBM Design Thinking",
    issuer: "IBM",
    image: ibmDesign,
  },

  {
    title: "MongoDB Node Express",
    issuer: "IBM",
    image: mongoNodeExpress,
  },

  {
    title: "Node.js",
    issuer: "Coursera",
    image: nodejs,
  },

  {
    title: "Python For Everyone",
    issuer: "Coursera",
    image: python,
  },

  {
    title: "React Projects",
    issuer: "Coursera",
    image: reactProjects,
  },

  {
    title: "React Basics",
    issuer: "Meta",
    image: reactBasics,
  },

  {
    title: "React Redux",
    issuer: "Coursera",
    image: reactRedux,
  },

  {
    title: "Redux",
    issuer: "Coursera",
    image: redux,
  },

  {
    title: "Tailwind CSS",
    issuer: "Coursera",
    image: tailwind,
  },
];

const openCertificate = (image) => {
  window.open(image, "_blank");
};

const About = () => {
  return (
    <div className="px-4 py-10 text-slate-900 dark:text-slate-100 transition-colors duration-300 sm:px-6 lg:px-8 lg:py-16">

      <section className="mx-auto max-w-6xl text-center">

        <p className="fade-in-up text-sm font-bold uppercase tracking-[0.35em] text-amber-600">
          About Me
        </p>

        <h1 className="fade-in-up animate-delay-1 display-font mt-3 text-4xl font-bold dark:text-white sm:text-5xl lg:text-6xl">
          Muhammad Taha Khan
        </h1>

        <p className="fade-in-up animate-delay-2 mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
          Motivated and detail-oriented Computer Science undergraduate with
          hands-on experience in Full Stack Web Development. I specialize in
          React, JavaScript, Node.js, Express, MongoDB and modern frontend
          technologies while continuously expanding my expertise in AI,
          automation and scalable software engineering.
        </p>

      </section>

      <section className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-3">

        <article className="glass-card fade-in-up rounded-3xl p-6 lg:col-span-2">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-600">
            Career Objective
          </p>

          <h2 className="display-font mt-3 text-2xl font-bold text-slate-950 dark:text-white">
            Build software that solves real-world problems.
          </h2>

          <p className="mt-4 leading-8 text-slate-600 dark:text-slate-400">
            I enjoy building responsive websites, scalable APIs, modern user
            interfaces and backend systems. My goal is to contribute to
            impactful products while continuously improving my technical and
            problem-solving abilities.
          </p>

        </article>

        <article className="fade-in-up animate-delay-1 rounded-3xl bg-slate-950 p-6 text-white shadow-2xl">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
            Experience
          </p>

          <h2 className="display-font mt-3 text-2xl font-bold">
            MERN Stack Developer
          </h2>

          <p className="mt-4 leading-7 text-slate-300">
            1+ Year Experience building modern websites, dashboards,
            responsive interfaces and backend systems using React,
            Express, MongoDB and Node.js.
          </p>

        </article>

      </section>
            {/* ===================================== */}
      {/* EDUCATION */}
      {/* ===================================== */}

      <section className="mx-auto mt-20 max-w-6xl">

        <div className="text-center">

          <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-600">
            Education
          </p>

          <h2 className="display-font mt-3 text-4xl font-bold dark:text-white">
            Academic Background
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-600 dark:text-slate-400">
            My academic journey has provided me with a solid understanding of
            programming, algorithms, software engineering, databases and
            modern web technologies while continuously improving through
            professional certifications.
          </p>

        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">

          {[
            {
              title: "Bachelor of Science in Computer Science",
              duration: "2023 - Present",
              description:
                "5th Semester • CGPA 3.0 • NUML University",
            },

            {
              title: "Intermediate (FSc Pre-Engineering)",
              duration: "2021 - 2023",
              description:
                "Marks: 87%",
            },

            {
              title: "Matriculation",
              duration: "2019 - 2021",
              description:
                "Science Group • Marks: 98%",
            },

          ].map((item, index) => (

            <div
              key={index}
              className="group rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:border-amber-400 hover:shadow-2xl"
            >

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-xl font-bold text-white shadow-lg">

                {index + 1}

              </div>

              <h3 className="mt-6 text-xl font-bold dark:text-white">

                {item.title}

              </h3>

              <p className="mt-3 font-semibold text-amber-600 dark:text-amber-400">

                {item.duration}

              </p>

              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">

                {item.description}

              </p>

            </div>

          ))}

        </div>

      </section>

      {/* ===================================== */}
      {/* CERTIFICATIONS */}
      {/* ===================================== */}

      <section className="mx-auto mt-24 max-w-7xl">

        <div className="text-center">

          <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-600">
            Professional Certifications
          </p>

          <h2 className="display-font mt-3 text-5xl font-bold dark:text-white">

            Learning Never Stops

          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-slate-600 dark:text-slate-400">

            These certifications demonstrate my commitment to continuous
            learning and staying updated with modern frontend, backend,
            cloud and AI technologies.

          </p>

        </div>

        <div className="mt-16 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

          {certificates.map((certificate, index) => (

            <div

              key={index}

              className="group relative overflow-hidden rounded-[30px] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_25px_60px_rgba(251,146,60,.35)] dark:hover:shadow-[0_25px_60px_rgba(251,146,60,.15)]"

            >

              {/* Glow */}

              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-white/40 to-amber-400/0 opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:translate-x-full"></div>

              {/* Image */}

              <div className="overflow-hidden bg-slate-100 dark:bg-slate-800">

                <img

                  src={certificate.image}

                  alt={certificate.title}

                  loading="lazy"

               />

              </div>

              {/* Body */}

              <div className="p-6">

                <span className="rounded-full bg-amber-100 dark:bg-amber-950/40 px-4 py-1 text-xs font-bold uppercase tracking-widest text-amber-700 dark:text-amber-400">

                  {certificate.issuer}

                </span>

                <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">

                  {certificate.title}

                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">

                  Successfully completed professional training and practical
                  coursework.

                </p>

                <button

                  onClick={() => openCertificate(certificate.image)}

                  className="mt-6 flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 px-5 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"

                >

                  🔍 View Certificate

                </button>

              </div>

            </div>

          ))}

        </div>

      </section>
            {/* ===================================== */}
      {/* TECHNOLOGIES */}
      {/* ===================================== */}

      <section className="mx-auto mt-24 max-w-7xl">

        <div className="rounded-[35px] bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-10 shadow-2xl">

          <div className="text-center">

            <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-400">
              Technologies
            </p>

            <h2 className="display-font mt-3 text-4xl font-bold text-white">

              Technologies I Work With

            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-300">

              Modern technologies that I use to build scalable, responsive
              and high-performance applications.

            </p>

          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            {[
              "React",
              "JavaScript",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Tailwind CSS",
              "Git",
              "GitHub",
              "REST APIs",
              "HTML5",
              "CSS3",
              "Python",
              "Firebase",
              "PostgreSQL",
              "Bootstrap",
              "AI",
            ].map((skill) => (

              <div

                key={skill}

                className="rounded-full border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-lg transition-all duration-300 hover:-translate-y-2 hover:bg-amber-500 hover:shadow-xl"

              >

                {skill}

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ===================================== */}
      {/* STRENGTHS */}
      {/* ===================================== */}

      <section className="mx-auto mt-24 max-w-7xl">

        <div className="text-center">

          <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-600">
            Strengths
          </p>

          <h2 className="display-font mt-3 text-4xl font-bold dark:text-white">

            What Makes Me Different

          </h2>

        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {[
            "Quick Learner",
            "Problem Solver",
            "Clean Code",
            "Team Collaboration",
            "Responsive Design",
            "Continuous Learning",
          ].map((item, index) => (

            <div

              key={index}

              className="group rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:border-amber-400 hover:shadow-2xl"

            >

              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-2xl text-white">

                ✓

              </div>

              <h3 className="mt-6 text-2xl font-bold dark:text-white">

                {item}

              </h3>

              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">

                Dedicated to delivering quality work with modern development
                practices and scalable solutions.

              </p>

            </div>

          ))}

        </div>

      </section>

      {/* ===================================== */}
      {/* PERSONAL INFO */}
      {/* ===================================== */}

      <section className="mx-auto mt-24 max-w-6xl">

        <div className="rounded-[35px] bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 p-[2px] shadow-2xl">

          <div className="rounded-[34px] bg-white dark:bg-slate-900 p-10">

            <div className="text-center">

              <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-600 dark:text-amber-400">

                Personal Information

              </p>

              <h2 className="display-font mt-3 text-4xl font-bold dark:text-white">

                Know Me Better

              </h2>

            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">

              <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/50 p-6">
                <strong className="dark:text-white">Full Name</strong>
                <p className="mt-2 text-slate-600 dark:text-slate-400">Muhammad Taha Khan</p>
              </div>

              <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/50 p-6">
                <strong className="dark:text-white">Nationality</strong>
                <p className="mt-2 text-slate-600 dark:text-slate-400">Pakistani</p>
              </div>

              <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/50 p-6">
                <strong className="dark:text-white">Languages</strong>
                <p className="mt-2 text-slate-600 dark:text-slate-400">English • Urdu</p>
              </div>

              <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/50 p-6">
                <strong className="dark:text-white">Email</strong>
                <p className="mt-2 text-slate-600 dark:text-slate-400">
                  m.tahaqaisrani@gmail.com
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/50 p-6">
                <strong className="dark:text-white">Phone</strong>
                <p className="mt-2 text-slate-600 dark:text-slate-400">
                  +92 330 6721738
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/50 p-6">
                <strong className="dark:text-white">Current Role</strong>
                <p className="mt-2 text-slate-600 dark:text-slate-400">
                  MERN Stack Developer
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ===================================== */}
      {/* CTA */}
      {/* ===================================== */}

      <section className="mx-auto mt-24 mb-10 max-w-6xl">

        <div className="overflow-hidden rounded-[40px] bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-16 text-center text-white shadow-[0_30px_80px_rgba(0,0,0,.35)]">

          <h2 className="display-font text-5xl font-bold">

            Let's Build Something Amazing 🚀

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-slate-300">

            Whether you have an exciting startup idea, a business website,
            an AI-powered solution, or a full-stack application, I'd love to
            collaborate and turn your vision into reality.

          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-6">

            <a

              href="/contact"

              className="rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-10 py-4 font-semibold text-white transition-all duration-300 hover:scale-110 hover:shadow-2xl"

            >

              Contact Me

            </a>

            <a

              href="https://www.github.com/tahaqaisrani"

              className="rounded-full border border-white px-10 py-4 font-semibold transition-all duration-300 hover:bg-white hover:text-slate-900"

            >

              View Projects

            </a>

          </div>

        </div>

      </section>

    </div>
  );
};

export default About;
