import React, { useState } from "react";
import "../../index.css";
import Logo from "../images/logo.svg";
import Cart from "../images/icon-cart.svg";
import profilePic from "../images/image-avatar.png";
import hamMenu from "../images/icon-menu.svg";
import closeMenu from "../images/icon-close.svg";

//Components
import CartComponent from './Cart.jsx'

function Navbar({
  addCartItem,
  setAddCartItem,
  addBtnActive,
  amount,
  setAmount,
  decreaseAmount,
  totalPrice
}) {
  const [isClicked, setIsClicked] = useState(false);
  const [cartComClicked, setCartComClicked] = useState(false);

  return (
    <main className="relative w-5/6 font-kumbh m-auto flex justify-between items-center py-5 border-b-2">
      <CartComponent 
        cartComClicked={cartComClicked}
        addCartItem={addCartItem}
        setAddCartItem={setAddCartItem}
        addBtnActive={addBtnActive}
        amount={amount}
        setAmount={setAmount}
        decreaseAmount={decreaseAmount}
        totalPrice={totalPrice}
      />
      <div className="lg:flex lg:items-center">
        <picture className="flex items-center">
          <img
            src={hamMenu}
            alt=""
            className="mr-3 lg:hidden"
            onClick={() => setIsClicked(true)}
          />
          <img src={Logo} alt="" />
        </picture>
        <div className={isClicked ? "showSidebar" : "hideSidebar"}>
          <picture>
            <img
              src={closeMenu}
              alt=""
              className="translate-x-6 -translate-y-3 lg:hidden cursor-pointer"
              onClick={() => setIsClicked(false)}
            />
          </picture>
          <ul className="h-screen lg:h-auto flex flex-col mt-10 lg:mt-0 lg:ml-10 lg:flex-row">
            <li className="py-3 lg:py-0 pl-3 lg:pl-0 pr-20 lg:pr-0">
              <a
                href="#"
                className="lg:text-[#68707D] font-bold lg:font-medium text-2xl lg:text-xl lg:px-5 lg:pb-6 hover:border-b-4 hover:border-[#FF7D1A]"
              >
                Collecions
              </a>
            </li>
            <li className="py-3 lg:py-0 pl-3 lg:pl-0 pr-20 lg:pr-0">
              <a
                href="#"
                className="lg:text-[#68707D] font-bold lg:font-medium text-2xl lg:text-xl lg:px-5 lg:pb-6 hover:border-b-4 hover:border-[#FF7D1A]"
              >
                Men
              </a>
            </li>
            <li className="py-3 lg:py-0 pl-3 lg:pl-0 pr-20 lg:pr-0">
              <a
                href="#"
                className="lg:text-[#68707D] font-bold lg:font-medium text-2xl lg:text-xl lg:px-5 lg:pb-6 hover:border-b-4 hover:border-[#FF7D1A]"
              >
                Woman
              </a>
            </li>
            <li className="py-3 lg:py-0 pl-3 lg:pl-0 pr-20 lg:pr-0">
              <a
                href="#"
                className="lg:text-[#68707D] font-bold lg:font-medium text-2xl lg:text-xl lg:px-5 lg:pb-6 hover:border-b-4 hover:border-[#FF7D1A]"
              >
                About
              </a>
            </li>
            <li className="py-3 lg:py-0 pl-3 lg:pl-0 pr-20 lg:pr-0">
              <a
                href="#"
                className="lg:text-[#68707D] font-bold lg:font-medium text-2xl lg:text-xl lg:px-5 lg:pb-6 hover:border-b-4 hover:border-[#FF7D1A]"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <picture className="flex items-center">
        <a href="#">
          <img src={Cart} alt="" 
          onClick={() => setCartComClicked(!cartComClicked)}
          />
        </a>
        <img
          src={profilePic}
          alt=""
          className="w-7 lg:w-10 h-7 lg:h-10 ml-5 lg:ml-10 cursor-pointer"
        />
      </picture>
    </main>
  );
}

export default Navbar;
