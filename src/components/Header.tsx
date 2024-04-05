import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";

import { TbShoppingBag } from "react-icons/tb";
import { FaHamburger } from "react-icons/fa";
import { PiHamburgerLight } from "react-icons/pi";
import { IoCloseOutline } from "react-icons/io5";
import { CiHeart, CiSearch } from "react-icons/ci";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > 200);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`flex justify-end md:justify-between items-center sticky top-0 w-full h-20 z-30 ${
        isScrolled && "bg-white shadow"
      } px-4 sm:px-8 xl:rounded-b-xl`}>
      <Navbar showMenu={showMenu} />
      <figure className='h-full absolute top-0 left-0  md:left-[50%] md:translate-x-[-50%] grid place-content-center text-primary-two drop-shadow-md px-4'>
        <FaHamburger fontSize={50} aria-hidden={true} />
        <img src='' alt='logo' className='sr-only' />
      </figure>
      <div className='flex w-full md:max-w-[210px] max-w-[175px] items-center justify-between'>
        <button>
          <CiSearch fontSize={25} aria-hidden={true} />
          <span className='sr-only'>Search Blogs, Products.</span>
        </button>
        <Link to='/wishlist'>
          <CiHeart fontSize={25} aria-hidden={true} />
          <span className='sr-only'>Go to Wishlist</span>
        </Link>
        <Link to={"/cart"}>
          <TbShoppingBag fontSize={25} aria-hidden={true} />
          <span className='sr-only'>Go to cart</span>
        </Link>
        <Link
          to='/login'
          className='bg-accent-one text-white px-4 py-[6px] rounded-md button-shadow hidden md:block'>
          Log in
        </Link>
        <div className='block md:hidden relative top-[2px]'>
          {showMenu ? (
            <button onClick={() => setShowMenu(false)}>
              <IoCloseOutline fontSize={30} aria-hidden={true} />
              <span className='sr-only'>Close Menu</span>
            </button>
          ) : (
            <button onClick={() => setShowMenu(true)}>
              <PiHamburgerLight fontSize={35} aria-hidden={true} />
              <span className='sr-only'>Open Menu</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
