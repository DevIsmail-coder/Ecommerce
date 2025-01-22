
import './App.css'
import Details from './Components/details/detail'
import Header from './Components/Header/Header'
import Shoping from './Components/Shoping/Shoping'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {

  return (
    <div className='Appbody'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Shoping />} />
          <Route path='/details/:id' element={<Details/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

