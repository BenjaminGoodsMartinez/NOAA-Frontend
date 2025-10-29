import { useNavigate } from 'react-router-dom';
import { Row } from '../../components/row/row';
import { Faders } from '../../components/faders/fader';

import '../../styles/Homepage.css';

const mainButtons = [<h3>Mission Control Room</h3>,<h3>Briefing Room</h3>];


export const Home = () => {
const navigate = useNavigate();
const links = ['/missioncontrolroom','/briefingroom' ]




    return (
        <div className='main-page'>
            <div className='home-page'>
            
           
            <Row 
                numberOfButtons={2}
                nameofButtons={mainButtons}
                buttonColor='#ec1b23'
                links={links}
                buttonFunctions={()=>{}}
            />
        </div>
            </div>

         
    )
}


export default Home;