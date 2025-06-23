import React, { useState } from 'react'

const App = () => {
    const [count, setcount] = useState(0)

    const increment = () => {
        setcount(count + 1)
    }

    const decrement = () => {
        setcount(count - 1)
        if (count <= 0) {
            setcount(0)
        }
    }

    const reset = () => {
        setcount(0)
    }
    
    return (
        <div align="center">
            <h1>counter app</h1>
            <h2>count :- {count}</h2>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default App