import React from 'react'
import MainPics from './MainPics'
import ProDetail from './ProDetail'

function MainContent({
  addCartItem,
  setAddCartItem,
  addBtnActive,
  amount,
  setAmount,
  decreaseAmount
}) {
  

  return (
    <main className='lg:grid lg:grid-cols-2 lg:w-full lg:mt-10'>
        <MainPics />
        <ProDetail
          addCartItem={addCartItem}
          setAddCartItem={setAddCartItem}
          addBtnActive={addBtnActive}
          amount={amount}
          setAmount={setAmount}
          decreaseAmount={decreaseAmount}     
        />
    </main>
  )
}

export default MainContent