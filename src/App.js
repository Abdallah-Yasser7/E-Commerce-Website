import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";
import { LoginPage } from "./pages/Auth/LoginPage";
import { NavBarLogin } from "./components/Uitily/NavBarLogin";
import { Footer } from "./components/Uitily/Footer";
import { RegisterPage } from "./pages/Auth/RegisterPage";
import { CategoryPage } from "./pages/Category/CategoryPage";
import { BrandPage } from "./pages/Brand/BrandPage";
import { ProductsPage } from "./pages/Products/ProductsPage";
import { ProductDetialsPage } from "./pages/Products/ProductDetialsPage";
import { CartPage } from "./pages/Cart/CartPage";
import { ChosePaymethodPage } from "./pages/Checkout/ChosePaymethodPage";
import { AdminAllProductsPage } from "./pages/Admin/AdminAllProductsPage";
import { AdminAllOrdersPage } from "./pages/Admin/AdminAllOrdersPage";
import { AdminOrderDetailsPage } from "./pages/Admin/AdminOrderDetailsPage";
import { AdminAddBrandPage } from "./pages/Admin/AdminAddBrandPage";
import { AdminAddCategoryPage } from "./pages/Admin/AdminAddCategoryPage";
import { AdminAddSubCategoryPage } from "./pages/Admin/AdminAddSubCategoryPage";
import { AdminAddProductPage } from "./pages/Admin/AdminAddProductPage";

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
          <Route path="/product/:id" element={<ProductDetialsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/order/paymethod" element={<ChosePaymethodPage />} />
          <Route path="/admin/allproducts" element={<AdminAllProductsPage />} />
          <Route path="/admin/allorders" element={<AdminAllOrdersPage />} />
          <Route path="/admin/order/:id" element={<AdminOrderDetailsPage />} />
          <Route path="/admin/addbrand" element={<AdminAddBrandPage />} />
          <Route path="/admin/addcategory" element={<AdminAddCategoryPage />} />
          <Route path="/admin/addsubcategory" element={<AdminAddSubCategoryPage />} />
          <Route path="/admin/addproduct" element={<AdminAddProductPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
