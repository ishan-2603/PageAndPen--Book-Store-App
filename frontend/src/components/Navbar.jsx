import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiBars3CenterLeft } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import { HiOutlineHeart } from "react-icons/hi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import avatarImg from '../assets/avatar.png';
import { FaRegUser } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { useAuth } from '../context/AuthContext';

const navigation=[
  {name: "Dashboard", href:"/dashboard"},
  {name: "Orders", href:"/orders"},
  {name: "Cart Page", href:"/cart"},
  {name: "Checkout", href:"/checkout"}
];


const Navbar= () => {
  const {currentUser,logout}=useAuth();
  const [isDropDownOpen,setIsDropDownOpen]=useState(false);

  const cartItems=useSelector(state=> state.cart.cartItems);

  const handleLogout = () => {
    logout();
  }

  return(
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        <div className="flex items-center md:gap-20 gap-4">
          <Link to="">
          <HiBars3CenterLeft className="size-6"/>
          </Link>
          {/*search input*/}
          <div className="relative sm:w-72 w-40 space-x-2">
            <FaSearch className="absolute inline-block left-3 inset-y-2"/>
            <input type="text" placeholder="Search here.." className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"
            />
          </div>
        </div>
        <div className="relative flex items-center md:space-x-3 space-x-2">
          <div>
            {
              currentUser ? <>
              <button onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
                <img src={avatarImg} alt="" className={`size-7 rounded-full ${currentUser ? 'ring-2 ring-blue-500' : ""}`}/>
              </button>
              {/*show dropdowns*/}
              {
                isDropDownOpen && (
                  <div className="absolute right=0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                    <ul className="py-2">
                      {
                        navigation.map((item) => (
                          <li key={item.name} onClick={() => setIsDropDownOpen(false)}>
                            <Link to={item.href} className="block px-4 py-2 text-sm hover:bg-gray-100">
                            {item.name}
                            </Link>
                          </li>
                        ))
                      }
                      <li>
                        <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">Logout</button>
                      </li>
                    </ul>
                  </div>
                ) 
              }
              </> : 
              <Link to="/login">
              <FaRegUser className="size-6"/>
              </Link>
            }
          </div>
          <button className="hidden sm:block">
           <HiOutlineHeart className="size-8"/>
          </button>
          <Link to="/cart" className="bg-primary p-1 sm:px-6 py-2 flex items-cente rounded-sm">
            <HiOutlineShoppingCart className=""/>
            {
              cartItems.length>0 ? <span className="text-sm font-semibold sm:ml-1">{cartItems.length}</span> : <span className="text-sm font-semibold sm:ml-1">0</span>
            }
            
          </Link>
        </div>
      </nav>
      
    </header>
  )
}

export default Navbar;