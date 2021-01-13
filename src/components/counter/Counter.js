import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components';
import {
    decrement,
    increment,
    selectCount
  } from './counterSlice'

const CounterButtonContainer = styled.div`
    display: flex;
    align-items: center;
`
const CounterButton = styled.button`
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
const CountContainer = styled.div`
    font-size: x-large;
    color: #0089aa;
`

const Counter = () => {
    const count = useSelector(selectCount)
    const dispatch = useDispatch()

    return (
        <CounterButtonContainer>
            <CounterButton onClick={() => dispatch(increment())}>
                +
            </CounterButton>
            <CountContainer>
                <span>{count}</span>
            </CountContainer>
            <CounterButton onClick={() => dispatch(decrement())}>
                -
            </CounterButton>
        </CounterButtonContainer>
    )
};

export default Counter;
