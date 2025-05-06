
import './App.css'
import Shoping from './Components/shoping/Shoping'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Store from './Components/storepage/Store'
import Category from './Components/Category'
import LoginPage from './Components/loginpage/loginpage'
import SignupPage from './Components/signuppage/SignupPage'
import Checkout from './Components/checkout/Checkout'
import Details from './Components/details/Details'

function App() {

  return ( 
    <div className='Appbody'>
        
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/signpage' element={<SignupPage />} />
          <Route path='/shoping' element={<Shoping />} />
          <Route path='/details/:id' element={<Details />}/>  
          <Route path='/store' element={<Store />}/>
          <Route path='/category' element={<Category/>}/>
          <Route path='/checkout' element={<Checkout />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

