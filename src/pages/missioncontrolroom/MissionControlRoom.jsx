
import { useState } from 'react';
import { Row } from '../../components/row/row';
import { useNavigate } from 'react-router-dom';
import '../../styles/MissionControlRoom.css'
// import { publishEvent } from '@crestron/ch5-crcomlib';


export const MissionControlRoom = () => {
    const numberofInputs = 4;
    const [inputs, setInputState] = useState({
        inputState1: 'No Input Selected',
        inputState2: 'No Input Selected',
        inputState3: 'No Input Selected',
        inputState4: 'No Input Selected',}
        
    );

    const sources = ['HDMI 1', 'HDMI 2', 'PC', 'Briefing Room'];



        const [displays, setdisplayState] = useState({
        displayState1: 0,
        displayState2: 0,
        displayState3: 0,
        displayState4: 0,
        
    });


        const inputObjects =     [inputs.inputState1
    ,inputs.inputState2
    ,inputs.inputState3
    ,inputs.inputState4,]


    const displayObjects = 
    [displays.displayState1
    ,displays.displayState2
    ,displays.displayState3
    ,displays.displayState4]

    return (
        <div className='mission-control-room-container'>
      <div className='mission-control-room-sub-container'>
<div className="inputs-feedback-container">
  {inputObjects.map((input, index) => (
    <div key={index}>
      
      <div className="input-feedback"> 

         <div className="input-value">{input}</div>
      </div>
    </div>
  ))}
</div>
        <div className='displays-state-container'>
  {displayObjects.map((input, index) => (
    <div key={index}>
      
      <div className="display-feedback"> 

         <div className="display-value" onClick={()=>{}}>Display On</div>
         <div className="display-value">Display Off</div>
      </div>
    </div>
  ))}
            
        </div>
        <div className='sources-container'>

              {inputObjects.map((input, index) => (
    <div key={index}>
      
      <div className="sources-feedback"> 

         <select className="sources-value" onClick={()=>{}}>
                <option value="">Choose a source</option>
                {sources.map((source, index)=>(
                  
                        <option className="source-values"key={index} value={source}
                        onChange={()=>{inputs.inputState1 = source}}

                        >{source}</option>
             
                ))}


         </select>

       
      </div>
    </div>
  ))}
        </div>




        </div>





        
        </div>
    )




}


export default MissionControlRoom;