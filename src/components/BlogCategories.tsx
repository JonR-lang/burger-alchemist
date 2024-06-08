import { useSearchParams } from "react-router-dom";
import { useAllBlogCategoriesData } from "@/hooks/queryhooks/useAllBlogCategories";
import { getFirstLetterOfName } from "@/utils/getFirstLettersofNames";

//Icon Imports
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper/modules";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "./ui/skeleton";

type BlogCategoryType = {
  createdAt: string;
  title: string;
  updatedAt: string;
  __v: number;
  _id: string;
};

export default function BlogCategories() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data, isLoading, isError, error } = useAllBlogCategoriesData();

  const handleCategoryChange = (id: string) => {
    searchParams.set("category", id);
    setSearchParams(searchParams, { replace: true });
  };

  if (isLoading) {
    return (
      <div className='flex gap-3'>
        <Skeleton className='w-full h-[110px]' />
        <Skeleton className='w-full h-[110px] hidden sm:block' />
        <Skeleton className='w-full h-[110px] hidden sm:block' />
      </div>
    );
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

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
        {data &&
          data.map((item: BlogCategoryType, i: number) => (
            <SwiperSlide
              key={i}
              className='bg-white rounded-lg py-4 px-4 shadow border'>
              <button
                className='flex gap-3 items-center overflow-hidden w-full'
                onClick={() => handleCategoryChange(item._id)}>
                <Avatar className='size-20'>
                  <AvatarImage
                    src={`https://source.unsplash.com/random/?${item.title}`}
                    className='block object-cover size-full rounded-full border'
                    alt={item.title}
                  />
                  <AvatarFallback>
                    {getFirstLetterOfName(item.title)}
                  </AvatarFallback>
                </Avatar>

                <div className='flex flex-col items-start'>
                  <h3 className='text-xl'>{item.title}</h3>
                </div>
              </button>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
}
