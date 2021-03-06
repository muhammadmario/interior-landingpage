import "./App.scss";
import Hero from "./Components/Hero";
import Infodua from "./Components/Infodua";
import Infosatu from "./Components/Infosatu";
import Navbar from "./Components/Navbar";
import Shoppages from "./Components/Shoppages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Shoppages />
      <Infosatu />
      <Infodua />
    </div>
  );
}

export default App;
