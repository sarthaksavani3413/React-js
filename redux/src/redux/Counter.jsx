import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './action/Counteraction';
import { Link } from 'react-router-dom';

const Counter = () => {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <h1>Redux Counter</h1>
                <p>Count: {count}</p>
                <button onClick={() => dispatch(increment())}>Increment</button>
                <button disabled={count == 0} onClick={() => dispatch(decrement())}>Decrement</button>
                <button onClick={() => dispatch(reset())}>Reset</button>
            </div>
            <Link to="/add" style={{ display: 'block', textAlign: 'center', marginTop: '20px' }}>
                <button>Go to Crud Page</button>
            </Link>

        </>
    );
};

export default Counter;
