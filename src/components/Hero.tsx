import React from "react";

const Hero = () => {
  return (
    <>
      <div className="flex items-center vyfcq">
       <div className="relative group cursor-pointer shrink-0">
          {/* Animated gradient rings */}
          <div className="absolute inset-0 rounded-full">
            <div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-75 animate-spin"
              style={{ animationDuration: "3s" }}
            ></div>
            <div
              className="absolute inset-1 rounded-full bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 opacity-50 animate-spin"
              style={{ animationDuration: "2s", animationDirection: "reverse" }}
            ></div>
            <div className="absolute inset-2 rounded-full bg-white dark:bg-gray-900"></div>
          </div>

          {/* Enhanced glow effect */}
          <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-40 blur-xl transition-all duration-500 animate-pulse"></div>

          {/* Hexagonal frame overlay - improved */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <svg
              className="absolute inset-0 w-full h-full opacity-30 group-hover:opacity-60 transition-all duration-500"
              viewBox="0 0 100 100"
            >
              <polygon
                points="50,5 85,25 85,75 50,95 15,75 15,25"
                fill="none"
                stroke="url(#hexGradient)"
                strokeWidth="2"
                className="animate-pulse"
              />
              <polygon
                points="50,10 80,28 80,72 50,90 20,72 20,28"
                fill="none"
                stroke="url(#hexGradient2)"
                strokeWidth="1"
                className="animate-pulse opacity-50"
                style={{ animationDelay: "0.5s" }}
              />
              <defs>
                <linearGradient
                  id="hexGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
                <linearGradient
                  id="hexGradient2"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#ec4899" />
                  <stop offset="50%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Main image with enhanced hover effects */}
          <div className="relative z-10">
            <img
              className="relative size-20 sm:size-24 rounded-full object-cover shadow-2xl transition-all duration-700 group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] border-4 border-white dark:border-gray-800 group-hover:border-purple-300 dark:group-hover:border-purple-600"
              src="/ayush.jpg"
              alt="Ayush Niraula - Software Engineer"
            />

            {/* Enhanced hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
              <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/30">
                <span className="text-white text-xs font-semibold animate-bounce">
                  👋 Say Hi!
                </span>
              </div>
            </div>

            {/* Enhanced floating particles */}
            <div
              className="absolute -top-2 -right-2 w-3 h-3 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce shadow-lg"
              style={{ animationDelay: "0s" }}
            ></div>
            <div
              className="absolute -top-1 -left-3 w-2 h-2 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce shadow-lg"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="absolute -bottom-2 -left-2 w-2.5 h-2.5 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce shadow-lg"
              style={{ animationDelay: "0.4s" }}
            ></div>
            <div
              className="absolute -bottom-1 -right-3 w-2 h-2 bg-gradient-to-br from-green-400 to-green-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce shadow-lg"
              style={{ animationDelay: "0.6s" }}
            ></div>

            {/* Additional sparkle effects */}
            <div
              className="absolute top-2 right-1 w-1.5 h-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-ping"
              style={{ animationDelay: "0.8s" }}
            ></div>
            <div
              className="absolute bottom-3 left-1 w-1 h-1 bg-yellow-300 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-ping"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>

          {/* Enhanced status indicator */}
          <div className="absolute -bottom-1 -right-1 z-20">
            <div className="relative">
              <div className="absolute inset-0 w-7 h-7 bg-green-400 rounded-full animate-ping opacity-75"></div>
              <div className="absolute inset-0 w-7 h-7 bg-green-300 rounded-full animate-pulse opacity-50"></div>
              <div className="relative w-7 h-7 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-3 border-white dark:border-gray-800 shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="hlt95">
          <h1 className="tbkeq sikx1 c9jt8 dark:text-neutral-200">
            Ayush Niraula
          </h1>
          <p className="w4xo0 fd43e dark:text-neutral-400">
            Software Engineer / Full Stack Developer{" "}
          </p>
          <small className="dark:text-green-400 dark:font-semibold">Node.js · React · Angular · Express · MongoDB · Git </small>
        

        </div>
      </div>

      <div className="kkoj7">
        <p className="w4xo0 fd43e dark:text-neutral-400">
          I am a Software Engineer and Full-Stack Developer with expertise in
          building scalable web applications using Angular, React, and modern
          JavaScript technologies. Over the years, I’ve contributed to impactful
          projects such as digital wallets, international voting platforms, and
          modular remittance applications, while also leading teams to deliver
          efficient and user-focused solutions.
        </p>

        <p className="wc6fu w4xo0 fd43e dark:text-neutral-400">
          I’m passionate about innovation and continuously expanding my
          knowledge in Machine Learning and Artificial Intelligence. With a
          strong foundation in engineering and real-world project experience, I
          love exploring new technologies to bridge software development with
          intelligent systems that drive real-world impact.
        </p>

        <ul className="chaem grid grid-cols-1 md:grid-cols-2 gap-4 cufq3">
  {/* Email */}
  <li className="flex items-center uq0ux">
    <svg
      className="e731n h6zia c9jt8 dark:text-neutral-200"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
    <a
      className="z4zqw jy5gh l5oyh mg8vb cua16 focus:outline-hidden lnukb dark:text-neutral-500 dark:hover:text-neutral-400"
      href="mailto:ayushniraula18@gmail.com"
    >
      ayushniraula18@gmail.com
    </a>
  </li>

  {/* Phone */}
  <li className="flex items-center uq0ux">
    <svg
      className="e731n h6zia c9jt8 dark:text-neutral-200"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.1 5.18 2 2 0 0 1 5.11 3h3a2 2 0 0 1 2 1.72c.12.81.37 1.59.72 2.32a2 2 0 0 1-.45 2.11L9.09 9.91a16 16 0 0 0 5 5l.76-.76a2 2 0 0 1 2.11-.45c.73.35 1.51.6 2.32.72a2 2 0 0 1 1.72 2z" />
    </svg>
    <a
      className="z4zqw jy5gh l5oyh mg8vb cua16 focus:outline-hidden lnukb dark:text-neutral-500 dark:hover:text-neutral-400"
      href="tel:+9779861281996"
    >
      +977 9861281996
    </a>
  </li>

  {/* Instagram */}
  <li className="flex items-center uq0ux">
    <svg
      className="e731n h6zia c9jt8 dark:text-neutral-200"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
    <a
      className="z4zqw jy5gh l5oyh mg8vb cua16 focus:outline-hidden lnukb dark:text-neutral-500 dark:hover:text-neutral-400"
      href="https://instagram.com/the.ayush.niraula"
      target="_blank"
      rel="noopener noreferrer"
    >
      @the.ayush.niraula
    </a>
  </li>

  {/* GitHub */}
  <li className="flex items-center uq0ux">
    <svg
      className="e731n h6zia c9jt8 dark:text-neutral-200"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 19c-4.5 1.5-4.5-2.5-6-3m12 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 18 4.77 5.07 5.07 0 0 0 17.91 1S16.73.65 14 2.48a13.38 13.38 0 0 0-10 0C1.27.65.09 1 .09 1A5.07 5.07 0 0 0 0 4.77c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.61V22" />
    </svg>
    <a
      className="z4zqw jy5gh l5oyh mg8vb cua16 focus:outline-hidden lnukb dark:text-neutral-500 dark:hover:text-neutral-400"
      href="https://github.com/ayushniraula18"
      target="_blank"
      rel="noopener noreferrer"
    >
      github.com/ayushniraula18
    </a>
  </li>

  {/* LinkedIn */}
  <li className="flex items-center uq0ux">
    <svg
      className="e731n h6zia c9jt8 dark:text-neutral-200"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2h0a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
    <a
      className="z4zqw jy5gh l5oyh mg8vb cua16 focus:outline-hidden lnukb dark:text-neutral-500 dark:hover:text-neutral-400"
      href="https://linkedin.com/in/ayush-niraula-b70876198"
      target="_blank"
      rel="noopener noreferrer"
    >
      linkedin.com/in/ayush-niraula-b70876198
    </a>
  </li>
</ul>


      </div>
    </>
  );
};

export default Hero;
