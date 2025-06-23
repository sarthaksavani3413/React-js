import React, { createContext, useContext, useState } from 'react'

export const countercontex = createContext();

const counter = ({ children }) => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return (
        <countercontex.Provider value={{ count, increment, decrement,reset }}>
            {children}
        </countercontex.Provider>
    )
}

export default counter;