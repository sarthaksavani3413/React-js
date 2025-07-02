import { BrowserRouter, Route, Routes } from "react-router-dom"
import View from "./pages/view"
import Add from "./pages/Add"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<View/>}/>
          <Route path="/add" element={<Add/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App