import React, { useEffect, useState } from 'react'
import './curve.css'


const Curve = () => {
const [data, setData] = useState([])

const url = "https://backendecommerce-xr0i.onrender.com/api/v1/" 

const fetchdata = () => {
    fetch(url)
    .then((res) => res.json())
    .then((res) => setData(res))
    .catch((error) => console.log(error))
}

useEffect(() => {
    fetchdata()
}, [])

  return (
    <div className='curvebody'>
      {
        data.map((items, index) => (
            <div key={index} className='curvemain'>
                <span className='curvebodyspan'>
                <img src={items.productImage} className='curvebodyspanimg'/>
                </span>
                <h3>{items.productName}</h3>
                {/* <p>hello</p> */}
                <p>${items.productPrice}</p>
                <button className='curvebodybut'>Add to cart</button>
            </div>
        ))
      }
    </div>
  )
}

export default Curve
