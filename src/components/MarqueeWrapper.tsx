import Marquee from "react-fast-marquee";
import KFC from "../assets/pngimg.com - kfc_PNG54.png";
import ColdStone from "../assets/Cold_Stone_Creamery-Logo.wine.svg";
import Pepsi from "../assets/pepsi-logo-hd-4258.png";
import Macdonalds from "../assets/mcdonalds-png-logo-2785.png";
import Starbucks from "../assets/starbucks-logo-png-1688.png";

const MarqueeWrapper = () => {
  return (
    <div className='w-full max-w-3xl mx-auto my-2'>
      <h2 className='text-center font-semibold'>Recommended by:</h2>
      <Marquee>
        <div className='flex gap-8 items-center'>
          <img src={KFC} alt='' className='flex-1 w-16' />
          <img src={ColdStone} alt='cold-stone' className='flex-1 w-32' />
          <img src={Pepsi} alt='pepsi' className='sflex-1 w-16' />
          <img src={Macdonalds} alt='Macdonalds' className=' flex-1 w-16' />
          <img src={Starbucks} alt='star-bucks' className='flex-1 w-16 mr-8' />
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeWrapper;
