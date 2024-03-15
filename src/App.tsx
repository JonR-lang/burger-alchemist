import MainLayout from "./layouts/MainLayout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Kitchen from "./pages/Kitchen";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/kitchen' element={<Kitchen />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;
