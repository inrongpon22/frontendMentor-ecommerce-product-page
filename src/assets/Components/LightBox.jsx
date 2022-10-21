import React from 'react'
import closeIcon from '../images/icon-close.svg'
import { useState } from 'react'
function LightBox({
  products,
  setShowLightBox,
}) {
  const [slideIndex, setSlideIndex] = useState(0);
  const nextSlide =() => {
    if(slideIndex !== products.length - 1){
      setSlideIndex(slideIndex + 1)
    }else if(slideIndex === products.length - 1){
      setSlideIndex(0)
    }
  }
  const prevSlide = () => {
    if(slideIndex !== 0){
      setSlideIndex(slideIndex - 1)
    }else if(slideIndex === 0){
      setSlideIndex(products.length - 1)
    }
  }




  return (
    <main className='absolute flex justify-center z-50 -top-[7.7rem] left-0 bg-black bg-opacity-80 w-screen h-screen'>
        <article className='lg:w-[30rem] mt-14'>
            <button className='absolute right-[33rem] top-8' 
            onClick={() => setShowLightBox(false)}
            >
            <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
              <path className='hover:stroke-[#FF7D1A]' d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fill-rule="evenodd"/>
            </svg>
            </button>
            <img src={products[slideIndex].mainImage} alt="" className='lg:rounded-xl lg:w-[32rem] lg:h-[30rem] lg:cursor-pointer' />
            <div className='absolute z-50 w-[35rem] left-[30.5rem] top-[16rem] flex items-center justify-between'>
              <button className='bg-white px-5 py-4 rounded-full mx-3'
              onClick={prevSlide}>
                <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
                  <path className='hover:stroke-[#FF7D1A]' d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/>
                </svg>
              </button>
              <button className='bg-white px-5 py-4 rounded-full mx-3'
              onClick={nextSlide}>
                <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                  <path className='hover:stroke-[#FF7D1A]' d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/>
                </svg>
              </button>
            </div>
            <div className='flex justify-center mt-10'>
              {products.map((item,index) => (
              <img key={index} src={item.mainImage} alt="" 
              onClick={() => setSlideIndex(index)}
              className={`${index === slideIndex && "border-4 border-[#FF7D1A] opacity-90"} hover:opacity-80 rounded-xl h-24 mx-3 cursor-pointer`}
              />
              ))}
            </div>
        </article>
    </main>
  )
}

export default LightBox