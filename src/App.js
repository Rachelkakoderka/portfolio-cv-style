import './App.css'
import React from 'react';

import Menu from './components/Menu';
import Welcome from './components/Welcome';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Menu />
      <Welcome />
      <Projects />
      <Footer />
      
    </div>
  );
}

export default App;
