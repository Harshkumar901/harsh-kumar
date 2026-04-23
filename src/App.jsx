import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Award,
  Briefcase,
  Code2,
  GraduationCap,
  Menu,
  X,
  ChevronDown,
  Filter,
  Sparkles,
  Shield,
  Cpu,
} from "lucide-react";

const SMART_CAMERA_IMAGE = "/smart-camera-preview.png";

const projects = [
  {
    id: "motion-detection",
    title: "Smart Camera Motion Detection",
    period: "Oct 2025 – Dec 2025",
    stack: ["Python", "OpenCV","YOLOv8 Model"],
    description:
      "A real-time computer vision system that detects movement through webcam input using frame differencing and contour-based motion analysis.",
    points: [
      "Implemented frame comparison and contour detection",
      "Real-time webcam processing using Python and OpenCV",
      "Designed for surveillance and automated monitoring use cases",
    ],
    github: "https://github.com/Harshkumar901/intelligent-threat-scoring-surveillance---prototype",
    live: "#",
    type: "vision",
  },
  
  {
  id: "shadowchat",
  title: "ShadowChat",
  period: "Ongoing",
  stack: ["Flutter", "Dart", "Firebase"],
  description:
    "A privacy-focused messaging application built with Flutter and Firebase, designed around secure authentication, real-time communication, and a scalable feature-first architecture.",
  points: [
    "Secure authentication and real-time chat powered by Firebase",
    "Feature-first Flutter architecture for scalability and easier maintenance",
    "Focused on clean UI, smooth navigation, and privacy-oriented messaging flows",
  ],
  github: "YOUR_SHADOWCHAT_REPO_LINK_HERE",
  live: "#",
  type: "chat",
  image: "/shadowchat-preview.png",
},
  {
    id: "astro",
    title: "Astro Website",
    period: "Ongoing",
    stack: ["React", "Firebase"],
    description:
      "A responsive astronomy-focused platform delivering educational content about celestial objects, space topics, and modern web-based learning experiences.",
    points: [
      "Dynamic content delivery with reusable React components",
      "Responsive design for cross-device accessibility",
      "Performance-focused structure for smooth browsing",
    ],
    github: "https://github.com/Harshkumar901",
    live: "#",
    type: "astro",
  },
];

const certificates = [
  // Web & Full Stack
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "2023",
    category: "Web & Full Stack",
    link: "https://drive.google.com/file/d/1n47_w0CVf1H-BqJj2wj2F632uadbV6bV/view?usp=sharing",
  },
  {
    title: "Net Full Stack Foundation",
    issuer: "Coursera",
    date: "2025",
    category: "Web & Full Stack",
    link: "https://coursera.org/share/b2d77f305230bf89b28130a97a3a41f5",
  },
  {
    title: "Full Stack Mastery with C# / .NET",
    issuer: "Chandigarh University",
    date: "2025",
    category: "Web & Full Stack",
    link: "https://drive.google.com/file/d/1NM1LckKP8TFONkvY5LRUftsoBicgR0NF/view?usp=sharing",
  },

  // Databases & SQL
  {
    title: "SQL: A Practical Introduction for Querying Databases",
    issuer: "Coursera",
    date: "2026",
    category: "Databases & SQL",
    link: "https://coursera.org/share/ef1a9e370cfc05c7fc5c50cc8bb22b09",
  },
  {
    title: "Introduction to Databases",
    issuer: "Coursera",
    date: "2026",
    category: "Databases & SQL",
    link: "https://coursera.org/share/3ab5817e706e78e04ae9e501bf19df1b",
  },
  {
    title: "Databases and SQL for Data Science with Python",
    issuer: "Coursera",
    date: "2026",
    category: "Databases & SQL",
    link: "https://coursera.org/share/0340528da41f9668effef47765fdf743",
  },

  // AI & Computer Vision
  {
    title: "Build a computer vision app with Azure Cognitive Services",
    issuer: "Coursera",
    date: "2026",
    category: "AI & Computer Vision",
    link: "https://coursera.org/share/e152402d18a2d7a665273e2a389c32bf",
  },
  {
    title: "Introduction to Artificial Intelligence (AI)",
    issuer: "Coursera",
    date: "2026",
    category: "AI & Computer Vision",
    link: "https://coursera.org/share/99e7a343f58bf02e73155cd3682f9cfa",
  },
  {
    title: "AI For Everyone",
    issuer: "Coursera",
    date: "2026",
    category: "AI & Computer Vision",
    link: "https://coursera.org/share/460b932d72b20c8f4406b01cd02927db",
  },

  // Cybersecurity
  {
    title: "Ethical Hacking Foundations & Network Security",
    issuer: "Coursera",
    date: "2026",
    category: "Cybersecurity",
    link: "https://coursera.org/share/449c28e0ef63caa4f9d53770d12640cd",
  },

  // Cloud & Systems
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    date: "2025",
    category: "Cloud & Systems",
    link: "https://drive.google.com/file/d/1V-3kcKDv7SFNKMpyctXDfyLsu1zNy04S/view?usp=sharing",
  },
  {
  title: "Guidewire DEVTrails University Hackathon 2026",
  issuer: "Guidewire",
  date: "2026",
  category: "Hackathons & Achievements",
  link: "https://guidewiredevtrails.com/user/el-participation-certificate/6998724aa8a33GWDT261771598410",
},

  // Leadership
  {
    title: "Media Lead — IEEE ComSoc",
    issuer: "Leadership / Extracurricular",
    date: "Current",
    category: "Leadership",
    link: "",
  },
];

const skills = {
  Languages: ["C++", "Python", "SQL", "HTML5", "CSS3", "Dart"],
  Tools: ["React","Flutter", "Firebase", "MySQL", "Git", "OpenCV", "Android Studio"],
  Strengths: ["Problem Solving", "Self-Learning", "Curiosity & Innovation", "Adaptability"],
};

const certificateTabs = [
  "All",
  "Web & Full Stack",
  "Databases & SQL",
  "AI & Computer Vision",
  "Cybersecurity",
  "Cloud & Systems",
  "Hackathons & Achievements",
  "Leadership",
];

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-10">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-blue-300/80">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-3 max-w-2xl text-sm text-zinc-400 sm:text-base">{subtitle}</p> : null}
    </div>
  );
}
function ProjectVisual({ type, title, image }) {
  if (image) {
    return (
      <div className="relative h-44 overflow-hidden rounded-2xl border border-white/10 bg-black">
        <img
          src={image}
          alt={`${title} preview`}
          className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          <span className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-emerald-200">
            Project Preview
          </span>
          <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-blue-200">
            Real Screenshot
          </span>
        </div>
        <div className="absolute bottom-3 left-4 text-[11px] uppercase tracking-[0.22em] text-zinc-300">
          {title}
        </div>
      </div>
    );
  }

  if (type === "chat") {
    return (
      <div className="relative h-44 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/10 via-white/5 to-purple-500/10 p-4">
        <div className="absolute inset-0 animate-pulse bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.15),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.12),transparent_30%)]" />
        <div className="relative flex h-full items-center justify-center gap-4">
          <div className="rounded-3xl border border-blue-400/20 bg-blue-500/10 p-4 backdrop-blur-md">
            <Shield className="text-blue-300" size={30} />
          </div>
          <div className="space-y-2">
            <div className="h-2 w-24 rounded-full bg-blue-400/40" />
            <div className="h-2 w-32 rounded-full bg-white/20" />
            <div className="h-2 w-20 rounded-full bg-purple-400/30" />
          </div>
        </div>
        <div className="absolute bottom-3 left-4 text-[11px] uppercase tracking-[0.22em] text-zinc-400">
          {title}
        </div>
      </div>
    );
  }

  if (type === "astro") {
    return (
      <div className="relative h-44 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/10 via-black to-cyan-500/10 p-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[length:18px_18px] opacity-20" />
        <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-sm" />
        <div
          className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/20 animate-spin"
          style={{ animationDuration: "10s" }}
        />
        <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-y-12 rounded-full bg-cyan-300 shadow-lg shadow-cyan-400/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Sparkles className="text-cyan-200/80" size={30} />
        </div>
        <div className="absolute bottom-3 left-4 text-[11px] uppercase tracking-[0.22em] text-zinc-400">
          {title}
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-44 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/10 via-white/5 to-blue-500/10 p-4">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.04),transparent)] animate-pulse" />
      <div className="relative flex h-full flex-col items-center justify-center gap-4">
        <div className="rounded-3xl border border-emerald-400/20 bg-emerald-500/10 p-4 backdrop-blur-md">
          <Cpu className="text-emerald-300" size={28} />
        </div>
      </div>
      <div className="absolute bottom-3 left-4 text-[11px] uppercase tracking-[0.22em] text-zinc-400">
        Upload screenshot later
      </div>
    </div>
  );
}


  


function getIssuerBadgeClass(issuer) {
  if (issuer === "Coursera") {
    return "border-blue-400/20 bg-blue-500/10 text-blue-200";
  }
  if (issuer === "freeCodeCamp") {
    return "border-emerald-400/20 bg-emerald-500/10 text-emerald-200";
  }
  if (issuer === "NPTEL") {
    return "border-purple-400/20 bg-purple-500/10 text-purple-200";
  }
  if (issuer === "Chandigarh University") {
    return "border-amber-400/20 bg-amber-500/10 text-amber-200";
  }
  if (issuer === "Guidewire") {
    return "border-cyan-400/20 bg-cyan-500/10 text-cyan-200";
  }
  return "border-white/10 bg-white/5 text-zinc-300";
}

export default function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [activeCertTab, setActiveCertTab] = React.useState("All");
  const [expandedProject, setExpandedProject] = React.useState(null);

  const navItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "certificates", label: "Certificates" },
    { id: "leadership", label: "Achievements" },
    { id: "contact", label: "Contact" },
  ];

  const filteredCertificates =
    activeCertTab === "All"
      ? certificates
      : certificates.filter((cert) => cert.category === activeCertTab);

  return (
    <div className="min-h-screen bg-[#05060a] text-zinc-100 selection:bg-blue-500/30 selection:text-white">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-[-10%] top-[20%] h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[30%] h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.03),transparent_35%)]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#05060a]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#home" className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
            Harsh Kumar
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="text-sm text-zinc-400 transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="rounded-xl border border-white/10 p-2 text-zinc-300 md:hidden"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {menuOpen ? (
          <div className="border-t border-white/5 bg-[#090b10] px-5 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm text-zinc-300"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </header>

      <main>
        <section id="home" className="mx-auto max-w-7xl px-5 pb-16 pt-16 sm:px-8 sm:pt-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-blue-300/80">
                Cold. Clean. Built to perform.
              </p>
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">
                Harsh Kumar
                <span className="mt-2 block text-2xl font-medium text-zinc-300 sm:text-3xl">
                  B.Tech CSE Student • React & Python Developer
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
                I build practical, performance-focused tech projects with a clean engineering mindset. My work is
                centered around modern web applications, real-time systems, and computer vision — designed to be
                functional, scalable, and sharp.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="rounded-2xl border border-blue-400/20 bg-blue-500/10 px-5 py-3 text-sm font-medium text-blue-200 transition hover:bg-blue-500/20"
                >
                  View Projects
                </a>
                <a
                  href="#certificates"
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-zinc-200 transition hover:bg-white/10"
                >
                  View Credentials
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-zinc-400">
                <a
                  href="https://github.com/Harshkumar901"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 transition hover:text-white"
                >
                  <Github size={16} /> GitHub
                </a>
                <a
                  href="https://linkedin.com/in/harsh-punia-31997328b/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 transition hover:text-white"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
                <a href="mailto:puniah901@gmail.com" className="flex items-center gap-2 transition hover:text-white">
                  <Mail size={16} /> Email
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 shadow-2xl shadow-black/30 backdrop-blur-xl">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.24em] text-zinc-500">Profile Snapshot</span>
                  <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-emerald-300">
                    Open to Internships
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="rounded-2xl border border-white/5 bg-black/20 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Focus</p>
                    <p className="mt-2 text-sm text-zinc-300">Web Development • Firebase Systems • Computer Vision</p>
                  </div>
                  <div className="rounded-2xl border border-white/5 bg-black/20 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Leadership</p>
                    <p className="mt-2 text-sm text-zinc-300">Media Lead — IEEE Communications Society</p>
                  </div>
                  <div className="rounded-2xl border border-white/5 bg-black/20 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Achievement</p>
                    <p className="mt-2 text-sm text-zinc-300">Guidewire DEVTrails University Hackathon 2026 Participant</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 flex justify-center">
            <a href="#about" className="inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-zinc-300">
              Scroll <ChevronDown size={16} />
            </a>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <SectionTitle
            eyebrow="About"
            title="Built with intent. Not noise."
            subtitle="A premium single-page portfolio designed to show real work, real progression, and a serious technical profile."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 lg:col-span-2">
              <p className="text-base leading-8 text-zinc-300 sm:text-lg">
  I’m a 3rd-year B.Tech Computer Science student at Chandigarh University, focused on building practical and
  impactful software projects. My work spans modern web development, mobile app development, and real-time
  systems using React, Flutter, Firebase, Python, and OpenCV. I enjoy turning ideas into clean, functional,
  and scalable solutions while continuously strengthening my development and problem-solving skills.
</p>
            </div>

            <div className="grid gap-6">
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <GraduationCap className="mb-4 text-blue-300" size={22} />
                <p className="text-sm text-zinc-400">Education</p>
                <p className="mt-2 text-sm font-medium text-white">B.Tech CSE, Chandigarh University</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <Code2 className="mb-4 text-blue-300" size={22} />
                <p className="text-sm text-zinc-400">Core Stack</p>
                <p className="mt-2 text-sm font-medium text-white">React • Flutter • Firebase • Python • OpenCV</p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <SectionTitle
            eyebrow="Skills"
            title="Technical stack"
            subtitle="Focused tools. Practical execution. Internship-ready foundations."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {Object.entries(skills).map(([category, list]) => (
              <div key={category} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="text-lg font-medium text-white">{category}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {list.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <SectionTitle
            eyebrow="Projects"
            title="Real builds. Clear execution."
            subtitle="Click a project to expand details. Replace placeholder GitHub profile links with actual repository links when ready."
          />

          <div className="grid gap-8">
            {projects.map((project) => {
              const isExpanded = expandedProject === project.id;

              return (
                <div
                  key={project.id}
                  className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition duration-300 hover:border-white/15"
                >
                  <button
                    onClick={() => setExpandedProject(isExpanded ? null : project.id)}
                    className="grid w-full gap-6 p-5 text-left md:grid-cols-[0.9fr_1.1fr] md:p-6"
                  >
                    <ProjectVisual
                      type={project.type}
                      title={project.title}
                      image={project.image || (project.type === "vision" ? SMART_CAMERA_IMAGE : null)}
                    />

                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                          <p className="mt-1 text-sm text-zinc-400">{project.period}</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.stack.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full border border-blue-400/15 bg-blue-500/10 px-3 py-1 text-xs text-blue-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <p className="mt-4 text-sm leading-7 text-zinc-300 sm:text-base">{project.description}</p>

                      <div className="mt-5 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-500">
                        <span>{isExpanded ? "Click to collapse" : "Click to expand"}</span>
                      </div>
                    </div>
                  </button>

                  {isExpanded ? (
                    <div className="border-t border-white/5 px-5 pb-5 pt-5 md:px-6 md:pb-6">
                      <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
                        <div>
                          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                            Project Highlights
                          </h4>
                          <ul className="mt-4 space-y-3 text-sm text-zinc-300">
                            {project.points.map((point) => (
                              <li key={point} className="flex gap-3">
                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-300" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Links</p>
                          <div className="mt-4 flex flex-wrap gap-3">
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200 transition hover:bg-white/10"
                            >
                              <Github size={16} /> GitHub
                            </a>

                            {project.live !== "#" ? (
                              <a
                                href={project.live}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-2xl border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200 transition hover:bg-blue-500/20"
                              >
                                <ExternalLink size={16} /> Live Demo
                              </a>
                            ) : (
                              <span className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-400">
                                Demo not deployed yet
                              </span>
                            )}
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </section>

        <section id="certificates" className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <SectionTitle
            eyebrow="Certificates"
            title="Grouped by real skill domains"
            subtitle="Certificates are organized by technical relevance, not just platform — making the section cleaner, more strategic, and easier for recruiters to scan."
          />

          <div className="mb-8 flex flex-wrap gap-3">
            {certificateTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveCertTab(tab)}
                className={`inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm transition ${
                  activeCertTab === tab
                    ? "border-blue-400/20 bg-blue-500/10 text-blue-200"
                    : "border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10"
                }`}
              >
                <Filter size={14} /> {tab}
              </button>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredCertificates.map((cert) => (
              <div key={`${cert.title}-${cert.category}`} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">{cert.category}</p>
                    <h3 className="mt-2 text-lg font-semibold text-white">{cert.title}</h3>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-zinc-300">
                    {cert.date}
                  </span>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span
                    className={`rounded-full border px-3 py-1 text-[11px] font-medium ${getIssuerBadgeClass(cert.issuer)}`}
                  >
                    {cert.issuer}
                  </span>
                </div>

                {cert.link ? (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 rounded-2xl border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200 transition hover:bg-blue-500/20"
                  >
                    <ExternalLink size={15} /> View Credential
                  </a>
                ) : (
                  <span className="mt-5 inline-flex rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-400">
                    Credential available on request
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>

        <section id="leadership" className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <SectionTitle eyebrow="Leadership & Achievements" title="Responsibility backed by action" />

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <Briefcase className="mb-4 text-blue-300" size={22} />
              <p className="text-sm text-zinc-400">Position of Responsibility</p>
              <h3 className="mt-2 text-xl font-semibold text-white">Media Lead — IEEE Communications Society (ComSoc)</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-300">
                Appointed as Media Lead at Chandigarh University chapter, contributing to event visibility, digital
                presence, content coordination, and student engagement support.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <Award className="mb-4 text-blue-300" size={22} />
              <p className="text-sm text-zinc-400">Achievement</p>
              <h3 className="mt-2 text-xl font-semibold text-white">Guidewire DEVTrails University Hackathon 2026 Participant</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-300">
                Participated in the Guidewire Hackathon, where I collaborated on building a solution within a limited timeframe, focusing on problem-solving, teamwork, and practical implementation. It was a valuable experience in applying technical skills under competitive and time-bound conditions.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-blue-500/[0.04] p-6 sm:p-8">
            <SectionTitle
              eyebrow="Contact"
              title="Open to internships and real opportunities"
              subtitle="If you want someone who values clean work, practical systems, and fast learning — reach out."
            />

            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href="mailto:puniah901@gmail.com"
                className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-zinc-200 transition hover:bg-white/10"
              >
                <Mail size={18} /> puniah901@gmail.com
              </a>
              <a
                href="https://github.com/Harshkumar901"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-zinc-200 transition hover:bg-white/10"
              >
                <Github size={18} /> github.com/Harshkumar901
              </a>
              <a
                href="https://linkedin.com/in/harsh-punia-31997328b/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-zinc-200 transition hover:bg-white/10"
              >
                <Linkedin size={18} /> LinkedIn Profile
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}