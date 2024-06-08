import { Link } from "react-router-dom";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import NewsletterFooter from "./NewsletterFooter";

const Footer = () => {
  const scrollIntoView = (id: string) => {
    const element = document.getElementById(id);
    if (element)
      element?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <footer className='flex flex-col border-y relative z-10  md:translate-y-[50%] sm:h-[200px]'>
      <div className='flex w-full justify-between items-center md:items-end py-4 flex-col-reverse md:flex-row gap-4 md:gap-8'>
        <div className='flex gap-3 flex-col md:flex-row text-sm text-center'>
          <Link to='/'>Home</Link>
          <Link to='/kitchen'>Kitchen</Link>
          <Link to='blog'>Blog</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/#categories' onClick={() => scrollIntoView("categories")}>
            Categories
          </Link>
          <Link to='/account'>Account</Link>
        </div>
        <NewsletterFooter />
      </div>
      <div className='border-t py-4 flex w-full justify-between items-center'>
        <p className='text-xs'>
          &copy;{new Date().getFullYear()} The Burger Alchemist
        </p>
        <div className='flex gap-2 text-accent-one'>
          <a
            href='https://twitter.com'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Facebook'>
            <FaFacebookSquare fontSize={25} aria-hidden={true} />
          </a>
          <a
            href='https://twitter.com'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Twitter'>
            <FaTwitterSquare fontSize={25} aria-hidden={true} />
          </a>
          <a
            href='https://twitter.com'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Instagram'>
            <FaSquareInstagram fontSize={25} aria-hidden={true} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
