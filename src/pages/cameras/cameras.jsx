import { useState } from "react";
import '../../styles/Cameras.css'

export const Cameras = () => {

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



const [presets,setPresets] = useState({
    preset1: '',
    preset1_2: '',
    preset2: '',
    preset2_1: '',
    preset3: '',
    preset3_1: ''
})


const preset = [
    presets.preset1,
    presets.preset1_2,
    presets.preset2,
    presets.preset2_1,
    presets.preset3,
    presets.preset3_1
]


return (
    <div className="camera-container">

    <div className="camera-displays">
        <div className="camera-directionals">
                <table>
                    <tr>
                        <th className="up"> <div>{up}</div></th>
                    </tr>
                    <tr className="horizontal">
                        <td > <div>{left}</div></td>
                        <td > <div>{right}</div></td>
                    </tr>
                    <tr>
                        <td className="down">   <div>{down}</div></td>
                    </tr>
                </table>

           
         
 
        </div>
        <div className="camera-directionals"></div>
        <div className="camera-directionals"></div>
    </div>

    <div>{preset.map(()=>(
            <div> </div>
    ))}</div>


    </div>
)


}


export default Cameras;