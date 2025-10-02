import "./App.css";
import Header from "./Header";
import Introduction from "./Introduction";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Introduction />
        <AboutMe />
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
