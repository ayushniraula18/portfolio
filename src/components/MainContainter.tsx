import { useState, useEffect } from "react";
import Contact from "./main/Contact";
import Education from "./Education";
import Article from "./Article";
import Work from "./Work";
import Skill from "./Skill";
import Testimonial from "./Testimonial";
import Hero from "./Hero";
import Project from "./Project";

const HangingLightSwitch = ({ isOn, onToggle }) => {
  const [isPulling, setIsPulling] = useState(false);
  const [quote, setQuote] = useState("");
  const [hasClicked, setHasClicked] = useState(false);

  const inspirationalQuotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Life is what happens to you while you're busy making other plans. - John Lennon",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "It is during our darkest moments that we must focus to see the light. - Aristotle",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
    "The only impossible journey is the one you never begin. - Tony Robbins",
    "In the middle of difficulty lies opportunity. - Albert Einstein",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The way to get started is to quit talking and begin doing. - Walt Disney"
  ];

  useEffect(() => {
    if (isOn) {
      const randomQuote =
        inspirationalQuotes[Math.floor(Math.random() * inspirationalQuotes.length)];
      setQuote(randomQuote);
    } else {
      setQuote("");
    }
  }, [isOn]);

  const handlePull = () => {
    setIsPulling(true);
    setHasClicked(true);
    setTimeout(() => {
      setIsPulling(false);
      onToggle();
    }, 200);
  };

  return (
    <div
      className="
        fixed top-0 
        left-1/2 -translate-x-1/2 
        sm:left-1/5 sm:-translate-x-1/2
        z-50 
        scale-90 sm:scale-100
      "
    >
      {/* Ceiling mount */}
      <div className="w-8 h-3 bg-gray-800 rounded-b-md mx-auto"></div>

      {/* Chain/cord */}
      <div className="flex flex-col items-center">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className={`w-0.5 h-2 bg-gray-600 my-0.5 transition-all duration-200 ${
              isPulling ? "transform translate-y-2" : ""
            }`}
            style={{ transitionDelay: `${i * 20}ms` }}
          ></div>
        ))}
      </div>

      {/* Light bulb + Quote wrapper */}
      <div className="relative flex flex-col items-center">
        {/* Light bulb */}
        <div
          className={`relative cursor-pointer transition-all duration-200 ${
            isPulling ? "transform translate-y-4" : ""
          } ${isOn ? "animate-swing" : ""}`}
          onClick={handlePull}
          style={{
            animation: isOn ? "swing 2.5s ease-in-out infinite" : "swing 2.5s ease-in-out infinite"
          }}
        >
          {/* Bulb glow effect */}
          {isOn && (
            <div className="absolute inset-0 rounded-full bg-yellow-300 opacity-40 blur-lg scale-150 animate-pulse"></div>
          )}

          {/* Bulb screw threads */}
          <div className="w-6 h-3 bg-gray-400 mx-auto rounded-t-sm">
            <div className="w-full h-0.5 bg-gray-500 mt-0.5"></div>
            <div className="w-full h-0.5 bg-gray-500 mt-0.5"></div>
          </div>

          {/* Main bulb */}
          <div
            className={`w-8 h-10 rounded-full transition-all duration-300 ${
              isOn
                ? "bg-gradient-to-b from-yellow-200 to-yellow-300 shadow-lg shadow-yellow-200/50"
                : "bg-gradient-to-b from-gray-200 to-gray-300"
            }`}
          >
            {/* Filament lines */}
            {isOn && (
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-3 h-0.5 bg-orange-400 rounded opacity-70"></div>
                <div className="w-2 h-0.5 bg-orange-400 rounded opacity-70 mt-1"></div>
                <div className="w-3 h-0.5 bg-orange-400 rounded opacity-70 mt-1"></div>
              </div>
            )}
          </div>

          {/* Bottom tip */}
          <div
            className={`w-2 h-2 rounded-full mx-auto transition-all duration-300 ${
              isOn ? "bg-yellow-400" : "bg-gray-400"
            }`}
          ></div>
        </div>

        {/* Quote popup */}
        {isOn && quote && (
          <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 w-64 sm:w-72 max-w-sm">
            <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg border border-yellow-200 p-4 animate-faeIn relative">
              <div className="flex items-start space-x-2">
                <div className="text-yellow-500 text-lg">💡</div>
                <div>
                  <p className="text-gray-700 text-sm font-medium italic">
                    "{quote.split(" - ")[0]}"
                  </p>
                  <p className="text-gray-500 text-xs mt-2 text-right">
                    - {quote.split(" - ")[1] || "Unknown"}
                  </p>
                </div>
              </div>
              {/* Small arrow */}
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-yellow-200"></div>
            </div>
          </div>
        )}
      </div>

      {/* Pull tooltip */}
      {!hasClicked && (
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-white opacity-60 hover:opacity-100 transition-opacity">
          Click Me
        </div>
      )}

      <style>{`
        @keyframes swing {
          0%, 100% { transform: rotate(0deg); }
          20% { transform: rotate(6deg); }
          40% { transform: rotate(-6deg); }
          60% { transform: rotate(5deg); }
          80% { transform: rotate(-5deg); }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px) translateX(-50%); }
          to { opacity: 1; transform: translateY(0) translateX(-50%); }
        }

        .animate-swing {
          transform-origin: top center;
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

const MainContainer = () => {
  const [isLightOn, setIsLightOn] = useState(false);

  const toggleLight = () => {
    setIsLightOn(!isLightOn);
  };

  return (
    <>
      <HangingLightSwitch isOn={isLightOn} onToggle={toggleLight} />
      <main id="content">
        <div className="w-full vwt7a mx-auto beg37 fglch xf1r4 ids43">
          <Hero />
          <Project />
          <Testimonial />
          <Skill />
          <Work />
          <Education />
          {/* <Article /> */}
          {/* <Contact /> */}
          <br />
          <br />
        </div>
      </main>
    </>
  );
};

export default MainContainer;
