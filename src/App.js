import React from 'react';
import Navbar from './Components/Main/Navbar';
import Footer from './Components/Main/Footer';

import Home from './Components/pages/Home';
import About from './Components/pages/About';
import Contact from './Components/pages/Contact';
import PreSchooling from './Components/pages/PreSchooling';
import Programs from './Components/pages/Programs';

import Chess from './Components/Programs/Chess'
import DanceAndCraft from './Components/Programs/DanceAndCraft'
import Language from './Components/Programs/Language'
import Phonics from './Components/Programs/Phonics'
import Silambam from './Components/Programs/Silambam'
import SummerCamp from './Components/Programs/SummerCamp'
import Technical from './Components/Programs/Technical';





import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="page-container">
      <Router>
        {/* Navbar at the top */}
        <Navbar />

        {/* Main content area */}
        <div className="content-wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/preschooling" element={<PreSchooling />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/programs/technical/robotics-iot" element={<Technical />} />
            <Route path="/programs/technical/coding-ai" element={<Technical />} />
            <Route path="/programs/language-literacy/hindi" element={<Language />} />
            <Route path="/programs/martial-art-strategy/silambam" element={<Silambam />} />
            <Route path="/programs/martial-art-strategy/chess" element={<Chess />} />
            <Route path="/programs/logical-thinking/vedic-math" element={<Language />} />
            <Route path="/programs/logical-thinking/rubiks-cube" element={<Language />} />
            <Route path="/programs/performing-arts-creativity/dance" element={<DanceAndCraft />} />
            <Route path="/programs/performing-arts-creativity/craft" element={<DanceAndCraft />} />
            <Route path="/programs/summer-camp" element={<SummerCamp />} />
            <Route path="/programs/language-literacy/phonics" element={<Phonics />} />
          </Routes>
        </div>

        {/* Footer at the bottom */}
        <Footer />
      </Router>
    </div>
  );
};

export default App;
