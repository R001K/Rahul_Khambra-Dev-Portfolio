// App.js
import { useState } from 'react';
import Topbar from './components/Topbar';
import './App.css';
import Home from './components/home';
import About from './components/about';
import Footer from './components/footer'
function App() {
  const [showAbout, setShowAbout] = useState(false);

  const handleAboutClick = () => {
    setShowAbout(true);
  };

  const handleBackClick = () => {
    setShowAbout(false);
  };

  return (
    <>
      <header>
        <Topbar />
      </header>
    
        {!showAbout && <button className="abt" onClick={handleAboutClick}>About me</button>}
  
      <div className="home" style={{ marginTop: '50px', marginBottom: '50px' }}>
        {showAbout ? <About onBackClick={handleBackClick} isAboutVisible={showAbout} /> : <Home />}
      </div>
      <footer>
    <Footer />
      </footer>
    </>
  );
}

export default App;
