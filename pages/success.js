import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useStateContext } from '../context/StateContext';
import { BsBagCheckFill } from 'react-icons/bs';
import { runFireworks } from '../lib/utils';

function Success() {
  const [order, setOrder] = useState(null);
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <div className='success-wrapper'>
        <div className='success'>
          <p className='icon'>
            <BsBagCheckFill />
          </p>
          <h2>THank you for yout order!</h2>
          <p className='email-msg'>Check your email inbox for the receipt</p>
          <p className='description'>
            If you have any questions, please email
            <a className='email' href="mailto:order@example.com">
              order@example.com
            </a>
          </p>
          <Link href="/">
            <button type='button' width="300px" className='btn'>
              Continues Shopping
            </button>
          </Link>
        </div>
    </div>
  )
}

export default Success