import MainLayout from "./layouts/MainLayout";
import { Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Kitchen from "./pages/Kitchen";
import ProductDetails from "./pages/ProductDetails";
import Wishlist from "./pages/Wishlist";
import Account from "./pages/Account";
import OrderDetails from "./pages/OrderDetails";
import Orders from "./pages/Orders";

const Pages = () => {
  return (
    <>
      <MainLayout>
        <Routes>
          <Route path='/account/*' element={<Account />} />
          <Route path='/blogs' element={<Blog />} />
          <Route path='/blogs/:id' element={<BlogDetails />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/products' element={<Kitchen />} />
          <Route path='/products/:id' element={<ProductDetails />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/orders/:id' element={<OrderDetails />} />
          <Route path='/*' element={<Home />} />
        </Routes>
      </MainLayout>
    </>
  );
};

export default Pages;
