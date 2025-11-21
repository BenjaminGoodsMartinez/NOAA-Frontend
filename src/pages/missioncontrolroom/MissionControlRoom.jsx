
import { useState } from 'react';
import { Row } from '../../components/row/row';
import { useNavigate, Link } from 'react-router-dom';
import '../../styles/MissionControlRoom.css'
import { CrComLib } from '@crestron/ch5-crcomlib';
import {
  bridgeReceiveBooleanFromNative,
  bridgeReceiveObjectFromNative,
  bridgeReceiveStringFromNative,
  bridgeReceiveIntegerFromNative
} from '@crestron/ch5-crcomlib';

export const MissionControlRoom = () => {

  const sources = ['Lecturn', 'PTZ Camera 1 - Director ', 'PTZ Camera 2 - Audience', 'PTZ Camera 3 - Wide/Overhead', 'HDMI Out - FarEnd','PC'
   ];



  const handleDisplayState = (display, index, state) => {
    setdisplayState((prevInputs) => {
      const newInputs = { ...prevInputs };

      switch (index) {
        case 0:
          newInputs.displayState1 = state;
          CrComLib.publishEvent("b", "1", true)
          CrComLib.publishEvent("b", "2", false)

          break;
        case 1:
          newInputs.displayState2 = state;
          CrComLib.publishEvent("b", "3", true)
          CrComLib.publishEvent("b", "4", false)

          break;
        case 2:
          newInputs.displayState3 = state;
          CrComLib.publishEvent("b", "5", true)
          CrComLib.publishEvent("b", "6", false)
          break;

        default:
          break;
      }

      return newInputs;
    });
    console.log('display', index, 'state', state);
  }


  const [inputs, setInputs] = useState({
    inputState1: 'No Input Selected',
    inputState2: 'No Input Selected',
    inputState3: 'No Input Selected',

  });


  const handleSourceState = (source, index) => {
    console.log('Source:', source, '\nIndex:', index);
    const source_multicast_address = ["239.1.0.1","239.1.0.2","239.1.0.3","239.1.0.4","239.1.0.5","239.1.0.6"];
    // Create a shallow copy before modifying
    setInputs((prevInputs) => {
      const newInputs = { ...prevInputs };

      switch (index) {
        case 0:
          newInputs.inputState1 = source;
          handleDisplayState(displays.displayState1, index, 'On')
          CrComLib.publishEvent("s", "9", source_multicast_address[index]);
          break;
        case 1:
          newInputs.inputState2 = source;
          handleDisplayState(displays.displayState2, index, 'On')
          CrComLib.publishEvent("s", "10", source_multicast_address[index]);
          break;
        case 2:
          newInputs.inputState3 = source;
          handleDisplayState(displays.displayState3, index, 'On')
          CrComLib.publishEvent("s", "11", source_multicast_address[index]);
          break;

        default:
          break;
      }

      return newInputs;
    });
  };







  const [displays, setdisplayState] = useState({
    displayState1: 'Off',
    displayState2: 'Off',
    displayState3: 'Off',


  });

  const display_types = [
    "Video Wall",
    "Dual Display 1",
    "Dual Display 2"
  ]

  const inputObjects = [
    inputs.inputState1
    , inputs.inputState2
    , inputs.inputState3
 ]


  const displayObjects =
    [
      displays.displayState1
      , displays.displayState2
      , displays.displayState3
]

  return (
    <div className='mission-control-room-container'>
      <div className='mission-control-room-sub-container'>
        <div className="inputs-feedback-container">
          {inputObjects.map((input, index) => (
            <div key={index}>
              <div className="Display-Type">{display_types[index]}</div>
              <div className="input-feedback position-relative">
                
                <span className={`position-absolute translate-middle p-2 ${input !== 'No Input Selected' || displayObjects[index] === 'On' ? 'bg-success' : displayObjects[index] === 'Off' ? 'bg-danger' : ''} border border-light rounded-circle`}>
                  <span class="visually-hidden">New alerts</span>
                </span>

             
                <div className="input-value">{input}</div>
              </div>
            </div>
          ))}
        </div>
        <div className='displays-state-container'>
          {displayObjects.map((input, index) => (
            <div key={index}>

              <div className="display-feedback" key={index}>

                <div className="display-value" style={input === 'On' ? { backgroundColor: 'green' } : {}} onClick={() => { handleDisplayState(input, index, 'On') }}>Display On</div>
                <div className="display-value" style={input === 'Off' ? { backgroundColor: 'red' } : {}} onClick={() => { handleDisplayState(input, index, 'Off') }}>Display Off</div>
              </div>
            </div>
          ))}

        </div>
        <div className='sources-container'>

          {inputObjects.map((input, inputIndex) => (
            <div key={inputIndex}>

              <div className="sources-feedback">

                <select className="sources-value" >


                  <option value="">Choose a source</option>
                  {sources.map((source, index) => (

                    <option className="source-values" key={index} value={source}
                      onClick={() => { handleSourceState(source, inputIndex) }}

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