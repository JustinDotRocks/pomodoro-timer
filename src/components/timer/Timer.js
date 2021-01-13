import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components';
import {
    decrement,
    increment,
    selectTime,
    timerCountdown
  } from './timerSlice'

const TimerButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const TimerButton = styled.button`
    margin: 1rem;
    padding: .5rem;
    height: 40px;
    width: 40px;
    background-color: white;
    color: #0089aa;
    font-size: large;
    border-radius: 5px;
    border: 2px solid #0089aa;

    :hover {
        background-color: lightgray;
    }
`
const TimerContainer = styled.div`
    font-size: x-large;
    color: #0089aa;
`


const Timer = () => {
    const timeRemaining = useSelector(selectTime)
    const dispatch = useDispatch()

    return (
        <TimerButtonContainer>
            <TimerButton onClick={() => dispatch(increment())}>
                +
            </TimerButton>
            <TimerContainer>
                <span>{timeRemaining}</span>
            </TimerContainer>
            <TimerButton onClick={() => dispatch(decrement())}>
                -
            </TimerButton>
        </TimerButtonContainer>
    )
};

export default Timer;
