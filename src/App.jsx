import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Education from './Components/Education/Education';
import Certification from './Components/Certification/Certification';
import Tools from './Components/Tools/Tools';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Education/>
      <Tools/>
      <Certification/>
    </div>
  );
}

export default App;

