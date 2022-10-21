import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import data from './assets/Components/Data.json'
import Navbar from './assets/Components/Navbar'
import MainContent from './assets/Components/MainContent'

function App() {
  const [addCartItem, setAddCartItem] = useState(false);
  const [amount, setAmount] = useState(1);
  const [totalPrice, settotalPrice] = useState(0)

  const addBtnActive = () => {
    if(addCartItem === false){
        setAddCartItem(true);
        let price = 125 * amount;
        settotalPrice(price)
    }
}
const decreaseAmount = () => {
  if(amount > 1){
      setAmount(amount-1)
  }else if(amount === 1){
      setAmount(1)
  }
}




  return (
    <div className="App relative">
      <Navbar
        addCartItem={addCartItem}
        setAddCartItem={setAddCartItem}
        addBtnActive={addBtnActive}
        amount={amount}
        setAmount={setAmount}
        decreaseAmount={decreaseAmount}
        totalPrice={totalPrice}
      />
      <MainContent
        addCartItem={addCartItem}
        setAddCartItem={setAddCartItem}
        addBtnActive={addBtnActive}
        amount={amount}
        setAmount={setAmount}
        decreaseAmount={decreaseAmount}
      />
    </div>
  )
}

export default App
