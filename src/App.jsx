
import './App.css'
import Details from './Components/details/detail'
// import Header from './Components/Header/Header'
import Shoping from './Components/Shoping/Shoping'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Store from './Components/StorePage/Store'
import Category from './Components/Category'
import LoginPage from './Components/LoginPage/LoginPage'
import SignupPage from './Components/SignupPage/SignupPage'
import Checkout from './Components/Checkout/Checkout'

function App() {



// const store = configureStore({})

  return ( 
    <div className='Appbody'>
        
      <BrowserRouter>
      {/* <Header /> */}
        <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/signpage' element={<SignupPage />} />
          <Route path='/shoping' element={<Shoping />} />
          <Route path='/details/:id' element={<Details/>}/>  
          <Route path='/store' element={<Store />}/>
          <Route path='/category' element={<Category/>}/>
          <Route path='/checkout' element={<Checkout />}/>
          {/* <Route path='/store' element={<Store />} /> */}
          {/* <Route path='/categories/:id' element={<Details/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

