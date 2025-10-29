
import { useContext, useState } from "react";
import '../../styles/Audio.css'

export const Audio = () => {
    const muteIcon = <svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" fill="red" class="bi bi-mic-mute-fill" viewBox="0 0 16 16">
        <path d="M13 8c0 .564-.094 1.107-.266 1.613l-.814-.814A4 4 0 0 0 12 8V7a.5.5 0 0 1 1 0zm-5 4c.818 0 1.578-.245 2.212-.667l.718.719a5 5 0 0 1-2.43.923V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 1 0v1a4 4 0 0 0 4 4m3-9v4.879L5.158 2.037A3.001 3.001 0 0 1 11 3" />
        <path d="M9.486 10.607 5 6.12V8a3 3 0 0 0 4.486 2.607m-7.84-9.253 12 12 .708-.708-12-12z" />
    </svg>

    const unmuteIcon = <svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" fill="green" class="bi bi-mic-fill" viewBox="0 0 16 16">
        <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0z" />
        <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5" />
    </svg>

    const [levels, setLevels] = useState({
        level1: 0,
        level2: 0,
        level3: 0,
        level4: 0,
    });


    const [mute, setMute] = useState({
        mute1: 'unmuted',
        mute2: 'unmuted',
        mute3: 'unmuted',
        mute4: 'unmuted',
    });




    const handleMuteState = (index, state) => {
        setMute((prevMute) => {
            const prevMuteState = { ...prevMute }

            switch (index) {
                case 0:
                    if (state === 'mute') {
                        prevMuteState.mute1 = 'unmuted';
                    } else if (state === 'unmuted') {
                        prevMuteState.mute1 = 'mute';
                    }
                    break;
                case 1:
                    if (state === 'mute') {
                        prevMuteState.mute2 = 'unmuted';
                    } else if (state === 'unmuted') {
                        prevMuteState.mute2 = 'mute';
                    }
                    break;
                case 2:
                    if (state === 'mute') {
                        prevMuteState.mute3 = 'unmuted';
                    } else if (state === 'unmuted') {
                        prevMuteState.mute3 = 'mute';
                    }
                    break;
                case 3:
                    if (state === 'mute') {
                        prevMuteState.mute4 = 'unmuted';
                    } else if (state === 'unmuted') {
                        prevMuteState.mute4 = 'mute';
                    }
                    break;
            }
            return prevMuteState;


        })
    }




    const inputNames = ['Program', 'VTC', 'Lavalier 1', 'Handheld 1'];
    const muteStates = [mute.mute1, mute.mute2, mute.mute3, mute.mute4];


    return (
        <div className="audio-container">
            <div className="audio-labels">
                <div>Program</div>
                <div>Lavalier 1</div>
                <div>Handheld 1</div>
                <div>VTC</div>
            </div>

            <div className="audio-levels">
                <div><input type="range" class="form-range" id="customRange1" onChange={(e) => setLevels((prev) => ({ ...prev, level1: e.target.value }))}></input></div>

                <div><input type="range" class="form-range" id="customRange1" onChange={(e) => setLevels((prev) => ({ ...prev, level2: e.target.value }))}></input> </div>

                <div><input type="range" class="form-range" id="customRange1" onChange={(e) => setLevels((prev) => ({ ...prev, level2: e.target.value }))}></input>  </div>

                <div><input type="range" class="form-range" id="customRange1" onChange={(e) => setLevels((prev) => ({ ...prev, level2: e.target.value }))}></input>  </div>

            </div>

            <div className="audio-level-state">
                <div>{levels.level1}</div>
                <div>{levels.level2}</div>
                <div>{levels.level3}</div>
                <div>{levels.level4}</div>
            </div>

            <div className="audio-mute-state">
                {muteStates.map((input, index) => (
                    <div className="icons" key={index}>

                        <div onClick={() => handleMuteState(index, input)}>{input === 'unmuted' ? unmuteIcon : muteIcon}</div>
                    </div>
                ))}

            </div>



        </div>
    )


}


export default Audio;