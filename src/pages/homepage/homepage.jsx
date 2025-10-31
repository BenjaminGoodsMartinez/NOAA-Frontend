import { useNavigate, Link } from 'react-router-dom';
import { Row } from '../../components/row/row';
import { Faders } from '../../components/faders/fader';

import '../../styles/Homepage.css';

const mainButtons = [<h3>Mission Control Room</h3>,<h3>Briefing Room</h3>];


export const Home = () => {
const navigate = useNavigate();
const links = ['/missioncontrolroom','/briefingroom' ]




    return (
       
            <div className='home-page'>
            
            <div className='row-c'>
            <div ><Link className='text' to={links[0]}>Mission Control Room</Link></div>
             <div><Link  className='text' to={links[1]}>Briefing Room</Link></div>

            </div>

        </div>
     

         
    )
}


export default Home;