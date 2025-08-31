import { Route, Routes } from "react-router";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContainter from "./components/MainContainter";
import WorkContainer from "./components/WorkContainer";
import Contact from "./components/main/Contact";
import ScrollToTop from "./components/shared/ScrollToTop";

function App() {
  return (
    <>
      <section className="dark:bg-neutral-900">
        <Header />
        <ScrollToTop/>
       <Routes>
      <Route path="/" element={<MainContainter />} />
      <Route path="/work" element={<WorkContainer />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="*" element={<h1>404</h1>} />
    </Routes>
        <Footer />
      </section>
    </>
  );
}

export default App;
