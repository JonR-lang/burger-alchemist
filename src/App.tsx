import MainLayout from "./layouts/MainLayout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Kitchen from "./pages/Kitchen";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Wishlist from "./pages/Wishlist";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/kitchen' element={<Kitchen />} />
          <Route path='/kitchen/:id' element={<ProductDetails />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/wishlist' element={<Wishlist />} />
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;
