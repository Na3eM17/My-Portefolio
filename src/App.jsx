import { useState } from "react";

import "./index.css";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Project from "./Project";
import Header from "./Header";
import Home from "./Home";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col w-full bg-black text-white">
        <Header />
        <Home />
        <AboutMe />
        <Project />
        <Contact />
      </div>
    </>
  );
}

export default App;
