import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className='flex flex-col border-y relative z-10'>
      <div className='flex w-full justify-between items-center md:items-end py-4 flex-col-reverse md:flex-row gap-4 md:gap-8'>
        <div className='flex gap-3 flex-col md:flex-row text-sm text-center'>
          <Link to='/'>Home</Link>
          <Link to='/kitchen'>Kitchen</Link>
          <Link to='blog'>Blog</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/#categories'>Categories</Link>
          <Link to='/user'>Account</Link>
        </div>
        <form className='w-full max-w-md flex flex-col gap-2'>
          <label
            htmlFor='newsletter'
            className='text-center md:text-left uppercase'>
            Newsletter
          </label>
          <div className='flex gap-2'>
            <input
              type='text'
              id='newsletter'
              className=' w-full outline outline-1 outline-slate-300 px-2 rounded-md focus:outline-1 shadow-sm  focus:outline-primary-two'
              placeholder='Enter your email'
            />
            <button className='bg-accent-one text-white px-4 py-2 rounded-md'>
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className='border-t py-4 flex w-full justify-between items-center'>
        <p className='text-xs'>
          &copy;{new Date().getFullYear()} The Burger Alchemist
        </p>
        <div className='flex gap-2 text-accent-one'>
          <button>
            <FaFacebookSquare fontSize={25} />
          </button>
          <button>
            <FaTwitterSquare fontSize={25} />
          </button>
          <button>
            <FaSquareInstagram fontSize={25} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;