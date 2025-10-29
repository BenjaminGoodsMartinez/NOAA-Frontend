import { useState } from "react";
import '../../styles/Cameras.css'

export const Cameras = () => {


const [cameraDirections,setCameraDirections] = useState({
  camera1direction: '',
  camera2direction: '',
  camera3direction: ''
});

const [presets,setPresets] = useState({
    preset1: 'Preset 1',
    preset1_2: 'Preset 2',
    preset2: 'Preset 1',
    preset2_1: 'Preset 2',
    preset3: 'Preset 1',
    preset3_1: 'Preset 2'
});

const preset = [
    presets.preset1,
    presets.preset1_2,
    presets.preset2,
    presets.preset2_1,
    presets.preset3,
    presets.preset3_1
];


const cameraDirectionState = [
  cameraDirections.camera1direction,
  cameraDirections.camera2direction,
  cameraDirections.camera3direction
];

const presetSuccess = <div class="alert alert-success" role="alert">
  Preset Set Succesfully
</div>


const presetUnsuccessful = <div class="alert alert-danger" role="alert">
  Error Creating Preset
</div>


const cameraLabels = ['Camera 1', 'Camera 2' , 'Camera 3']

const left = <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="white" class="bi bi-arrow-left-square-fill" viewBox="0 0 16 16">
  <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1"/>
</svg>

const right = <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="white" class="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
  <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1"/>
</svg>

const up = <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="white" class="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
  <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0"/>
</svg>

const down = <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="white" class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0"/>
</svg>



const handleDirectionPress = (state, index) => {
  setCameraDirections((prevDirection)=>{
    console.log('Direction:', state, ' Index:', index)
    const input = {...prevDirection};

    switch(index){
      case 0: 
        input.camera1direction = state
      break
      case 1:
        input.camera2direction = state
      break
      case 2:
        input.camera3direction = state
    }

    return input;
  })

}


const handlePresetPress = (state, index) => {
  console.log( state, ' set successfully');
  setPresets((prevPreset)=>{
    const input = {...prevPreset};

    switch(index){
      case 0:
        input.preset1 = state
      break
            case 1:
input.preset1_2 = state
      break
            case 2:
input.preset2 = state
      break
            case 3:
input.preset2_1 = state
      break
            case 4:
input.preset3 = state
      break
            case 5:
input.preset3_1 = state
      break

    }
      return input;
  })
}




return (
    <div className="camera-container">
    <div className="camera-labels">
        {cameraLabels.map((label, index)=>(
          <div key={index}>
               <label>{label}</label>
            </div>
       
        ))}
    </div>
    <div className="camera-displays">
        <div className="camera-directionals">
                {cameraDirectionState.map((direction, index)=>(
 <table key={index} className="camera-tables">
                    <tr>
                        <th className="up"> <div onClick={()=>handleDirectionPress('up', index)}>{up}</div></th>
                    </tr>
                    <tr className="horizontal">
                        <td className="left"> <div onClick={()=>handleDirectionPress('left', index)}>{left}</div></td>
                        <td className="right"> <div onClick={()=>handleDirectionPress('right', index)}>{right}</div></td>
                    </tr>
                    <tr>
                        <td className="down">   <div onClick={()=>handleDirectionPress('down', index)}>{down}</div></td>
                    </tr>
                </table>
                ))}
               
        </div>
    </div>

    <div className="presets-container">
          {preset.map((preset, index)=>(
            <div className="preset-button" key={index}>
                <div key={index} onClick={()=>handlePresetPress(preset, index)}>{preset}</div>   
            </div>

          ))}
    </div>

    <div>{preset.map(()=>(
            <div> </div>
    ))}</div>


    </div>
)


}


export default Cameras;