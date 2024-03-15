import Hero from "../components/Hero";
import MarqueeWrapper from "../wrapper/MarqueeWrapper";
import ContentArea from "../components/ContentArea";
import Categories from "../components/Categories";
import BannerFlex from "../components/BannerFlex";

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <BannerFlex />
      <ContentArea />
      <MarqueeWrapper />
    </div>
  );
};

export default Home;
