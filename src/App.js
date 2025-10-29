import { Routes, Route, Link, BrowserRouter, useLocation } from 'react-router-dom';
import { Home } from '../src/pages/homepage/homepage';
import { Footer } from '../src/components/footer/Footer';
import '../src/styles/Homepage.css';
import { MissionControlRoom } from '../src/pages/missioncontrolroom/MissionControlRoom';
import { BriefingRoom } from '../src/pages/briefingroom/BriefingRoom';
import {Audio} from '../src/pages/audio/Audio';
import {Video} from '../src/pages/video/Video';
import {Cameras} from '../src/pages/cameras/cameras'
import {Settings} from '../src/pages/settings/Settings';
import Logo from '../src/images/NasaLogo.png';

const Shell = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="home-page-container app-container">
      <div className="home-page-sub-container ">
        <div className="home-page-top-row">
          <Link to="/" aria-label="Go home">
            <img src={Logo} width={150} alt="NASA Logo" />
          </Link>
        </div>
        <div>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/missioncontrolroom" element={<MissionControlRoom />} />
          <Route path="/briefingroom" element={<BriefingRoom />} />
          <Route path='/audio' element={<Audio/>}/>
          <Route path='/cameras' element={<Cameras/>}/>
          <Route path='/video' element={<MissionControlRoom/>}/>
          <Route path='/settings' element={<Settings/>}/>

        </Routes>
</div>

<div>
   {['/missioncontrolroom', '/briefingroom', , '/cameras','/audio', '/video','/settings'].includes(currentPath) && <Footer />}
</div>
       
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
