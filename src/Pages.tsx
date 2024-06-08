import { Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import MainLayout from "./layouts/MainLayout";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Wishlist from "./pages/Wishlist";
import Account from "./pages/Account";
import OrderDetails from "./pages/OrderDetails";
import Orders from "./pages/Orders";
import ProtectedRoute from "./pages/ProtectedRoute";
import ErrorComponent from "./components/ErrorComponent";
import { ErrorInfo } from "react";
import NotFound from "./pages/NotFound";

const Pages = () => {
  const errorHandler = (error: Error, info: ErrorInfo) => {
    console.log("Logging", error, info);
  };

  return (
    <>
      <MainLayout>
        <ErrorBoundary
          FallbackComponent={ErrorComponent}
          onError={errorHandler}>
          <Routes>
            <Route
              path='/account/*'
              element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              }
            />
            <Route path='/blogs' element={<Blog />} />
            <Route path='/blogs/:id' element={<BlogDetails />} />
            <Route path='/cart' element={<Cart />} />
            <Route
              path='/checkout'
              element={
                <ProtectedRoute>
                  <Checkout />
                </ProtectedRoute>
              }
            />
            <Route path='/contact' element={<Contact />} />
            <Route path='/products' element={<Products />} />
            <Route path='/products/:id' element={<ProductDetails />} />
            <Route
              path='/wishlist'
              element={
                <ProtectedRoute>
                  <Wishlist />
                </ProtectedRoute>
              }
            />
            <Route
              path='/orders'
              element={
                <ProtectedRoute>
                  <Orders />
                </ProtectedRoute>
              }
            />
            <Route
              path='/orders/:id'
              element={
                <ProtectedRoute>
                  <OrderDetails />
                </ProtectedRoute>
              }
            />
            <Route path='/' element={<Home />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </ErrorBoundary>
      </MainLayout>
    </>
  );
};

export default Pages;
