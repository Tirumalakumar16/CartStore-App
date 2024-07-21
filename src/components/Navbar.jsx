import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'

function Navbar() {

    const currentState = useSelector((state)=>state.cartStore)
  return (
    <div className='navbar'
    style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    }}
>
<span className="logo">REDUX STORE</span>
    <div >
    
        <Link className="navLink" to="/home">
            Home
        </Link>
        <Link className="navLink" to="/cart">
            Cart
        </Link>
        <span className="cartCount">Cart items: {currentState.length}</span>
    </div>
</div>
  )
}

export default Navbar
