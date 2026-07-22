import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './assets/Footer';
import MainBody from './assets/MainBody';
import About from './About';
import { Routes, Route } from "react-router-dom";
import Skills from './Skills';
import Contact from './Contact';

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved;
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="portfolio-shell min-h-screen text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Header theme={theme} setTheme={setTheme} />
      <main>
        <Routes>
          <Route path="/" element={<MainBody />} />    
          <Route path="/about" element={<About />} />  
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
