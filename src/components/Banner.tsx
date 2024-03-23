import BannerTemplate from "./BannerTemplate";
import { BannerData } from "../data/bannerData";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

//Type for the bannerdata prop
type BannerDataProp = {
  bannerData: BannerData;
};

export default function Banner({
  bannerData: { delay, hideOnMobile, structure },
}: BannerDataProp) {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay,
        pauseOnMouseEnter: true,
        disableOnInteraction: true,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className={`flex  ${
        hideOnMobile && "hidden md:flex"
      } flex-col md:flex-row w-full gap-3 mt-4`}>
      {structure.map(({ template, colorObj, data }, i) => (
        <SwiperSlide key={i}>
          <BannerTemplate template={template} colorObj={colorObj} data={data} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
