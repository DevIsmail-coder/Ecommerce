import React, { useEffect, useState } from 'react';
import "./shoping.css"

import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Card from '../card/Card';
// import Curve from '../curve/curve';

const Shoping = () => {
    const [userData, setUserData] = useState([]);
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        try {
            return savedCart ? JSON.parse(savedCart) : [];
        } catch (error) {
            console.error("Failed to parse cart from localStorage", error);
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const navigate = useNavigate();
    const url = "https://fakestoreapi.com/products";


    const fetchProduct = () => {
        fetch(url)
            .then((res) => res.json())
            .then((res) => setUserData(res))
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        fetchProduct();
    }, []);

    const addToCart = (newItem) => {
        setCart((prev) => {
            const existingItem = prev.find((item) => item.id === newItem.id);
             
            if (existingItem) {
                return prev.map((item) =>
                    item.id === newItem.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prev, { ...newItem, quantity: 1 }];
            }
        });
    };


     console.log(cart)


    return (
        <> 
        <Header />
        <div className='Shopingbody'>
            <div className='Shopingcontainer1'>
                <Card /> 
            </div>
            <div className='Shopingcontainer2'>
                {userData.map((i) => (
                    <div className='Shopingdiv' key={i.id}>
                        <span className='Shopingdivspan1' onClick={() => navigate(`/details/${i.id}`)}>
                            <img src={i.image} className='Shopingdivspan1img' alt={i.title} />
                        </span>
                        <h3 className='Shopingdivspan1h3'>{i.category}</h3>
                        <p className='Shopingdivspan1p'>{i.title.slice(0, 40)}..</p>
                        <p>${i.price}</p>
                        <button
                            className='Shopingdivspan2but'
                            onClick={() => addToCart(i)}
                        >
                            Add to cart
                        </button>
                    </div>
                ))}
            </div>
            {/* <div className='Shopingcontainer3'>
                <Curve />
            </div> */}
        </div>
        </>
    );
};

export default Shoping;
