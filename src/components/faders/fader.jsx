import './fader.css'
import { useState } from 'react';

export const Faders = ({nameofFaders, orientation, functionsArray}) => {

const [value, setValue] = useState(0);

const handleChange = (e) => {
    setValue(e.target.value);
}

const styles = {
    display: "flex",
    flexDirection: orientation,
    justifyContent: 'center',
}

return (
    <div className="fader-container" style={styles}>
        {nameofFaders.map((name, index)=> (
            <div className="faders">  
                <div className="fader-name">{name}</div> 
                <input onChange={handleChange}type="range" min="1" max="100" value={value} className="slider" style={{transform: "rotate(-90deg)"}}/>
                
                <div className='fader-value'>{value}</div>            
            </div>
            
    
        ))}

    </div>
)
}

export default Faders;