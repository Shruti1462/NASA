import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Pages/Home/home";
import About from "./Components/Pages/About/about";
import Contact from "./Components/Pages/Contact/contact";
import Background from "./Components/Background.jsx";
import Lala from "./Components/lala";

const App = () => {
  const lalaData = [
    { text1: "Explore the Unknown", text2:"Beyond Reality"},
    { text1: "Survive", text2: "The Unseen" },
    { text1: "Escape", text2: "Reality" },
  ];

  const [lalaCount, setLalaCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(true);

  const togglePlayStatus = () => setPlayStatus(!playStatus);
  const nextLalaCount = () => setLalaCount((prevCount) => (prevCount + 1) % lalaData.length);

  return (
    <Router>
      <div>
        <Background playStatus={playStatus} lalaCount={lalaCount} /> 
        <Navbar />
        <Lala 
          setPlayStatus={setPlayStatus}
          lalaData={lalaData[lalaCount]}
          lalaCount={lalaCount}
          setLalaCount={setLalaCount} 
          playStatus={playStatus} 
        />
        <button onClick={togglePlayStatus}>
          {playStatus ? "Pause Background" : "Play Background"}
        </button>
        <button onClick={nextLalaCount}>Next Background</button>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;