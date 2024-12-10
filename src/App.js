import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Nav from './components/Nav';
// import Footer from './components/Footer';
import Home from './components/Home';
import Sufism from './components/Sufism/Sufism';
import SufiConcept from './components/Sufism/SufiConcept';
// import SufiQuotes from './components/SufiQuotes';
// import SufiPoetry from './components/SufiPoetry';
// import SufiMusic from './components/SufiMusic';
// import MuslimHistory from './components/MuslimHistory';
import TourismPage from './components/Tourism/Tourism';
import BangladeshTourism from './components/Tourism/BangladeshTourism';

function App() {
  return (
    <Router>
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sufism" element={<Sufism />} />
        <Route path="/sufi-concept" element={<SufiConcept />} />
        {/* <Route path="/sufi-quotes" element={<SufiQuotes />} />
        <Route path="/sufi-poetry" element={<SufiPoetry />} />
        <Route path="/sufi-music" element={<SufiMusic />} />
        <Route path="/muslim-history" element={<MuslimHistory />} /> */}
        <Route path="/tourism" element={<TourismPage />} />
        <Route path="/bangladesh-tourism" element={<BangladeshTourism />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
