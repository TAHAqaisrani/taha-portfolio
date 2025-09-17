import Header from './Header';
import Footer from './assets/Footer';
import MainBody from './assets/MainBody';
import About from './About';
import { Routes, Route } from "react-router-dom";
import Skills from './Skills';
import Contact from './Contact';
function App() {
  return (
    <>
    
    
      <Header />
      <main className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<MainBody />} />    
          <Route path="/about" element={<About />} />  
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />{/* Contact */}
        </Routes>
      </main>
      <Footer />


    </>
  );
}

export default App;
