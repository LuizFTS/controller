'use client';
import { useState } from 'react'


export default function MobileMenu() {
  const [open, setOpen] = useState(true)

  const handleOpenMobileMenu = () => {
    if (!open) {
      return setOpen(true)
    }
    setOpen(false)
  }

  return (
    <>
      <button id="menu-btn" onClick={() => handleOpenMobileMenu()} className={open ? "block hamburger lg:hidden focus:outline-none" : "open block hamburger lg:hidden focus:outline-none"}>
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </button>
      {/* Mobile Menu */}
      <div className="absolute w-full lg:hidden">
        <div id="menu" className={!open ? "absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md" : "absolute hidden flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"}>
          <a href="#">Pricing</a>
          <a href="#">Product</a>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Comunity</a>
        </div>
      </div>
    </>
  )
}