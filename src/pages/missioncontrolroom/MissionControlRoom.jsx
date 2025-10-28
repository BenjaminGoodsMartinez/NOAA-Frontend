
import { useState } from 'react';
import { Row } from '../../components/row/row';
import { useNavigate } from 'react-router-dom';
import '../../styles/MissionControlRoom.css'
// import { publishEvent } from '@crestron/ch5-crcomlib';


export const MissionControlRoom = () => {
  const numberofInputs = 4;
  const [isDisplayPressed, setDisplayPressed] = useState();
  const [isSourcePressed, setSourcePressed] = useState();


  const sources = ['HDMI 1', 'HDMI 2', 'PC', 'Briefing Room'];


  const activeStyles = {
    backgroundColor: 'green',
  }

  const inactiveStyle = {
    backgroundColor: ''
  }

  const handleDisplayState = (display, index, state) => {
    setdisplayState((prevInputs) => {
      const newInputs = { ...prevInputs };

      switch (index) {
        case 0:
          newInputs.displayState1 = state;
          break;
        case 1:
          newInputs.displayState2 = state;
          break;
        case 2:
          newInputs.displayState3 = state;
          break;
        case 3:
          newInputs.displayState4 = state;
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
    inputState4: 'No Input Selected',
  });
  const handleSourceState = (source, index) => {
    console.log('Source:', source, '\nIndex:', index);

    // Create a shallow copy before modifying
    setInputs((prevInputs) => {
      const newInputs = { ...prevInputs };

      switch (index) {
        case 0:
          newInputs.inputState1 = source;
          displayObjects[index] = "On";
          break;
        case 1:
          newInputs.inputState2 = source;
          displayObjects[index] = "On";
          break;
        case 2:
          newInputs.inputState3 = source;
          displayObjects[index] = "On";
          break;
        case 3:
          newInputs.inputState4 = source;
          displayObjects[index] = "On";
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
    displayState4: 'Off',

  });



  const inputObjects = [
    inputs.inputState1
    , inputs.inputState2
    , inputs.inputState3
    , inputs.inputState4,]


  const displayObjects =
    [
      displays.displayState1
      , displays.displayState2
      , displays.displayState3
      , displays.displayState4]

  return (
    <div className='mission-control-room-container'>
      <div className='mission-control-room-sub-container'>
        <div className="inputs-feedback-container">
          {inputObjects.map((input, index) => (
            <div key={index}>

              <div className="input-feedback position-relative">
                <span className={`position-absolute translate-middle p-2 ${input !== 'No Input Selected' || displayObjects[index] === 'On' ? 'bg-success' : displayObjects[index] === 'Off' ? 'bg-danger' : '' } border border-light rounded-circle`}>
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