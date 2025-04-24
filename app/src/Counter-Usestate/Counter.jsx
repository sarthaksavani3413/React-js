import { IoMdRefresh } from "react-icons/io";
const Counter = ({count, increment, decrement, reset}) => {
    return (
        <div align="center" className="mt-5">
            <h1>Counter App</h1>
            <h2>Count : {count}</h2>
            <button onClick={increment} className="mx-2">+</button>
            <button disabled={count == 0} onClick={decrement}>-</button>
            <button onClick={reset} className="mx-2"><IoMdRefresh/></button>
        </div>
    )
}

export default Counter;