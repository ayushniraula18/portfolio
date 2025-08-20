
const Contact = () => {
  return (
   <>
    <div className="m1axg uo8pm">
        <h2 className="r4xgm sikx1 c9jt8 dark:text-neutral-200">
          Subscribe
        </h2>

        <form>
          <div className="rmzo7 flex flex-col sm:flex-row items-center o4ndh rsdjd lnk45 pb094 dark:border-neutral-700">
            <div className="relative w-full">
              <label htmlFor="hero-input" className="et50x">Subscribe</label>
              <div className="absolute rm8lf gihcw flex items-center gxxgf gbcuh yuavq">
                <svg className="e731n b9gop rr36x dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <input type="text" id="hero-input" name="hero-input" className="od5va yzhap xp93d s9dcx block w-full azddh pb094 glhrq k16qo vv6e0 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500" placeholder="Enter your email"/>
            </div>
            <a className="w-full sm:w-auto s1lil s53ws sfv8v inline-flex jkwm1 items-center n9hej w4xo0 cnneu m74u5 rsdjd azddh y73k3 kew0r xengx focus:outline-hidden f9dn7 disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:text-neutral-800 dark:hover:bg-neutral-200" href="#">
              Join
              <svg className="e731n h6zia" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
          <p className="ja90s xs2f2 jy5gh dark:text-neutral-500">
            No spam, unsubscribe at any time.
          </p>
        </form>
      </div>
   </>
  )
}

export default Contact