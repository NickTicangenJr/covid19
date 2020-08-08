import React from 'react';
import './App.css';
import Covid from './components/Covid';
import Footer from './components/Footer';
import { GiVirus } from 'react-icons/gi';

function App() {
  return (
      <div className="Layout">
        <nav className="navbar">
          <a className="navbar-brand" href="/">
          <GiVirus /> CORONA VIRUS DASHBOARD
          </a>
        </nav>
          <Covid />
        <div className="footer">
          <Footer />
        </div>
      </div>
  );
}

export default App;
