import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const CountdownTimer = () => {
    
    return (
        <CountdownCircleTimer
            isPlaying
            duration={1500}
            colors={[
                ['#004777', 0.33],
                ['#F7B801', 0.33],
                ['#A30000', 0.33],
            ]}
            strokeWidth={12}
            size={180}
            strokeLinecap={'round'}
            
            
        >
            {({ remainingTime  }) => { 
                const minutes = Math.floor(remainingTime / 60)
                const seconds = (remainingTime % 60 > 0 ? remainingTime % 60 : remainingTime % 60 + "0")               
                
                return `${minutes}:${seconds}`
                } 
            }
        </CountdownCircleTimer>
    )
}

export default CountdownTimer;