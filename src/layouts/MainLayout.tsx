import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-full w-full font-poppins relative max-w-[1280px] mx-auto'>
      <div className='gradient-one'></div>
      <Header />
      <div className='px-4 sm:px-8'>
        <div className='min-h-[calc(100vh-280px)]'>{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
