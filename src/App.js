import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import "./App.css";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className="App"
      style={{
        background: darkMode ? "#1e293b" : "",
        color: darkMode ? "white" : "",
      }}>
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
