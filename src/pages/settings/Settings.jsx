


import { useContext } from "react";
import LiveTelemetry from "../../components/livetelemetry/LiveTelemetry";
import MissionTimer from "../../components/missiontimer/MissionTimer";
import CommLink from '../../components/commlink/CommLink';
import '../../styles/Settings.css'

export const Settings = () => {


    return (
        <div>
            <div className="Settings-Container">


                <MissionTimer/>
              
                <LiveTelemetry/>
                <CommLink/>


            </div>
        </div>
    )


}


export default Settings;