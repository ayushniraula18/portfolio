import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContainter from "./components/MainContainter";

function App() {
  return (
    <>
      <section className="dark:bg-neutral-900">
        <Header />
        <MainContainter />
        <Footer />
      </section>
    </>
  );
}

export default App;
