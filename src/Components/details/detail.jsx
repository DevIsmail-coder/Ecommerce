import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './detail.css'

const Details = () => {
  const { id } = useParams()
  const [details, setProductDetails] = useState({})

  const url = `https://fakestoreapi.com/products/${id}`

  const fetchProductDetails = () => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setProductDetails(res))
      .catch((error) => console.log(error))
      .finally(() => console.log())
  }
  useEffect(() => {
    fetchProductDetails()
    console.log(details);
  }, [])
  return (
    <div className='Detailsbody'>
      <article className='Detailcontainer1'>
        <span className='Detailcontainer1span'>
        <img src={details.image} alt="" className='Detailcontainer1img'/>
        </span>
      </article>
      <article className='Detailcontainer2'>
        <span className='Detailcontainer2span'>
          <h3>{details.title}</h3>
        <p>category: {details.category}</p>
        <p className='Detailcontainer2desk'>Description: {details.description}</p>
        <p>price: ${details.price}</p>
        {/* <p>{details.rating.rate}</p> */}
        <span className='Detailcontainer2span2'>
        <button className='Detailcontainer2span2but'>Add to cart</button>
        <button className='Detailcontainer2span2but'>Buy Now</button>
        </span>
        </span>
      </article>
    </div>
  )
}

export default Details
