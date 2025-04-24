import React from 'react'

const arr = () => {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  let [a, b, c, d, e, f, g, h, i, j] = arr
  console.log(arr);

  let arr1 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  console.log(arr1);
  let arr3 =  ["sarthak savani"]
  console.log(arr3);
  let arr2 = [...arr, ...arr1, ...arr3]; // Spread operator
  // let arr2 = arr.concat(arr1);
  console.log(arr2);

  return (
    <div>
      {/* <h1 align="center" className="py-2">Data Destructuring</h1> */}
      <h1 align="center" className="py-2">Array Destructuring</h1>
      {/* <h2 align="center">Array</h2> */}
      <h3 align="center" className="pb-2">a = {a} , b = {b} , c = {c} , d= {d} , e = {e} ,f = {f} , g = {g} , h= {h} , i = {i} , j = {j}</h3>
      {/* <h3 align="center">Arr = {arr.join(",")}</h3> */}
      <table className='table table-bordered w-50 mx-auto'>
        <thead>
          <tr align="center">
            <th>Index</th>
            <th>Value</th>
            <th>Square</th>
          </tr>
        </thead>
        <tbody align="center">
          {
            arr.map((A, i) => (
              console.log("value :- " + A, "index :- " + i, "square :- " + A * A),
              <tr key={i}>
                <td>{i}</td>
                <td>{A}</td>
                <td>{A * A}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default arr;