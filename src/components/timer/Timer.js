import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { selectTime, timerCountdown, timerStop } from './timerSlice';

const TimerButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const TimerButton = styled.button`
    margin: 1rem;
    padding: .5rem;
    height: 50px;
    width: auto;
    background-color: white;
    color: #0089aa;
    font-size: large;
    border-radius: 5px;
    border: 2px solid #0089aa;

    :hover {
        background-color: lightgray;
    }
`;

const TimerContainer = styled.div`
    font-size: x-large;
    color: #0089aa;
`;

const Timer = () => {
    const timeRemaining = useSelector(selectTime)
    const dispatch = useDispatch()
    const tick = () => {
        setInterval(() => {
            dispatch(timerCountdown())
        }, 1000)
    }
    const stop = () => {
        clearInterval(tick)
        dispatch(timerStop())
    }
    
    return (
        <TimerButtonContainer>
            <TimerButton onClick={() => tick() } >
                Start
            </TimerButton>
            <TimerButton onClick={() => stop() } >
                Stop
            </TimerButton>
            <TimerContainer >
                <span>{timeRemaining}</span>
            </TimerContainer>
        </TimerButtonContainer>
    )
};

export default Timer;
