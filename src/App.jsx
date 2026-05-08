import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  ExternalLink,
  Code2,
  Laptop,
  Sparkles,
  User,
  Briefcase,
  GraduationCap,
  ArrowRight,
} from "lucide-react";


const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js(CRUD)",
  "GitHub",
  "JS Libraries",
  "Responsive Design",
];

const projects = [
  {
    title: "Admin Dashboard",
    description:
      "A team project admin panel built for managing tourism-related data. I worked on UI adaptation, frontend components, and responsive layout improvements.",
    tech: ["React", "JavaScript", "CSS", "Git"],
    github: "https://github.com/yourusername/admin-dashboard",
    demo: "#",
  },
  {
    title: "Weather App",
    description:
      "A responsive weather application that allows users to search for cities and view current weather information using an external API.",
    tech: ["React", "API", "CSS"],
    github: "https://github.com/yourusername/weather-app",
    demo: "#",
  },
  {
    title: "Modern Landing Page",
    description:
      "A clean and responsive landing page created from a Figma-style design with focus on layout, typography, and mobile-friendly UI.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/yourusername/landing-page",
    demo: "#",
  },
];

const certificates = [
  {
    title: "HTML/CSS Certificate",
    issuer: "Certiport / Course Certificate",
  },
  {
    title: "Code Academy Diploma",
    issuer: "Course Certificate",
  },
  {
    title: "IELTS Academic 7.0",
    issuer: "IDP IELTS",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <div className="absolute inset-0 -z-0 overflow-hidden">
        <div className="absolute left-[-120px] top-[-120px] h-80 w-80 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute right-[-120px] top-[260px] h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-[-160px] left-[35%] h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-lg font-bold tracking-tight">
            Ayan Akhundova<span className="text-cyan-400">.</span>
          </a>

          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#skills" className="transition hover:text-white">
              Skills
            </a>
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>
            <a href="#certificates" className="transition hover:text-white">
              Certificates
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <section
        id="home"
        className="relative z-10 mx-auto grid min-h-[88vh] max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-[1.2fr_0.8fr]"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
            <Sparkles size={16} />
            Junior Frontend Developer
          </div>

          <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
              Ayan Akhundova
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            I build responsive, clean, and user-friendly web interfaces using
            HTML, CSS, JavaScript, and React. I enjoy creating modern UI,
            improving my frontend skills, and working on real projects.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:-translate-y-0.5 hover:bg-cyan-300"
            >
              View Projects
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://github.com/Ayan292005"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              <Code2 size={18} />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/ayan-a-9b541b277/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              <ExternalLink size={18} />
              LinkedIn
            </a>

            <a
              href="ayan.ahundova@gmail.com"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              <Mail size={18} />
              Email
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative"
        >
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/40 backdrop-blur-xl">
            <div className="mb-5 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            <pre className="overflow-hidden rounded-2xl bg-slate-950/80 p-5 text-sm leading-7 text-slate-300">
              <code>{`const developer = {
  name: "Ayan Akhundova",
  role: "Frontend Developer",
  skills: ["React", "JavaScript", "HTML/CSS"],
  focus: "Clean and responsive UI",
  learning: true,
};`}</code>
            </pre>
          </div>
        </motion.div>
      </section>

      <section id="about" className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="grid gap-6 md:grid-cols-[0.8fr_1.2fr]"
        >
          <div>
            <p className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              <User size={16} />
              About me
            </p>

            <h2 className="text-4xl font-bold tracking-tight">
              Creating interfaces that are simple, clear, and useful.
            </h2>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-8 text-slate-300 shadow-xl shadow-black/20">
            <p className="leading-8">
              I am a junior frontend developer focused on building modern web
              applications. I work with HTML, CSS, JavaScript, React, Git, and
              GitHub. I am interested in responsive design, UI/UX, and writing
              clean code that is easy to understand and maintain.
            </p>

            <p className="mt-4 leading-8">
              I have experience working on personal and team projects, including
              admin panels, landing pages, and React applications. My goal is to
              grow as a frontend developer and contribute to real products with
              useful and polished interfaces.
            </p>
          </div>
        </motion.div>
      </section>

      <section id="skills" className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            <Code2 size={16} />
            Skills
          </p>

          <h2 className="text-4xl font-bold tracking-tight">
            Technologies I use
          </h2>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 text-center font-medium text-slate-200 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-300/10"
              >
                {skill}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section
        id="projects"
        className="relative z-10 mx-auto max-w-6xl px-6 py-20"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            <Briefcase size={16} />
            Projects
          </p>

          <h2 className="text-4xl font-bold tracking-tight">Selected work</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group flex flex-col rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-xl shadow-black/20 transition hover:-translate-y-2 hover:border-cyan-300/40"
              >
                <div className="mb-5 flex h-44 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 via-violet-400/20 to-fuchsia-400/20">
                  <Laptop size={54} className="text-cyan-200" />
                </div>

                <h3 className="text-xl font-bold">{project.title}</h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-slate-300">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-slate-900/80 px-3 py-1 text-xs text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10"
                  >
                    <Code2 size={16} />
                    Code
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                </div>
              </article>
            ))}
          </div>
        </motion.div>
      </section>

      <section
        id="certificates"
        className="relative z-10 mx-auto max-w-6xl px-6 py-20"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            <GraduationCap size={16} />
            Certificates
          </p>

          <h2 className="text-4xl font-bold tracking-tight">
            Education & certificates
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {certificates.map((certificate) => (
              <article
                key={certificate.title}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] shadow-xl shadow-black/20 transition hover:-translate-y-2 hover:border-cyan-300/40"
              >

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white">
                    {certificate.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-300">
                    {certificate.issuer}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </motion.div>
      </section>

      <section
        id="contact"
        className="relative z-10 mx-auto max-w-6xl px-6 py-20"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.09] to-white/[0.04] p-8 text-center shadow-2xl shadow-black/20 md:p-12"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Contact
          </p>

          <h2 className="text-4xl font-bold tracking-tight">
            Let&apos;s work together
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-300">
            I am open to junior frontend developer opportunities, internships,
            freelance tasks, and team projects.
          </p>

          <a
            href="mailto:ayan.ahundova@gmail.com"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:-translate-y-0.5 hover:bg-cyan-300"
          >
            <Mail size={18} />
            Send Email
          </a>
        </motion.div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-6 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Ayan Akhundova. Built with React.
      </footer>
    </main>
  );
}