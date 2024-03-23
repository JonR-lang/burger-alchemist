import Header from "../components/Header";
import Footer from "../components/Footer";
// import Wave from "../assets/wave.svg";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-full w-full font-poppins relative max-w-[1280px] mx-auto'>
      <div className='gradient-one'></div>
      <Header />
      <div className='px-4 sm:px-8'>
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
