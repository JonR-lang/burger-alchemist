import { useUserData } from "@/hooks/queryhooks/useUserData";
import { RootState } from "@/store/store";
import { useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getFirstLettersOfNames } from "@/utils/getFirstLettersofNames";

type ShowMenuProp = {
  showMenu: boolean;
  setShowMenu: (value: boolean) => void;
};

const Navbar = ({ showMenu, setShowMenu }: ShowMenuProp) => {
  const savedUser = useSelector((state: RootState) => state.auth.user);
  const { data: user } = useUserData(savedUser ? savedUser.id : null);
  useEffect(() => {
    if (!showMenu) return;

    const focusableElementsSelector = "a[href], button";
    const modal = document.querySelector("#menu");
    const focusableElements = modal?.querySelectorAll(
      focusableElementsSelector
    );
    const firstFocusableElement = focusableElements?.[0] as HTMLElement;
    const lastFocusableElement = focusableElements?.[
      focusableElements.length - 1
    ] as HTMLElement;

    if (firstFocusableElement) firstFocusableElement.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        if (e.shiftKey) {
          // Shift + Tab: focus previous
          if (document.activeElement === firstFocusableElement) {
            e.preventDefault();
            lastFocusableElement.focus();
          }
        } else {
          // Tab: focus next
          if (document.activeElement === lastFocusableElement) {
            e.preventDefault();
            firstFocusableElement.focus();
          }
        }
      } else if (e.key === "Escape") {
        setShowMenu(false);
      }
    };

    modal?.addEventListener("keydown", handleKeyDown as EventListener);

    return () => {
      modal?.removeEventListener("keydown", handleKeyDown as EventListener);
    };
  }, [showMenu, setShowMenu]);

  const navLinkClass = showMenu ? "block" : "hidden md:block";

  return (
    <div
      id='menu'
      className={`fixed top-0 transition-[left] duration-150  ${
        showMenu ? "left-0 z-40" : "left-[-100%]"
      } md:static w-full h-full `}
      onClick={() => {
        setShowMenu(false);
      }}>
      <nav
        className={`flex flex-col md:flex-row gap-4 text-white md:text-amber-900 w-3/4 md:w-full md:max-w-[300px] lg:max-w-[360px] justify-center items-center md:justify-between font-poppins tracking-wider  bg-accent-one/95 border-r-2 border-r-primary-two md:border-none md:bg-transparent h-full rounded-br-[200px] md:rounded-br-none z-20 overflow-y-auto md:overflow-y-hidden py-10 md:py-0`}
        onClick={(e) => {
          e.stopPropagation();
        }}>
        {showMenu && savedUser && user && (
          <NavLink
            to='/account'
            className={`portrait:absolute mt-12 mb-10 top-[10%] size-20 flex flex-col`}
            onClick={() => setShowMenu(false)}>
            <Avatar className='size-full aspect-square border border-primary-two shadow-md'>
              <AvatarImage src={user.picturePath} alt={user.firstName} />
              <AvatarFallback className='hover:bg-neutral-700 hover:text-neutral-200 text-black transition duration-500'>
                {getFirstLettersOfNames(user.firstName, user.lastName)}
              </AvatarFallback>
            </Avatar>
            <small className='text-center mt-1 font-semibold text-base'>
              {user.firstName}
            </small>
          </NavLink>
        )}
        <NavLink
          to='/'
          className={navLinkClass}
          onClick={() => setShowMenu(false)}>
          Home
        </NavLink>
        <NavLink
          to='/products'
          className={navLinkClass}
          onClick={() => setShowMenu(false)}>
          Kitchen
        </NavLink>
        <NavLink
          to='/blogs'
          className={navLinkClass}
          onClick={() => setShowMenu(false)}>
          Blog
        </NavLink>
        <NavLink
          to='/contact'
          className={navLinkClass}
          onClick={() => setShowMenu(false)}>
          Contact
        </NavLink>

        {showMenu && !savedUser && !user && (
          <NavLink
            to='/login'
            className={`${navLinkClass} border px-3 py-1 rounded`}
            onClick={() => setShowMenu(false)}>
            Log in
          </NavLink>
        )}
      </nav>
      {showMenu && (
        <button
          onClick={() => setShowMenu(false)}
          className='z-10 bg-white shadow-lg border border-primary-two rounded-full p-2 absolute top-4 right-3'>
          <IoCloseOutline
            fontSize={30}
            aria-hidden={true}
            className='bg-transparent'
          />
          <span className='sr-only'>Close Menu</span>
        </button>
      )}
    </div>
  );
};

export default Navbar;
