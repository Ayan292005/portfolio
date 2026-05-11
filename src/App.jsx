import React, { useState } from "react";
import { motion } from "framer-motion";
import { translations } from "./translations";

import {
  Mail,
  ExternalLink,
  Code2,
  Play,
  Sparkles,
  User,
  Briefcase,
  GraduationCap,
  ArrowRight,
  Menu,
  X,
  Laptop,
} from "lucide-react";

import ecoFriendlyVideo from "./assets/eco-friendly.mp4";
import ecoFriendlyPreview from "./assets/eco-friendly-preview.png";

// import weatherVideo from "./assets/weather-demo.mp4";
// import weatherPreview from "./assets/weather-preview.png";

// import landingVideo from "./assets/landing-demo.mp4";
// import landingPreview from "./assets/landing-preview.png";

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
    title: "Eco-Friendly Store Website",
    description:
      "A responsive eco-commerce landing page for sustainable home products. Includes product sections, collections, mission block, sale banner, newsletter form, and mobile-friendly navigation.",
    descriptionRu:
      "Адаптивный лендинг для eco-commerce сайта с товарами для устойчивого образа жизни. Включает секции товаров, коллекции, блок миссии, баннер распродажи, форму подписки и адаптивную навигацию.",
    tech: ["HTML", "CSS", "GitHub"],
    github: "https://github.com/Ayan292005/website-old-template-2024.git",
    video: ecoFriendlyVideo,
    preview: ecoFriendlyPreview,
  },
  {
    title: "Weather App",
    description:
      "A responsive weather application that allows users to search for cities and view current weather information using an external API.",
    descriptionRu:
      "Адаптивное приложение погоды, которое позволяет пользователям искать города и просматривать текущую информацию о погоде через внешний API.",
    tech: ["React", "JS", "CSS", "API"],
    github: "https://github.com/yourusername/weather-app",
    // video: weatherVideo,
    // preview: weatherPreview,
  },
  {
    title: "Modern Landing Page",
    description:
      "A clean and responsive landing page created from a Figma-style design with focus on layout, typography, and mobile-friendly UI.",
    descriptionRu:
      "Аккуратный и адаптивный лендинг, созданный по дизайну в стиле Figma, с акцентом на структуру, типографику и удобство на мобильных устройствах.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/yourusername/landing-page",
    // video: landingVideo,
    // preview: landingPreview,
  },
];

const certificates = [
  {
    title: "HTML/CSS Certificate",
    titleRu: "Сертификат HTML/CSS",
    issuer: "Certiport / Course Certificate",
    issuerRu: "Certiport / Сертификат курса",
  },
  {
    title: "Code Academy Diploma",
    titleRu: "Диплом Code Academy",
    issuer: "Course Certificate",
    issuerRu: "Сертификат курса",
  },
  {
    title: "IELTS Academic 7.0",
    titleRu: "IELTS Academic 7.0",
    issuer: "IDP IELTS",
    issuerRu: "IDP IELTS",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function App() {
  const [language, setLanguage] = useState("en");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const t = translations[language];

  const changeLanguage = () => {
    setLanguage(language === "en" ? "ru" : "en");
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 -z-0 overflow-hidden">
        <div className="absolute left-[-120px] top-[-120px] h-80 w-80 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute right-[-120px] top-[260px] h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-[-160px] left-[35%] h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <nav className="relative mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6">
          <a
            href="#home"
            onClick={closeMenu}
            className="text-base font-bold tracking-tight sm:text-lg"
          >
               Ayan Akhundova<span className="text-cyan-400">.</span>
          </a>

          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-white">
              {t.about}
            </a>
            <a href="#skills" className="transition hover:text-white">
              {t.skills}
            </a>
            <a href="#projects" className="transition hover:text-white">
              {t.projects}
            </a>
            <a href="#certificates" className="transition hover:text-white">
              {t.certificates}
            </a>
            <a href="#contact" className="transition hover:text-white">
              {t.contact}
            </a>

            <button
              onClick={changeLanguage}
              className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-slate-300 transition hover:border-cyan-300/40 hover:bg-white/10 hover:text-white"
              type="button"
            >
              {language === "en" ? "RU" : "EN"}
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-slate-200 transition hover:bg-white/10 md:hidden"
            aria-label="Open menu"
            type="button"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.2 }}
              className="absolute left-4 right-4 top-[72px] z-50 rounded-2xl border border-white/10 bg-slate-950/95 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl md:hidden"
            >
              <div className="flex flex-col gap-2 text-sm text-slate-300">
                <a
                  href="#about"
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3 transition hover:bg-white/10 hover:text-white"
                >
                  {t.about}
                </a>

                <a
                  href="#skills"
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3 transition hover:bg-white/10 hover:text-white"
                >
                  {t.skills}
                </a>

                <a
                  href="#projects"
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3 transition hover:bg-white/10 hover:text-white"
                >
                  {t.projects}
                </a>

                <a
                  href="#certificates"
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3 transition hover:bg-white/10 hover:text-white"
                >
                  {t.certificates}
                </a>

                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3 transition hover:bg-white/10 hover:text-white"
                >
                  {t.contact}
                </a>

                <button
                  onClick={() => {
                    changeLanguage();
                    closeMenu();
                  }}
                  className="mt-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left font-semibold text-slate-300 transition hover:border-cyan-300/40 hover:bg-white/10 hover:text-white"
                  type="button"
                >
                  {language === "en" ? "Switch to Russian" : "Switch to English"}
                </button>
              </div>
            </motion.div>
          )}
        </nav>
      </header>

      <section
        id="home"
        className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-5 py-12 sm:px-6 sm:py-16 md:py-20 lg:grid-cols-[1fr_0.9fr] xl:min-h-[88vh] xl:gap-14"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="min-w-0"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs text-cyan-200 sm:mb-6 sm:text-sm">
            <Sparkles size={16} />
            {t.badge}
          </div>

          <h1 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-6xl xl:text-7xl">
            {t.heroTitleStart}{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
              {t.name}
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:mt-6 sm:text-lg">
            {t.heroText}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              href="#projects"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:-translate-y-0.5 hover:bg-cyan-300 sm:w-auto"
            >
              {t.viewProjects}
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </a>

            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10 sm:w-auto"
            >
              {t.contactMe}
            </a>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3 min-[420px]:grid-cols-3 sm:mt-8 sm:flex sm:flex-wrap sm:gap-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              <Code2 size={18} />
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              <ExternalLink size={18} />
              LinkedIn
            </a>

            <a
              href="mailto:ayan.ahundova@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
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
          className="relative w-full"
        >
          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-black/40 backdrop-blur-xl sm:rounded-[2rem] sm:p-6">
            <div className="mb-4 flex gap-2 sm:mb-5">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            <pre className="whitespace-pre-wrap break-words rounded-2xl bg-slate-950/80 p-4 text-xs leading-7 text-slate-300 sm:p-5 sm:text-sm">
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

      <section
        id="about"
        className="relative z-10 mx-auto max-w-6xl px-6 py-20"
      >
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
              {t.aboutSmallTitle}
            </p>

            <h2 className="text-4xl font-bold tracking-tight">
              {t.aboutTitle}
            </h2>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-8 text-slate-300 shadow-xl shadow-black/20">
            <p className="leading-8">{t.aboutTextOne}</p>
            <p className="mt-4 leading-8">{t.aboutTextTwo}</p>
          </div>
        </motion.div>
      </section>

      <section
        id="skills"
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
            <Code2 size={16} />
            {t.skillsSmallTitle}
          </p>

          <h2 className="text-4xl font-bold tracking-tight">
            {t.skillsTitle}
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
            {t.projectsSmallTitle}
          </p>

          <h2 className="text-4xl font-bold tracking-tight">
            {t.projectsTitle}
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group flex flex-col rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-xl shadow-black/20 transition hover:-translate-y-2 hover:border-cyan-300/40"
              >
                {project.video && project.preview ? (
                  <a
                    href={project.video}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open demo video for ${project.title}`}
                    className="group/video relative mb-5 block h-44 overflow-hidden rounded-2xl bg-slate-900"
                  >
                    <img
                      src={project.preview}
                      alt={`${project.title} preview`}
                      className="h-full w-full object-cover transition duration-500 group-hover/video:scale-105"
                    />

                    <div className="absolute inset-0 bg-slate-950/40 transition group-hover/video:bg-slate-950/20" />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white shadow-2xl backdrop-blur-md transition group-hover/video:scale-110 group-hover/video:bg-cyan-400 group-hover/video:text-slate-950">
                        <Play size={28} fill="currentColor" />
                      </div>
                    </div>

                    <span className="absolute bottom-3 left-3 rounded-full border border-white/15 bg-slate-950/70 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                      Demo Video
                    </span>
                  </a>
                ) : (
                  <div className="relative mb-5 flex h-44 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-400/20 via-violet-400/20 to-fuchsia-400/20">
                    <Laptop size={52} className="text-cyan-200" />
                    <span className="absolute bottom-3 left-3 rounded-full border border-white/15 bg-slate-950/70 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                      Preview coming soon
                    </span>
                  </div>
                )}

                <h3 className="text-xl font-bold">{project.title}</h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-slate-300">
                  {language === "en"
                    ? project.description
                    : project.descriptionRu}
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

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10"
                  >
                    <Code2 size={16} />
                    {t.code}
                  </a>

                  {project.video && (
                    <a
                      href={project.video}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                    >
                      <Play size={16} fill="currentColor" />
                      {t.demo || "Demo Video"}
                    </a>
                  )}
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
            {t.certificatesSmallTitle}
          </p>

          <h2 className="text-4xl font-bold tracking-tight">
            {t.certificatesTitle}
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {certificates.map((certificate) => (
              <article
                key={certificate.title}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] shadow-xl shadow-black/20 transition hover:-translate-y-2 hover:border-cyan-300/40"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white">
                    {language === "en"
                      ? certificate.title
                      : certificate.titleRu}
                  </h3>

                  <p className="mt-2 text-sm text-slate-300">
                    {language === "en"
                      ? certificate.issuer
                      : certificate.issuerRu}
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
            {t.contactSmallTitle}
          </p>

          <h2 className="text-4xl font-bold tracking-tight">
            {t.contactTitle}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-300">
            {t.contactText}
          </p>

          <a
            href="mailto:ayan.ahundova@gmail.com"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:-translate-y-0.5 hover:bg-cyan-300"
          >
            <Mail size={18} />
            {t.sendEmail}
          </a>
        </motion.div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-6 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Ayan Akhundova. {t.footer}
      </footer>
    </main>
  );
}