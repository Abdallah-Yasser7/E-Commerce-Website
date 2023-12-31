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
import { UserAllOrderPage } from "./pages/User/UserAllOrderPage";
import { UserFavoriteProductsPage } from "./pages/User/UserFavoriteProductsPage";
import { UserAllAdressPage } from "./pages/User/UserAllAdressPage";
import { UserAddAdressPage } from "./pages/User/UserAddAdressPage";
import { UserEditAdressPage } from "./pages/User/UserEditAdressPage";
import { UserProfilePage } from "./pages/User/UserProfilePage";
import { AdminEditProductPage } from "./pages/Admin/AdminEditProductPage";
import { ForgetPasswordPage } from './pages/Auth/forgetPasswordPage';
import { VerifyPasswordPage } from "./pages/Auth/verifyPasswordPage";
import { ResetPasswordPage } from "./pages/Auth/resetPasswordPage";
import { AdminAddCouponPage } from "./pages/Admin/AdminAddCouponPage";
import { AdminAllCouponPage } from "./pages/Admin/AdminAllCouponPage";
import { AdminEditCouponPage } from "./pages/Admin/AdminEditCouponPage";
import { UseProtectedRouteHook } from "./hook/Auth/protectedRouteHook";
import { ProtectedRoute } from "./components/Uitily/ProtectedRoute";

function App() {
  const [isUser, isAdmin, userData] = UseProtectedRouteHook()
  console.log(userData);
  console.log(isUser);
  console.log(isAdmin);
  return (
    <div className="font">
      <BrowserRouter>
        <NavBarLogin />
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
          <Route path="/user/forget-password" element={<ForgetPasswordPage />} />
          <Route path="/user/verify-password" element={<VerifyPasswordPage />} />
          <Route path="/user/reset-password" element={<ResetPasswordPage />} />

        <Route element={<ProtectedRoute auth={isAdmin}/>}>
          <Route path="/admin/allproducts" element={<AdminAllProductsPage />} />
          <Route path="/admin/allorders" element={<AdminAllOrdersPage/>} />
          <Route path="/admin/order/:id" element={<AdminOrderDetailsPage />} />
          <Route path="/admin/addbrand" element={<AdminAddBrandPage />} />
          <Route path="/admin/addCoupon" element={<AdminAddCouponPage />} />
          <Route path="/admin/allCoupon" element={<AdminAllCouponPage />} />
          <Route path="admin/editCoupon/:id" element={<AdminEditCouponPage />} />
          <Route path="/admin/addcategory" element={<AdminAddCategoryPage />} />
          <Route path="/admin/addsubcategory" element={<AdminAddSubCategoryPage />} />
          <Route path="/admin/addproduct" element={<AdminAddProductPage />} />
          <Route path="/admin/editProduct/:id" element={<AdminEditProductPage />} />
        </Route>

        <Route element={<ProtectedRoute auth={isUser}/>}>
          <Route path="/user/allorders" element={<UserAllOrderPage />} />
          <Route path="/user/favoriteproducts" element={<UserFavoriteProductsPage />} />
          <Route path="/user/alladress" element={<UserAllAdressPage />} />
          <Route path="/user/add-address" element={<UserAddAdressPage />} />
          <Route path="/user/edit-address/:id" element={<UserEditAdressPage />} />
          <Route path="/user/profile" element={<UserProfilePage />} />
        </Route>

        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
