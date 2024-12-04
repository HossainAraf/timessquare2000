import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Nav from './components/Nav';
// import Footer from './components/Footer';
import Home from './components/Home';
import Sufism from './components/Sufism/Sufism';
// import SufiQuotes from './components/SufiQuotes';
// import SufiPoetry from './components/SufiPoetry';
// import SufiMusic from './components/SufiMusic';
// import MuslimHistory from './components/MuslimHistory';

function App() {
  return (
    <Router>
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sufism" element={<Sufism />} />
        {/* <Route path="/sufi-quotes" element={<SufiQuotes />} />
        <Route path="/sufi-poetry" element={<SufiPoetry />} />
        <Route path="/sufi-music" element={<SufiMusic />} />
        <Route path="/muslim-history" element={<MuslimHistory />} /> */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
