import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Education from './Components/Education/Education';
import Certification from './Components/Certification/Certification';
import Tools from './Components/Tools/Tools';
import Works from './Components/Works/Works';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Education/>
      <Tools/>
      <Works/>
      <Certification/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

