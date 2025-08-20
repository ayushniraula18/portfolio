import Contact from "./main/Contact";
import Education from "./Education";
import Article from "./Article";
import Work from "./Work";
import Skill from "./Skill";
import Testimonial from "./Testimonial";
import Hero from "./Hero";
import Project from "./Project";

const MainContainter = () => {
  return (
    <>
      <main id="content">
        <div className="w-full vwt7a mx-auto beg37 fglch xf1r4 ids43">
          <Hero />
          <Project />
          <Testimonial />
          <Skill />
          <Work />
          <Education />
          <Article />
          <Contact />
        </div>
      </main>
    </>
  );
};

export default MainContainter;
