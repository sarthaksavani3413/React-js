import React from 'react'
import Count from './Count'

const componentA = ({ no, inc, dec, res, showuserbtn, alluser }) => {
    return (
        <div align="center">
            <h1>Component :- A</h1>
            <h1>Counter App</h1>
            <h2>Count: {no}</h2>
            <button onClick={() => inc()}>+</button>
            <button disabled={no == 0} onClick={() => dec()}>-</button>
            <button onClick={() => res()}>reset</button>
            <button onClick={() => showuserbtn()}>Showuser</button>
            <br /><br />

            {
                alluser.map((item, index) => {
                    return (
                        <>
                           <table border={1}>
                            <thead>
                                <tr>
                                    <td>Name:- {item.name}</td>
                                    <td>Age:- {item.age}</td>
                                    <td>Phone:- {item.phone}</td>
                                </tr>
                            </thead>
                           </table>
                        </>
                    )
                })
            }
        </div>
    )
}
let A = Count(componentA)
export default A