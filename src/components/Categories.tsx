// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper/modules";

//Import dietaryPreferences
import dietaryPreferences from "../data/dietaryPreferences";

//Icon Imports
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

export default function Categories() {
  return (
    <section id='categories' className='md:-mt-16 relative z-20'>
      <div className='w-full flex justify-between items-center py-2'>
        <h2 className='font-bold text-xl'>Categories</h2>
        <div className='flex gap-2'>
          <button className='custom_prev rounded-full bg-accent-one p-1 text-white'>
            <MdOutlineKeyboardArrowLeft fontSize={20} />
          </button>
          <button className='custom_next rounded-full bg-accent-one p-1 text-white'>
            <MdOutlineKeyboardArrowRight fontSize={20} />
          </button>
        </div>
      </div>

      <Swiper
        spaceBetween={30}
        navigation={{
          prevEl: ".custom_prev",
          nextEl: ".custom_next",
          disabledClass: "swiper-button-disabled",
        }}
        breakpoints={{
          200: {
            slidesPerView: 2,
            spaceBetween: 8,
          },
          290: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 7,
            spaceBetween: 10,
          },
        }}
        modules={[Navigation]}>
        {dietaryPreferences.map(({ name, Icon }, i) => (
          <SwiperSlide
            key={i}
            className='w-32 aspect-square bg-white rounded-xl grid place-content-center place-items-center shadow-sm border'>
            <div
              className={`${
                Math.random() > 0.5 ? "text-accent-one" : "text-primary-two"
              } drop-shadow`}>
              <Icon fontSize={40} />
            </div>
            <p className='text-bold text-sm mt-2 text-gray-500/70'>{name}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
