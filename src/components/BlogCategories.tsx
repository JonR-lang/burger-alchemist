// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper/modules";

import BurgerImage from "../assets/hero-2.png";

//Icon Imports
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

export default function BlogCategories() {
  return (
    <section>
      <div className='w-full flex justify-between items-center py-2 mb-3'>
        <h2 className='font-semibold text-2xl tracking-wide'>Top Categories</h2>
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
        spaceBetween={12}
        navigation={{
          prevEl: ".custom_prev",
          nextEl: ".custom_next",
          disabledClass: "swiper-button-disabled",
        }}
        slidesPerView={3}
        modules={[Navigation]}
        breakpoints={{
          200: {
            slidesPerView: 1,
            spaceBetween: 12,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 12,
          },
        }}>
        {Array(4)
          .fill("red")
          .map((item, i) => (
            <SwiperSlide
              key={i}
              className='bg-white rounded-lg py-4 px-4 shadow border'>
              <figure className='flex gap-3 items-center overflow-hidden'>
                <img
                  src={BurgerImage}
                  alt='burger-image'
                  className='object-cover size-20 rounded-full border'
                />
                <figcaption className='flex flex-col'>
                  <h3>Category caption</h3>
                  <p>21 articles</p>
                </figcaption>
              </figure>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
}
