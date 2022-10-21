import React from 'react'
import { useState } from 'react'
import data from './Data.json'
import LightBox from './LightBox'
import prevIcon from '../images/icon-previous.svg'
import nextIcon from '../images/icon-next.svg'

function MainPics() {
  const [products] = useState(data);
  const [value, setValue] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const [showLightBox, setShowLightBox] = useState(false);

  console.log()
// const Test = () => {
//   console.log('Yes');
// }

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
    <main className='relative lg:px-10 lg:flex lg:flex-col lg:items-center'>
        {showLightBox && (
          <LightBox 
          products={products}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
          setShowLightBox={setShowLightBox}
          slideIndex={slideIndex}
        />
        )}
        <img src={products[slideIndex].mainImage} alt="" className='lg:rounded-xl lg:w-[32rem] lg:h-[30rem] lg:cursor-pointer' 
        onClick={() => setShowLightBox(true)}
        />
        <div className='absolute w-full top-36 flex items-center justify-between lg:hidden'>
          <button className='bg-white px-5 py-4 rounded-full mx-3'>
            <img src={prevIcon} alt="" 
            onClick={prevSlide}/>
          </button>
          <button className='bg-white px-5 py-4 rounded-full mx-3'>
            <img src={nextIcon} alt="" 
            onClick={nextSlide}/>
          </button>
        </div>
        <div className='hidden lg:grid lg:grid-cols-4 cursor-pointer mt-10'>
          {products.map((item, index) => (
            <div key={item.id} className='px-5'>
              <img key={index} src={item.mainImage} alt="" 
              onClick={() => setSlideIndex(index)}
              className={`${index === slideIndex && "border-4 border-[#FF7D1A] opacity-70"} hover:opacity-40 rounded-xl h-24`}
              />
            </div>
          ))}
        </div>
    </main>
  )
}

export default MainPics