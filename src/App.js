import { Routes, Route, Link, BrowserRouter, useLocation } from 'react-router-dom';
import { useState,createContext, useContext} from 'react';
import { Home } from '../src/pages/homepage/homepage';
import { Footer } from '../src/components/footer/Footer';
import '../src/styles/Homepage.css';
import { MissionControlRoom } from '../src/pages/missioncontrolroom/MissionControlRoom';
import { BriefingRoom } from '../src/pages/briefingroom/BriefingRoom';
import {Audio} from '../src/pages/audio/Audio';
import {Login} from '../src/pages/loginScreen/Login';
import {Video} from '../src/pages/video/Video';
import {Cameras} from '../src/pages/cameras/cameras'
import {Settings} from '../src/pages/settings/Settings';
import Logo from '../src/images/NasaLogo.png';
import { PinContext } from '../src/pages/loginScreen/Login';


export const LabelContext = createContext(null);
const Shell = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  const { label } = useContext(LabelContext);


  return (
    <div className="home-page-container app-container">
   
   <div className="home-page-sub-container ">
        <div className="home-page-top-row">
          <Link to="/" aria-label="Go home">
            <img className='logo'src={Logo} width={currentPath === '/' ? 250 : 170} alt="NASA Logo" />
          </Link>

        <div className='page-label'>{label}</div>

        <div className='core-indicator'></div>
        </div>
        <div>
        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path="/missioncontrolroom" element={<MissionControlRoom />} />
          <Route index element={<Login/>} />
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

const App = () => {
  const [label, setLabel] = useState('AV Control System');
  return (
<LabelContext.Provider  value={{ label, setLabel }}>
  <BrowserRouter>
    <Shell />
  </BrowserRouter>
  </LabelContext.Provider>    
  )
}

export default App;
