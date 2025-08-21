
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
         <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-4 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-800">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">11</div>
            <div className="text-sm text-blue-700 dark:text-blue-300 mt-1">Total Projects</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border border-green-200 dark:border-green-800">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">9</div>
            <div className="text-sm text-green-700 dark:text-green-300 mt-1">Live Systems</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border border-purple-200 dark:border-purple-800">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">5+</div>
            <div className="text-sm text-purple-700 dark:text-purple-300 mt-1">Technologies</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border border-orange-200 dark:border-orange-800">
            <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">100%</div>
            <div className="text-sm text-orange-700 dark:text-orange-300 mt-1">Uptime</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;