import React, { useEffect, useState } from 'react'

const Count = () => {
  const [cnt, setcnt] = useState(0)
  useEffect(() => {
    let timer = setTimeout(() => {
      setcnt((cnt) => cnt + 1)
    }, 1000)
  })
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Count : {cnt}</h1>
    </div>
  )
}
export default Count