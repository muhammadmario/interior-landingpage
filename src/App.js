import "./App.scss";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Infodua from "./Components/Infodua";
import Infosatu from "./Components/Infosatu";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Shoppages from "./Components/Shoppages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Shoppages />
      <Infosatu />
      <Infodua />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
