import React, { useState } from 'react'
import { CiShoppingCart } from "react-icons/ci";
import './Cart.css'
import { useNavigate } from 'react-router-dom';
const Cart = () => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart')
        return savedCart ? JSON.parse(savedCart) : []
    })

    const removeFromCart = (itemId) => {
        const updatedCart = cart.filter((i) => i.id !== itemId)
        setCart(updatedCart)
        localStorage.setItem('cart', JSON.stringify(updatedCart))
    }

         const increaseQty = (newItem) => {
        setCart((prev) => {
            // Ensure `prev` is always an array
            const existingItem = prev.find((item) => item.id === newItem.id);

            if (existingItem) {
                return prev.map((item) =>
                    item.id === newItem.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prev, { ...newItem, quantity: 1 }];
            };
        });
    };

    const navigate = useNavigate()


   const reduceQty = (oldItem) => {
    setCart((prev) => {
        const existingItem = prev.find((item) => item.id === oldItem.id);
        if(existingItem){
            return prev.map((item) => 
              item.id ===  oldItem.id ? {...item, quantity: item.quantity - 1} :item
            );
        } 
    });
   }

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0)

    return (
        <div className='CartContainerWRap'>
            <div className='CartContianer'>
                {
                    cart.length === 0 ?
                        <div className='EmptyCartState'>
                            <CiShoppingCart className='Carticon1' />
                            <p>your cart is currently empty Go to shop, to Continue Shopping</p>
                        </div>
                        :
                        cart.map((i) => (
                            <div className='CartItem' key={i.id}>
                                <span className='CartItmeImageWrap'>
                                    <img src={i.image} alt={i.title.slice(0, 20)} className='CartItmeImage' />
                                </span>
                                <span className='CartItemTextWrap'>
                                    <p>{i.title}</p>
                                    <span className='CartItemspan'>
                                        <p>Qty:</p>
                                   <span className='CartItemspanspan'>
                                   <button onClick={() => reduceQty(i)} className='CartItemspanbut1'>-</button>
                                    <p className='CartItemspantext'> {i.quantity}</p>
                                   <button onClick={() => increaseQty(i)} className='CartItemspanbut2'>+</button>
                                   </span>
                                    </span>
                                    <p>Price: ${i.price}</p>
                                    <p className='RemoveItem'
                                        onClick={() => removeFromCart(i.id)}
                                    >
                                        Remove item
                                    </p>
                                </span>
                            </div>
                        ))
                }
            </div>
            <div className='PriceContainer'>
                <span>
                    <p>Total Price: ${totalPrice}</p>
                </span>
                <span>
                  <button className='ClearCartButton' onClick={() => navigate("/checkout")}>Check out</button>
                </span>
            </div>
        </div>
    )
}

export default Cart
