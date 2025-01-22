import React, { useState } from 'react'
import './Header.css'
import { CiSearch } from "react-icons/ci";
import { HiMiniUser } from "react-icons/hi2";
import { CiShoppingCart } from "react-icons/ci";
import Cart from '../cart/cart';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate()
    const [showCart, setShowCart] = useState(false)
    return (
        <div className='Headerbody'>
            <span className='Headerspan1'>
                <h3 onClick={()=> navigate('/')}>Shopping Plaace</h3>
            </span>
            <span className='Headerspan2'>
                <p>Home</p>
                <p>Store</p>
                <p>Category</p>
                <p>List</p>
            </span>
            <article className='Headerspan3'>
                <span className='Headerspan3div'> <CiSearch /> </span>
                <span className='Headerspan3div'> <HiMiniUser /> </span>
                <span className='Headerspan3div'
                    onClick={() => setShowCart(!showCart)}
                >
                    <CiShoppingCart />
                </span>

            </article>
            {
                showCart &&
                <div className='CartWrapper'>

                    <Cart />
                </div>
            }
        </div>
    )
}

export default Header
