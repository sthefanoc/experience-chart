import React from 'react';
import './App.css';
import ExperienceChart from './components/ExperienceChart';
import Footer from './components/Footer';
import SEO from './components/SEO';
import './styles/style.css';

function App() {
  return (
    <div className="App">
      <SEO />
      <h1>Years of experience</h1>
      <ExperienceChart />
      <Footer />
    </div>
  );
}

export default App;
