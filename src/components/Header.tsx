import { Link, NavLink } from "react-router";

const Header = () => {
  return (
    <>
      <header className="yhsdv fuv09 e33ca flex flex-wrap qxd8q md:flex-nowrap wu22o w-full w4xo0">
        <nav className="jl6n6 relative vwt7a w-full aqyoh rsdjd lnk45 fppcz mppif flex flex-wrap md:flex-nowrap items-center ox2cl vyel6 srbq1 ek60e sm:mx-auto dark:bg-neutral-900 dark:border-neutral-700">
          <div className="flex items-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-extrabold text-xl text-gray-900 dark:text-white"
            >
              🚀
            </Link>
          </div>

          <div className="flex items-center v1hon q9f0s n28ne">
            <Link
              className="w-full sm:w-auto s1lil s53ws f2l40 inline-flex jkwm1 items-center n9hej w4xo0 sikx1 kjx0a rsdjd azddh y73k3 kew0r xengx focus:outline-hidden fdn7 disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:text-neutral-800 dark:hover:bg-neutral-200"
              to="/contact"
            >
              Say Hi 👋
            </Link>

            <div className="md:hidden">
              <button
                type="button"
                className="hs-collapse-toggle flex jkwm1 items-center sc63t rsdjd lnk45 jy5gh kghwt cq7a3 focus:outline-hidden f6db7 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                id="hs-pro-pnm-collapse"
                aria-expanded="false"
                aria-controls="hs-pro-pnm"
                aria-label="Toggle navigation"
                data-hs-collapse="#hs-pro-pnm"
              >
                <svg
                  className="hs-collapse-open:hidden e731n h6zia"
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
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
                <svg
                  className="hs-collapse-open:block hidden e731n b9gop"
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
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>

          <div
            id="hs-pro-pnm"
            className="hidden hs-collapse overflow-hidden fl36v ufjzp ygsjd hlt95 md:block"
            aria-labelledby="hs-pro-pnm-collapse"
          >
            <div className="flex flex-col md:flex-row md:items-center nxqoz o4ndh y093e wc6fu nldyy s53ws ek60e uvuvc">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  !isActive
                    ? "vf29a bi771 fglch hoxwk iubww q1sdc ttqaw azddh jy5gh mg8vb focus:outline-hidden dark:text-neutral-200 dark:hover:text-neutral-200"
                    : "vf29a bi771 fglch hoxwk iubww q1sdc ttqaw azddh jy5gh mg8vb focus:outline-hidden dark:text-neutral-400 dark:hover:text-neutral-200 fpwsn sikx1 c9jt8 dark:!border-neutral-200 dark:text-neutral-200"
                }
                aria-current="page"
              >
                Home
              </NavLink>
              <NavLink
                to="/work"
                className={({ isActive }) =>
                  !isActive
                    ? "vf29a bi771 fglch hoxwk iubww q1sdc ttqaw azddh jy5gh mg8vb focus:outline-hidden dark:text-neutral-200 dark:hover:text-neutral-200"
                    : "vf29a bi771 fglch hoxwk iubww q1sdc ttqaw azddh jy5gh mg8vb focus:outline-hidden dark:text-neutral-400 dark:hover:text-neutral-200 fpwsn sikx1 c9jt8 dark:!border-neutral-200 dark:text-neutral-200"
                }
                aria-current="page"
              >
                Blogs
              </NavLink>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
