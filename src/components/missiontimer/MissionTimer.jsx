import { useState, useEffect } from 'react';
import '../../styles/MissionTimer.css';

export const MissionTimer = () => {
    const date = Date();
    const [timeLeft, setTimeLeft] = useState(900);
    const [isRunning, setIsRunning] = useState(false);

        useEffect(() => {
      if (isRunning && timeLeft > 0) {
        const timer = setInterval(() => {
          setTimeLeft((prevTime) => prevTime - 1);
        }, 1000); // Update every second
        return () => clearInterval(timer); // Cleanup
      } else if (timeLeft === 0) {
        setIsRunning(false); // Stop the timer when it reaches zero
      }
    }, [timeLeft, isRunning]);

        const formatTime = (seconds) => {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${minutes}:${remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}`;
    };

    return (
        <div > 
            <div className='Mission-Timer-Container'>
              <div className='Title'>Mission Timer</div>
                <div className='Timer'>T-{formatTime(timeLeft)}</div>
              <div className='button-container'>
             <div className='Start-Stop-Button' onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? 'Stop' : 'Start'}
        </div>
        <div className='Reset-Button' onClick={() => { setTimeLeft(900); setIsRunning(false); }}>
          Reset
        </div>                
              </div>


            </div>

        </div>
    )
}


export default MissionTimer;