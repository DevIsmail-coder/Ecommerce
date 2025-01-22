import React from 'react'
import User from './UserCard'
import './Card.css'
import 'animate.css'


const Card = () => {

    return (
        <div className='Cardbody'>
            {
                User.map((i, index) => (
                    <div key={index} className='Cardmain'>
                        <img src={i.image1} className='Cardmainimg' />
                        <p className='Cardmainname'>{i.name}</p>
                        <article className='Cardcontainer'>
                            <span className='Cardcontainerspan'>
                                <img src={i.image2} className='Cardcontainerspanimg '/>
                            </span>
                            <h3 className='Cardcontainerspanh2'>{i.text}</h3>
                            <p className='Cardcontainerspanp'>{i.text2}</p>
                        </article>
                    </div>
                ))
            }
        </div>
    )
}

export default Card

