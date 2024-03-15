import { NavLink } from "react-router-dom";

type ShowMenuProp = {
  showMenu: boolean;
};

const Navbar = ({ showMenu }: ShowMenuProp) => {
  return (
    <nav
      className={`flex flex-col md:flex-row gap-4 text-white md:text-amber-900 w-3/4 md:w-full md:max-w-[300px] lg:max-w-[360px] justify-center items-center md:justify-between font-open-sans tracking-wider fixed top-0 transition-[left] duration-300 ${
        showMenu ? "left-0 backdrop-blur-sm" : "left-[-100%]"
      } md:static bg-accent-one/95 border-r-2 border-r-primary-two md:border-none md:bg-transparent h-full rounded-br-[200px] md:rounded-br-none md:h-auto z-20`}>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/kitchen'>Kitchen</NavLink>
      <NavLink to='/blog'>Blog</NavLink>
      <NavLink to='/contact'>Contact</NavLink>
    </nav>
  );
};

export default Navbar;
