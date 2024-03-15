import Banner from "./Banner";
import { bannerOneData, bannerTwoData } from "../data/bannerData";

const BannerFlex = () => {
  return (
    <div className='flex flex-col md:flex-row w-full gap-3 mt-4 '>
      <Banner bannerData={bannerOneData} />
      <Banner bannerData={bannerTwoData} />
    </div>
  );
};

export default BannerFlex;
