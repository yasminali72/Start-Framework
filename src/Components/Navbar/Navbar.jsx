import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {

const [isOpen,setIsOpen] =useState(false)


useEffect(()=>
window.addEventListener('scroll',function(){
  let element=document.querySelector('.navbar')
  if (window.scrollY > 20) {
      element.classList.remove('py-4');
  }
  else{
    element.classList.add('py-4');
  }
}),[])

  
  return (



    <>

<header className='navbar fixed w-full z-[99] top-0 bg-[#2C3E50] text-white  uppercase font-bold py-4'>
  <nav className="container md:w-[90%] mx-auto p-5">
    <div className="flex items-center justify-between">
    <div className="NavBrand md:ms-10">
              <Link to={""} className="text-3xl  ">
                Start Framework
              </Link>
            </div>
      <div className="hidden md:block">
        <ul className="flex items-center space-x-8">
        <li>
                  <NavLink to={"about"} >about</NavLink>
                </li>
                <li>
                  <NavLink to={"portfolio"}>Portfolio</NavLink>
                </li>
                <li>
                  <NavLink to={"contact"}>Contact</NavLink>
                </li>
        </ul>
      </div>
      <div className="md:hidden">
        <button className=" mobile-menu-button border-2 border-gray-600 rounded p-1  focus:shadow focus:shadow-black " onClick={()=>setIsOpen(!isOpen)}>
          <svg className="w-7 h-6 text-black" x-show="!showMenu" fill="none"  strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>
    <div className={isOpen?'mobile-menu  md:hidden':'mobile-menu hidden md:hidden'}>
      <ul className="mt-4 space-y-4">
      <li>
                  <NavLink to={"about"} >about</NavLink>
                </li>
                <li>
                  <NavLink to={"portfolio"}>Portfolio</NavLink>
                </li>
                <li>
                  <NavLink to={"contact"}>Contact</NavLink>
                </li>
      </ul>
    </div>
    
  </nav>
</header>
    </>
  );
}
