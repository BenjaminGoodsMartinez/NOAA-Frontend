import { Routes, Route, Link, BrowserRouter, useLocation } from 'react-router-dom';
import { Home } from '../src/pages/homepage/homepage';
import { Footer } from '../src/components/footer/Footer';
import '../src/styles/Homepage.css';
import { MissionControlRoom } from '../src/pages/missioncontrolroom/MissionControlRoom';
import { BriefingRoom } from '../src/pages/briefingroom/BriefingRoom';
import Logo from '../src/images/NasaLogo.png';

const Shell = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="home-page-container">
      <div className="home-page-sub-container">
        <div className="home-page-top-row">
          <Link to="/" aria-label="Go home">
            <img src={Logo} width={250} alt="NASA Logo" />
          </Link>
        </div>

        <Routes>
          <Route index element={<Home />} />
          <Route path="/missioncontrolroom" element={<MissionControlRoom />} />
          <Route path="/briefingroom" element={<BriefingRoom />} />
        </Routes>

        {['/missioncontrolroom', '/briefingroom'].includes(currentPath) && <Footer />}
      </div>
    </div>
  );
};

const App = () => (
  <BrowserRouter>
    <Shell />
  </BrowserRouter>
);

export default App;
