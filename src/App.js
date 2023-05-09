import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";
import { LoginPage } from "./pages/Auth/LoginPage";
import { NavBarLogin } from "./components/Uitily/NavBarLogin";
import { Footer } from "./components/Uitily/Footer";
import { RegisterPage } from "./pages/Auth/RegisterPage";
import { CategoryPage } from "./pages/Category/CategoryPage";
import { BrandPage } from "./pages/Brand/BrandPage";
import { ProductsPage } from "./pages/Products/ProductsPage";

function App() {
  return (
    <div className="font">
      <NavBarLogin />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/allcategory" element={<CategoryPage />} />
          <Route path="/allbrand" element={<BrandPage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
