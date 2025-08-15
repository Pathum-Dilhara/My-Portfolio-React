import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Education from './Components/Education/Education';
import Certification from './Components/Certification/Certification';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Education/>
      <Certification/>
    </div>
  );
}

export default App;

