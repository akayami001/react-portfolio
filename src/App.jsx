import { useState } from "react";
import Contact from "./components/contact/Contact";
import Intro from "./components/Intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Topbar from "./components/topbar/Topbar";
import Menu from "./components/menu/Menu";
import Works from "./components/works/Works";
import "./scss/main.scss";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro />
        <Works />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
