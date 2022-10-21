import React from 'react'
import { useState } from 'react'
import minusIcon from '../images/icon-minus.svg'
import plusIcon from '../images/icon-plus.svg'
import Cart from './Cart';

function ProDetail({
    addCartItem,
    setAddCartItem,
    addBtnActive,
    amount,
    setAmount,
    decreaseAmount
}) {


  return (
    <main className='font-kumbh m-5 lg:m-10 lg:px-20 lg:flex lg:flex-col lg:justify-center'>
        <h3 className='text-[#FF7D1A] font-bold uppercase tracking-wide'>Sneaker Company</h3>
        <h1 className='text-3xl font-bold py-3 lg:py-7 lg:text-5xl'>Fall Limited Edition Sneakers</h1>
        <p className='text-[#68707D] lg:text-xl lg:tracking-wider'>These low-profile sneakers are your perfect casual wear companion. Featuring a 
  durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
        <div className='flex justify-between lg:flex-col py-5 lg:py-10'>
            <div className='flex'>
                <h1 className='text-xl font-bold mr-4 lg:text-3xl'>$125.00</h1>
                <p className='py-1 px-2 bg-[#FFEDE0] text-[#FF7D1A] font-bold rounded-lg lg:text-xl'>50%</p>
            </div>
            <p className='text-[#B6BCC8] line-through lg:text-xl lg:font-bold'>$250.00</p>
        </div>
        <div className='lg:grid lg:grid-cols-3'>
            <div className='flex lg:items-center lg:my-3 lg:mr-3 bg-[#F7F8FD] justify-between px-5 py-5 rounded-lg'>
                <button>
                    <img src={minusIcon} alt="" onClick={decreaseAmount}/>
                </button>
                <p className='font-bold'>{amount}</p>
                <button>
                    <img src={plusIcon} alt="" onClick={() => setAmount(amount+1)} />
                </button>
            </div>
            <button className='flex bg-[#FF7D1A] lg:col-start-2 lg:col-end-4 lg:hover:brightness-125 w-full text-white font-bold rounded-xl my-3 py-5 items-center justify-center shadow-lg'
            onClick={() => addBtnActive()}
            >
                <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg" className='mr-4'>
                    <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#fff"/>
                </svg>
                Add to cart
            </button>
        </div>
    </main>
  )
}

export default ProDetail