import React from 'react'
import './Checkout.css'
import { useNavigate } from 'react-router-dom'


const Checkout = () => {
    const navigate = useNavigate()
  return (
    <div className='Checkoutbody'>
        <div className='Checkoutmain'>
        <h2>Check out</h2>
        <p>billing details</p>
        <div className='Checkoutdiv'> 
            <p >Full Name</p>
            <input type='text' placeholder='Full Name' className='Checkoutdivinput'/>
        </div>
        <div className='Checkoutdiv'> 
            <p >Email Address</p>
            <input type='text' placeholder='Email' className='Checkoutdivinput'/>
        </div>
        <div className='Checkoutdiv'> 
            <p >Country</p>
            <input type='text' placeholder='country' className='Checkoutdivinput'/>
        </div>
        <div className='Checkoutdiv'> 
            <p >Phone Number</p>
            <input type='text' placeholder='Phone Number' className='Checkoutdivinput'/>
        </div>
        <div className='Checkoutdiv'> 
            <p >House Address</p>
            <input type='text' placeholder='House Address' className='Checkoutdivinput'/>
        </div>
        <button className='Checkoutbutton' onClick={() => navigate("/shoping")}>submit</button>
      </div>
    </div>
  )
}

export default Checkout
