import HeroBurger from "../assets/hero-1.png";
import Button from "./Button";
import Blob from "../assets/blob.svg";

const Hero = () => {
  return (
    <section className='flex w-full mx-auto items-center justify-center h-[600px] md:-mt-24 flex-col-reverse md:flex-row relative'>
      <div className='sm:flex-1 sm:h-full mb-5 sm:mb-0 flex flex-col gap-5 xl:gap-6 justify-start md:justify-center text-center md:text-start -mt-4 sm:-mt-0 relative z-20'>
        <h1 className='font-rubik-dirt text-5xl xl:text-6xl lowercase text-primary-two text-center md:text-start portrait:mt-0 mt-12 md:mt-0'>
          <span className='md:block my-2 hidden'>Hungry?</span> Let's{" "}
          <span className='text-accent-one'>Meat </span>Up!!
        </h1>
        <p className='text-amber-900 -mt-1 text-sm xl:text-base tracking-wide'>
          More than just a meal, it's a moment of pure satisfaction. Our burgers
          are crafted with passion and made with lots of love with the freshest
          ingredients. Experience the difference, order now and indulge.
        </p>
        <Button text='Let-tuce Get You a Burger!' />
      </div>
      <figure className='flex-1 w-full relative h-full flex items-center justify-center z-0 overflow-hidden'>
        <h1 className='absolute z-20 font-rubik-dirt text-5xl xl:text-6xl lowercase text-primary-two blend-text top-2 left-2 md:hidden'>
          hungry?
        </h1>
        <img
          src={HeroBurger}
          alt='hero-image'
          className='size-[400px] sm:size-[470px] md:size-[550px] lg:size-[600px] xl:size-[650px] object-cover drop-shadow-sm md:drop-shadow-2xl absolute xl:-top-12 md:-top-6 lg:-top-4 block z-20'
        />
        <img
          src={Blob}
          alt='img'
          className='absolute sm:-right-1 md:-right-8 lg:-right-8 top-[50%] translate-y-[-50%] z-10 size-[380px] md:size-auto'
        />
      </figure>
    </section>
  );
};

export default Hero;
