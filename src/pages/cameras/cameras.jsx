import { useState } from "react";
import '../../styles/Cameras.css'
import { CrComLib, publishEvent } from '@crestron/ch5-crcomlib';

export const Cameras = () => {


const [cameraDirections,setCameraDirections] = useState({
  camera1direction: '',
  camera2direction: '',
  camera3direction: ''
});

const [activePreset, setActivePreset] = useState('');


const [presets,setPresets] = useState({
    preset1: 'Preset 1.1',
    preset1_2: 'Preset 1.2',
    preset2: 'Preset 2.1',
    preset2_1: 'Preset 2.2',
    preset3: 'Preset 3.1',
    preset3_1: 'Preset 3.2'
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

const left = <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/>
</svg>

const right = <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
</svg>

const up = <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-arrow-up-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"/>
</svg>

const down = <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
</svg>


const commandSet = {
  camera1 : {
    "up" :  CrComLib.publishEvent("s", "12", "81 01 06 01 VV WW 03 01 FF"),
    "down" : CrComLib.publishEvent("s", "13", "81 01 06 01 VV WW 03 02 FF"),
    "left" : CrComLib.publishEvent("s", "14", "81 01 06 01 VV WW 01 03 FF"),
    "right":  CrComLib.publishEvent("s", "15", "81 01 06 01 VV WW 01 03 FF")
  },
  camera2 : {
    "up" :  CrComLib.publishEvent("s", "16", "81 01 06 01 VV WW 03 01 FF"),
    "down" : CrComLib.publishEvent("s", "17", "81 01 06 01 VV WW 03 02 FF"),
    "left" : CrComLib.publishEvent("s", "18", "81 01 06 01 VV WW 01 03 FF"),
    "right":  CrComLib.publishEvent("s", "19", "81 01 06 01 VV WW 01 03 FF")
  },

    camera3 : {
    "up" :  CrComLib.publishEvent("s", "20", "81 01 06 01 VV WW 03 01 FF"),
    "down" : CrComLib.publishEvent("s", "21", "81 01 06 01 VV WW 03 02 FF"),
    "left" : CrComLib.publishEvent("s", "22", "81 01 06 01 VV WW 01 03 FF"),
    "right":  CrComLib.publishEvent("s", "23", "81 01 06 01 VV WW 01 03 FF")
  },


}



const sendCommand = (camera, direction) => {
  if (camera === "camera 1"){
       return direction === "up" ? commandSet.camera1.up : direction === "down" ? commandSet.camera1.down : direction === "left" ? commandSet.camera1.left : commandSet.camera1.right;
  } else if (camera === "camera 2"){
         return  direction === "up" ? commandSet.camera2.up : direction === "down" ? commandSet.camera2.down : direction === "left" ? commandSet.camera2.left : commandSet.camera2.right;
  } else {
          return direction === "up" ? commandSet.camera3.up : direction === "down" ? commandSet.camera3.down : direction === "left" ? commandSet.camera3.left : commandSet.camera3.right;
  }
}


const handleDirectionPress = (state, index) => {



  setCameraDirections((prevDirection)=>{
    console.log('Direction:', state, ' Index:', index)
    const input = {...prevDirection};

    switch(index){
      case 0:
        sendCommand("camera 1", state);
        input.camera1direction = state

      break
      case 1:
        sendCommand("camera 2", state);
        input.camera2direction = state
      break
      case 2:
        sendCommand("camera 3", state);
        input.camera3direction = state
    }
    return input;
  })

}


const handlePresetPress = (state, index) => {
  console.log( state, ' set successfully');
  setActivePreset(state);

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

const handleDirectionStyle = () => {
  



}


const setOffSet =(index, side) =>{

  if(side === "left"){
      return index === 0 ? index : index === 1 ? index + 1 : index === 2 ? index + 2 : ''
  } 

    return index === 0 ? index + 1: index === 1 ? index + 2 : index === 2 ? index + 3 : ''

}


return (
    <div className="camera-container">
   
    <div className="camera-displays">



        <div className="camera-directionals">
                {cameraDirectionState.map((direction, index)=>(<div>
                  <div className="camera-labels">
                    <div key={index}>
                      <label>{cameraLabels[index]}</label>
                    </div>
                  </div>       

        <div className="Direction-Grid" key={index}>
            <div></div>
             <div onClick={()=>handleDirectionPress('up', index)} style={direction === 'up' ? {backgroundColor: 'rgba(0, 0, 0, 0.33)'} : {backgroundColor:'white'}} className="up">{up}</div>
            <div></div>
            <div onClick={()=>handleDirectionPress('left', index)}style={direction === 'left' ? {backgroundColor: 'rgba(0, 0, 0, 0.33)'} :{backgroundColor:'white'}}  className="left"> {left}</div>
            <div></div>
           <div onClick={()=>handleDirectionPress('right', index)}style={direction === 'right' ? {backgroundColor: 'rgba(0, 0, 0, 0.33)'} :{backgroundColor:'white'}}  className="right">{right}</div>
            <div></div>
             <div onClick={()=>handleDirectionPress('down', index)}style={direction === 'down' ? {backgroundColor: 'rgba(0, 0, 0, 0.33)'} :{backgroundColor:'white'}}  className="down">{down}</div>
            <div></div>
        </div>
              
              <div className="presets-container" key={index}> 
    <div className="presets-container">
                  <div className="preset-button"  style={activePreset === preset[setOffSet(index, "left")] ? {backgroundColor: 'rgba(0, 0, 0, 0.33)'} : {}} onClick={()=>handlePresetPress(preset[setOffSet(index, "left")], setOffSet(index, "left"))}> {preset[setOffSet(index, "left")]} </div>
                  <div className="preset-button"  style={activePreset === preset[setOffSet(index, "right")] ? {backgroundColor: 'rgba(0, 0, 0, 0.33)'} : {}} onClick={()=>handlePresetPress(preset[setOffSet(index, "right")], setOffSet(index, "right"))}>{preset[setOffSet(index, "right")]} </div>  
                  </div>
              </div>


                  </div>
   

                ))}
               
        </div>
    </div>


 



    </div>
)


}


export default Cameras;