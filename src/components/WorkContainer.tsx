import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const WorkContainer = () => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => {
        if (prev === "...") return "";
        return prev + ".";
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6 text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto text-center"
      >
        {/* Animated construction icon */}
        <div className="mb-10 relative flex justify-center">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-8xl"
          >
            🚧
          </motion.div>
     
        </div>

        {/* Subheading with animated dots */}
        <h2 className="text-sm md:text-sm font-semibold text-gray-300 mb-8">
          Working on the Blog Page{dots}
        </h2>

        {/* Progress bar */}
        <div className="w-full max-w-md mx-auto mb-10">
          <div className="bg-gray-800 rounded-full h-3 overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "75%" }}
              transition={{ duration: 1.2 }}
              className="h-full rounded-full bg-gradient-to-r from-green-400 via-white to-gray-400 animate-pulse"
            ></motion.div>
          </div>
          <p className="text-sm text-gray-400 mt-2">75% Complete</p>
        </div>

        {/* Call to action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/" className="w-full sm:w-auto s1lil s53ws sfv8v inline-flex jkwm1 items-center n9hej w4xo0 cnneu m74u5 rsdjd azddh y73k3 kew0r xengx focus:outline-hidden f9dn7 disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:text-neutral-800 dark:hover:bg-neutral-200" href="#">
              Go Back Home
              <svg className="e731n h6zia" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
        </div>

        {/* Footer message */}
        <p className="text-sm text-gray-400 mt-10">
          Thanks for your patience ✨ I am working hard to bring you something amazing.
        </p>
      </motion.div>
    </div>
  );
};

export default WorkContainer;
