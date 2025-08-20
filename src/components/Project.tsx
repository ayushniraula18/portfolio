import React from 'react';

const projectsData = [
  {
    title: "Mypay Digital Web Portal",
    icon: "👜",
    imageSrc: "/project-1.png",
    link: "https://customer.mypay.com.np/",
  },
  {
    title: "Xpress Sewa Remittance",
    icon: "🌍",
    imageSrc: "/project-2.png",
    link: "https://www.xpressewa.com/",
  },
  {
    title: "Insta Remit Web Portal",
    icon: "🗺️",
    imageSrc: "/project-3.png",
    link: "https://instaremit.com.au/",
  },
  {
    title: "MyPay Digital Gold Portal",
    icon: "🪙",
    imageSrc: "/project-4.png",
    link: "https://mypaygold.com/",
  },
  {
    title: "Event Voting Web Portal",
    icon: "🌆",
    imageSrc: "/project-5.png",
    link: "https://mypayevents.com/",
  },
  {
    title: "Admin Dashboard",
    icon: "🎫",
    imageSrc: "/project-6.png",
    link: "https://admin.mypayevents.com/login",
  },
];

const Project = () => {
  return (
    <>
      <div className="ah7xl ls1ky">
        <h2 className="r4xgm sikx1 c9jt8 dark:text-neutral-200">
          Projects
        </h2>

        <div className="ylm8n dzapa uffu7 o4ndh">
          {projectsData.map((project, index) => (
            <a
              key={index}
              className="group block relative overflow-hidden pb094"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-full o7a55 x1s1r f4yn1 pb094 dark:bg-neutral-800"
                src={project.imageSrc}
                alt="Project"
              />
              <div className="absolute abksi awc97 opacity-0 group-hover:opacity-100 whz4r">
                <div className="flex items-center n6i5x ga1u8 jxswk aqyoh rsdjd lnk45 c9jt8 pb094 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
                  <span role="img" aria-label={project.title}>{project.icon}</span>
                  <span className="xs2f2 font-semibold">{project.title}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;