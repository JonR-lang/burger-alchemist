type ButtonProp = {
  text: string;
};

const Button = ({ text }: ButtonProp) => {
  return (
    <button className='relative group cursor-pointer text-sky-50  overflow-hidden rounded-md bg-accent-one py-3 px-6 flex justify-center items-center font-extrabold self-center md:self-start button-shadow'>
      <div className='absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-lime-700/50'></div>
      <div className='absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500  bg-[#ebaa3a]/50'></div>
      <div className='absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-accent-one/80'></div>
      <div className='absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-[#ebaa3a]/50'></div>
      <p className='z-10'>{text}</p>
    </button>
  );
};

export default Button;
