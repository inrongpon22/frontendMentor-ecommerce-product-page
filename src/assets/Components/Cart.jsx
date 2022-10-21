import React from 'react'
import { useState } from 'react';
import proPic from '../images/image-product-1-thumbnail.jpg'
import bin from '../images/icon-delete.svg'

function Cart({ 
    cartComClicked,
    addCartItem,
    setAddCartItem,
    addBtnActive,
    amount,
    setAmount,
    decreaseAmount,
    totalPrice
}) {

    const text = "Fall Limited Edition Sneakers";


  return (
    <main className={`${cartComClicked ? "block" : "hidden"} absolute w-full lg:w-4/12 h-[15rem] mx-6 font-kumbh bg-white rounded-lg top-20 -right-5 z-50 shadow-2xl`}>
        <div className='h-full'>
            <h3 className='py-3 px-5 border-b-2 font-bold'>
                Cart
            </h3>
            <div className='flex justify-center items-center h-2/3 font-bold text-[#68707D]'>
                <div className={`${addCartItem ? "block" : "hidden"} w-full mx-5 mt-10 flex flex-col`}>
                    <div className='flex justify-between items-center'>
                        <img src={proPic} alt="" className='w-14 h-14 rounded-lg' />
                        <div>
                            <p className=''>{`${text.substring(0, 23)} ...`}</p>
                            <div className='flex items-center'>
                            <p>$125 x {amount} </p>
                            <div className='text-black text-xl ml-3'>
                                ${totalPrice}
                            </div>
                            </div>
                        </div>
                        <button onClick={() => setAddCartItem(false)}>
                            <img src={bin} alt="" />
                        </button>
                    </div>
                    <button className='bg-[#FF7D1A] hover:brightness-125 w-full text-white font-bold rounded-xl my-3 py-5 items-center justify-center shadow-lg'>
                        Checkout
                    </button>
                </div>
                <p className={`${addCartItem ? "hidden" : "block"} text-center`}>
                    Your cart is empty.
                </p>
            </div>
        </div>
    </main>
  )
}

export default Cart