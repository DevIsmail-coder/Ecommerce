import React, { useState } from 'react'
import './Header.css'
import { CiSearch } from "react-icons/ci";
import { HiMiniUser } from "react-icons/hi2";
import { CiShoppingCart } from "react-icons/ci";
import Cart from '../cart/cart';
// import { useNavigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate()
    const [showCart, setShowCart] = useState(false)


    return (
        <div className='Headerbody'>
            <span className='Headerspan1'>
                <h3 onClick={()=> navigate('/shoping')}>Shopping Plaace</h3>
            </span>
            <span className='Headerspan2'>
            <p  onClick={() => navigate("/shoping")}>Home</p>
            <p onClick={() => navigate("/store")}>Store</p>
            <p onClick={() => navigate("/category")}>Category</p>
                <p>List</p>
            </span>
            <article className='Headerspan3'>
                <span className='Headerspan3div'> <CiSearch /> </span>
                <span className='Headerspan3div' onClick={() => navigate("/signpage")}> <HiMiniUser /></span>
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
