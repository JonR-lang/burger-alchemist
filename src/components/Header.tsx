import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Navbar from "./Navbar";
import SearchDialog from "./SearchDialog";
import AuthProfileButton from "./AuthProfileButton";

import { FaHamburger } from "react-icons/fa";
import { PiHamburgerLight, PiHeart, PiHandbag } from "react-icons/pi";

import { RootState } from "@/store/store";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const cart = useSelector((state: RootState) => state.cart);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > 100);
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
      <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
      <figure className='h-full absolute top-0 left-0 md:left-[50%] md:translate-x-[-50%] grid place-content-center text-primary-two drop-shadow-md px-4'>
        <FaHamburger fontSize={50} aria-hidden={true} />
        <img src='' alt='logo' className='sr-only' />
      </figure>
      <div className='flex w-full md:max-w-[210px] max-w-[160px] items-center justify-between'>
        <SearchDialog />
        <Link to='/wishlist'>
          <PiHeart
            fontSize={25}
            aria-hidden={true}
            className='hover:scale-125 transition duration-300'
          />
          <span className='sr-only'>Go to Wishlist</span>
        </Link>
        <Link to={"/cart"} className='relative'>
          <PiHandbag
            fontSize={25}
            aria-hidden={true}
            className='hover:scale-125 transition duration-300'
          />
          <span className='sr-only'>Go to cart</span>
          {cart.cartTotalQuantity > 0 && (
            <p className='absolute text-xs text-white rounded-full bg-neutral-700 top-0 right-0 translate-x-[55%] -translate-y-[55%] grid place-content-center size-[26px]'>
              {cart.cartTotalQuantity}
            </p>
          )}
        </Link>
        <AuthProfileButton />
        <button
          onClick={() => setShowMenu(true)}
          className='block md:hidden relative -ml-5'>
          <PiHamburgerLight fontSize={31} aria-hidden={true} />
          <span className='sr-only'>Open Menu</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
