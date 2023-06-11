import Link from 'next/link'
import React from 'react'
import { AiOutlineShopping } from 'react-icons/ai';
import Cart from './Cart';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href="/">Headphones Home Page</Link>
      </p>

      <button onClick={() => setShowCart(true)} className='cart-icon' type="button">
        <AiOutlineShopping />
        <span className='cart-item-qty'>{totalQuantities}</span>
      </button>
      {showCart && <Cart />}
    </div>
  )
}

export default Navbar