
import { useContext } from "react";
import '../../styles/Audio.css'

export const Audio = () => {


    return (
        <div className="audio-container">
            <div className="audio-levels">
                <div><input type="range" class="form-range" id="customRange1"></input></div>

                <div><input type="range" class="form-range" id="customRange1"></input> </div>
               
                <div><input type="range" class="form-range" id="customRange1"></input>  </div>
              
                <div><input type="range" class="form-range" id="customRange1"></input>  </div>
              
            </div>
        </div>
    )


}


export default Audio;