import React from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { decrementCounter, incrementCounter, resetCounter } from '../utilities/actions/counter';

const Counter = () => {

    // accessing count state form redux 
    const count = useSelector(state => state.count);



    // dispatching action --------------------------------------
    const dispatch = useDispatch();
  
    const handleIncrement = () => {
        dispatch(incrementCounter());
    }

    const handleDecrement = () => {
        dispatch(decrementCounter());
    }

    const handleReset = () => {
        dispatch(resetCounter());
    }
    
    // ----------------------------------------------------------

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default Counter;