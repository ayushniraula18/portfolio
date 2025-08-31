
const Footer = () => {
  return (
    <>
    <footer className="w-full vwt7a mx-auto fglch xf1r4 ids43">
    <div className="db8e5 yfv61 lnk45 dark:border-neutral-700">
      <div className="flex flex-wrap ox2cl items-center o4ndh">
        <div>
          <p className="xs2f2 fd43e dark:text-neutral-400">
  © 2025 Ayush Niraula | Built with{" "}
  <span className="inline-block animate-heart">❤️</span>
</p>

<style>{`
  @keyframes heartBeat {
    0%, 40%, 80%, 100% {
      transform: scale(1);
    }
    20%, 60% {
      transform: scale(1.3);
    }
  }
  .animate-heart {
    animation: heartBeat 1.5s infinite;
    display: inline-block;
  }
`}</style>

        </div>

        <ul className="flex flex-wrap items-center">
          
          
          <li className="inline-block mi0xb xs2f2">
            <a className="xs2f2 jy5gh l5oyh mg8vb cua16 focus:outline-hidden lnukb dark:text-neutral-500 dark:hover:text-neutral-400" href="#">
              Download Resume
            </a>
          </li>
          <li className="inline-block">
            <button type="button" className="hs-dark-mode hs-dark-mode-active:hidden relative flex jkwm1 items-center qqwrg rsdjd lnk45 jy5gh kghwt cq7a3 focus:outline-hidden f6db7 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" data-hs-theme-click-value="dark">
              <span className="et50x">Dark</span>
              <svg className="e731n h6zia" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </svg>
            </button>
            <button type="button" className="hs-dark-mode hs-dark-mode-active:flex hidden relative flex jkwm1 items-center qqwrg rsdjd lnk45 jy5gh kghwt cq7a3 focus:outline-hidden f6db7 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" data-hs-theme-click-value="light">
              <span className="et50x">Light</span>
              <svg className="e731n h6zia" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </footer>
    </>
  )
}

export default Footer