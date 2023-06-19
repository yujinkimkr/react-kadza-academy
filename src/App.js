import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

import Home from "./components/routes/Home";
import About from "./components/routes/About";
import Courses from "./components/routes/Courses";
import Contact from "./components/routes/Contact";
import Register from "./components/routes/Register";

import { Routes, Route } from 'react-router-dom';

// import { Link } from "react";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
