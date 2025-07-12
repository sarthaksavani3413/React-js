import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blogadd from './pages/Blogadd';
import Blogview from './pages/Blogview';
import Blogedit from './pages/Blogedit';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Blogview />} />
          <Route path='/add' element={<Blogadd />} />
          <Route path='/edit' element={<Blogedit />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App